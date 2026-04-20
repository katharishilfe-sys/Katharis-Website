"use client";

import { useState } from "react";

const PRIMARY = "#1A3C34";
const ACCENT = "#EBA059";

const inputClass =
  "w-full rounded-xl border px-4 py-3 text-base outline-none focus:ring-2 focus:ring-[#EBA059] transition-all bg-white";
const inputStyle = { borderColor: "#1A3C3430", color: PRIMARY };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold" style={{ color: PRIMARY }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", telefon: "", einsatzort: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error ?? "Unbekannter Fehler");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte rufen Sie uns direkt an.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: PRIMARY }}>
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
          style={inputStyle}
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
          style={inputStyle}
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
          style={inputStyle}
        />
      </Field>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto self-start px-10 py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: ACCENT }}
      >
        {status === "sending" ? "Wird gesendet..." : "Anfrage absenden"}
      </button>
    </form>
  );
}
