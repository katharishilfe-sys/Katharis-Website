import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Ratgeber – Entrümpelung & Messie-Hilfe | Katharis",
  description:
    "Alles, was Sie wissen müssen: Was ist das Messie-Syndrom? Wann zahlt die Pflegekasse? Was kostet eine Haushaltsauflösung? Unsere Ratgeber-Artikel geben klare Antworten.",
  openGraph: {
    title: "Ratgeber – Entrümpelung & Messie-Hilfe | Katharis",
    description:
      "Fundierte Ratgeber-Artikel zu Messie-Syndrom, Pflegekasse & Entrümpelung sowie Haushaltsauflösung. Von Katharis, Ihrem regionalen Fachbetrieb.",
    url: "https://katharis.de/ratgeber",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Ratgeber" }],
  },
};

const artikel = [
  {
    href: "/ratgeber/messie-syndrom",
    titel: "Was ist das Messie-Syndrom?",
    untertitel: "Ursachen, Anzeichen und Hilfe",
    beschreibung:
      "Das Messie-Syndrom ist keine Charakterschwäche – es ist eine psychologische Herausforderung, die viele Menschen betrifft. Dieser Artikel erklärt, wie es entsteht, welche Anzeichen es gibt und wie man Betroffenen am besten helfen kann.",
  },
  {
    href: "/ratgeber/pflegekasse-entruempelung",
    titel: "Pflegekasse zahlt Entrümpelung",
    untertitel: "Wann und wie viel?",
    beschreibung:
      "Wer einen anerkannten Pflegegrad hat, kann für Entrümpelung und Wohnungsreinigung bis zu 4.000 € von der Pflegekasse erhalten. Wir erklären, wer Anspruch hat, was der Gesetzgeber dazu sagt und wie der Antrag funktioniert.",
  },
  {
    href: "/ratgeber/haushaltsaufloesung-kosten",
    titel: "Haushaltsauflösung: Kosten, Ablauf und worauf Sie achten sollten",
    untertitel: "Transparenz statt Überraschungen",
    beschreibung:
      "Was kostet eine Haushaltsauflösung wirklich? Welche Faktoren bestimmen den Preis? Und warum kann eine Wertanrechnung die Kosten erheblich senken? Dieser Ratgeber gibt ehrliche Antworten ohne Marketingfloskeln.",
  },
];

export default function RatgeberPage() {
  return (
    <>
      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Ratgeber" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Wissen & Informationen
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Ratgeber: Alles was Sie wissen müssen.
        </h1>
        <p className="text-lg leading-relaxed mb-14 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Messie-Hilfe, Entrümpelung, Haushaltsauflösung – das sind Themen, bei denen viele
          Menschen viele Fragen haben. Und meistens wenig Zeit, um die richtigen Antworten
          zu finden. Unsere Ratgeber-Artikel geben Ihnen klare, ehrliche und praxisnahe Informationen –
          ohne Fachjargon, ohne Werbung.
        </p>

        <div className="flex flex-col gap-6 mb-16">
          {artikel.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group flex flex-col sm:flex-row gap-5 items-start bg-white rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md"
              style={{ border: "1px solid #1A3C3415" }}
            >
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#EBA059" }}>
                  {a.untertitel}
                </p>
                <h2 className="text-xl font-bold mb-3" style={{ color: "#1A3C34" }}>
                  {a.titel}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>
                  {a.beschreibung}
                </p>
              </div>
              <span
                className="shrink-0 text-base font-bold whitespace-nowrap transition-transform group-hover:translate-x-1 mt-1"
                style={{ color: "#EBA059" }}
              >
                Artikel lesen →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: "#1A3C34" }}>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Haben Sie noch offene Fragen?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Unsere Ratgeber ersetzen kein persönliches Gespräch. Wenn Sie konkrete Fragen zu
            Ihrer Situation haben, sprechen wir gerne direkt mit Ihnen – kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Jetzt Kontakt aufnehmen
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
