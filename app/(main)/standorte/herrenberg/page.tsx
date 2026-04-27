import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe Herrenberg – Katharis",
  description:
    "Katharis kommt nach Herrenberg – diskrete Messie-Hilfe & Entrümpelung im Süden des Landkreises Böblingen. Altstadt, Gültstein, Kuppingen und mehr. Jetzt anfragen.",
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe Herrenberg – Katharis",
    description:
      "Ca. 25 Minuten ab Böblingen: Katharis hilft im gesamten Herrenberger Stadtgebiet. Diskret, professionell, mit Pflegekassen-Abrechnung.",
    url: "https://katharis.de/standorte/herrenberg",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Entrümpelung Herrenberg" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kommen Sie auch in die Herrenberger Stadtteile wie Gültstein oder Kuppingen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir sind im gesamten Herrenberger Stadtgebiet aktiv – inklusive der Stadtteile Gültstein, Kuppingen, Mönchberg und Affstätt. Auch etwas abgelegenere Lagen sind für uns kein Problem. Wir planen jede Anfahrt sorgfältig, damit der Einsatz reibungslos läuft.",
      },
    },
    {
      "@type": "Question",
      name: "Wie weit ist Herrenberg von Böblingen entfernt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Herrenberg liegt im Süden des Landkreises Böblingen, rund 25 Minuten von unserem Firmensitz entfernt. Die Verbindung über die A81 ist gut ausgebaut und zuverlässig befahrbar. Wir schaffen es auch bei kurzfristigen Anfragen, zeitnah bei Ihnen zu sein.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es in Herrenberg Besonderheiten, die bei der Entrümpelung zu beachten sind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der historischen Herrenberger Altstadt gibt es Gebäude mit besonders engen Zugängen und Treppen, die beim Abtransport größerer Gegenstände Fingerspitzengefühl erfordern. In den Stadtteilen wie Gültstein oder Kuppingen handelt es sich häufig um ältere Einfamilienhäuser mit Nebengebäuden, Kellern oder Scheunen. Wir besichtigen immer vorab – kostenlos und unverbindlich.",
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

export default function HerrenbergPage() {
  return (
    <>
      <Script
        id="faq-standort-herrenberg"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte", href: "/standorte" },
          { label: "Herrenberg" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Süden des Landkreises Böblingen
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Entrümpelung & Messie-Hilfe in Herrenberg
        </h1>
        <p className="text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Herrenberg liegt im Süden des Landkreises Böblingen – von unserem Firmensitz in
          Böblingen in etwa 25 Minuten erreichbar. Wir kommen zuverlässig und pünktlich zu Ihnen,
          egal ob Sie in der Innenstadt, in den Stadtteilen oder am Stadtrand wohnen.
        </p>

        {/* Ortskenntnis */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm" style={{ border: "1px solid #1A3C3415" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
            Herrenberg: Historisches Stadtbild, gewachsene Stadtteile
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Herrenberg ist für seine gepflegte Altstadt bekannt, die von der markanten
            Stiftskirche überragt wird. Diese historische Substanz macht die Stadt besonders
            liebenswert – bringt bei Entrümpelungen aber auch spezifische Herausforderungen mit sich:
            enge Tordurchfahrten, Treppen ohne Handlauf, kleine Aufgänge in Altstadthäusern.
            Unser Team kennt solche Situationen und geht routiniert damit um.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Rund um die Kernstadt liegen die gewachsenen Stadtteile Gültstein, Kuppingen,
            Mönchberg und Affstätt. Hier überwiegen ältere Einfamilienhäuser mit großen Gärten,
            Nebengebäuden, Garagen und oft über Jahrzehnte gefüllten Kellern oder Scheunen.
            Das erfordert eine sorgfältige Planung und klare Abstimmung – beides stellen wir
            kostenlos vorab bei der Besichtigung sicher.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Für uns ist jeder Einsatz in Herrenberg genauso wichtig wie ein Einsatz direkt
            vor unserer Haustür. Diskretion, Sorgfalt und Respekt sind selbstverständlich –
            unabhängig davon, wie weit wir fahren müssen.
          </p>
        </div>

        {/* Vorteile */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A3C34" }}>
            Zuverlässig in Herrenberg – was Sie erwarten dürfen
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Anfahrt in ca. 25 Min. ab Böblingen – über die A81 gut erreichbar",
              "Einsatz in allen Stadtteilen: Herrenberg, Gültstein, Kuppingen, Mönchberg, Affstätt",
              "Erfahrung mit Altbauten und historischer Bebauung in der Innenstadt",
              "Entrümpelung von Nebengebäuden, Kellern und Scheunen auf Anfrage",
              "Neutrale Fahrzeuge – kein Aufsehen für Ihre Nachbarschaft",
              "Pflegekassen-Abrechnung inklusive Antragstellung",
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
            Unsere Leistungen in Herrenberg
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
              Pflegekasse zahlt – auch in Herrenberg
            </p>
            <p className="text-sm" style={{ color: "#1A3C34", opacity: 0.75 }}>
              Wir prüfen kostenlos Ihren Anspruch und übernehmen die gesamte Antragstellung.
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
            Häufige Fragen – Herrenberg
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
            Jetzt kostenlos anfragen – für Herrenberg und alle Stadtteile
          </h2>
          <p className="text-white/70 mb-6">
            Wir kommen unverbindlich zur Besichtigung und erstellen Ihnen ein faires Angebot.
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
