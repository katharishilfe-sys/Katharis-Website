import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../out");

const worker = `
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === "OPTIONS" && url.pathname === "/api/contact") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "https://katharis.de",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Handle contact form submission
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        const { name, telefon, einsatzort, leistung } = body;

        if (!name || !telefon || !einsatzort) {
          return Response.json(
            { success: false, error: "Alle Felder sind erforderlich." },
            { status: 400 }
          );
        }

        const emailText =
          "Neue Anfrage über katharis.de\\n\\n" +
          (leistung ? "0. Leistung:      " + leistung + "\\n" : "") +
          "1. Name:          " + name + "\\n" +
          "2. Telefonnummer: " + telefon + "\\n" +
          "3. Einsatzort:    " + einsatzort;

        const subject = leistung
          ? "Neue Anfrage: " + leistung + " – Katharis"
          : "Neue Anfrage – Katharis";

        const toEmail = env.CONTACT_EMAIL ?? "info@katharis.de";

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + env.RESEND_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Katharis Anfrage <noreply@katharis.de>",
            to: [toEmail],
            subject: subject,
            text: emailText,
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("Resend-Fehler:", errText);
          return Response.json(
            { success: false, error: "E-Mail konnte nicht gesendet werden." },
            { status: 500 }
          );
        }

        return Response.json({ success: true });
      } catch (err) {
        console.error("Fehler:", err);
        return Response.json(
          { success: false, error: "Serverfehler." },
          { status: 500 }
        );
      }
    }

    // Serve static assets for everything else
    return env.ASSETS.fetch(request);
  },
};
`.trimStart();

fs.writeFileSync(path.join(outDir, "_worker.js"), worker);
console.log("✓ _worker.js erstellt");
