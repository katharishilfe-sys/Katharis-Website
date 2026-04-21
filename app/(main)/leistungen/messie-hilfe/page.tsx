import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Messie-Hilfe in Böblingen & Stuttgart – Katharis",
  description:
    "Einfühlsame Messie-Hilfe mit bis zu 100 % Kostenübernahme durch die Pflegekasse. Katharis hilft Ihnen in Böblingen & Stuttgart – ohne Verurteilung, ohne Aufsehen.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was genau ist Messie-Hilfe und was umfasst sie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Messie-Hilfe umfasst die einfühlsame Begleitung und professionelle Räumung von stark vermüllten oder verwahrlosten Wohnungen. Wir sortieren gemeinsam mit Ihnen, sichern Wertsachen und Dokumente, entsorgen fachgerecht und reinigen auf Wunsch gründlich. Alles in Ihrem Tempo, ohne Druck.",
      },
    },
    {
      "@type": "Question",
      name: "Übernimmt die Pflegekasse die Kosten für Messie-Hilfe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In vielen Fällen ja. Wenn ein anerkannter Pflegegrad vorliegt, können Entrümpelungskosten als wohnumfeldverbessernde Maßnahme mit bis zu 4.000 € bezuschusst werden – was oft 100 % unserer Kosten entspricht. Wir klären das kostenlos mit Ihnen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie diskret läuft ein Messie-Einsatz ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolut diskret. Wir kommen mit neutralen Fahrzeugen, tragen keine auffällige Kleidung und verhalten uns unauffällig im Hauseingang. Nachbarn bemerken nichts. Diskretion ist für uns keine Option – sie ist Standard.",
      },
    },
  ],
};

const ablauf = [
  { nr: "01", titel: "Kostenlose Erstberatung", text: "Erstkontakt per Telefon, WhatsApp oder Formular – völlig ohne Druck. Wir hören zu und klären, ob die Pflegekasse zahlen kann." },
  { nr: "02", titel: "Diskrete Vor-Ort-Besichtigung", text: "Wir kommen zu Ihnen – neutral gekleidet, ohne auffällige Fahrzeuge. Gemeinsam schauen wir uns die Situation an und erstellen ein Angebot." },
  { nr: "03", titel: "Sensible Sortierung", text: "Wertsachen, Dokumente, Fotos – nichts davon wird einfach weggeworfen. Wir sichern alles Wichtige sorgfältig und übergeben es Ihnen." },
  { nr: "04", titel: "Fachgerechte Entrümpelung", text: "Unser Team räumt systematisch und umweltbewusst. Verwertbares wird gespendet, alles andere fachgerecht entsorgt." },
  { nr: "05", titel: "Besenreine Übergabe", text: "Am Ende übergeben wir Ihnen saubere, freie Räume – auf Wunsch inklusive Grundreinigung. Alles aus einer Hand." },
];

export default function MessieHilfePage() {
  return (
    <>
      <Script id="faq-messie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb crumbs={[
        { label: "Startseite", href: "/" },
        { label: "Leistungen", href: "/" },
        { label: "Messie-Hilfe" },
      ]} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Unsere Leistungen
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Messie-Hilfe: Wir helfen – ohne zu urteilen.
        </h1>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Bis zu 100 % der Kosten werden in vielen Fällen von der Pflegekasse übernommen.
          Wir beraten Sie kostenlos – diskret und ohne Vorwürfe.
        </p>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center mb-16">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg shrink-0">
            <Image
              src="/bild-1-messie.jpg"
              alt="Einfühlsame Messie-Hilfe durch das Katharis-Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="text-2xl font-bold" style={{ color: "#1A3C34" }}>
              „Wir verurteilen niemanden."
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Messie-Syndrom ist keine Schwäche – es ist eine Herausforderung, die viele Menschen
              betrifft. Wer zu uns kommt, hat oft schon genug Scham erlebt. Deshalb beginnen wir
              immer mit Zuhören. Kein Kommentar, keine Bewertung.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Unser Team stimmt jeden Schritt gemeinsam mit Ihnen ab. Ihr Zuhause, Ihr Tempo.
              Und das Beste: In vielen Fällen übernimmt Ihre Pflegekasse{" "}
              <strong>bis zu 100 % der Kosten</strong>.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              {["Kostenlose Besichtigung", "Neutrale Fahrzeuge – kein Aufsehen", "Wertsachen werden gesichert", "Pflegekassen-Abrechnung inklusive", "Besenreine Übergabe garantiert"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#1A3C34" }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white shrink-0" style={{ backgroundColor: "#EBA059" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ablauf */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#EBA059" }}>Unser Ablauf</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#1A3C34" }}>
            So läuft ein Einsatz ab.
          </h2>
          <div className="flex flex-col gap-4">
            {ablauf.map((s) => (
              <div key={s.nr} className="flex gap-5 items-start bg-white rounded-2xl p-6 shadow-sm" style={{ border: "1px solid #1A3C3410" }}>
                <span className="text-2xl font-black shrink-0 mt-0.5" style={{ color: "#EBA059" }}>{s.nr}</span>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1A3C34" }}>{s.titel}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>Häufige Fragen zur Messie-Hilfe</h2>
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
            Kostenlos und unverbindlich beraten lassen
          </h2>
          <p className="text-white/70 mb-6">
            Ihr erster Schritt muss kein großer sein. Rufen Sie an oder schreiben Sie uns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Jetzt diskret anfragen
            </Link>
            <a
              href="tel:07031/6953604"
              className="px-8 py-3 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white hover:text-[#1A3C34]"
            >
              07031/6953604
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
