"use client";

import { useState, useEffect } from "react";
import { X, Home, Package, Trash2, BadgeEuro, Check } from "lucide-react";

const ACCENT = "#EBA059";
const PRIMARY = "#1A3C34";

type Step = { icon: string; title: string; text: string };
type Service = {
  id: string;
  cardIcon: React.ReactNode;
  cardTitle: string;
  cardSubtitle: string;
  modalTitle: string;
  formSelection: string;
  steps: Step[];
  umfang: string[];
  showCleaningUpsell: boolean;
};

const services: Service[] = [
  {
    id: "messie-hilfe",
    cardIcon: <Home size={36} />,
    cardTitle: "Messie-Hilfe & Spezialräumung",
    cardSubtitle: "Diskret & einfühlsam",
    modalTitle: "Leistungsdetails: Messie-Hilfe",
    formSelection: "Messie-Hilfe & Spezialräumung",
    steps: [
      { icon: "🔍", title: "Diskrete Besichtigung", text: "Kostenlos & ohne Vorurteile vor Ort" },
      { icon: "📋", title: "Transparenter Kostenvoranschlag", text: "Klar kalkuliert, Unterstützung bei Pflegekasse" },
      { icon: "💎", title: "Sensible Sortierung", text: "Sicherung von Wertsachen & wichtigen Dokumenten" },
      { icon: "♻️", title: "Fachgerechte Entsorgung", text: "Umweltgerechter Abtransport von Sperrmüll & Unrat" },
      { icon: "✨", title: "Besenreine & hygienische Übergabe", text: "Grundreinigung für einen sauberen Neuanfang" },
    ],
    umfang: [
      "Kostenlose Besichtigung",
      "Diskretion garantiert",
      "Geruchsneutralisation möglich",
      "Besenreine Übergabe",
      "Optionale Grundreinigung zubuchbar",
    ],
    showCleaningUpsell: true,
  },
  {
    id: "haushaltsaufloesung",
    cardIcon: <Package size={36} />,
    cardTitle: "Haushaltsauflösung & Räumung",
    cardSubtitle: "Schnell & zuverlässig",
    modalTitle: "Leistungsdetails: Haushaltsauflösung",
    formSelection: "Haushaltsauflösung",
    steps: [
      { icon: "🔍", title: "Kostenlose Besichtigung", text: "Aufnahme des Inventars vor Ort" },
      { icon: "💰", title: "Faires Angebot & Wertanrechnung", text: "Prüfung von verwertbaren Möbeln/Gegenständen" },
      { icon: "🚛", title: "Schnelle Räumung", text: "Zügiger und professioneller Abbau" },
      { icon: "♻️", title: "Umweltgerechte Entsorgung", text: "Trennung nach Wertstoffen und Restmüll" },
      { icon: "🏡", title: "Besenreine Übergabe", text: "Übergabefertig für Vermieter oder Käufer" },
    ],
    umfang: [
      "Kostenlose Besichtigung",
      "Wertanrechnung möglich",
      "Demontage von Möbeln",
      "Besenreine Übergabe",
      "Optionale Grundreinigung zubuchbar",
    ],
    showCleaningUpsell: true,
  },
  {
    id: "sperrmuell",
    cardIcon: <Trash2 size={36} />,
    cardTitle: "Sperrmüll & Keller-Räumung",
    cardSubtitle: "Flexibel & schnell",
    modalTitle: "Leistungsdetails: Sperrmüll & Keller",
    formSelection: "Sperrmüll & Keller-Räumung",
    steps: [
      { icon: "📞", title: "Schnelle Terminvereinbarung", text: "Zeitnahe Begutachtung oder Fotoschätzung" },
      { icon: "📋", title: "Transparentes Angebot", text: "Kalkulation nach Volumen und Aufwand" },
      { icon: "🚛", title: "Zügiger Abtransport", text: "Schleppen und Laden aus Keller, Dachboden oder Garage" },
      { icon: "♻️", title: "Fachgerechtes Recycling", text: "Korrekte Trennung auf dem Wertstoffhof" },
      { icon: "✨", title: "Besenreine Flächen", text: "Sauberes Hinterlassen der geräumten Bereiche" },
    ],
    umfang: [
      "Schnelle Termine",
      "Keine versteckten Kosten",
      "Fachgerechtes Recycling",
      "Besenreines Hinterlassen",
    ],
    showCleaningUpsell: false,
  },
  {
    id: "pflegekasse",
    cardIcon: <BadgeEuro size={36} />,
    cardTitle: "Direktabrechnung & Pflegekasse",
    cardSubtitle: "Bis zu 100 % übernommen",
    modalTitle: "Leistungsdetails: Abrechnung mit der Pflegekasse",
    formSelection: "Beratung zur Pflegekassen-Abrechnung",
    steps: [
      { icon: "📞", title: "Kostenlose Erstberatung", text: "Prüfung, ob ein Pflegegrad vorliegt" },
      { icon: "📋", title: "Kostenvoranschlag für die Kasse", text: "Erstellung aller nötigen Dokumente für den Antrag" },
      { icon: "⏳", title: "Genehmigung abwarten", text: "Wir unterstützen Sie bei Rückfragen der Pflegekasse" },
      { icon: "🚛", title: "Durchführung der Räumung", text: "Egal ob Messie-Hilfe oder normale Entrümpelung" },
      { icon: "💳", title: "Bequeme Direktabrechnung", text: "Wir rechnen am Ende direkt mit der Kasse ab – keine Vorkasse für Sie nötig" },
    ],
    umfang: [
      "Hilfe beim Antrag",
      "Transparenter Kostenvoranschlag",
      "Keine Vorkasse nötig",
      "Direktabrechnung möglich",
    ],
    showCleaningUpsell: false,
  },
];

