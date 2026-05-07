# Katharis Website v2.0

Greenfield-Build auf Astro 5 + Tailwind 4 + React-Islands + Supabase EU-Frankfurt + Cloudflare Pages.

**Marken-Identitaet:** Katharis ist Spezialist für Entlastungsleistungen für Pflegebedürftige in Stadt Stuttgart und Landkreis Böblingen. Anerkannt nach Para 45a SGB XI.

**Strategie-Quelle:** `katharis-build/` (separates Build-Doku-Repo) mit Master v2.0, Workshop-Decisions, Etappe-3-Content, Anhang-A-BLOCKER-SOPs.

## Branches

- `main` - alte Next.js Live-Site (Production-Stand bis Cutover Etappe 7)
- `astro-v2-greenfield` - neue Astro-5-Implementation (dieser Branch)

## Stack

| Bereich | Tool |
|---|---|
| Frontend | Astro 5 + React-Islands |
| Styling | Tailwind 4 (CSS-First Config) |
| Hosting | Cloudflare Pages |
| Backend/DB | Supabase EU-Frankfurt |
| Email | Resend (Transactional) + Mailbox.org (Inbound) |
| Call-Tracking | Matelso DE |
| Cookie-Consent | Klaro |
| Anti-Spam | Cloudflare Turnstile + Honeypot |

## Lokales Setup

```bash
npm install
cp .env.example .env
# .env mit echten Werten fuellen (Memory-Pattern: NIE committen)
npm run dev
```

## Build

```bash
npm run build
```

Output landet in `dist/`. Cloudflare Pages baut automatisch beim Push auf den Branch.

## Brand (Workshop Decisions Daniel 2026-05-07)

- Logo: bestehendes katharis-logo + SVG-Vektor-Variante in Etappe 4
- Farben: Primary `#1A3C34` + Accent-dark `#C97D2E` für CTA (WCAG-AA) + Background `#E8F1F2`
- Typo: Atkinson Hyperlegible (BFSG + Senioren-Lesbarkeit)
- Bildsprache: Illustrationen primaer, KEINE echten Einsatz-Fotos

## Drift-Schutz (Master Anhang B)

- `.github/CODEOWNERS` schuetzt `src/data/content.ts` mit Maxim-Pflicht-Review
- `scripts/drift-check.sh` prüft auf verbotene Phrasen vor Commit
- `.github/workflows/drift-check.yml` server-side bei jedem PR
- `scripts/drift-audit.ts` monatlicher Cron auf Live-Site
