"use client";

import { useState } from "react";
import { Phone, Mail, User } from "lucide-react";

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

export default function KontaktPage() {
  const [showDummy, setShowDummy] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowDummy(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
        Kontakt aufnehmen
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-12" style={{ color: PRIMARY }}>
        Ihr erster Schritt zu einem sauberen Neuanfang.
      </h1>

      {/* 2-Column Layout */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">

        {/* Left – Ansprechpartner */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
            Ihre direkten Ansprechpartner
          </p>

          {/* Person 1 */}
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: ACCENT + "20" }}
            >
              <User size={22} style={{ color: ACCENT }} />
            </div>
            <div>
              <p className="font-bold text-lg" style={{ color: PRIMARY }}>Daniel Altenhof</p>
              <p className="text-sm" style={{ color: PRIMARY, opacity: 0.65 }}>Geschäftsführer</p>
            </div>
          </div>

          {/* Person 2 */}
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: ACCENT + "20" }}
            >
              <User size={22} style={{ color: ACCENT }} />
            </div>
            <div>
              <p className="font-bold text-lg" style={{ color: PRIMARY }}>Kemal David Gülcü</p>
              <p className="text-sm" style={{ color: PRIMARY, opacity: 0.65 }}>Partner &amp; Geschäftsführer</p>
            </div>
          </div>

          {/* Trust text */}
          <p className="text-base leading-relaxed" style={{ color: PRIMARY, opacity: 0.75 }}>
            Wir kümmern uns persönlich um Ihr Anliegen. Diskret, respektvoll und auf Augenhöhe.
            Zögern Sie nicht, uns direkt anzurufen.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-3 mt-2">
            <a
              href="tel:07031/6953604"
              className="flex items-center gap-3 text-base font-bold transition-opacity hover:opacity-80"
              style={{ color: PRIMARY }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: ACCENT }}
              >
                <Phone size={18} color="#fff" />
              </div>
              07031/6953604
            </a>
            <a
              href="mailto:info@katharis.de"
              className="flex items-center gap-3 text-base font-bold transition-opacity hover:opacity-80"
              style={{ color: PRIMARY }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: ACCENT }}
              >
                <Mail size={18} color="#fff" />
              </div>
              info@katharis.de
            </a>
          </div>

          {/* Opening hours mini-badge */}
          <div
            className="rounded-xl px-5 py-3 mt-2 text-sm text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            <strong>Mo. – Sa.</strong> 08:00 – 20:00 Uhr · Kostenlose Vor-Ort-Besichtigung
          </div>
        </div>

        {/* Right – Formular */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm" style={{ border: "1px solid #1A3C3415" }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
            Anfrage senden
          </p>
          <h2 className="text-xl font-bold mb-6" style={{ color: PRIMARY }}>
            Kostenloses Angebot anfordern
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name">
                <input name="name" placeholder="Ihr vollständiger Name" className={inputClass} style={inputStyle} />
              </Field>
              <Field label="Einsatzort">
                <input name="einsatzort" placeholder="z. B. Böblingen, Stuttgart..." className={inputClass} style={inputStyle} />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Telefonnummer">
                <input name="telefon" type="tel" placeholder="z. B. 0711 123456" className={inputClass} style={inputStyle} />
              </Field>
              <Field label="Wann sind Sie erreichbar?">
                <select name="erreichbarkeit" className={inputClass} style={inputStyle}>
                  <option>Vormittags</option>
                  <option>Nachmittags</option>
                  <option>Abends</option>
                </select>
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Pflegegrad (falls vorhanden)">
                <select name="pflegegrad" className={inputClass} style={inputStyle}>
                  <option>Keiner</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </Field>
              <Field label="Grundreinigung gewünscht?">
                <select name="grundreinigung" className={inputClass} style={inputStyle}>
                  <option>Nein</option>
                  <option>Ja</option>
                </select>
              </Field>
            </div>

            <Field label="Was muss weg?">
              <textarea
                name="wasWegMuss"
                rows={4}
                placeholder="z. B. 3-Zimmer-Wohnung, Keller, Dachboden..."
                className={inputClass}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </Field>

            <button
              type="submit"
              className="w-full py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Anfrage absenden
            </button>

            {showDummy && (
              <div className="rounded-2xl p-6" style={{ backgroundColor: PRIMARY }}>
                <p className="text-white text-base leading-relaxed">
                  Unser Online-Formular wird aktuell gewartet. Für eine sofortige und diskrete Hilfe
                  rufen Sie uns bitte direkt an unter:{" "}
                  <a href="tel:07031/6953604" className="font-bold underline" style={{ color: ACCENT }}>
                    07031/6953604
                  </a>
                </p>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
