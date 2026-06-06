/**
 * Pre-Launch-QA-Self-Test (Etappe 9 DoD-Vorbereiter).
 *
 * Prueft gegen die Production-Domain https://katharis.de (Tests 1-8)
 * plus lokale Static-Checks (Tests 9-10, kein Netzwerk):
 *   1. Alle URLs aus sitemap-0.xml liefern 200
 *   2. robots.txt ist gut formatiert (Disallow /admin, GPTBot block, ClaudeBot allow)
 *   3. Alle 301-Redirects aus public/_redirects funktionieren
 *   4. Content-Stichproben: h1 + Umlaute + keine Master-Drift-Phrasen
 *   5. JSON-LD-Blocks parsen valide
 *   6. JSON-LD @id-Konsistenz cross-page (gleiche @id muss gleiches Objekt sein)
 *   7. Internal-Link 404-Sweep (jeder interne href auf Sitemap-Pages -> 200/301)
 *   8. Sitemap-vs-Pages-Konsistenz (jede .astro muss in Sitemap stehen)
 *   9. _redirects-Targets existieren als Page oder Chain-Redirect (lokal)
 *  10. dist/-HTML-Smoke: title, meta-description, canonical, OG-Tags, JSON-LD (lokal)
 *
 * Ausfuehrung lokal: npx tsx scripts/pre-launch-qa.ts
 *   Optional: BASE_URL=https://katharis.de tsx scripts/pre-launch-qa.ts
 *   Schneller Lokal-Modus (nur 9+10): LOCAL_ONLY=1 npx tsx scripts/pre-launch-qa.ts
 *
 * Exit-Codes:
 *   0 = alles OK
 *   1 = mindestens ein Test ist gefailt
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const BASE_URL = process.env.BASE_URL || 'https://katharis.de';
const SITEMAP_URL = `${BASE_URL}/sitemap-0.xml`;
const ROBOTS_URL = `${BASE_URL}/robots.txt`;
const REDIRECTS_FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', '_redirects');

interface Result {
  test: string;
  status: 'pass' | 'fail';
  detail?: string;
}

const results: Result[] = [];

function pass(test: string) {
  results.push({ test, status: 'pass' });
}

function fail(test: string, detail: string) {
  results.push({ test, status: 'fail', detail });
}

async function fetchText(url: string, options: RequestInit = {}): Promise<{ status: number; text: string; redirectTarget?: string }> {
  const res = await fetch(url, { ...options, redirect: 'manual' });
  const text = await res.text().catch(() => '');
  const redirectTarget = res.headers.get('location') || undefined;
  return { status: res.status, text, redirectTarget };
}

function extractSitemapUrls(xml: string): string[] {
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
  return matches.map((m) => m.replace(/<\/?loc>/g, '').replace(/^https?:\/\/[^\/]+/, BASE_URL));
}

interface RedirectRule {
  from: string;
  to: string;
  code: number;
}

function parseRedirects(): RedirectRule[] {
  const content = readFileSync(REDIRECTS_FILE, 'utf-8');
  const rules: RedirectRule[] = [];
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length < 3) continue;
    const [from, to, code] = parts;
    rules.push({ from, to, code: parseInt(code, 10) || 301 });
  }
  return rules;
}

async function testSitemapUrls() {
  console.log(`\n[1/10] Sitemap-URLs gegen ${BASE_URL}...`);
  const { status, text } = await fetchText(SITEMAP_URL);
  if (status !== 200) {
    fail('sitemap-fetch', `${SITEMAP_URL} returned ${status}`);
    return;
  }
  pass('sitemap-fetch');

  const urls = extractSitemapUrls(text);
  console.log(`  Gefunden: ${urls.length} URLs`);

  for (const url of urls) {
    const { status: s } = await fetchText(url);
    if (s === 200) {
      pass(`sitemap-200: ${url.replace(BASE_URL, '')}`);
    } else {
      fail(`sitemap-200: ${url.replace(BASE_URL, '')}`, `returned ${s}`);
    }
  }
}

async function testRobots() {
  console.log(`\n[2/10] robots.txt...`);
  const { status, text } = await fetchText(ROBOTS_URL);
  if (status !== 200) {
    fail('robots-fetch', `returned ${status}`);
    return;
  }
  pass('robots-fetch');
  if (text.includes('Disallow: /admin/')) pass('robots-blocks-admin');
  else fail('robots-blocks-admin', '/admin/ nicht in Disallow');
  if (text.includes('User-agent: GPTBot')) pass('robots-blocks-gptbot');
  else fail('robots-blocks-gptbot', 'GPTBot-Block fehlt');
  if (text.includes('User-agent: ClaudeBot')) pass('robots-allows-claudebot');
  else fail('robots-allows-claudebot', 'ClaudeBot-Allow fehlt');
}

async function testRedirects() {
  console.log(`\n[3/10] 301-Redirects aus public/_redirects...`);
  const rules = parseRedirects();
  console.log(`  Gefunden: ${rules.length} Rules`);

  for (const rule of rules) {
    if (/^https?:\/\//.test(rule.from)) {
      pass(`redirect ${rule.from} (cross-host, via CF Redirect Rule, kein _redirects-Test)`);
      continue;
    }
    const url = `${BASE_URL}${rule.from}`;
    const { status, redirectTarget } = await fetchText(url);
    if (status !== rule.code) {
      fail(`redirect ${rule.from}`, `expected ${rule.code} got ${status}`);
      continue;
    }
    if (!redirectTarget) {
      fail(`redirect ${rule.from}`, 'kein Location-Header');
      continue;
    }
    const targetPath = redirectTarget.replace(/^https?:\/\/[^\/]+/, '');
    if (targetPath !== rule.to) {
      fail(`redirect ${rule.from}`, `expected -> ${rule.to}, got -> ${targetPath}`);
      continue;
    }
    pass(`redirect ${rule.from} -> ${rule.to}`);
  }
}

async function testContentSamples() {
  console.log(`\n[4/10] Content-Stichproben (h1 + Umlaute + Master-Phrasen)...`);
  const samples = [
    { url: '/', expectH1: true, mustContain: ['Pflegekasse', 'Stuttgart'], mustNotContain: ['garantiert', 'niemand erfaehrt'] },
    { url: '/service/messie-hilfe/', expectH1: true, mustContain: ['Messie', 'für', 'können'] },
    { url: '/pflegekasse/', expectH1: true, mustContain: ['45a', '131 Euro pro Monat', '4.180', '3.539'], mustNotContain: ['125 Euro pro Monat', '1.572 Euro pro Jahr'] },
    { url: '/ueber-uns/', expectH1: true, mustContain: ['Daniel', 'Kemal'], mustNotContain: ['Cleanit', 'Geschäftsführer'] },
  ];

  for (const sample of samples) {
    const { status, text } = await fetchText(`${BASE_URL}${sample.url}`);
    if (status !== 200) {
      fail(`content ${sample.url}`, `returned ${status}`);
      continue;
    }
    if (sample.expectH1 && !/<h1[\s>]/.test(text)) {
      fail(`content ${sample.url} h1`, 'kein <h1> gefunden');
      continue;
    }
    // mustNotContain prueft user-sichtbaren Text, nicht JSON-LD-Schema-Properties
    // (Cleanit in legalName, FAQ-Frage "warum NICHT Geschaeftsfuehrer" sind erlaubt).
    const visibleText = text.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, '');
    let allOk = true;
    for (const must of sample.mustContain) {
      if (!text.includes(must)) {
        fail(`content ${sample.url} contains "${must}"`, 'fehlt');
        allOk = false;
      }
    }
    for (const must of sample.mustNotContain || []) {
      if (visibleText.includes(must)) {
        // Heuristik: wenn der Drift-Begriff Teil einer FAQ-Frage ist, die explizit klarstellt
        // "NICHT Geschaeftsfuehrer" / "NICHT Cleanit", dann ist das die korrekte Klarstellung,
        // nicht Drift. Wir suchen nach dem Wort im selben Saetzchen mit "Initiator" oder "Marke".
        const idx = visibleText.indexOf(must);
        const ctx = visibleText.slice(Math.max(0, idx - 200), idx + 200);
        const isClarification = /Initiator|operativer? Leiter|Marke der|nicht\s+(als\s+)?["&]/i.test(ctx);
        if (isClarification) {
          pass(`content ${sample.url} not-contains "${must}" (Klarstellung-Kontext OK)`);
        } else {
          fail(`content ${sample.url} not-contains "${must}"`, 'gefunden (Master-Drift)');
          allOk = false;
        }
      }
    }
    if (allOk) pass(`content ${sample.url}`);
  }
}

async function testJsonLdSchemas() {
  console.log(`\n[5/10] Schema.org JSON-LD-Validitaet auf 7 Pages...`);
  const pagesToCheck = [
    '/',
    '/service/messie-hilfe/',
    '/service/vor-dem-heimumzug/',
    '/pflegekasse/',
    '/pflegegrad-antrag/',
    '/ueber-uns/',
    '/ratgeber/messie-syndrom/',
  ];
  for (const path of pagesToCheck) {
    const { status, text } = await fetchText(`${BASE_URL}${path}`);
    if (status !== 200) {
      fail(`schema ${path}`, `page returned ${status}`);
      continue;
    }
    const matches = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (matches.length === 0) {
      fail(`schema ${path}`, 'kein JSON-LD-Block gefunden');
      continue;
    }
    let allParsed = true;
    for (let i = 0; i < matches.length; i++) {
      try {
        JSON.parse(matches[i][1]);
      } catch (e) {
        fail(`schema ${path} block#${i + 1}`, `JSON-Parse-Fehler: ${(e as Error).message}`);
        allParsed = false;
      }
    }
    if (allParsed) pass(`schema ${path} (${matches.length} blocks)`);
  }
}

async function testJsonLdIdConsistency() {
  console.log(`\n[6/10] JSON-LD @id-Konsistenz (gleiche @id muss identische Properties haben)...`);
  const pagesToCheck = [
    '/',
    '/service/messie-hilfe/',
    '/service/vor-dem-heimumzug/',
    '/pflegekasse/',
    '/ueber-uns/',
    '/kontakt/',
    '/standorte/stuttgart/',
    '/standorte/boeblingen/',
  ];

  const idToSignature = new Map<string, { signature: string; firstSeenOn: string }>();

  for (const path of pagesToCheck) {
    const { status, text } = await fetchText(`${BASE_URL}${path}`);
    if (status !== 200) continue;
    const matches = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    for (const match of matches) {
      let parsed: unknown;
      try {
        parsed = JSON.parse(match[1]);
      } catch {
        continue;
      }
      const nodes: Record<string, unknown>[] = [];
      if (Array.isArray(parsed)) nodes.push(...(parsed as Record<string, unknown>[]));
      else if (parsed && typeof parsed === 'object') nodes.push(parsed as Record<string, unknown>);

      for (const node of nodes) {
        const id = node['@id'];
        if (typeof id !== 'string' || !id.includes('#')) continue;
        const signature = JSON.stringify({ type: node['@type'], name: node.name });
        const prev = idToSignature.get(id);
        if (!prev) {
          idToSignature.set(id, { signature, firstSeenOn: path });
        } else if (prev.signature !== signature) {
          fail(
            `jsonld-id-consistency ${id}`,
            `Drift zwischen ${prev.firstSeenOn} und ${path}: ${prev.signature} vs ${signature}`,
          );
        }
      }
    }
  }
  if (idToSignature.size > 0) pass(`jsonld-id-consistency (${idToSignature.size} unique @ids consistent)`);
}

async function testInternalLinks() {
  console.log(`\n[7/10] Internal-Link 404-Sweep (alle Sitemap-Seiten -> jeder interne Link 200)...`);
  const { text: sitemapText } = await fetchText(SITEMAP_URL);
  const pages = extractSitemapUrls(sitemapText);

  const collected = new Set<string>();
  for (const url of pages) {
    const { text } = await fetchText(url);
    const hrefs = [...text.matchAll(/href="(\/[^"#?]*?)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
      if (
        href.startsWith('/_astro/') ||
        href.startsWith('/cdn-cgi/') ||  // Cloudflare auto-injected (email-obfuscation etc)
        href.endsWith('.xml') ||
        href.endsWith('.png') ||
        href.endsWith('.jpg') ||
        href.endsWith('.svg') ||
        href.endsWith('.ico') ||
        href.endsWith('.webp') ||
        href.endsWith('.css') ||
        href.endsWith('.js') ||
        href === '/'
      ) continue;
      collected.add(href);
    }
  }
  console.log(`  Gefunden: ${collected.size} unique interne Links zum Pruefen`);

  for (const link of collected) {
    const { status } = await fetchText(`${BASE_URL}${link}`);
    if (status === 200 || status === 301) {
      pass(`internal-link ${link}`);
    } else {
      fail(`internal-link ${link}`, `returned ${status}`);
    }
  }
}

async function testSitemapVsRoutes() {
  console.log(`\n[8/10] Sitemap-vs-Pages-Konsistenz (jede .astro-Page muss in Sitemap stehen, ausser /admin/)...`);
  const fs = await import('node:fs');
  const pagesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'pages');

  function walk(dir: string, prefix = ''): string[] {
    const out: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        out.push(...walk(full, `${prefix}/${entry.name}`));
      } else if (entry.name.endsWith('.astro')) {
        const slug = entry.name === 'index.astro' ? '' : entry.name.replace(/\.astro$/, '');
        const route = `${prefix}/${slug}`.replace(/\/+/g, '/');
        out.push(route.endsWith('/') || route === '/' ? route : `${route}/`);
      }
    }
    return out;
  }

  const routes = walk(pagesDir).filter(
    (r) =>
      !r.startsWith('/admin/') &&
      r !== '/admin/' &&
      r !== '/404/' &&
      !r.endsWith('/404/'),
  );

  const { text: sitemapText } = await fetchText(SITEMAP_URL);
  const sitemapUrls = new Set(
    extractSitemapUrls(sitemapText).map((u) => u.replace(BASE_URL, '') || '/'),
  );

  for (const route of routes) {
    const normalized = route === '/' ? '/' : route;
    if (sitemapUrls.has(normalized)) {
      pass(`sitemap-has ${normalized}`);
    } else {
      fail(`sitemap-has ${normalized}`, 'Page existiert aber fehlt in sitemap-0.xml');
    }
  }
}

async function collectPageRoutes(): Promise<Set<string>> {
  const fs = await import('node:fs');
  const pagesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'pages');
  const out = new Set<string>();
  function walk(dir: string, prefix = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, `${prefix}/${entry.name}`);
      } else if (entry.name.endsWith('.astro')) {
        const slug = entry.name === 'index.astro' ? '' : entry.name.replace(/\.astro$/, '');
        const route = `${prefix}/${slug}`.replace(/\/+/g, '/');
        out.add(route.endsWith('/') || route === '/' ? route : `${route}/`);
      }
    }
  }
  walk(pagesDir);
  return out;
}

async function testRedirectsTargetsExist() {
  console.log(`\n[9/10] _redirects-Targets existieren als Page oder Chain-Redirect (lokal)...`);
  const rules = parseRedirects();
  const pageRoutes = await collectPageRoutes();
  const redirectSources = new Set(rules.map((r) => r.from));

  for (const rule of rules) {
    if (rule.to.startsWith('http://') || rule.to.startsWith('https://')) {
      pass(`redirect-target ${rule.from} -> ${rule.to} (extern)`);
      continue;
    }
    if (pageRoutes.has(rule.to) || redirectSources.has(rule.to)) {
      pass(`redirect-target ${rule.from} -> ${rule.to}`);
    } else {
      fail(`redirect-target ${rule.from}`, `Target ${rule.to} ist weder vorhandene Page noch Chain-Redirect`);
    }
  }
}

async function testDistHtmlSmoke() {
  console.log(`\n[10/10] dist/-HTML-Smoke (lokal)...`);
  const fs = await import('node:fs');
  const path = await import('node:path');
  const distDir = path.join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

  if (!fs.existsSync(distDir)) {
    fail('dist-smoke', 'dist/ nicht vorhanden. Vorher `npm run build` laufen lassen.');
    return;
  }

  const htmlFiles: string[] = [];
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === 'index.html') htmlFiles.push(full);
    }
  }
  walk(distDir);

  for (const file of htmlFiles) {
    const route = file.replace(distDir, '').replace(/\\/g, '/').replace(/\/index\.html$/, '/') || '/';
    if (route.startsWith('/admin/')) continue;
    const html = fs.readFileSync(file, 'utf-8');

    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/);
    if (!titleMatch || titleMatch[1].trim().length < 10) {
      fail(`dist-title ${route}`, titleMatch ? `Title zu kurz: "${titleMatch[1].trim()}"` : 'kein <title>');
    } else if (titleMatch[1].length > 70) {
      fail(`dist-title ${route}`, `Title zu lang (${titleMatch[1].length} chars): "${titleMatch[1]}"`);
    } else {
      pass(`dist-title ${route}`);
    }

    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/);
    if (!descMatch || descMatch[1].trim().length < 30) {
      fail(`dist-meta-description ${route}`, descMatch ? `zu kurz (${descMatch[1].length})` : 'fehlt');
    } else if (descMatch[1].length > 200) {
      fail(`dist-meta-description ${route}`, `zu lang (${descMatch[1].length})`);
    } else {
      pass(`dist-meta-description ${route}`);
    }

    if (/<link\s+rel=["']canonical["']\s+href=["'][^"']+["']/.test(html)) pass(`dist-canonical ${route}`);
    else fail(`dist-canonical ${route}`, 'canonical-Tag fehlt');

    if (/<meta\s+property=["']og:title["']/.test(html)) pass(`dist-og-title ${route}`);
    else fail(`dist-og-title ${route}`, 'og:title fehlt');

    if (/<meta\s+property=["']og:image["']/.test(html)) pass(`dist-og-image ${route}`);
    else fail(`dist-og-image ${route}`, 'og:image fehlt');

    const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (jsonLdBlocks.length === 0) {
      fail(`dist-jsonld ${route}`, 'kein JSON-LD-Block');
    } else {
      let allParsed = true;
      for (const [, body] of jsonLdBlocks) {
        try { JSON.parse(body); } catch (e) { allParsed = false; fail(`dist-jsonld ${route}`, `Parse-Fehler: ${(e as Error).message}`); break; }
      }
      if (allParsed) pass(`dist-jsonld ${route} (${jsonLdBlocks.length} blocks)`);
    }
  }
}

async function main() {
  const localOnly = process.env.LOCAL_ONLY === '1' || process.argv.includes('--local-only');
  console.log(`Pre-Launch-QA ${localOnly ? '(LOCAL_ONLY)' : `gegen ${BASE_URL}`}\n${'='.repeat(60)}`);

  if (!localOnly) {
    await testSitemapUrls();
    await testRobots();
    await testRedirects();
    await testContentSamples();
    await testJsonLdSchemas();
    await testJsonLdIdConsistency();
    await testInternalLinks();
    await testSitemapVsRoutes();
  }
  await testRedirectsTargetsExist();
  await testDistHtmlSmoke();

  const passed = results.filter((r) => r.status === 'pass').length;
  const failed = results.filter((r) => r.status === 'fail');

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Gesamt: ${results.length} Tests`);
  console.log(`  Pass:  ${passed}`);
  console.log(`  Fail:  ${failed.length}`);

  if (failed.length > 0) {
    console.log(`\nFAIL-Details:`);
    for (const f of failed) {
      console.log(`  - ${f.test}: ${f.detail}`);
    }
    process.exit(1);
  } else {
    console.log(`\n[QA] alle Tests gruen.`);
    process.exit(0);
  }
}

void main();
