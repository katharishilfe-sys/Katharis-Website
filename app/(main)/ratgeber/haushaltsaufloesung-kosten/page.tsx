import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Haushaltsauflösung: Kosten, Ablauf und worauf Sie achten sollten | Katharis",
  description:
    "Was kostet eine Haushaltsauflösung wirklich? Welche Faktoren bestimmen den Preis, was ist inbegriffen und was ist die Wertanrechnung? Unser Ratgeber gibt ehrliche Antworten.",
  openGraph: {
    title: "Haushaltsauflösung: Kosten, Ablauf und worauf Sie achten sollten",
    description:
      "Transparente Infos zu Haushaltsauflösung Kosten, Ablauf und Wertanrechnung. Katharis erklärt, was den Preis beeinflusst und wie faire Angebote aussehen.",
    url: "https://katharis.de/ratgeber/haushaltsaufloesung-kosten",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Ratgeber Haushaltsauflösung Kosten" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Haushaltsauflösung im Durchschnitt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine kleine Wohnung (1–2 Zimmer, wenig Inhalt) beginnt in der Regel ab ca. 300–600 €. Eine 3-Zimmer-Wohnung mit normalem Hausrat kostet häufig zwischen 700 und 1.500 €. Größere Häuser oder stark befüllte Wohnungen können auch darüber liegen. Der genaue Preis hängt von Volumen, Inhalt, Zugänglichkeit und gewünschten Zusatzleistungen ab. Wir erstellen nach kostenloser Besichtigung einen verbindlichen Kostenvoranschlag.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet Wertanrechnung bei der Haushaltsauflösung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wenn sich bei der Haushaltsauflösung noch verwertbare Gegenstände befinden – gut erhaltene Möbel, Haushaltsgeräte, Bücher, Sammlerstücke oder Schmuck – können wir diese schätzen und den Erlös auf Ihre Rechnung anrechnen. Das reduziert die Gesamtkosten für Sie. In manchen Fällen kann die Haushaltsauflösung dadurch sogar kostenneutral werden.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich bei der Haushaltsauflösung vor Ort sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das entscheiden Sie selbst. Viele unserer Kunden übergeben uns einfach die Schlüssel und wir erledigen alles eigenständig. Am Ende erhalten Sie die Wohnung besenrein übergeben. Wenn Sie dabei sein möchten, ist das selbstverständlich ebenso willkommen. Wir richten uns nach Ihren Wünschen.",
      },
    },
  ],
};

