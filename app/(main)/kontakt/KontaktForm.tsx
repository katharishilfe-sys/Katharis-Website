"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const ACCENT = "#EBA059";
const PRIMARY = "#1A3C34";

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

export default function KontaktForm() {
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

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">

      {/* Left – Formular (erste Spalte = oben auf Mobile) */}
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm" style={{ border: "1px solid #1A3C3415" }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
          Anfrage senden
        </p>
        <h2 className="text-xl font-bold mb-6" style={{ color: PRIMARY }}>
          Kostenloses Angebot anfordern
        </h2>

        {status === "success" ? (
          <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: PRIMARY }}>
            <div className="text-4xl mb-3">✓</div>
            <h3 className="text-xl font-bold text-white mb-2">Vielen Dank!</h3>
            <p className="text-white/80">
              Wir melden uns umgehend unter{" "}
              <a href="tel:07031/6953604" className="font-bold underline" style={{ color: ACCENT }}>
                07031/6953604
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label="Vor- & Nachname *">
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Ihr vollständiger Name" className={inputClass} style={inputStyle} />
            </Field>

            <Field label="Telefonnummer *">
              <input required name="telefon" type="tel" value={form.telefon} onChange={handleChange} placeholder="z. B. 0711 123456" className={inputClass} style={inputStyle} />
            </Field>

            <Field label="Einsatzort (PLZ / Stadt) *">
              <input required name="einsatzort" value={form.einsatzort} onChange={handleChange} placeholder="z. B. 71032 Böblingen" className={inputClass} style={inputStyle} />
            </Field>

            {status === "error" && (
              <p className="text-red-600 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: ACCENT }}
            >
              {status === "sending" ? "Wird gesendet..." : "Anfrage absenden"}
            </button>
          </form>
        )}
      </div>

      {/* Right – Ansprechpartner (zweite Spalte = unten auf Mobile) */}
      <div className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
          Ihre direkten Ansprechpartner
        </p>

        <div className="flex items-start gap-4">
          <Image src="/daniel.jpg" alt="Daniel Altenhof" width={52} height={52}
            className="rounded-full object-cover shrink-0"
            style={{ width: 52, height: 52, objectPosition: "center top" }} />
          <div>
            <p className="font-bold text-lg" style={{ color: PRIMARY }}>Daniel Altenhof</p>
            <p className="text-sm" style={{ color: PRIMARY, opacity: 0.65 }}>Geschäftsführer</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image src="/kemal.jpg" alt="Kemal David Gülcü" width={52} height={52}
            className="rounded-full object-cover shrink-0"
            style={{ width: 52, height: 52, objectPosition: "center top" }} />
          <div>
            <p className="font-bold text-lg" style={{ color: PRIMARY }}>Kemal David Gülcü</p>
            <p className="text-sm" style={{ color: PRIMARY, opacity: 0.65 }}>Partner &amp; Geschäftsführer</p>
          </div>
        </div>

        <p className="text-base leading-relaxed" style={{ color: PRIMARY, opacity: 0.75 }}>
          Wir kümmern uns persönlich um Ihr Anliegen. Diskret, respektvoll und auf Augenhöhe.
          Zögern Sie nicht, uns direkt anzurufen.
        </p>

        <div className="flex flex-col gap-3 mt-2">
          <a href="tel:07031/6953604" className="flex items-center gap-3 text-base font-bold transition-opacity hover:opacity-80" style={{ color: PRIMARY }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: ACCENT }}>
              <Phone size={18} color="#fff" />
            </div>
            07031/6953604
          </a>
          <a href="mailto:info@katharis.de" className="flex items-center gap-3 text-base font-bold transition-opacity hover:opacity-80" style={{ color: PRIMARY }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: ACCENT }}>
              <Mail size={18} color="#fff" />
            </div>
            info@katharis.de
          </a>
        </div>

        <div className="rounded-xl px-5 py-3 mt-2 text-sm text-white" style={{ backgroundColor: PRIMARY }}>
          <strong>Mo. – Sa.</strong> 08:00 – 20:00 Uhr · Kostenlose Vor-Ort-Besichtigung
        </div>
      </div>

    </div>
  );
}
