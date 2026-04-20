import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pflegekasse übernimmt Kosten – Messie-Hilfe | Katharis",
  description:
    "Wussten Sie, dass Ihre Pflegekasse bis zu 100 % der Kosten für professionelle Messie-Hilfe übernehmen kann? Katharis berät Sie kostenlos in Böblingen & Stuttgart.",
};

const steps = [
  {
    number: "01",
    title: "Kostenlose Erstberatung",
    text: "Sie melden sich bei uns – telefonisch oder per Nachricht. Wir besprechen Ihre Situation vertraulich, ohne Druck und ohne Vorwürfe. Gemeinsam prüfen wir, ob und in welchem Umfang Ihre Pflegekasse die Kosten übernehmen kann.",
  },
  {
    number: "02",
    title: "Beantragung bei der Pflegekasse",
    text: "Wir kennen den Weg durch den Papierkram. Katharis unterstützt Sie Schritt für Schritt beim Stellen des Antrags bei Ihrer Pflegekasse – damit Sie sich auf das Wesentliche konzentrieren können und keine Fristen verpassen.",
  },
  {
    number: "03",
    title: "Diskrete Räumung & Reinigung",
    text: "Sobald die Kostenübernahme geklärt ist, startet unser Team – ruhig, respektvoll und ohne Aufsehen. Wir arbeiten in Ihrem Tempo und lassen Sie zu keinem Zeitpunkt allein. Das Ergebnis: ein sauberer, freier Neuanfang.",
  },
];

export default function PflegekassePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      {/* Hero */}
      <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "#EBA059" }}>
        Ihre Pflegekasse zahlt – wir erklären wie
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center mb-6" style={{ color: "#1A3C34" }}>
        Messie-Hilfe: Bis zu 100&nbsp;% Kostenübernahme durch Ihre Pflegekasse.
      </h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-16" style={{ color: "#1A3C34", opacity: 0.75 }}>
        Viele Menschen wissen nicht, dass professionelle Unterstützung bei der Wohnungsreinigung
        und -räumung eine anerkannte Pflegeleistung sein kann. Wir klären Sie auf – kostenlos,
        ehrlich und ohne versteckte Bedingungen.
      </p>

      {/* Image + Steps side by side */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start mb-16">
        <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg shrink-0">
          <Image
            src="/bild-3-pflegekasse.jpg"
            alt="Katharis berät Sie persönlich zur Pflegekassen-Kostenübernahme"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 pt-2">
          <h2 className="text-2xl font-bold" style={{ color: "#1A3C34" }}>
            Wir setzen uns gemeinsam an den Tisch.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Der Antragsprozess bei der Pflegekasse kann sich anfühlen wie ein undurchdringlicher
            Dschungel aus Formularen und Fristen. Katharis übernimmt das für Sie – von der ersten
            Prüfung bis zur finalen Einreichung.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Wir kümmern uns um den kompletten Papierkram, erklären Ihnen jeden Schritt in
            einfachen Worten und sind bei Rückfragen der Kasse für Sie da. Sie müssen sich
            um nichts kümmern – außer dem ersten Anruf.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl p-8 flex flex-col gap-4"
            style={{ backgroundColor: "#fff", border: "1px solid #1A3C3420" }}
          >
            <span className="text-4xl font-black" style={{ color: "#EBA059" }}>
              {step.number}
            </span>
            <h2 className="text-xl font-bold" style={{ color: "#1A3C34" }}>
              {step.title}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Trust Section */}
      <div className="rounded-2xl p-8 md:p-12 mb-16" style={{ backgroundColor: "#1A3C34" }}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Warum Katharis der richtige Partner ist
        </h2>
        <ul className="space-y-3 text-white/80 text-base leading-relaxed list-none">
          {[
            "Wir verurteilen niemanden – jede Situation ist einzigartig und verdient Respekt.",
            "Erfahrung mit Pflegekassen-Anträgen: Wir wissen, was funktioniert.",
            "Absolut diskrete Abwicklung – kein Aufsehen, keine neugierigen Blicke.",
            "Faire Preise und vollständige Transparenz – keine versteckten Kosten.",
            "Persönlicher Ansprechpartner vom ersten Telefonat bis zum sauberen Abschluss.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#EBA059", color: "#fff" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8" style={{ color: "#1A3C34" }}>Häufige Fragen</h2>
        <div className="space-y-6">
          {[
            {
              q: "Wer hat Anspruch auf Kostenübernahme?",
              a: "Grundsätzlich können Personen mit einem anerkannten Pflegegrad Leistungen der Pflegekasse in Anspruch nehmen. In vielen Fällen besteht auch ohne offiziellen Pflegegrad ein Anspruch – wir klären das gemeinsam mit Ihnen.",
            },
            {
              q: "Muss ich den Antrag selbst stellen?",
              a: "Nein. Katharis unterstützt Sie vollständig beim Antragsverfahren. Wir bereiten alles vor, erklären jeden Schritt und stehen bei Rückfragen der Pflegekasse zur Verfügung.",
            },
            {
              q: "Wie lange dauert es, bis die Kasse zahlt?",
              a: "Die Bearbeitungszeit variiert je nach Pflegekasse. Wir kennen die üblichen Abläufe und sorgen dafür, dass Ihr Antrag vollständig und korrekt eingereicht wird – für eine schnellstmögliche Bearbeitung.",
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b pb-6" style={{ borderColor: "#1A3C3420" }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3C34" }}>{faq.q}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.75 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A3C34" }}>
          Lassen Sie uns gemeinsam den ersten Schritt gehen.
        </h2>
        <p className="mb-8 text-lg" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Kontaktieren Sie uns – kostenlos, unverbindlich und in Ihrem eigenen Tempo.
        </p>
        <Link
          href="/kontakt"
          className="inline-block px-10 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#EBA059" }}
        >
          Jetzt kostenlos anfragen
        </Link>
      </div>
    </div>
  );
}
