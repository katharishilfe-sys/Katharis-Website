interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string;
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: { name?: string; telefon?: string; einsatzort?: string };

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: "Ungültige Anfrage." }),
      { status: 400, headers: CORS }
    );
  }

  const { name, telefon, einsatzort } = body;

  if (!name || !telefon || !einsatzort) {
    return new Response(
      JSON.stringify({ success: false, error: "Alle Felder sind erforderlich." }),
      { status: 400, headers: CORS }
    );
  }

  const emailText = `Neue Anfrage über katharis.de

1. Name:          ${name}
2. Telefonnummer: ${telefon}
3. Einsatzort:    ${einsatzort}`;

  const toEmail = env.CONTACT_EMAIL ?? "info@katharis.de";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Katharis Anfrage <noreply@katharis.de>",
      to: [toEmail],
      subject: "Neue Anfrage – Katharis",
      text: emailText,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend-Fehler:", errText);
    return new Response(
      JSON.stringify({ success: false, error: "E-Mail konnte nicht gesendet werden." }),
      { status: 500, headers: CORS }
    );
  }

  return new Response(JSON.stringify({ success: true }), { headers: CORS });
};
