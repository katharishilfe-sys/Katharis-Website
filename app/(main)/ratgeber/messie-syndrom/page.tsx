import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Was ist das Messie-Syndrom? Ursachen, Anzeichen und Hilfe – Katharis",
  description:
    "Das Messie-Syndrom verstehen: Was steckt dahinter, welche Anzeichen gibt es, und wie kann man Betroffenen helfen? Ein empathischer Ratgeber von Katharis, Ihrem Fachbetrieb für Messie-Hilfe.",
  openGraph: {
    title: "Was ist das Messie-Syndrom? Ursachen, Anzeichen und Hilfe",
    description:
      "Messie-Syndrom ist keine Charakterschwäche – es ist eine psychologische Herausforderung. Dieser Ratgeber erklärt Ursachen, Symptome und Wege zur Hilfe.",
    url: "https://katharis.de/ratgeber/messie-syndrom",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Ratgeber Messie-Syndrom" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist das Messie-Syndrom eine anerkannte psychische Erkrankung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Messie-Syndrom im Volksmund wird in der Fachsprache oft als Hoarding Disorder oder zwanghaftes Horten bezeichnet und ist im DSM-5 (dem internationalen Diagnosehandbuch für psychische Störungen) als eigenständige Diagnose anerkannt. Es handelt sich um eine ernsthafte Erkrankung, die professionelle Unterstützung erfordert – und bei der Betroffene keine Schuld tragen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann man das Messie-Syndrom selbst überwinden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alleine und ohne Unterstützung ist es für die meisten Betroffenen sehr schwer, dauerhaft etwas zu verändern. Der erste Schritt ist das Anerkennen der Situation. Dann helfen psychologische Begleitung für die emotionale Seite und professionelle Entrümpelung für die praktische Seite. Beide Stränge sollten idealerweise Hand in Hand gehen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie kann ich einem Angehörigen mit Messie-Syndrom helfen, ohne ihn zu verletzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Am wichtigsten ist, keine Vorwürfe zu machen und keinen Druck aufzubauen. Zeigen Sie Verständnis und bieten Sie konkrete Hilfe an – etwa das gemeinsame Suchen nach Unterstützung. Erzwingen Sie nichts. Betroffene öffnen sich eher, wenn sie sich sicher und nicht verurteilt fühlen. Ein erster Kontakt mit einem spezialisierten Fachbetrieb wie Katharis kann dabei helfen, den Einstieg zu finden.",
      },
    },
  ],
};

