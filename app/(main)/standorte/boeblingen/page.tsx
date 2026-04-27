import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe Böblingen – Katharis",
  description:
    "Katharis hat seinen Firmensitz in Böblingen – kürzeste Reaktionszeiten, lokale Ortskenntnis und diskrete Messie-Hilfe & Entrümpelung. Jetzt kostenlos anfragen.",
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe Böblingen – Katharis",
    description:
      "Direkt vor Ort in Böblingen: diskrete Messie-Hilfe & Entrümpelung mit bis zu 100 % Pflegekassen-Übernahme. Firmensitz Olgastraße 8.",
    url: "https://katharis.de/standorte/boeblingen",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Entrümpelung Böblingen" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie schnell können Sie in Böblingen vor Ort sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da unser Firmensitz direkt in Böblingen (Olgastraße 8) liegt, sind wir in der Regel innerhalb von 24 bis 48 Stunden bei Ihnen. In dringenden Fällen – etwa wenn eine Wohnung schnell geräumt werden muss – versuchen wir, noch am selben oder nächsten Tag vorbeizukommen. Rufen Sie uns einfach an.",
      },
    },
    {
      "@type": "Question",
      name: "Übernimmt die Pflegekasse die Kosten auch für Böblinger Haushalte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, selbstverständlich. Das gilt unabhängig vom Wohnort: Wenn ein anerkannter Pflegegrad (1–5) vorliegt, kann die Pflegekasse Entrümpelungs- und Reinigungskosten als wohnumfeldverbessernde Maßnahme mit bis zu 4.000 € bezuschussen. Wir klären das kostenlos mit Ihnen und übernehmen die gesamte Antragstellung.",
      },
    },
    {
      "@type": "Question",
      name: "Arbeiten Sie auch in den Böblinger Stadtteilen wie Dagersheim oder Diezenhalde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir sind in allen Böblinger Stadtteilen tätig – darunter Dagersheim, Diezenhalde, Breitenbuch und den umliegenden Wohngebieten. Als ansässiges Unternehmen kennen wir die örtlichen Gegebenheiten gut und können Ihnen einen verlässlichen Service anbieten.",
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

export default function BoeblingenPage() {
  return (
    <>
      <Script
        id="faq-standort-boeblingen"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte", href: "/standorte" },
          { label: "Böblingen" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Unser Heimstandort
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Entrümpelung & Messie-Hilfe in Böblingen
        </h1>
        <p className="text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Böblingen ist nicht nur der Landkreis – es ist unser Zuhause. Mit unserem Firmensitz
          in der Olgastraße 8 sind wir schneller bei Ihnen als jeder andere Anbieter. Wir kennen die
          Straßen, die Wohngebiete und die Menschen hier.
        </p>

        {/* Ortskenntnis */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm" style={{ border: "1px solid #1A3C3415" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
            Böblingen – unsere Stadt, Ihr Vorteil
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Als Kreisstadt des Landkreises Böblingen ist Böblingen ein lebendiges Zentrum zwischen
            Stuttgart und dem Schwarzwald. Hier wohnen Menschen in den verschiedensten Lebenslagen:
            in ruhigen Einfamilienhaussiedlungen in Dagersheim, in den Wohnblöcken entlang der
            Diezenhalde, in Altbauwohnungen rund um die Stadtmitte oder im Stadtteil Breitenbuch.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Wir wissen, dass in manchen Häusern kein Aufzug vorhanden ist, kennen die Parksituation
            in engen Innenstadtlagen und wissen, wo ein Halteverbot kurzfristig beantragt werden kann –
            damit der Einsatz reibungslos läuft, ohne dass Sie sich darum kümmern müssen.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Ob Wohnungsauflösung nach einem Todesfall, die Räumung einer verwahrlosten Wohnung
            oder ein Entrümpelungsprojekt nach jahrelangem Aufstauen – wir begegnen jeder Situation
            mit dem gleichen Respekt und der gleichen Sorgfalt. Ohne Vorwürfe. Ohne Aufsehen.
          </p>
        </div>

        {/* Vorteile */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A3C34" }}>
            Warum Katharis in Böblingen die erste Wahl ist
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Firmensitz in Böblingen – schnellste Reaktionszeit in der Region",
              "Lokale Ortskenntnis: Stadtteile, Zufahrten, Parkregelungen",
              "Neutrale Fahrzeuge – keine auffälligen Beschriftungen, absolut diskret",
              "Kostenlose Vor-Ort-Besichtigung ohne Verpflichtung",
              "Komplette Pflegekassen-Abrechnung aus einer Hand",
              "Besenreine Übergabe – wir sind erst fertig, wenn Sie zufrieden sind",
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
            Unsere Leistungen in Böblingen
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
              Pflegekasse zahlt – bis zu 4.000 €
            </p>
            <p className="text-sm" style={{ color: "#1A3C34", opacity: 0.75 }}>
              Wir prüfen kostenlos, ob Sie Anspruch haben, und übernehmen die gesamte Antragstellung.
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
            Häufige Fragen – Böblingen
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
            Jetzt kostenlos beraten lassen – direkt in Böblingen
          </h2>
          <p className="text-white/70 mb-6">
            Wir sind schnell, diskret und in Ihrer Nachbarschaft. Rufen Sie an oder schreiben Sie uns.
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
