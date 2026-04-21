import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Grundreinigung in Böblingen & Stuttgart – Katharis",
  description:
    "Professionelle Grundreinigung & Tiefenreinigung in Böblingen & Stuttgart. Nach Entrümpelung, Messie-Sanierung oder Auszug – hygienisch sauber von Boden bis Decke.",
};

const bereiche = [
  "Böden (Parkett, Fliesen, Teppich)",
  "Wände und Decken",
  "Küche komplett (Schränke innen/außen, Geräte)",
  "Bad & WC hygienisch desinfiziert",
  "Fenster innen und außen",
  "Heizkörper und Heizkörpernischen",
  "Schränke und Einbauten innen",
  "Geruchsneutralisation auf Wunsch",
];

const wann = [
  { titel: "Nach Entrümpelung oder Messie-Sanierung", text: "Der logische nächste Schritt – wir reinigen direkt im Anschluss an die Räumung." },
  { titel: "Nach einem Auszug", text: "Übergabe der Wohnung in einwandfreiem Zustand – für Mieter und Vermieter." },
  { titel: "Bei langer Vernachlässigung", text: "Hartnäckige Verschmutzungen, Gerüche oder hygienische Belastungen fachgerecht beseitigen." },
  { titel: "Vor einem Einzug", text: "Damit Sie in einer frisch gereinigten Wohnung starten können." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Grundreinigung und normaler Reinigung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Grundreinigung geht weit über die normale Reinigung hinaus: Schränke werden innen und außen gereinigt, Heizkörpernischen gesäubert, Böden tiefengereinigt und Gerüche neutralisiert. Wir setzen Profi-Reinigungsmittel und Geräte ein, die im Alltag nicht verfügbar sind.",
      },
    },
    {
      "@type": "Question",
      name: "Kann die Grundreinigung direkt nach der Entrümpelung stattfinden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja – und das ist der häufigste Fall. Unser Team übernimmt beides aus einer Hand: zuerst die Entrümpelung, dann die Grundreinigung. So sparen Sie Zeit und erhalten die Räume in einem Zug besenrein.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert eine Grundreinigung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das hängt von Größe und Zustand der Räume ab. Eine durchschnittliche 3-Zimmer-Wohnung dauert in der Regel 4–8 Stunden. Bei stark verschmutzten Wohnungen oder nach einer Messie-Räumung kann es länger dauern – wir geben Ihnen nach der Besichtigung eine realistische Einschätzung.",
      },
    },
  ],
};

export default function GrundreinigungPage() {
  return (
    <>
      <Script id="faq-grundreinigung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb crumbs={[
        { label: "Startseite", href: "/" },
        { label: "Leistungen", href: "/" },
        { label: "Grundreinigung" },
      ]} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Unsere Leistungen
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Grundreinigung – für einen hygienischen Neuanfang.
        </h1>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Von Boden bis Decke, von Schränken bis Heizkörpern. Wir reinigen professionell und
          gründlich – auch nach schwierigen Ausgangssituationen.
        </p>

        {/* Intro Text + Was wir reinigen */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 mb-16 items-start">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="text-2xl font-bold" style={{ color: "#1A3C34" }}>
              Tiefenreinigung auf Profi-Niveau
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Wir arbeiten mit professionellen Reinigungsmitteln und modernen Geräten, die auch
              hartnäckige Verschmutzungen, Gerüche und hygienische Belastungen zuverlässig beseitigen.
              Das Ergebnis: Räume, in denen man wieder durchatmen kann.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Ob Einzelreinigung einzelner Bereiche oder Komplettreinigung der gesamten Wohnung –
              wir erstellen Ihnen ein individuelles Angebot, transparent und ohne versteckte Kosten.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="font-bold text-base mb-4" style={{ color: "#1A3C34" }}>Was wir reinigen:</h3>
            <ul className="grid grid-cols-1 gap-2">
              {bereiche.map((b) => (
                <li key={b} className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 shadow-sm" style={{ border: "1px solid #1A3C3410" }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white shrink-0" style={{ backgroundColor: "#EBA059" }}>✓</span>
                  <span className="text-sm" style={{ color: "#1A3C34" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wann sinnvoll */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>Wann ist eine Grundreinigung sinnvoll?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {wann.map((w) => (
              <div key={w.titel} className="rounded-2xl p-6 bg-white shadow-sm" style={{ border: "1px solid #1A3C3410" }}>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A3C34" }}>{w.titel}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>Häufige Fragen zur Grundreinigung</h2>
          <div className="flex flex-col gap-6">
            {faqSchema.mainEntity.map((f) => (
              <div key={f.name} className="border-b pb-6" style={{ borderColor: "#1A3C3420" }}>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A3C34" }}>{f.name}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>{f.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: "#1A3C34" }}>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Angebot für Ihre Grundreinigung anfordern
          </h2>
          <p className="text-white/70 mb-6">
            Kostenlos, unverbindlich und diskret. Wir freuen uns auf Ihre Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#EBA059" }}>
              Jetzt Angebot anfordern
            </Link>
            <a href="tel:07031/6953604" className="px-8 py-3 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white hover:text-[#1A3C34]">
              07031/6953604
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
