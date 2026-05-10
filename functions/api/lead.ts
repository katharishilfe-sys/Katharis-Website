interface Env {
  PUBLIC_SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

interface LeadBody {
  name?: string;
  phone?: string;
  source_cta?: string;
  source_page?: string;
  gclid?: string;
  wbraid?: string;
  honeypot?: string;
}

const ALLOWED_CTA = new Set(['anruf', 'rueckruf']);

function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ success: false, error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;

  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return jsonError('Ungültiges JSON', 400);
  }

  const { name, phone, source_cta, source_page, gclid, wbraid, honeypot } = body;

  if (honeypot && honeypot.length > 0) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  if (!name || !phone || !source_cta || !source_page) {
    return jsonError('Pflicht-Felder fehlen', 400);
  }

  if (name.length < 1 || name.length > 200) {
    return jsonError('Name-Länge ungültig', 400);
  }

  if (phone.length < 5 || phone.length > 30) {
    return jsonError('Telefon-Länge ungültig', 400);
  }

  if (!ALLOWED_CTA.has(source_cta)) {
    return jsonError('source_cta ungültig', 400);
  }

  if (source_page.length < 1 || source_page.length > 200) {
    return jsonError('source_page-Länge ungültig', 400);
  }

  const supabaseUrl = env.PUBLIC_SUPABASE_URL;
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    const missing: string[] = [];
    if (!supabaseUrl) missing.push('PUBLIC_SUPABASE_URL');
    if (!serviceRoleKey) missing.push('SUPABASE_SERVICE_ROLE_KEY');
    const allKeys = Object.keys(env as Record<string, unknown>).sort().join(',');
    console.error('Supabase-Env-Variables fehlen:', missing.join(','), 'available:', allKeys);
    return jsonError(`Env-Vars fehlen: ${missing.join(',')} | available: ${allKeys}`, 500);
  }

  const insertRes = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name,
      phone,
      source_cta,
      source_page,
      gclid: gclid || null,
      wbraid: wbraid || null,
    }),
  });

  if (!insertRes.ok) {
    const errText = await insertRes.text();
    console.error('Supabase-Insert-Fehler:', insertRes.status, errText);
    return jsonError('Speichern fehlgeschlagen', 500);
  }

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
          from: 'Katharis Anfrage <noreply@katharis.de>',
          to: [contactEmail],
          subject: `Neuer Lead: ${name}`,
          text: `Neuer Lead über katharis.de:\n\nName: ${name}\nTelefon: ${phone}\nQuelle: ${source_cta} auf ${source_page}\nGCLID: ${gclid || '(keine)'}\nWBRAID: ${wbraid || '(keine)'}`,
        }),
      });
    } catch (err) {
      console.error('Resend-Notification fehlgeschlagen:', err);
    }
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
