import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Unsere Leistungen – Katharis | Entrümpelung & Messie-Hilfe",
  description:
    "Professionelle Messie-Hilfe, Entrümpelung und Grundreinigung in Böblingen & Stuttgart. Alle Leistungen im Überblick – diskret, fair und mit Pflegekassen-Abrechnung.",
  openGraph: {
    title: "Unsere Leistungen – Katharis",
    description: "Messie-Hilfe, Entrümpelung und Grundreinigung in Böblingen & Stuttgart. Bis zu 100 % Kostenübernahme durch die Pflegekasse möglich.",
    url: "https://katharis.de/leistungen",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Leistungen" }],
  },
};

const leistungen = [
  {
    href: "/leistungen/messie-hilfe",
    nummer: "01",
    titel: "Messie-Hilfe",
    text: "Einfühlsame Begleitung und professionelle Räumung stark vermüllter oder verwahrlosten Wohnungen. Ohne Druck, ohne Verurteilung – in Ihrem Tempo.",
    highlight: "Bis zu 100 % Pflegekasse",
  },
  {
    href: "/leistungen/entruempelung",
    nummer: "02",
    titel: "Entrümpelung",
    text: "Wohnung, Haus, Keller oder Dachboden – wir räumen systematisch und umweltbewusst. Wertgegenstände werden gesichert, verwertbare Dinge gespendet.",
    highlight: "Kostenlose Besichtigung",
  },
  {
    href: "/leistungen/grundreinigung",
    nummer: "03",
    titel: "Grundreinigung",
    text: "Von Boden bis Decke, von Schränken bis Heizkörpern. Professionelle Tiefenreinigung nach Entrümpelung, Messie-Sanierung oder Auszug.",
    highlight: "Besenreine Übergabe",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: "Startseite", href: "/" }, { label: "Leistungen" }]} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Was wir anbieten
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Unsere Leistungen im Überblick.
        </h1>
        <p className="text-lg leading-relaxed mb-16 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Katharis bietet drei aufeinander abgestimmte Leistungen – von der einfühlsamen Messie-Hilfe
          über die komplette Entrümpelung bis zur professionellen Grundreinigung. Alles aus einer Hand,
          alles diskret.
        </p>

        <div className="flex flex-col gap-6 mb-16">
          {leistungen.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex flex-col sm:flex-row gap-6 items-start bg-white rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md"
              style={{ border: "1px solid #1A3C3415" }}
            >
              <span className="text-4xl font-black shrink-0" style={{ color: "#EBA059" }}>{l.nummer}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold" style={{ color: "#1A3C34" }}>{l.titel}</h2>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#EBA05920", color: "#EBA059" }}>
                    {l.highlight}
                  </span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>{l.text}</p>
              </div>
              <span className="shrink-0 text-2xl font-bold transition-transform group-hover:translate-x-1" style={{ color: "#EBA059" }}>→</span>
            </Link>
          ))}
        </div>

        {/* Pflegekasse Banner */}
        <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#1A3C34" }}>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            In vielen Fällen zahlt Ihre Pflegekasse.
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Wir übernehmen den gesamten Antragsprozess – Sie müssen sich um nichts kümmern.
            Kostenlose Erstberatung, kein Druck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pflegekasse" className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#EBA059" }}>
              Mehr zur Pflegekasse →
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