export default function HaushaltsaufloesungKostenPage() {
  return (
    <>
      <Script
        id="faq-ratgeber-haushaltsaufloesung"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Haushaltsauflösung Kosten" },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Ratgeber
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Haushaltsauflösung: Kosten, Ablauf und worauf Sie achten sollten
        </h1>
        <p className="text-lg leading-relaxed mb-10" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Eine Haushaltsauflösung ist oft mit emotionalem Aufwand verbunden – und häufig auch
          mit Unsicherheit über die Kosten. Dieser Ratgeber erklärt offen und ehrlich, was
          den Preis beeinflusst, was inbegriffen ist und wie Sie unfaire Angebote erkennen.
        </p>

        {/* Artikel-Inhalt */}
        <article className="flex flex-col gap-8">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Was ist eine Haushaltsauflösung – und wann braucht man sie?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Eine Haushaltsauflösung umfasst die vollständige Räumung und Entleerung einer
              Wohnung oder eines Hauses – inklusive Demontage von Möbeln, Entsorgung des Hausrats,
              Sicherung von Wertsachen und auf Wunsch auch Reinigung. Typische Anlässe sind:
            </p>
            <ul className="flex flex-col gap-2 mb-4">
              {[
                "Todesfall in der Familie – Auflösung der Wohnung eines Verstorbenen",
                "Umzug in ein Pflegeheim – die bisherige Wohnung wird nicht mehr benötigt",
                "Scheidung oder Trennung – gemeinsamer Haushalt wird aufgelöst",
                "Entrümpelung nach langer Abwesenheit oder Verwahrlosung",
                "Vorbereitung einer Immobilie für Verkauf oder Neuvermietung",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white shrink-0"
                    style={{ backgroundColor: "#EBA059" }}
                  >
                    ✓
                  </span>
                  <span className="text-base" style={{ color: "#1A3C34", opacity: 0.8 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Diese Faktoren bestimmen die Kosten
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Es gibt keinen Einheitspreis für Haushaltsauflösungen. Die Kosten hängen von
              mehreren Faktoren ab – und seriöse Anbieter benennen diese transparent:
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Größe und Volumen
            </h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Die Wohnfläche und die Menge der vorhandenen Gegenstände sind die wichtigsten
              Kostentreiber. Eine leere 3-Zimmer-Wohnung, in der nur noch wenige Möbelstücke
              stehen, erfordert deutlich weniger Aufwand als eine vollgestellte Wohnung mit
              Jahrzehnten an Inventar.
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Zugänglichkeit und Lage
            </h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Eine Erdgeschosswohnung mit breiter Einfahrt ist einfacher zu entrümpeln als eine
              Dachwohnung im fünften Stockwerk ohne Aufzug. Lage, Parkmöglichkeiten, Treppenaufgang
              und Zufahrt zum Gebäude beeinflussen den Zeitaufwand – und damit den Preis.
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Art und Beschaffenheit des Inhalts
            </h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Normaler Hausrat wird anders behandelt und entsorgt als Sondermüll (z. B. alte
              Farben, Chemikalien, Elektrogeräte). Auch sehr schwere oder sperrige Gegenstände
              wie Klaviere oder große Schrankwände erhöhen den Aufwand. Gleichzeitig kann
              wertvoller Inhalt die Kosten durch Wertanrechnung senken.
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Gewünschte Zusatzleistungen
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Grundreinigung, Demontage fest eingebauter Küchen, Kellerentrümpelung, Entsorgung
              von Sperrmüll auf separaten Fahrten – all das kann dazugebucht werden. Bei Katharis
              ist der Leistungsumfang vorab klar definiert: keine versteckten Nachschläge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Was ist inbegriffen – und was kostet extra?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "#1A3C3408", border: "1px solid #1A3C3415" }}
              >
                <p className="font-bold mb-3" style={{ color: "#1A3C34" }}>
                  Standardmäßig enthalten
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Kompletträumung aller Räume",
                    "Demontage und Abbau von Möbeln",
                    "Umweltgerechte Entsorgung",
                    "Sicherung von Dokumenten & Wertsachen",
                    "Besenreine Übergabe",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#1A3C34", opacity: 0.85 }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs text-white shrink-0" style={{ backgroundColor: "#EBA059" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: "#1A3C3408", border: "1px solid #1A3C3415" }}
              >
                <p className="font-bold mb-3" style={{ color: "#1A3C34" }}>
                  Auf Wunsch zubuchbar
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Professionelle Grundreinigung",
                    "Kellerentrümpelung",
                    "Dachbodenräumung",
                    "Entsorgung von Sonderabfällen",
                    "Küchen- und Einbaudemontage",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#1A3C34", opacity: 0.85 }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs text-white shrink-0" style={{ backgroundColor: "#EBA059" }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Wertanrechnung: Wie Ihre alten Sachen die Kosten senken
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              In vielen Haushalten befinden sich noch Gegenstände, die einen wirtschaftlichen
              Wert haben: gut erhaltene Möbelstücke, funktionstüchtige Elektrogeräte, Sammlerstücke,
              Schmuck, Antiquitäten oder wertvolle Bücher. Statt diese einfach zu entsorgen,
              schätzen wir den möglichen Wiederverkaufswert.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Dieser Schätzwert wird dann direkt auf Ihre Rechnung angerechnet. Das bedeutet:
              Je mehr verwertbares Material vorhanden ist, desto günstiger wird die Haushaltsauflösung
              für Sie. In manchen Fällen – besonders bei gut erhaltenen Einrichtungsgegenständen –
              kann die Wertanrechnung die Kosten auf nahezu null reduzieren.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Wichtig: Die Wertanrechnung ist transparent. Wir zeigen Ihnen vorab, was wir
              wie bewerten – und Sie entscheiden, ob Sie damit einverstanden sind. Keine
              Überraschungen, keine einseitigen Entscheidungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Woran erkenne ich ein faires Angebot?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Nicht alle Angebote auf dem Markt sind seriös. Achten Sie auf folgende Punkte:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Kein Angebot ohne Vor-Ort-Besichtigung – ohne Besichtigung kann kein seriöser Preis genannt werden",
                "Schriftlicher Kostenvoranschlag vor Beginn der Arbeiten",
                "Klare Auflistung, was im Preis enthalten ist und was extra kostet",
                "Transparente Wertanrechnung mit Erläuterung der Schätzwerte",
                "Kein Druck und keine Unterschrift auf der Straße oder unter Zeitdruck",
                "Seriöser Firmensitz, Gewerbeanmeldung und Erreichbarkeit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white shrink-0"
                    style={{ backgroundColor: "#EBA059" }}
                  >
                    ✓
                  </span>
                  <span className="text-base" style={{ color: "#1A3C34", opacity: 0.8 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

        </article>

        {/* FAQ */}
        <div className="mt-14 mb-12">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>
            Häufige Fragen zur Haushaltsauflösung
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
            Kostenloser Kostenvoranschlag – transparent und unverbindlich
          </h2>
          <p className="text-white/70 mb-6">
            Wir kommen zur kostenlosen Besichtigung und erstellen ein faires, detailliertes Angebot.
            Kein Druck, keine versteckten Kosten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Jetzt anfragen
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
