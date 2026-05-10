/**
 * Pre-Launch-QA-Self-Test (Etappe 9 DoD-Vorbereiter).
 *
 * Prueft gegen die Live-Preview https://katharis-v2.pages.dev:
 *   1. Alle URLs aus sitemap-0.xml liefern 200
 *   2. Alle 301-Redirects aus public/_redirects funktionieren
 *   3. robots.txt ist gut formatiert
 *   4. Stichprobe: Hauptseite + 2 Service-Pages haben h1, korrekte Umlaute, keine Master-Drift-Phrasen
 *
 * Ausfuehrung lokal: npx tsx scripts/pre-launch-qa.ts
 *   Optional: BASE_URL=https://katharis.de tsx scripts/pre-launch-qa.ts
 *
 * Exit-Codes:
 *   0 = alles OK
 *   1 = mindestens ein Test ist gefailt
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const BASE_URL = process.env.BASE_URL || 'https://katharis-v2.pages.dev';
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
  console.log(`\n[1/4] Sitemap-URLs gegen ${BASE_URL}...`);
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
  console.log(`\n[2/4] robots.txt...`);
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
  console.log(`\n[3/4] 301-Redirects aus public/_redirects...`);
  const rules = parseRedirects();
  console.log(`  Gefunden: ${rules.length} Rules`);

  for (const rule of rules) {
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
  console.log(`\n[4/4] Content-Stichproben (h1 + Umlaute + Master-Phrasen)...`);
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
    let allOk = true;
    for (const must of sample.mustContain) {
      if (!text.includes(must)) {
        fail(`content ${sample.url} contains "${must}"`, 'fehlt');
        allOk = false;
      }
    }
    for (const must of sample.mustNotContain || []) {
      if (text.includes(must)) {
        fail(`content ${sample.url} not-contains "${must}"`, 'gefunden (Master-Drift)');
        allOk = false;
      }
    }
    if (allOk) pass(`content ${sample.url}`);
  }
}

async function testJsonLdSchemas() {
  console.log(`\n[5/5] Schema.org JSON-LD-Validitaet auf 7 Pages...`);
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

async function main() {
  console.log(`Pre-Launch-QA gegen ${BASE_URL}\n${'='.repeat(60)}`);

  await testSitemapUrls();
  await testRobots();
  await testRedirects();
  await testContentSamples();
  await testJsonLdSchemas();

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
