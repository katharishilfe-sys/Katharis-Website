/**
 * Smoke-Test: End-to-End Lead-Pipeline gegen Live-Deployment.
 *
 * Usage:
 *   ADMIN_TOKEN=xxx npx tsx scripts/smoke-test-lead-pipeline.ts
 *   (Default-Target: https://katharis-v2.pages.dev, ueberschreibbar via TARGET_URL)
 *
 * Schritte:
 *   1. POST /api/lead mit SMOKE-TEST-* Name -> erwartet success
 *   2. GET /api/leads (kein Header)        -> erwartet 401
 *   3. GET /api/leads (falscher Token)     -> erwartet 401
 *   4. GET /api/leads (richtiger Token)    -> erwartet 200 + neuer Lead drin
 *   5. PATCH /api/leads/[id]               -> Status+Notiz
 *   6. POST /api/leads/cleanup-test-data   -> erwartet deleted >= 1
 *   7. GET /api/leads                      -> erwartet Lead weg
 */

const TARGET = process.env.TARGET_URL || 'https://katharis-v2.pages.dev';
const TOKEN = process.env.ADMIN_TOKEN;

if (!TOKEN) {
  console.error('FEHLER: ADMIN_TOKEN env-var erforderlich.');
  process.exit(1);
}

interface Lead {
  id: string;
  name: string;
  status: string;
  notes: string | null;
  source_cta: string;
  source_page: string;
}

interface ApiResponse {
  success: boolean;
  data?: Lead[];
  lead?: Lead;
  deleted?: number;
  error?: string;
}

let passed = 0;
let failed = 0;

function logStep(num: number, name: string): void {
  console.log(`\n[${num}] ${name}`);
}

function assert(condition: boolean, message: string): void {
  if (condition) {
    console.log(`    OK: ${message}`);
    passed++;
  } else {
    console.log(`    FAIL: ${message}`);
    failed++;
  }
}

async function main() {
  console.log(`Smoke-Test Lead-Pipeline gegen ${TARGET}`);
  console.log('='.repeat(60));

  const testName = `SMOKE-TEST-${Date.now()}`;

  // 1. POST mit gueltigen Daten
  logStep(1, 'POST /api/lead (Form-Submit-Simulation)');
  const postRes = await fetch(`${TARGET}/api/lead`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: testName,
      phone: '01234567890',
      source_cta: 'rueckruf-smoke-test',
      source_page: '/smoke-test',
    }),
  });
  const postData = (await postRes.json()) as ApiResponse;
  assert(postRes.status === 200, `Status 200 (got ${postRes.status})`);
  assert(postData.success === true, `success:true (got ${JSON.stringify(postData)})`);

  // 2. GET ohne Auth
  logStep(2, 'GET /api/leads ohne Authorization-Header');
  const getNoAuth = await fetch(`${TARGET}/api/leads`);
  assert(getNoAuth.status === 401, `Status 401 (got ${getNoAuth.status})`);

  // 3. GET mit falschem Token
  logStep(3, 'GET /api/leads mit falschem Token');
  const getWrong = await fetch(`${TARGET}/api/leads`, {
    headers: { Authorization: 'Bearer falsch-token' },
  });
  assert(getWrong.status === 401, `Status 401 (got ${getWrong.status})`);

  // 4. GET mit richtigem Token
  logStep(4, 'GET /api/leads mit korrektem Token');
  const getOk = await fetch(`${TARGET}/api/leads`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const getOkData = (await getOk.json()) as ApiResponse;
  assert(getOk.status === 200, `Status 200 (got ${getOk.status})`);
  assert(getOkData.success === true, 'success:true');
  const testLead = (getOkData.data || []).find((l) => l.name === testName);
  assert(!!testLead, `Test-Lead "${testName}" in Liste`);

  if (!testLead) {
    console.log('\nAbbruch: Test-Lead nicht gefunden.');
    process.exit(1);
  }

  // 5. PATCH Status + Notiz
  logStep(5, `PATCH /api/leads/${testLead.id} (Status+Notiz)`);
  const patchRes = await fetch(`${TARGET}/api/leads/${testLead.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ status: 'angerufen', notes: 'Smoke-Test-Notiz' }),
  });
  const patchData = (await patchRes.json()) as ApiResponse;
  assert(patchRes.status === 200, `Status 200 (got ${patchRes.status})`);
  assert(patchData.lead?.status === 'angerufen', 'Status auf "angerufen" aktualisiert');
  assert(patchData.lead?.notes === 'Smoke-Test-Notiz', 'Notiz gespeichert');

  // 6. Cleanup
  logStep(6, 'POST /api/leads/cleanup-test-data');
  const cleanupRes = await fetch(`${TARGET}/api/leads/cleanup-test-data`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const cleanupData = (await cleanupRes.json()) as ApiResponse;
  assert(cleanupRes.status === 200, `Status 200 (got ${cleanupRes.status})`);
  assert((cleanupData.deleted ?? 0) >= 1, `mindestens 1 Lead geloescht (got ${cleanupData.deleted})`);

  // 7. Verify cleaned
  logStep(7, 'GET /api/leads (final, Test-Lead muss weg sein)');
  const finalGet = await fetch(`${TARGET}/api/leads`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const finalData = (await finalGet.json()) as ApiResponse;
  const stillThere = (finalData.data || []).find((l) => l.name === testName);
  assert(!stillThere, `Test-Lead "${testName}" geloescht`);

  console.log('\n' + '='.repeat(60));
  console.log(`Pass: ${passed}, Fail: ${failed}`);

  if (failed > 0) {
    console.log('\n[SMOKE] FAIL - Pipeline-Probleme gefunden.');
    process.exit(1);
  }
  console.log('\n[SMOKE] alle Tests gruen - Lead-Pipeline funktional.');
}

main().catch((err) => {
  console.error('Unerwarteter Fehler:', err);
  process.exit(1);
});
