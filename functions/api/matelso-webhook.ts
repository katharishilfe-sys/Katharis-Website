/**
 * Matelso Call-Tracking-Webhook (Etappe 6 §5).
 *
 * Matelso ruft diesen Endpoint, sobald ein Anruf auf einer Pool-Nummer eingeht.
 * Wir mappen die angerufene Tracking-Nummer auf die wahrscheinliche Source-Page
 * (Funnel-Zuordnung) und legen einen Lead-Eintrag in Supabase an.
 *
 * Authentication:
 *   Shared-Secret via `Authorization: Bearer <MATELSO_WEBHOOK_SECRET>`.
 *   Daniel konfiguriert das in Matelso-Dashboard → Webhook → Custom Headers.
 *   Bei Matelso-Webhook-Signature-Support (HMAC-SHA256): zusätzlich
 *   X-Matelso-Signature parsen (derzeit Bearer-Pattern, anpassbar).
 *
 * Payload-Schema (Matelso-Standard, ggf. anpassen nach Vertragsabschluss):
 *   {
 *     "call_id": "string",
 *     "caller_phone": "+49...",
 *     "target_phone": "+49...",        // die angerufene Pool-Nummer
 *     "duration": 42,                   // Sekunden
 *     "status": "completed" | "missed" | "no-answer",
 *     "timestamp": "ISO-8601",
 *     "custom_params": { "gclid": "...", "wbraid": "..." }
 *   }
 *
 * Verhalten:
 *   - Auth fail → 401
 *   - Body ungültig → 400
 *   - status != "completed" → 200 (no-op, kein Lead bei verpassten Anrufen)
 *   - Supabase-Insert fehlgeschlagen → 500
 *   - Erfolg → 200 + Resend-Notification (best-effort)
 */

import { constantTimeEqual, readEnv } from '../_lib/auth';
import { reverseLookupSourcePage } from '../_lib/matelso-pool-server';

interface Env {
  PUBLIC_SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  MATELSO_WEBHOOK_SECRET?: string;
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

interface MatelsoPayload {
  call_id?: string;
  caller_phone?: string;
  target_phone?: string;
  duration?: number;
  status?: string;
  timestamp?: string;
  custom_params?: {
    gclid?: string;
    wbraid?: string;
  };
}

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function auditLog(event: string, detail: Record<string, unknown>): void {
  console.warn(`[MATELSO] ${JSON.stringify({ ts: new Date().toISOString(), event, ...detail })}`);
}

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

  const secret = readEnv(env as unknown as Record<string, string | undefined>, 'MATELSO_WEBHOOK_SECRET');
  if (!secret) {
    auditLog('config-missing', { ip, reason: 'MATELSO_WEBHOOK_SECRET nicht gesetzt' });
    return json({ success: false, error: 'Webhook nicht konfiguriert' }, 503);
  }

  const authHeader = request.headers.get('Authorization') || '';
  if (!authHeader.startsWith('Bearer ')) {
    auditLog('auth-fail', { ip, reason: 'no-bearer-prefix' });
    return json({ success: false, error: 'Unauthorized' }, 401);
  }
  const presented = authHeader.slice('Bearer '.length);
  if (!constantTimeEqual(presented, secret)) {
    auditLog('auth-fail', { ip, reason: 'secret-mismatch' });
    return json({ success: false, error: 'Unauthorized' }, 401);
  }

  let payload: MatelsoPayload;
  try {
    payload = await request.json();
  } catch {
    auditLog('parse-fail', { ip });
    return json({ success: false, error: 'Ungültiges JSON' }, 400);
  }

  const { call_id, caller_phone, target_phone, status, duration, custom_params } = payload;

  if (!call_id || !caller_phone || !target_phone) {
    auditLog('payload-incomplete', { ip, call_id, has_caller: Boolean(caller_phone), has_target: Boolean(target_phone) });
    return json({ success: false, error: 'Pflicht-Felder fehlen' }, 400);
  }

  // Nur abgeschlossene Anrufe als Leads. Missed/No-answer als Audit-Trail, aber kein Lead.
  if (status && status !== 'completed') {
    auditLog('skip-non-completed', { call_id, status, duration });
    return json({ success: true, skipped: true, reason: status }, 200);
  }

  const sourcePage = reverseLookupSourcePage(target_phone);

  const supabaseUrl = env.PUBLIC_SUPABASE_URL;
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('[MATELSO] Supabase-Env-Variables fehlen');
    return json({ success: false, error: 'Backend nicht konfiguriert' }, 500);
  }

  const leadName = `(Matelso-Anruf ${call_id.slice(0, 12)})`;
  const sourcePageWithMeta = duration
    ? `${sourcePage}#call_duration=${duration}s`
    : sourcePage;

  const insertRes = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name: leadName,
      phone: caller_phone,
      source_cta: 'anruf',
      source_page: sourcePageWithMeta,
      gclid: custom_params?.gclid || null,
      wbraid: custom_params?.wbraid || null,
    }),
  });

  if (!insertRes.ok) {
    const errText = await insertRes.text();
    console.error('[MATELSO] Supabase-Insert-Fehler:', insertRes.status, errText);
    return json({ success: false, error: 'Speichern fehlgeschlagen' }, 500);
  }

  auditLog('lead-created', { call_id, target_phone, source_page: sourcePage, duration });

  if (env.RESEND_API_KEY) {
    const contactEmail = env.CONTACT_EMAIL || 'info@katharis.de';
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Katharis Anruf <noreply@katharis.de>',
          to: [contactEmail],
          subject: `Eingehender Anruf: ${caller_phone}`,
          text: `Neuer Anruf via Matelso-Tracking:\n\nAnrufer: ${caller_phone}\nPool-Nummer: ${target_phone}\nVermutete Quelle: ${sourcePage}\nDauer: ${duration ?? 'unbekannt'} Sek.\nCall-ID: ${call_id}\nGCLID: ${custom_params?.gclid || '(keine)'}\n\nIn /admin/leads/ ansehen: https://katharis.de/admin/leads/`,
        }),
      });
    } catch (err) {
      console.error('[MATELSO] Resend-Notification fehlgeschlagen:', err);
    }
  }

  return json({ success: true, call_id }, 200);
};