export default function MessieSyndromPage() {
  return (
    <>
      <Script
        id="faq-ratgeber-messie-syndrom"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Messie-Syndrom" },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Ratgeber
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Was ist das Messie-Syndrom? Ursachen, Anzeichen und Hilfe
        </h1>
        <p className="text-lg leading-relaxed mb-10" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Der Begriff „Messie" ist weit verbreitet – doch was genau dahintersteckt, ist vielen
          unklar. Dieser Artikel erklärt das Messie-Syndrom auf sachliche und empathische Weise:
          was es ist, wie es entsteht und was wirklich hilft.
        </p>

        {/* Artikel-Inhalt */}
        <article className="prose-custom flex flex-col gap-8">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Was ist das Messie-Syndrom?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Der Begriff „Messie" leitet sich vom englischen Wort <em>mess</em> (Unordnung,
              Chaos) ab und bezeichnet Menschen, die erhebliche Schwierigkeiten haben, ihre
              Wohnräume oder ihren Besitz zu organisieren und zu reduzieren. In der klinischen
              Psychologie spricht man von der sogenannten <strong>Hoarding Disorder</strong> –
              auf Deutsch: zwanghaftes Horten. Diese ist seit 2013 im DSM-5, dem internationalen
              Diagnosehandbuch für psychische Störungen, als eigenständige Erkrankung anerkannt.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Wichtig ist: Das Messie-Syndrom ist keine Faulheit, keine Gleichgültigkeit und
              kein Charakterfehler. Es ist eine psychologische Erkrankung, die häufig tief
              in der Persönlichkeitsstruktur verwurzelt ist und sich ohne Unterstützung kaum
              alleine überwinden lässt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Welche Ursachen hat das Messie-Syndrom?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Die Ursachen sind komplex und individuell verschieden. Häufig spielen mehrere
              Faktoren zusammen:
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Emotionale Bindung an Gegenstände
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Betroffene empfinden häufig eine starke emotionale Verbindung zu Gegenständen –
              auch zu solchen, die für Außenstehende wertlos erscheinen. Das Wegwerfen fühlt
              sich wie ein Verlust an. Diese Bindung kann so intensiv sein, dass selbst offensichtlich
              unbrauchbare Dinge nicht entsorgt werden können.
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Traumatische Erlebnisse und Lebenskrisen
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Trennungen, Trauerfälle, Krankheiten oder andere einschneidende Erlebnisse können
              das Horten auslösen oder verstärken. Gegenstände werden dann manchmal als Schutzschild
              oder emotionale Stütze empfunden – eine Art greifbare Sicherheit in einer unsicheren Welt.
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Kognitive und neuronale Faktoren
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Forschungen zeigen, dass das Gehirn von Menschen mit Hoarding Disorder bestimmte
              Informationen anders verarbeitet – insbesondere solche, die Entscheidungen über
              Besitz betreffen. Auch Aufmerksamkeitsdefizite oder Perfektionismus können dazu
              beitragen, dass das Aufräumen oder Wegwerfen als überwältigend erlebt wird.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Typische Anzeichen des Messie-Syndroms
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Das Syndrom äußert sich unterschiedlich stark – von leichter Desorganisation bis
              zur vollständigen Einschränkung der Wohnfunktionen. Typische Anzeichen sind:
            </p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "Wohn- und Schlafräume sind durch Gegenstände so überfüllt, dass sie kaum noch nutzbar sind",
                "Starke emotionale Belastung beim Versuch, Dinge wegzuwerfen oder loszulassen",
                "Anhäufen von Zeitungen, Verpackungen, Kleidung oder anderen Gegenständen ohne erkennbaren Nutzen",
                "Schwierigkeiten, Entscheidungen darüber zu treffen, was behalten oder entsorgt werden soll",
                "Soziale Isolation durch Scham – Besucher werden nicht mehr eingeladen",
                "Wahrnehmung der eigenen Situation als nicht (so) problematisch",
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
              Wie kann man Betroffenen helfen?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Der wichtigste Grundsatz: <strong>Nie gegen den Willen des Betroffenen handeln.</strong>{" "}
              Erzwungene Räumungen ohne emotionale Begleitung führen fast immer zu einem Rückfall –
              oft innerhalb weniger Monate. Was wirklich hilft, ist ein geduldiger, respektvoller Ansatz.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Wenn Sie einem Angehörigen helfen möchten: Sprechen Sie das Thema behutsam an,
              ohne Vorwürfe zu machen. Zeigen Sie Verständnis für die emotionale Seite. Bieten
              Sie konkrete Unterstützung an – etwa das Heraussuchen einer professionellen Hilfe.
              Und geben Sie dem Betroffenen das Gefühl, die Kontrolle zu behalten.
            </p>

            <h3 className="text-lg font-bold mb-2" style={{ color: "#1A3C34" }}>
              Wie Katharis unterstützt
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Katharis ist kein Psychologe und gibt keine medizinischen Ratschläge – aber wir sind
              spezialisiert auf die praktische Seite der Messie-Hilfe. Wir räumen nicht einfach
              alles weg, sondern gehen Schritt für Schritt vor: gemeinsam mit dem Betroffenen,
              in seinem Tempo, ohne Druck. Wertsachen, Dokumente und Fotos werden immer zuerst
              gesichert. Alles andere wird behutsam sortiert – was bleibt, was spendet wird,
              was entsorgt wird. Und das Ganze, ohne dass die Nachbarschaft etwas mitbekommt.
            </p>
          </section>

        </article>

        {/* FAQ */}
        <div className="mt-14 mb-12">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>
            Häufige Fragen zum Messie-Syndrom
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
            Wir helfen – diskret, einfühlsam und ohne Vorwürfe
          </h2>
          <p className="text-white/70 mb-6">
            Nehmen Sie Kontakt auf – ganz in Ihrem Tempo. Wir hören zu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Jetzt diskret anfragen
            </Link>
            <Link
              href="/leistungen/messie-hilfe"
              className="px-8 py-3 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white hover:text-[#1A3C34]"
            >
              Zur Messie-Hilfe →
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
