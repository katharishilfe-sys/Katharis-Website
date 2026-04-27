import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Pflegekasse zahlt Entrümpelung – Wann und wie viel? | Katharis",
  description:
    "Wer einen Pflegegrad hat, kann bis zu 4.000 € von der Pflegekasse für Entrümpelung erhalten. Wir erklären §40 SGB XI, wer Anspruch hat und wie der Antrag läuft.",
  openGraph: {
    title: "Pflegekasse zahlt Entrümpelung – Wann und wie viel?",
    description:
      "Mit Pflegegrad 1–5 können Entrümpelungskosten als wohnumfeldverbessernde Maßnahme mit bis zu 4.000 € bezuschusst werden. Katharis erklärt, wie es funktioniert.",
    url: "https://katharis.de/ratgeber/pflegekasse-entruempelung",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Ratgeber Pflegekasse & Entrümpelung" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welchen Pflegegrad brauche ich, damit die Pflegekasse zahlt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grundsätzlich haben Personen mit einem anerkannten Pflegegrad 1 bis 5 Anspruch auf den Zuschuss für wohnumfeldverbessernde Maßnahmen nach §40 SGB XI. Es muss kein hoher Pflegegrad vorliegen – bereits Pflegegrad 1 berechtigt zur Förderung. Wichtig ist, dass die Maßnahme die häusliche Pflege erleichtert oder ermöglicht.",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch ist der maximale Zuschuss der Pflegekasse für Entrümpelung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Pflegekasse kann bis zu 4.000 € pro Person und Maßnahme bezuschussen. Dieser Betrag kann unter bestimmten Umständen auch pro Haushalt mehrfach genutzt werden – etwa wenn mehrere Personen mit Pflegegrad in derselben Wohnung leben. Bei uns entsprechen die 4.000 € in vielen Fällen 100 % unserer Kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich den Antrag auch stellen, wenn ich bereits eine Rechnung von Katharis habe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das ist möglich, aber wir empfehlen, den Antrag möglichst vorab zu stellen oder zumindest vor Beginn der Maßnahme Kontakt zur Pflegekasse aufzunehmen. Wir unterstützen Sie dabei – von der ersten Anfrage bis zur Einreichung der Unterlagen. So gehen Sie kein finanzielles Risiko ein.",
      },
    },
  ],
};

