interface PagesContext {
  request: Request;
  env: Record<string, string | undefined>;
}

function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ success: false, error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function readEnv(env: Record<string, string | undefined>, name: string): string | undefined {
  if (env[name]) return (env[name] as string).trim() || undefined;
  const match = Object.keys(env).find((k) => k.trim() === name);
  if (match && env[match]) return (env[match] as string).trim() || undefined;
  return undefined;
}

export const onRequestGet = async (context: PagesContext): Promise<Response> => {
  const { env, request } = context;

  const adminToken = readEnv(env, 'ADMIN_LEADS_TOKEN');
  if (adminToken) {
    const authHeader = request.headers.get('Authorization') || '';
    const expected = `Bearer ${adminToken}`;
    if (authHeader !== expected) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Bearer' },
      });
    }
  }

  const supabaseUrl = readEnv(env, 'PUBLIC_SUPABASE_URL');
  const serviceRoleKey = readEnv(env, 'SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonError('Backend nicht konfiguriert', 500);
  }

  const url = new URL(context.request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10) || 50, 200);

  const res = await fetch(
    `${supabaseUrl}/rest/v1/leads?select=*&order=created_at.desc&limit=${limit}`,
    {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    },
  );

  if (!res.ok) {
    const errText = await res.text();
    console.error('Supabase-Read-Fehler:', res.status, errText);
    return jsonError('Lesen fehlgeschlagen', 500);
  }

  const data = await res.json();
  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
