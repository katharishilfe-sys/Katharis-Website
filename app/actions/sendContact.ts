"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  einsatzort: string;
  telefon: string;
  erreichbarkeit: string;
  pflegegrad: string;
  wasWegMuss: string;
  grundreinigung: string;
};

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const { name, einsatzort, telefon, erreichbarkeit, pflegegrad, wasWegMuss, grundreinigung } = data;

  const emailBody = `
Neue Anfrage über katharis-website.de

1. Name:            ${name}
2. Einsatzort:      ${einsatzort}
3. Telefonnummer:   ${telefon}
4. Erreichbarkeit:  ${erreichbarkeit}
5. Pflegegrad:      ${pflegegrad}
6. Was muss weg?    ${wasWegMuss}
7. Grundreinigung?  ${grundreinigung}
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