export default function PflegekasseEntruempelungPage() {
  return (
    <>
      <Script
        id="faq-ratgeber-pflegekasse"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Pflegekasse & Entrümpelung" },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Ratgeber
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Pflegekasse zahlt Entrümpelung – Wann und wie viel?
        </h1>
        <p className="text-lg leading-relaxed mb-10" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Viele Menschen wissen nicht, dass die Pflegekasse unter bestimmten Voraussetzungen
          Entrümpelungs- und Reinigungskosten vollständig übernehmen kann. Dieser Ratgeber
          erklärt, wer Anspruch hat, wie viel möglich ist und wie Sie den Antrag stellen.
        </p>

        {/* Artikel-Inhalt */}
        <article className="flex flex-col gap-8">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Die gesetzliche Grundlage: §40 SGB XI
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Die rechtliche Grundlage für die Förderung ist{" "}
              <strong>§40 des Elften Sozialgesetzbuches (SGB XI)</strong>. Dieser Paragraph
              regelt die sogenannten <strong>wohnumfeldverbessernden Maßnahmen</strong> – also
              Leistungen, die dazu beitragen, die häusliche Pflege zu erleichtern, zu ermöglichen
              oder eine möglichst selbstständige Lebensführung für die pflegebedürftige Person
              wiederherzustellen.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Entrümpelungs- und Reinigungsleistungen fallen in der Praxis regelmäßig unter
              diesen Paragraphen – vorausgesetzt, die Wohnsituation hat direkten Einfluss auf
              die Pflegesituation. Das ist bei stark vermüllten, verwahrlosten oder in ihrer
              Zugänglichkeit eingeschränkten Wohnräumen in der Regel der Fall.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Wer hat Anspruch?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Anspruchsberechtigt sind alle Personen mit einem <strong>anerkannten Pflegegrad
              von 1 bis 5</strong>. Ein hoher Pflegegrad ist nicht erforderlich – auch
              Pflegegrad 1 berechtigt zur Inanspruchnahme. Entscheidend ist, dass die
              geplante Maßnahme die Pflegesituation verbessert.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Auch <strong>Angehörige</strong> können den Antrag im Namen der pflegebedürftigen
              Person stellen – sofern entsprechende Vollmachten vorliegen. Katharis unterstützt
              Sie dabei und hilft, die nötigen Unterlagen zusammenzustellen.
            </p>

            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: "#EBA05915", border: "1px solid #EBA05940" }}
            >
              <p className="font-bold mb-1" style={{ color: "#1A3C34" }}>
                Gut zu wissen: Mehrere Personen im Haushalt
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
                Wenn mehrere Personen mit anerkanntem Pflegegrad in derselben Wohnung leben,
                kann der Zuschuss unter Umständen mehrfach beantragt werden – einmal pro Person.
                Das kann den finanziellen Spielraum erheblich vergrößern.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Wie viel zahlt die Pflegekasse?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Der gesetzlich verankerte Höchstbetrag liegt bei <strong>4.000 € pro Person und
              Maßnahme</strong>. Dieser Betrag gilt pro Kalenderjahr und wird direkt von der
              Pflegekasse an den Dienstleister oder die anspruchsberechtigte Person ausgezahlt.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              In der Praxis entsprechen die 4.000 € bei Katharis häufig dem kompletten
              Rechnungsbetrag – was bedeutet, dass viele unserer Kunden keinen eigenen
              Anteil zahlen müssen. Ob das in Ihrem Fall so ist, klären wir im kostenlosen
              Erstgespräch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Wie läuft der Antrag ab?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Der Antragsprozess klingt komplizierter, als er ist. Und: Katharis begleitet Sie
              dabei von Anfang bis Ende. So läuft es typischerweise ab:
            </p>

            {[
              {
                nr: "01",
                titel: "Erstberatung durch Katharis",
                text: "Wir prüfen kostenlos, ob Ihre Situation die Voraussetzungen für die Förderung erfüllt. Dafür brauchen wir nur wenige Informationen – Pflegegrad, Wohnsituation, gewünschter Leistungsumfang.",
              },
              {
                nr: "02",
                titel: "Antragstellung bei der Pflegekasse",
                text: "Wir stellen gemeinsam mit Ihnen den Förderantrag. Katharis liefert alle nötigen Unterlagen: Kostenvoranschlag, Leistungsbeschreibung und ggf. Fotos der Wohnsituation.",
              },
              {
                nr: "03",
                titel: "Genehmigung und Terminvereinbarung",
                text: "Sobald die Pflegekasse zugestimmt hat, vereinbaren wir den Einsatztermin. In der Regel dauert die Bearbeitungszeit zwei bis vier Wochen.",
              },
              {
                nr: "04",
                titel: "Einsatz und Abrechnung",
                text: "Nach Abschluss des Einsatzes erstellen wir die Rechnung direkt an die Pflegekasse. Sie erhalten alles besenrein übergeben – ohne Zahlungsstress.",
              },
            ].map((s) => (
              <div
                key={s.nr}
                className="flex gap-5 items-start bg-white rounded-2xl p-6 shadow-sm mb-4"
                style={{ border: "1px solid #1A3C3410" }}
              >
                <span className="text-2xl font-black shrink-0 mt-0.5" style={{ color: "#EBA059" }}>
                  {s.nr}
                </span>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1A3C34" }}>
                    {s.titel}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
              Was ist, wenn der Pflegegrad noch nicht festgestellt wurde?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Wenn Sie oder ein Angehöriger möglicherweise pflegebedürftig sind, aber noch keinen
              Pflegegrad beantragt haben, ist jetzt ein guter Zeitpunkt dafür. Der Antrag wird
              beim Medizinischen Dienst (MD) bzw. dem Gutachterdienst der Pflegekasse gestellt.
              Nach einem Begutachtungsgespräch wird der Pflegegrad festgestellt.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
              Katharis kann Ihnen dabei zwar nicht direkt helfen, empfiehlt Ihnen aber,
              sich an die Pflegekasse, eine Pflegeberatungsstelle oder einen Sozialverband zu
              wenden. Sobald der Pflegegrad anerkannt ist, stehen wir bereit.
            </p>
          </section>

        </article>

        {/* FAQ */}
        <div className="mt-14 mb-12">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>
            Häufige Fragen zur Pflegekasse & Entrümpelung
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
            Wir klären Ihren Anspruch – kostenlos und unverbindlich
          </h2>
          <p className="text-white/70 mb-6">
            Fragen Sie uns. Wir prüfen, ob und in welcher Höhe die Pflegekasse in Ihrem Fall zahlt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pflegekasse"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#EBA059" }}
            >
              Zur Pflegekassen-Seite →
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3 rounded-full font-bold border-2 border-white text-white transition-all hover:bg-white hover:text-[#1A3C34]"
            >
              Jetzt anfragen
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
