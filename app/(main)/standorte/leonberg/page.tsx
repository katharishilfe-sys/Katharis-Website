import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe Leonberg – Katharis",
  description:
    "Katharis kommt nach Leonberg – diskrete Messie-Hilfe & Entrümpelung im gesamten Stadtgebiet. Von der Altstadt bis Eltingen und Höfingen. Kostenlose Besichtigung.",
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe Leonberg – Katharis",
    description:
      "Rund 15 Minuten ab Böblingen: Katharis räumt und hilft in Leonberg und allen Stadtteilen. Diskret, fair, mit Pflegekassen-Option.",
    url: "https://katharis.de/standorte/leonberg",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Entrümpelung Leonberg" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kommen Sie auch in die Leonberger Außenstadtteile wie Höfingen oder Warmbronn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, selbstverständlich. Wir sind im gesamten Leonberger Stadtgebiet tätig – einschließlich der Stadtteile Eltingen, Höfingen, Warmbronn und Gebersheim. Auch in ländlicheren Lagen mit etwas längerer Zufahrt kommen wir zuverlässig zu Ihnen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange fahren Sie von Böblingen nach Leonberg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Von unserem Firmensitz in Böblingen sind wir in etwa 15 Minuten in Leonberg. Die Verbindung über die A81 oder die B295 ist gut ausgebaut, sodass wir auch kurzfristige Termine gut einhalten können.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es in Leonberg besondere Anforderungen bei der Entrümpelung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Leonberger Altstadt gibt es teils enge Gassen und Gebäude mit historischer Bausubstanz, die besondere Sorgfalt erfordern. In neueren Wohngebieten und Stadtteilen wie Eltingen oder Gebersheim sind die Gegebenheiten meist einfacher. Wir besichtigen immer zuerst und planen den Einsatz individuell – kostenlos und unverbindlich.",
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

export default function LeonbergPage() {
  return (
    <>
      <Script
        id="faq-standort-leonberg"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte", href: "/standorte" },
          { label: "Leonberg" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Landkreis Böblingen
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Entrümpelung & Messie-Hilfe in Leonberg
        </h1>
        <p className="text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Leonberg liegt im Landkreis Böblingen und ist von unserem Firmensitz in Böblingen in
          rund 15 Minuten gut erreichbar. Wir kennen die Stadt, ihre Stadtteile und die
          unterschiedlichsten Wohnlagen – von der historischen Altstadt bis zu den ruhigen
          Außenbezirken.
        </p>

        {/* Ortskenntnis */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm" style={{ border: "1px solid #1A3C3415" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
            Leonberg: Zwischen Altstadt und modernen Wohnquartieren
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Leonberg ist eine Stadt mit zwei Gesichtern: Im Kern eine gewachsene Altstadt mit
            historischen Gebäuden, engen Gassen und Fachwerkhäusern – und drumherum moderne
            Wohnviertel und Stadtteile wie Eltingen, Höfingen, Warmbronn und Gebersheim.
            Jeder Bereich hat seine eigenen Anforderungen, wenn es um Entrümpelung und Messie-Hilfe geht.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            In der Altstadt und in Eltingen finden sich Wohnhäuser unterschiedlicher Baujahre –
            darunter viele ohne modernen Aufzug. Das erfordert Sorgfalt und Erfahrung beim
            Transport schwerer Gegenstände. In Höfingen, Warmbronn und Gebersheim sind eher
            Einfamilienhäuser, Doppelhaushälften und ältere Einfamilienhäuser zu finden,
            die häufig mit vollgestopften Kellern, Dachböden oder Garagen aufwarten.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Wir begegnen jeder Situation ohne Wertung. Ob jahrzehntelange Ansammlung,
            eine aufzulösende Erbschaft oder eine Wohnung, die nach einem Schicksalsschlag aus
            dem Blickfeld geraten ist – wir helfen ohne Kommentar und mit vollem Einsatz.
          </p>
        </div>

        {/* Vorteile */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A3C34" }}>
            Was Katharis in Leonberg auszeichnet
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Anfahrt in ca. 15 Min. von Böblingen – pünktlich und zuverlässig",
              "Einsatz in allen Stadtteilen: Altstadt, Eltingen, Höfingen, Warmbronn, Gebersheim",
              "Erfahrung mit Altbausubstanz und beengten Verhältnissen in der Innenstadt",
              "Kostenlose Vor-Ort-Besichtigung, transparenter Kostenvoranschlag",
              "Neutrale Fahrzeuge – kein Aufsehen in der Nachbarschaft",
              "Pflegekassen-Abrechnung: Wir beantragen alles für Sie",
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
            Unsere Leistungen in Leonberg
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
              Pflegekasse zahlt – auch in Leonberg
            </p>
            <p className="text-sm" style={{ color: "#1A3C34", opacity: 0.75 }}>
              Mit Pflegegrad bis zu 4.000 € Zuschuss. Wir prüfen Ihren Anspruch kostenlos.
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
            Häufige Fragen – Leonberg
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
            Jetzt Termin vereinbaren – für Leonberg und Umgebung
          </h2>
          <p className="text-white/70 mb-6">
            Wir kommen kostenlos zu Ihnen und erstellen ein unverbindliches Angebot.
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
