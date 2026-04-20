import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entrümpelung in Böblingen & Stuttgart – Katharis",
  description:
    "Professionelle und diskrete Entrümpelung in Böblingen & Stuttgart. Katharis räumt für Sie auf – ohne Vorwürfe, mit Respekt und Erfahrung.",
};

export default function EntruempelungPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
        Unsere Leistungen
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-12" style={{ color: "#1A3C34" }}>
        Entrümpelung – diskret, respektvoll und gründlich.
      </h1>

      {/* Image rechts, Text links */}
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
                <span
                  className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: "#EBA059" }}
                >
                  ✓
                </span>
                <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
                  <strong style={{ opacity: 1 }}>{item.label}:</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#1A3C34" }}>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Bereit für Ihren Neuanfang?
        </h2>
        <p className="text-white/70 mb-6">
          Schreiben Sie uns – wir melden uns innerhalb von 24 Stunden, vollkommen diskret.
        </p>
        <Link
          href="/kontakt"
          className="inline-block px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#EBA059" }}
        >
          Jetzt diskret anfragen
        </Link>
      </div>
    </div>
  );
}
