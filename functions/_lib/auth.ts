/**
 * Geteilte Auth-Helfer fuer /api/leads* Endpoints.
 *
 * Zwecke:
 *  - readEnv: trimmt CF-Pages-Env-UI-Quirks (Leading-Space in Key/Value).
 *  - constantTimeEqual: timing-safe Bearer-Token-Vergleich (mitigates token-guessing).
 *  - checkAuth: shared Bearer-Auth-Check + strukturiertes Audit-Log (console.warn JSON).
 *
 * Cloudflare Pages Functions: Dateien unter functions/_lib/ werden vom Router
 * IGNORIERT (Underscore-Prefix) und koennen importiert werden.
 *
 * Stand 2026-05-13: Soft-Fail-Schutz haerten als Linderung bis Cloudflare Access
 * auf /admin/* + /api/leads* aktiv ist.
 */

export function readEnv(env: Record<string, string | undefined>, name: string): string | undefined {
  if (env[name]) return (env[name] as string).trim() || undefined;
  const match = Object.keys(env).find((k) => k.trim() === name);
  if (match && env[match]) return (env[match] as string).trim() || undefined;
  return undefined;
}

/** Timing-safe Vergleich. Verhindert Side-Channel-Leaks beim Token-Vergleich. */
export function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    let mismatch = 0;
    const len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i++) {
      mismatch |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
    }
    return false;
  }
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

interface AuditEntry {
  ts: string;
  event: 'admin_auth_ok' | 'admin_auth_fail' | 'admin_auth_disabled';
  endpoint: string;
  ip: string;
  ua: string;
  reason?: string;
}

function auditLog(entry: AuditEntry): void {
  // CF Pages captured console.warn -> Tail / Logpush
  console.warn(`[AUDIT] ${JSON.stringify(entry)}`);
}

/**
 * Prueft Bearer-Token gegen ADMIN_LEADS_TOKEN env-var.
 *
 * Verhalten:
 *   - Wenn keine Env-Var gesetzt: NULL zurueckgeben (offen, Audit-Log "disabled").
 *   - Wenn Env-Var gesetzt + Bearer-Header korrekt: NULL zurueckgeben + Audit "ok".
 *   - Wenn Env-Var gesetzt + Bearer-Header fehlt/falsch: 401-Response + Audit "fail".
 *
 * @returns Response wenn auth fehlschlaegt, sonst null
 */
export function checkAdminAuth(
  env: Record<string, string | undefined>,
  request: Request,
  endpoint: string,
): Response | null {
  const adminToken = readEnv(env, 'ADMIN_LEADS_TOKEN');
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ua = (request.headers.get('User-Agent') || 'unknown').slice(0, 200);

  if (!adminToken) {
    auditLog({ ts: new Date().toISOString(), event: 'admin_auth_disabled', endpoint, ip, ua });
    return null;
  }

  const authHeader = request.headers.get('Authorization') || '';
  const expectedPrefix = 'Bearer ';

  if (!authHeader.startsWith(expectedPrefix)) {
    auditLog({
      ts: new Date().toISOString(),
      event: 'admin_auth_fail',
      endpoint,
      ip,
      ua,
      reason: 'no-bearer-prefix',
    });
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Bearer' },
    });
  }

  const presentedToken = authHeader.slice(expectedPrefix.length);
  if (!constantTimeEqual(presentedToken, adminToken)) {
    auditLog({
      ts: new Date().toISOString(),
      event: 'admin_auth_fail',
      endpoint,
      ip,
      ua,
      reason: 'token-mismatch',
    });
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Bearer' },
    });
  }

  auditLog({ ts: new Date().toISOString(), event: 'admin_auth_ok', endpoint, ip, ua });
  return null;
}
