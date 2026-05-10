interface Env {
  PUBLIC_SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  ADMIN_LEADS_TOKEN?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const TEST_PATTERNS = [
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

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { env, request } = context;

  if (env.ADMIN_LEADS_TOKEN) {
    const authHeader = request.headers.get('Authorization') || '';
    if (authHeader !== `Bearer ${env.ADMIN_LEADS_TOKEN}`) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  const supabaseUrl = env.PUBLIC_SUPABASE_URL;
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return new Response(JSON.stringify({ success: false, error: 'Backend nicht konfiguriert' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const orFilter = TEST_PATTERNS.map((p) => `name.eq.${p}`).join(',');

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
