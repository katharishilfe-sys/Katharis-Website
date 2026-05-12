interface PagesContext {
  request: Request;
  env: Record<string, string | undefined>;
}

function readEnv(env: Record<string, string | undefined>, name: string): string | undefined {
  if (env[name]) return (env[name] as string).trim() || undefined;
  const match = Object.keys(env).find((k) => k.trim() === name);
  if (match && env[match]) return (env[match] as string).trim() || undefined;
  return undefined;
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

const PREFIX_PATTERNS = ['E2E-', 'TEST-', 'WAKEUP-', 'DIAG-'];

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { env, request } = context;

  const adminToken = readEnv(env, 'ADMIN_LEADS_TOKEN');
  if (adminToken) {
    const authHeader = request.headers.get('Authorization') || '';
    if (authHeader !== `Bearer ${adminToken}`) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

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
