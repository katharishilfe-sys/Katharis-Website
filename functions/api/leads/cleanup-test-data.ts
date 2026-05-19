import { readEnv, checkAdminAuth } from '../../_lib/auth';

interface PagesContext {
  request: Request;
  env: Record<string, string | undefined>;
}

const EXACT_PATTERNS = [
  'TEST',
  'WAIT-TEST',
  'FINAL-TEST',
  'REDEPLOY-TEST',
  'DANIEL-DONE-TEST',
  'VERIFY-LEAD',
  'WAKEUP-TEST',
  'WAKEUP-DIAG',
  'DIAG',
  'DIAG-FINAL',
];

const PREFIX_PATTERNS = ['E2E-', 'TEST-', 'WAKEUP-', 'DIAG-', 'SMOKE-TEST-', 'SMOKE-'];

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { env, request } = context;

  const authFail = checkAdminAuth(env, request, 'POST /api/leads/cleanup-test-data');
  if (authFail) return authFail;

  const supabaseUrl = readEnv(env, 'PUBLIC_SUPABASE_URL');
  const serviceRoleKey = readEnv(env, 'SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return new Response(JSON.stringify({ success: false, error: 'Backend nicht konfiguriert' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const orFilter = [
    ...EXACT_PATTERNS.map((p) => `name.eq.${p}`),
    ...PREFIX_PATTERNS.map((p) => `name.like.${p}*`),
  ].join(',');

  const res = await fetch(
    `${supabaseUrl}/rest/v1/leads?or=(${orFilter})`,
    {
      method: 'DELETE',
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: 'return=representation',
      },
    },
  );

  if (!res.ok) {
    const errText = await res.text();
    return new Response(JSON.stringify({ success: false, error: `Supabase: ${errText}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const deleted = (await res.json()) as unknown[];
  return new Response(JSON.stringify({ success: true, deleted: deleted.length }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
