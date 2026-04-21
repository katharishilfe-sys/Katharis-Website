import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Entrümpelung in Böblingen & Stuttgart – Katharis",
  description:
    "Professionelle und diskrete Entrümpelung & Haushaltsauflösung in Böblingen & Stuttgart. Kostenlose Besichtigung, faire Preise, besenreine Übergabe. Jetzt anfragen.",
};

const leistungen = [
  "Kostenlose Vor-Ort-Besichtigung",
  "Wertanrechnung verwertbarer Gegenstände möglich",
  "Demontage und Abbau von Möbeln",
  "Umweltgerechte Entsorgung & Recycling",
  "Besenreine Übergabe garantiert",
  "Optionale Grundreinigung zubuchbar",
  "Unterstützung bei Pflegekassen-Abrechnung",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Entrümpelung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Kosten hängen vom Volumen und Aufwand ab. Wir erstellen nach der kostenlosen Besichtigung einen transparenten Kostenvoranschlag – ohne versteckte Kosten. In vielen Fällen übernimmt die Pflegekasse bis zu 100 % der Kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell können Sie kommen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel sind wir innerhalb von 2–5 Werktagen vor Ort. Bei dringendem Bedarf versuchen wir, einen früheren Termin zu finden. Rufen Sie uns einfach an.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert mit noch verwertbaren Gegenständen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gut erhaltene Möbel, Kleidung oder Elektrogeräte werden nach Möglichkeit gespendet oder weiterverkauft. Der Erlös kann auf Ihre Rechnung angerechnet werden.",
      },
    },
  ],
};

export default function EntruempelungPage() {
  return (
    <>
      <Script id="faq-entruempelung" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb crumbs={[
        { label: "Startseite", href: "/" },
        { label: "Leistungen", href: "/" },
        { label: "Entrümpelung" },
      ]} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Unsere Leistungen
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Entrümpelung – diskret, respektvoll und gründlich.
        </h1>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Ob Wohnung, Haus, Keller oder Dachboden – wir übernehmen die komplette Entrümpelung
          für Sie. Schnell, fair und ohne versteckte Kosten.
        </p>

        {/* Image + 3-Stufen-System */}
        <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-14 items-center mb-16">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg shrink-0">
            <Image
              src="/bild-2-entruempelung.jpg"
              alt="Strukturierte Entrümpelung durch das Katharis-Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="text-2xl font-bold" style={{ color: "#1A3C34" }}>
              Unser strukturiertes Sortier-System
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Eine Entrümpelung bedeutet für uns nicht einfach „alles weg". Wir arbeiten nach einem
              klaren, respektvollen Drei-Stufen-System, das wir gemeinsam mit Ihnen durchgehen:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Behalten", text: "Was Ihnen wichtig ist, bleibt – wir räumen nur, was Sie freigeben." },
                { label: "Spenden", text: "Gut erhaltene Dinge geben wir weiter und entlasten so die Umwelt." },
                { label: "Entsorgen", text: "Alles andere wird fachgerecht und umweltbewusst entsorgt." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#EBA059" }}>✓</span>
                  <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
                    <strong style={{ opacity: 1 }}>{item.label}:</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Leistungsumfang */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A3C34" }}>Das ist im Leistungsumfang enthalten</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {leistungen.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm" style={{ border: "1px solid #1A3C3410" }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white shrink-0" style={{ backgroundColor: "#EBA059" }}>✓</span>
                <span className="text-sm font-medium" style={{ color: "#1A3C34" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>Häufige Fragen zur Entrümpelung</h2>
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
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Bereit für Ihren Neuanfang?</h2>
          <p className="text-white/70 mb-6">
            Schreiben Sie uns – wir melden uns innerhalb von 24 Stunden, vollkommen diskret.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#EBA059" }}>
              Jetzt diskret anfragen
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
