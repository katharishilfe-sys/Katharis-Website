"use client";

import { useState } from "react";
import { sendContactEmail, type ContactFormData } from "@/app/(main)/actions/sendContact";

const inputClass =
  "w-full rounded-xl border px-4 py-3 text-base outline-none focus:ring-2 transition-all bg-white";
const inputStyle = { borderColor: "#1A3C3430", color: "#1A3C34" };
const focusRingStyle = { "--tw-ring-color": "#EBA059" } as React.CSSProperties;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold" style={{ color: "#1A3C34" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    telefon: "",
    einsatzort: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const result = await sendContactEmail(form);
    if (result.success) {
      setStatus("success");
    } else {
      setErrorMsg(result.error ?? "Unbekannter Fehler");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "#1A3C34" }}>
        <div className="text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-bold text-white mb-3">Vielen Dank!</h2>
        <p className="text-white/80 text-lg">
          Wir melden uns umgehend unter{" "}
          <a href="tel:07031/6953604" className="font-bold underline">
            07031/6953604
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Field label="Vor- & Nachname *">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ihr vollständiger Name"
          className={inputClass}
          style={{ ...inputStyle, ...focusRingStyle }}
        />
      </Field>

      <Field label="Telefonnummer *">
        <input
          required
          name="telefon"
          type="tel"
          value={form.telefon}
          onChange={handleChange}
          placeholder="z. B. 0711 123456"
          className={inputClass}
          style={{ ...inputStyle, ...focusRingStyle }}
        />
      </Field>

      <Field label="Einsatzort (PLZ / Stadt) *">
        <input
          required
          name="einsatzort"
          value={form.einsatzort}
          onChange={handleChange}
          placeholder="z. B. 71032 Böblingen"
          className={inputClass}
          style={{ ...inputStyle, ...focusRingStyle }}
        />
      </Field>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto self-start px-10 py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: "#EBA059" }}
      >
        {status === "sending" ? "Wird gesendet..." : "Anfrage absenden"}
      </button>
    </form>
  );
}
