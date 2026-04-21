import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Katharis",
  description: "Impressum der Katharis – Messie-Hilfe in Böblingen & Stuttgart.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-10" style={{ color: "#1A3C34" }}>Impressum</h1>

      <div className="space-y-10 text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.85 }}>

        <section>
          <h2 className="font-bold text-lg mb-2" style={{ opacity: 1 }}>Angaben gemäß § 5 TMG</h2>
          <p>Katharis GbR</p>
          <p>Olgastraße 8</p>
          <p>71032 Böblingen</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2" style={{ opacity: 1 }}>Kontakt</h2>
          <p>Telefon: <a href="tel:07031/6953604" className="underline">07031/6953604</a></p>
          <p>E-Mail: <a href="mailto:info@katharis.de" className="underline">info@katharis.de</a></p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2" style={{ opacity: 1 }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Katharis GbR</p>
          <p>Olgastraße 8, 71032 Böblingen</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2" style={{ opacity: 1 }}>Haftungsausschluss (Disclaimer)</h2>

          <h3 className="font-semibold mb-1">Haftung für Inhalte</h3>
          <p className="mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>

          <h3 className="font-semibold mb-1">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
            ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2" style={{ opacity: 1 }}>Urheberrecht</h2>
          <p>
            Die durch die Betreiber dieser Website erstellten Inhalte und Werke – insbesondere
            Texte, Bilder und Grafiken – unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechts bedürfen der schriftlichen Zustimmung von Katharis GbR. Downloads und
            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Sollten Sie trotzdem
            auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
            Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
            entfernen.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2" style={{ opacity: 1 }}>Streitschlichtung</h2>
          <p className="mb-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

      </div>
    </div>
  );
}
