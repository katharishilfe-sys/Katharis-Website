"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  telefon: string;
  einsatzort: string;
};

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const { name, telefon, einsatzort } = data;

  const emailBody = `
Neue Anfrage über katharis.de

1. Name:          ${name}
2. Telefonnummer: ${telefon}
3. Einsatzort:    ${einsatzort}
  `.trim();

  try {
    await resend.emails.send({
      from: "Katharis Anfrage <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "ihre-email@example.com",
      subject: "Anfrage Katharis!",
      text: emailBody,
    });
    return { success: true };
  } catch (err) {
    console.error("E-Mail-Fehler:", err);
    return { success: false, error: "E-Mail konnte nicht gesendet werden." };
  }
}
