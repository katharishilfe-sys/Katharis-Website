import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe Sindelfingen – Katharis",
  description:
    "Katharis ist innerhalb weniger Minuten in Sindelfingen – diskrete Messie-Hilfe & Entrümpelung direkt vor Ort. Kostenlose Besichtigung, Pflegekassen-Abrechnung möglich.",
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe Sindelfingen – Katharis",
    description:
      "Direkt neben Böblingen: Katharis räumt und hilft in Sindelfingen. Von der Oberen Vorstadt bis Maichingen – schnell, diskret, fair.",
    url: "https://katharis.de/standorte/sindelfingen",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Entrümpelung Sindelfingen" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie schnell kommen Sie in Sindelfingen an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sindelfingen grenzt direkt an Böblingen an, wo unser Firmensitz liegt. In der Regel sind wir in 5 bis 10 Minuten bei Ihnen. Das macht uns zum schnellsten Anbieter für Entrümpelung und Messie-Hilfe im Stadtgebiet Sindelfingen.",
      },
    },
    {
      "@type": "Question",
      name: "Haben Sie Erfahrung mit Wohnblöcken aus den 1960er und 1970er Jahren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, sehr viel. Sindelfingen hat viele Wohnkomplexe aus dieser Bauepoche – oft mit engen Treppenhäusern, kleinen Aufzügen oder gar keinem Aufzug. Unser Team kennt diese Herausforderungen und geht damit routiniert um. Wir planen Einsätze so, dass auch schwieriger Zugang kein Problem ist.",
      },
    },
    {
      "@type": "Question",
      name: "Arbeiten Sie auch in Maichingen und anderen Sindelfinger Stadtteilen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selbstverständlich. Wir sind im gesamten Stadtgebiet Sindelfingen tätig – darunter die Innenstadt, die Obere Vorstadt, Maichingen und die umliegenden Wohngebiete. Kein Stadtteil ist zu abgelegen oder zu klein für uns.",
      },
    },
  ],
};

const leistungen = [
  {
    href: "/leistungen/messie-hilfe",
    titel: "Messie-Hilfe",
    text: "Einfühlsame Begleitung und professionelle Räumung – ohne Druck, ohne Verurteilung.",
    badge: "Bis zu 100 % Pflegekasse",
  },
  {
    href: "/leistungen/entruempelung",
    titel: "Entrümpelung",
    text: "Wohnung, Haus, Keller, Dachboden – wir räumen systematisch und besenrein.",
    badge: "Kostenlose Besichtigung",
  },
  {
    href: "/leistungen/grundreinigung",
    titel: "Grundreinigung",
    text: "Professionelle Tiefenreinigung nach der Räumung – von Boden bis Decke.",
    badge: "Besenreine Übergabe",
  },
];

export default function SindelfingenPage() {
  return (
    <>
      <Script
        id="faq-standort-sindelfingen"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte", href: "/standorte" },
          { label: "Sindelfingen" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Direkt nebenan
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Entrümpelung & Messie-Hilfe in Sindelfingen
        </h1>
        <p className="text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Sindelfingen liegt unmittelbar neben Böblingen – unser Firmensitz und Ihr Wohnort sind
          kaum fünf bis zehn Minuten voneinander entfernt. Schnellere und verlässlichere Hilfe
          vor Ort werden Sie in der Region nicht finden.
        </p>

        {/* Ortskenntnis */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm" style={{ border: "1px solid #1A3C3415" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
            Sindelfingen: Wohnvielfalt mit eigener Geschichte
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Sindelfingen ist weit mehr als die Heimat des Mercedes-Benz-Werks. Die Stadt hat sich
            über Jahrzehnte zu einem bedeutenden Wohn- und Wirtschaftsstandort entwickelt, der sehr
            unterschiedliche Wohnlagen vereint: großzügige Einfamilienhausviertel im Norden,
            dicht besiedelte Wohnkomplexe im Zentrum und die ruhigere Wohnlage in Maichingen
            im Westen.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Besonders in den Wohnblöcken, die in den 1960er und 1970er Jahren rund um das
            Mercedes-Werk entstanden sind, sehen wir häufig Wohnungen, in denen über viele
            Jahre hinweg Gegenstände angesammelt wurden. Enge Treppenhäuser, kleine Aufzüge und
            begrenzte Parkmöglichkeiten gehören dort zum Alltag – und unser Team ist genau darauf
            eingestellt.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Wir arbeiten in Sindelfingen genauso diskret wie überall: neutrale Fahrzeuge,
            kein Aufsehen im Treppenhaus, kein Druck. Ihr Umfeld erfährt nichts davon,
            warum wir bei Ihnen sind.
          </p>
        </div>

        {/* Vorteile */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A3C34" }}>
            Warum Katharis in Sindelfingen die beste Wahl ist
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Anfahrt in 5–10 Minuten ab Böblingen – der kürzeste Weg zu Ihnen",
              "Erfahrung mit Wohnbauten der 1960er–70er Jahre und engen Treppenhäusern",
              "Einsatz im gesamten Stadtgebiet: Innenstadt, Obere Vorstadt, Maichingen",
              "Neutrale Fahrzeuge – absolut diskret, kein Aufsehen im Hausflur",
              "Kostenlose Vor-Ort-Besichtigung ohne Verpflichtung",
              "Pflegekassen-Abrechnung inklusive – wir übernehmen den Antrag",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white shrink-0"
                  style={{ backgroundColor: "#EBA059" }}
                >
                  ✓
                </span>
                <span className="text-base" style={{ color: "#1A3C34", opacity: 0.85 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Leistungen */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A3C34" }}>
            Unsere Leistungen in Sindelfingen
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {leistungen.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col gap-3 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ border: "1px solid #1A3C3415" }}
              >
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full self-start"
                  style={{ backgroundColor: "#EBA05920", color: "#EBA059" }}
                >
                  {l.badge}
                </span>
                <h3 className="text-lg font-bold" style={{ color: "#1A3C34" }}>
                  {l.titel}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#1A3C34", opacity: 0.75 }}>
                  {l.text}
                </p>
                <span
                  className="text-sm font-bold transition-transform group-hover:translate-x-1 self-start"
                  style={{ color: "#EBA059" }}
                >
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Pflegekasse Banner */}
        <div
          className="mb-12 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 justify-between"
          style={{ backgroundColor: "#EBA05915", border: "2px solid #EBA05940" }}
        >
          <div>
            <p className="font-bold text-lg mb-1" style={{ color: "#1A3C34" }}>
              Pflegekasse zahlt – auch in Sindelfingen
            </p>
            <p className="text-sm" style={{ color: "#1A3C34", opacity: 0.75 }}>
              Mit anerkanntem Pflegegrad bis zu 4.000 € Zuschuss. Wir beantragen alles für Sie.
            </p>
          </div>
          <Link
            href="/pflegekasse"
            className="shrink-0 px-6 py-3 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#EBA059" }}
          >
            Mehr erfahren →
          </Link>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>
            Häufige Fragen – Sindelfingen
          </h2>
          <div className="flex flex-col gap-6">
            {faqSchema.mainEntity.map((f) => (
              <div key={f.name} className="border-b pb-6" style={{ borderColor: "#1A3C3420" }}>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A3C34" }}>
                  {f.name}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>
                  {f.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: "#1A3C34" }}>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Schnell, diskret und direkt in Sindelfingen
          </h2>
          <p className="text-white/70 mb-6">
            Schreiben Sie uns oder rufen Sie an – wir sind in wenigen Minuten bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Kostenlos anfragen
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
