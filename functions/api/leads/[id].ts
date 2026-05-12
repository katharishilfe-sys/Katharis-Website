interface PagesContext {
  request: Request;
  env: Record<string, string | undefined>;
  params: Record<string, string>;
}

const ALLOWED_STATUS = new Set([
  'neu',
  'angerufen',
  'termin',
  'auftrag',
  'abgeschlossen',
  'abgesagt',
]);

interface PatchBody {
  status?: string;
  notes?: string;
  pg_vorhanden?: boolean;
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

function checkAuth(env: Record<string, string | undefined>, request: Request): Response | null {
  const adminToken = readEnv(env, 'ADMIN_LEADS_TOKEN');
  if (!adminToken) return null;
  const authHeader = request.headers.get('Authorization') || '';
  if (authHeader !== `Bearer ${adminToken}`) {
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return null;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const onRequestPatch = async (context: PagesContext): Promise<Response> => {
  const { env, request, params } = context;

  const authFail = checkAuth(env, request);
  if (authFail) return authFail;

  const id = params.id;
  if (!id || !UUID_RE.test(id)) return jsonError('Ungueltige Lead-ID', 400);

  let body: PatchBody;
  try {
    body = await request.json();
  } catch {
    return jsonError('Ungueltiges JSON', 400);
  }

  const update: Record<string, unknown> = {};
  if (body.status !== undefined) {
    if (!ALLOWED_STATUS.has(body.status)) return jsonError('Ungueltiger Status', 400);
    update.status = body.status;
  }
  if (body.notes !== undefined) {
    if (typeof body.notes !== 'string' || body.notes.length > 5000) {
      return jsonError('Notes-Laenge ungueltig', 400);
    }
    update.notes = body.notes;
  }
  if (body.pg_vorhanden !== undefined) {
    if (typeof body.pg_vorhanden !== 'boolean') return jsonError('pg_vorhanden muss boolean sein', 400);
    update.pg_vorhanden = body.pg_vorhanden;
  }

  if (Object.keys(update).length === 0) return jsonError('Keine Felder zum Update', 400);

  const supabaseUrl = readEnv(env, 'PUBLIC_SUPABASE_URL');
  const serviceRoleKey = readEnv(env, 'SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) return jsonError('Backend nicht konfiguriert', 500);

  const res = await fetch(`${supabaseUrl}/rest/v1/leads?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(update),
  });

  if (!res.ok) {
    const errText = await res.text();
    return jsonError(`Supabase: ${errText}`, 500);
  }

  const rows = (await res.json()) as unknown[];
  if (rows.length === 0) return jsonError('Lead nicht gefunden', 404);

  return new Response(JSON.stringify({ success: true, lead: rows[0] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