type FormState = { name: string; email: string; telefon: string; ort: string; nachricht: string };

const emptyForm: FormState = { name: "", email: "", telefon: "", ort: "", nachricht: "" };

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [addCleaning, setAddCleaning] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errorMsg, setErrorMsg] = useState("");

  const active = services.find((s) => s.id === activeId) ?? null;

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  function openService(id: string) {
    setActiveId(id);
    setSubmitted(false);
    setAddCleaning(false);
    setForm(emptyForm);
    setErrorMsg("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Pflichtfeld-Validierung (zusätzlich zu HTML5 required)
    if (!form.name.trim() || !form.email.trim() || !form.telefon.trim()) {
      setErrorMsg(
        "Bitte vervollständigen Sie Ihre Kontaktdaten, damit wir uns umgehend für eine kostenlose Beratung bei Ihnen melden können."
      );
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
    setForm(emptyForm);
  }

  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: PRIMARY }}
    >
      {/* subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(${ACCENT} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* glitch blobs */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: ACCENT }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: ACCENT }}
          >
            Was wir für Sie tun
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Unsere Leistungen – klicken Sie für Details
          </h2>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => openService(s.id)}
              className="group flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition-all duration-200 hover:scale-[1.03]"
              style={{
                border: `2px solid ${ACCENT}`,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = ACCENT + "15")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <span style={{ color: ACCENT }}>{s.cardIcon}</span>
              <div>
                <p
                  className="font-bold text-base leading-tight"
                  style={{ color: ACCENT }}
                >
                  {s.cardTitle}
                </p>
                <p className="text-xs mt-1 text-white/60">{s.cardSubtitle}</p>
              </div>
              <span
                className="text-xs font-semibold mt-auto"
                style={{ color: ACCENT }}
              >
                Details →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal overlay ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in"
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl"
            style={{ backgroundColor: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveId(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:bg-gray-100"
              style={{ color: PRIMARY }}
              aria-label="Schließen"
            >
              <X size={22} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left – flowchart + umfang */}
              <div className="md:w-1/2 p-8 md:p-10" style={{ backgroundColor: PRIMARY }}>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: ACCENT }}
                >
                  Unser Ablauf
                </p>
                <h3 className="text-xl font-bold text-white mb-8">
                  {active.modalTitle}
                </h3>

                <div className="flex flex-col gap-0 mb-8">
                  {active.steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-start">
                      <div className="flex items-start gap-4">
                        {/* circle */}
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0"
                          style={{ border: `2px solid ${ACCENT}`, color: ACCENT }}
                        >
                          {step.icon}
                        </div>
                        <div className="pt-1">
                          <p className="text-white text-sm font-bold leading-tight">
                            {step.title}
                          </p>
                          <p className="text-white/60 text-xs mt-1 leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </div>
                      {/* connector arrow */}
                      {i < active.steps.length - 1 && (
                        <div className="ml-[22px] flex flex-col items-center gap-0 my-1">
                          <div
                            className="w-px h-4"
                            style={{ backgroundColor: ACCENT }}
                          />
                          <svg width="10" height="6" viewBox="0 0 10 6">
                            <path d="M5 6L0 0h10z" fill={ACCENT} />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Umfang */}
                <div
                  className="pt-6 border-t"
                  style={{ borderColor: ACCENT + "40" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: ACCENT }}
                  >
                    Im Leistungsumfang
                  </p>
                  <ul className="space-y-2">
                    {active.umfang.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-white text-sm"
                      >
                        <Check size={16} style={{ color: ACCENT }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right – form */}
              <div className="md:w-1/2 p-8 md:p-10">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: ACCENT }}
                >
                  Sofort &amp; kostenlos
                </p>
                <h3 className="text-xl font-bold mb-6" style={{ color: PRIMARY }}>
                  Kostenloses Angebot anfordern
                </h3>

                {submitted ? (
                  <div
                    className="rounded-2xl p-8 text-center"
                    style={{ backgroundColor: "#e8f7ee", border: "2px solid #16a34a" }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: "#16a34a" }}
                    >
                      <Check size={26} color="#fff" strokeWidth={3} />
                    </div>
                    <p className="font-bold text-lg mb-2" style={{ color: "#14532d" }}>
                      Vielen Dank!
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#166534" }}>
                      Ihre Anfrage wurde erfolgreich gesendet.
                      <br />
                      Wir melden uns in Kürze bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-4"
                  >
                    {/* Pre-selected service field */}
                    <div>
                      <label
                        className="text-xs font-semibold mb-1 block"
                        style={{ color: PRIMARY }}
                      >
                        Gewünschte Leistung
                      </label>
                      <div
                        className="w-full rounded-xl px-4 py-3 text-sm font-semibold flex items-center gap-2"
                        style={{
                          border: `2px solid ${ACCENT}`,
                          color: PRIMARY,
                          backgroundColor: ACCENT + "15",
                        }}
                      >
                        <Check size={16} style={{ color: ACCENT }} />
                        {active.formSelection}
                      </div>
                    </div>

                    {/* Upsell Checkbox – Grundreinigung (nur bei Messie-Hilfe & Haushaltsauflösung) */}
                    {active.showCleaningUpsell && (
                      <label
                        id="reinigung-upsell"
                        className="flex items-start gap-3 rounded-xl px-4 py-3 cursor-pointer select-none transition-colors"
                        style={{
                          border: `2px solid ${ACCENT}`,
                          backgroundColor: addCleaning ? ACCENT + "15" : "transparent",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={addCleaning}
                          onChange={(e) => setAddCleaning(e.target.checked)}
                          className="sr-only"
                        />
                        <span
                          className="mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors"
                          style={{
                            border: `2px solid ${ACCENT}`,
                            backgroundColor: addCleaning ? ACCENT : "transparent",
                          }}
                        >
                          {addCleaning && <Check size={13} color="#fff" strokeWidth={3} />}
                        </span>
                        <span className="text-sm leading-snug" style={{ color: PRIMARY }}>
                          <strong>Optional:</strong> Grundreinigung nach Räumung erwünscht
                        </span>
                      </label>
                    )}

                    {[
                      {
                        name: "name",
                        label: "Vor- & Nachname",
                        placeholder: "Ihr vollständiger Name",
                        type: "text",
                        required: true,
                      },
                      {
                        name: "email",
                        label: "E-Mail",
                        placeholder: "name@beispiel.de",
                        type: "email",
                        required: true,
                      },
                      {
                        name: "telefon",
                        label: "Telefonnummer",
                        placeholder: "z. B. 0711 123456",
                        type: "tel",
                        required: true,
                      },
                      {
                        name: "ort",
                        label: "Einsatzort",
                        placeholder: "z. B. Böblingen, Stuttgart...",
                        type: "text",
                        required: false,
                      },
                    ].map((f) => (
                      <div key={f.name}>
                        <label
                          className="text-xs font-semibold mb-1 block"
                          style={{ color: PRIMARY }}
                        >
                          {f.label}
                          {f.required && <span style={{ color: ACCENT }}> *</span>}
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name as keyof FormState]}
                          onChange={handleChange}
                          required={f.required}
                          placeholder={f.placeholder}
                          className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                          style={{
                            border: `2px solid ${ACCENT}`,
                            color: PRIMARY,
                          }}
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        className="text-xs font-semibold mb-1 block"
                        style={{ color: PRIMARY }}
                      >
                        Kurze Beschreibung
                      </label>
                      <textarea
                        name="nachricht"
                        value={form.nachricht}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Was können wir für Sie tun?"
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                        style={{
                          border: `2px solid ${ACCENT}`,
                          color: PRIMARY,
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90 mt-2"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Angebot anfordern →
                    </button>

                    {errorMsg && (
                      <div
                        role="alert"
                        className="rounded-xl px-4 py-3 text-sm leading-relaxed"
                        style={{
                          backgroundColor: "#fef2f2",
                          border: "2px solid #dc2626",
                          color: "#991b1b",
                        }}
                      >
                        {errorMsg}
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
