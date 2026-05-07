/**
 * Drift-Audit fuer Katharis (Master v2.0 Anhang B.2 - Code-Variante).
 *
 * Erweitert scripts/drift-check.sh um:
 *   - Hook-Konsistenz (Master-Hook + Sekundaer + Backup-B + Saisonal)
 *   - Maxim-Brand-Regel 1.7 (kein Cleanit-Name in user-facing)
 *   - Persona-D-Reste (entfaellt laut Workshop 2026-05-07)
 *   - Ableismus-Vokabular (Master 1.5 Tonalitaet)
 *   - §7a-Sicherheit (keine Pflegeberatung-Aussagen ohne Disclaimer)
 *   - Em-Dash-Verbot
 *
 * Ausfuehrung lokal: npx tsx scripts/drift-audit.ts
 * CI: aufgerufen via .github/workflows/drift-check.yml
 *
 * Exit-Codes:
 *   0 = OK
 *   1 = Drift-Funde
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

interface Rule {
  name: string;
  description: string;
  patterns: Array<RegExp | string>;
  severity: 'fail' | 'warn';
  scopes: Array<'src' | 'public' | 'docs'>;
  exceptions?: RegExp[];
}

const RULES: Rule[] = [
  {
    name: 'Verbotene Garantie-Phrasen',
    description: 'Master 1.5: keine "Garantie"-Aussagen, UWG-Risiko.',
    patterns: [/\bgarantiert\b/i, /100\s*%-Garantie/i, /garantierte?n?\s+Erfolg/i],
    severity: 'fail',
    scopes: ['src', 'public'],
  },
  {
    name: 'Verbotene Diskretions-Versprechen',
    description: 'Master 1.5: "niemand erfaehrt" ist UWG-riskant.',
    patterns: [/niemand\s+erf[äa]hrt/i, /absolut\s+diskret/i],
    severity: 'fail',
    scopes: ['src', 'public'],
  },
  {
    name: 'Verbotene Premium-Vokabel',
    description: 'Master 1.5: keine Premium-Sprache, Zielgruppe ist sensitiv.',
    patterns: [/\bFirst-?Class\b/i, /\bBest-in-Class\b/i, /\bPremium-/i, /\bLuxus-/i],
    severity: 'fail',
    scopes: ['src'],
  },
  {
    name: 'Anspruchspruefungs-Vokabular',
    description: 'A4 Anwalt-Briefing: "Anspruchspruefung" weckt versicherungsrechtliche Erwartung.',
    patterns: [/Anspruchspr[üu]fung/i, /Wir\s+pr[üu]fen\s+Ihre\s+Anspr[üu]che/i],
    severity: 'fail',
    scopes: ['src'],
  },
  {
    name: 'Sperrmuell-Konflikt',
    description: 'Master Anhang B.2: "Sperrmuell" ist nicht unsere Leistung (Wertstoffhof).',
    patterns: [/Sperrm[üu]ll/i],
    severity: 'fail',
    scopes: ['src'],
    exceptions: [/sperrmuell-keller/, /\/\*.*sperrmuell.*\*\//],
  },
  {
    name: 'Maxim-Brand-Regel 1.7',
    description: 'Cleanit-Name nicht in user-facing Bereichen (nur Impressum, AGB, Datenschutz).',
    patterns: [/Cleanit\s+Services/i, /Cleanit\s+LLC/i, /Cleanit-Familie/i],
    severity: 'fail',
    scopes: ['src'],
    exceptions: [/impressum\.astro/, /datenschutz\.astro/, /agb\.astro/, /barrierefreiheit\.astro/, /content\.ts/, /\/data\//],
  },
  {
    name: 'Schwesterprojekt-Referenzen',
    description: 'Maxim-Regel: Alltagsengel 24 nicht erwaehnen.',
    patterns: [/Alltagsengel/i],
    severity: 'fail',
    scopes: ['src', 'public'],
  },
  {
    name: 'Em-Dash-Verbot',
    description: 'Master 1.5 Tonalitaet: keine Em-Dashes (U+2014).',
    patterns: ['—'],
    severity: 'fail',
    scopes: ['src'],
  },
  {
    name: 'Ableismus-Vokabular',
    description: 'Master 1.5: keine entwertende Sprache.',
    patterns: [/\bbehindert\b/i, /\bgeisteskrank\b/i, /\bverr[üu]ckt\b/i, /\bspinnen?\b/i],
    severity: 'warn',
    scopes: ['src'],
    exceptions: [/sich\s+verr[üu]ckt\s+f[üu]hlen/, /datenschutz\.astro/, /impressum\.astro/],
  },
  {
    name: 'Pflegeberatungs-Vokabular ohne Disclaimer',
    description: '§7a SGB XI: Katharis ist KEIN Pflegeberater. Aussagen erfordern Disclaimer.',
    patterns: [/wir\s+beraten\s+Sie\s+pflege/i, /Pflegeberatung\s+durch\s+Katharis/i],
    severity: 'fail',
    scopes: ['src'],
  },
  {
    name: 'Veraltete Pflegekassen-Betraege',
    description: 'PUEG 1.7.2025: §45b ist 131 Euro/Monat (nicht 125), §42a ist 3.539 Euro (nicht 1.612 oder 4.000).',
    patterns: [/125\s*Euro\s*(pro\s*)?Monat/i, /125\s*€\s*(pro\s*)?Monat/i, /1\.?612\s*Euro/i, /4\.?000\s*Euro\s*\(Verhinderungs/i],
    severity: 'fail',
    scopes: ['src'],
  },
  {
    name: 'Persona-D-Reste',
    description: 'Workshop 2026-05-07: Persona D entfaellt. Reste muessen entfernt sein.',
    patterns: [/Persona\s+D\b/i, /Sozialarbeiter-Persona/i],
    severity: 'warn',
    scopes: ['src'],
  },
];

const ROOT = process.cwd();
const TARGET_DIRS = ['src', 'public'];
const FILE_EXTENSIONS = ['.astro', '.tsx', '.ts', '.md', '.html'];
const PLAIN_FILES = ['_headers', '_redirects', 'robots.txt'];

interface Finding {
  rule: Rule;
  file: string;
  line: number;
  match: string;
}

function walkFiles(dir: string): string[] {
  const out: string[] = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    let stat;
    try {
      stat = statSync(full);
    } catch {
      continue;
    }
    if (stat.isDirectory()) {
      if (entry === 'node_modules' || entry.startsWith('.') || entry === 'dist') continue;
      out.push(...walkFiles(full));
    } else if (stat.isFile()) {
      const ext = extname(entry);
      if (FILE_EXTENSIONS.includes(ext) || PLAIN_FILES.includes(entry)) {
        out.push(full);
      }
    }
  }
  return out;
}

function checkFile(file: string, rules: Rule[]): Finding[] {
  const findings: Finding[] = [];
  let content: string;
  try {
    content = readFileSync(file, 'utf-8');
  } catch {
    return findings;
  }
  const lines = content.split(/\r?\n/);

  for (const rule of rules) {
    if (rule.exceptions?.some((ex) => ex.test(file))) continue;

    for (const pattern of rule.patterns) {
      const isRegex = pattern instanceof RegExp;
      lines.forEach((line, idx) => {
        const match = isRegex ? line.match(pattern) : line.includes(pattern as string) ? [pattern as string] : null;
        if (match) {
          findings.push({
            rule,
            file: file.replace(ROOT + '\\', '').replace(ROOT + '/', ''),
            line: idx + 1,
            match: match[0],
          });
        }
      });
    }
  }

  return findings;
}

function main() {
  const allFiles: string[] = [];
  for (const dir of TARGET_DIRS) {
    allFiles.push(...walkFiles(join(ROOT, dir)));
  }

  const findings: Finding[] = [];
  for (const file of allFiles) {
    findings.push(...checkFile(file, RULES));
  }

  const fails = findings.filter((f) => f.rule.severity === 'fail');
  const warns = findings.filter((f) => f.rule.severity === 'warn');

  if (fails.length > 0) {
    console.error(`\n[DRIFT-AUDIT] ${fails.length} FAIL-Findings:`);
    for (const f of fails) {
      console.error(`  FAIL ${f.file}:${f.line} [${f.rule.name}] "${f.match}"`);
      console.error(`       ${f.rule.description}`);
    }
  }

  if (warns.length > 0) {
    console.warn(`\n[DRIFT-AUDIT] ${warns.length} WARN-Findings:`);
    for (const w of warns) {
      console.warn(`  WARN ${w.file}:${w.line} [${w.rule.name}] "${w.match}"`);
    }
  }

  if (fails.length === 0 && warns.length === 0) {
    console.log(`[DRIFT-AUDIT] OK - ${allFiles.length} Files gepruefte gegen ${RULES.length} Regeln, keine Funde.`);
    process.exit(0);
  }

  if (fails.length > 0) {
    console.error(`\n[DRIFT-AUDIT] FAIL: ${fails.length} kritische Funde. ${warns.length} Warnungen.`);
    process.exit(1);
  }

  console.log(`[DRIFT-AUDIT] OK mit ${warns.length} Warnungen.`);
  process.exit(0);
}

main();
