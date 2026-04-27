import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Entrümpelung & Messie-Hilfe Stuttgart – Katharis",
  description:
    "Professionelle Messie-Hilfe & Entrümpelung in Stuttgart und allen Stadtteilen – Mitte, Bad Cannstatt, Vaihingen, Zuffenhausen u.v.m. Diskret, schnell, mit Pflegekassen-Abrechnung.",
  openGraph: {
    title: "Entrümpelung & Messie-Hilfe Stuttgart – Katharis",
    description:
      "Katharis kommt in alle Stuttgarter Stadtteile. Diskrete Messie-Hilfe & Entrümpelung, ca. 20 Minuten ab Böblingen. Kostenlose Besichtigung.",
    url: "https://katharis.de/standorte/stuttgart",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Katharis – Entrümpelung Stuttgart" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kommen Sie auch in Stuttgarter Stadtteile ohne Aufzug?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, das ist für uns kein Problem. Viele ältere Wohnhäuser in Stuttgart – besonders in Bereichen wie Heslach, Gablenberg oder Bad Cannstatt – haben keinen Aufzug. Unser Team ist darauf eingestellt und trägt die Gegenstände sicher über Treppen. Bei besonders schwierigen Zugängen besprechen wir vorab die beste Lösung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert die Anfahrt von Böblingen nach Stuttgart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Von unserem Firmensitz in Böblingen sind wir je nach Stuttgarter Stadtteil in etwa 20 bis 35 Minuten bei Ihnen. Stadtteile wie Vaihingen oder Möhringen sind besonders schnell erreichbar. Wir planen unsere Routen so, dass Sie keine langen Wartezeiten haben.",
      },
    },
    {
      "@type": "Question",
      name: "Können Sie die Halteverbotszone in Stuttgart für uns beantragen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir organisieren auf Wunsch das nötige Halteverbot vor Ihrem Gebäude. Gerade in stark besiedelten Stuttgarter Quartieren ist das oft notwendig, damit wir effizient arbeiten und Ihre Sachen sicher verladen können. Die Koordination mit dem Ordnungsamt übernehmen wir für Sie.",
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

export default function StuttgartPage() {
  return (
    <>
      <Script
        id="faq-standort-stuttgart"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Standorte", href: "/standorte" },
          { label: "Stuttgart" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#EBA059" }}>
          Stuttgart & Umgebung
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1A3C34" }}>
          Entrümpelung & Messie-Hilfe in Stuttgart
        </h1>
        <p className="text-lg leading-relaxed mb-10 max-w-3xl" style={{ color: "#1A3C34", opacity: 0.75 }}>
          Stuttgart ist als Landeshauptstadt Baden-Württembergs eine der größten und vielfältigsten
          Städte in der Region. Katharis ist hier in allen Stadtteilen für Sie da – von der Innenstadt
          bis zu den Außenbezirken, von der Altbauwohnung bis zum Einfamilienhaus am Hang.
        </p>

        {/* Stadtkenntnis */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-sm" style={{ border: "1px solid #1A3C3415" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A3C34" }}>
            Stuttgart: Eine Stadt, viele Gesichter – wir kennen sie alle
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Stuttgart ist topografisch ungewöhnlich: Viele Wohngebiete liegen an steilen Hängen,
            Treppen verbinden Stadtteile, und in zahlreichen Häusern gibt es keinen Aufzug. Gerade
            in älteren Quartieren wie Heslach, Gablenberg, dem Stuttgarter Osten oder Teilen von
            Bad Cannstatt sind mehrstöckige Gebäude ohne Aufzug der Normalfall. Das stellt bei
            Entrümpelungen besondere Anforderungen – unser Team ist darauf spezialisiert und
            arbeitet auch unter schwierigen Zugangsbedingungen sicher und effizient.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Wir sind in allen Stuttgarter Stadtbezirken tätig: Stuttgart-Mitte, Bad Cannstatt,
            Zuffenhausen, Vaihingen, Möhringen, Degerloch, Feuerbach, Weilimdorf, Münster,
            Hedelfingen, Obertürkheim, Untertürkheim, Wangen, Sillenbuch und vielen mehr.
            Jeder Stadtteil hat seine eigenen Eigenheiten – und wir kennen sie.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.8 }}>
            Von unserem Firmensitz in Böblingen sind wir in etwa 20 Minuten im Stuttgarter Süden
            und Stadtteilen wie Vaihingen oder Möhringen. Auch in weiter entfernte Bezirke kommen
            wir zuverlässig – und pünktlich. Parksituation, Halteverbotszone, enge Einfahrten:
            All das koordinieren wir vorab, damit Ihr Einsatz reibungslos verläuft.
          </p>
        </div>

        {/* Vorteile */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A3C34" }}>
            Ihr Vorteil: Erfahrung in Großstadtlagen
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Einsatz in allen Stuttgarter Stadtbezirken – von Mitte bis Weilimdorf",
              "Erfahrung mit Altbauten ohne Aufzug – sicheres Tragen über Treppen",
              "Organisation von Halteverbotszonen auf Anfrage",
              "Neutrale Fahrzeuge – keine auffälligen Logos oder Schriftzüge",
              "Schnelle Anfahrt: ca. 20 Min. ab Böblingen in den Stuttgarter Süden",
              "Pflegekassen-Abrechnung auch für Stuttgarter Haushalte",
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
            Unsere Leistungen in Stuttgart
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
              Pflegekasse zahlt – auch in Stuttgart
            </p>
            <p className="text-sm" style={{ color: "#1A3C34", opacity: 0.75 }}>
              Bei anerkanntem Pflegegrad können bis zu 4.000 € für die Entrümpelung erstattet werden.
              Wir übernehmen den Antrag für Sie.
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
            Häufige Fragen – Stuttgart
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
            Jetzt kostenlos anfragen – für Stuttgart und alle Stadtteile
          </h2>
          <p className="text-white/70 mb-6">
            Schildern Sie uns kurz Ihre Situation – wir melden uns diskret und schnell zurück.
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
