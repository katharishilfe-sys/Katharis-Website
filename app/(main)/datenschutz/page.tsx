import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Katharis",
  description: "Datenschutzerklärung der Katharis GbR – Messie-Hilfe in Böblingen & Stuttgart.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1A3C34" }}>
        Datenschutzerklärung
      </h1>
      <p className="text-sm mb-12" style={{ color: "#1A3C34", opacity: 0.6 }}>
        Katharis GbR · Stand: April 2026
      </p>

      <div className="space-y-12 text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.85 }}>

        {/* 1 */}
        <section>
          <h2 className="font-bold text-xl mb-3" style={{ opacity: 1 }}>
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
          <p className="mb-3">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Eine Nutzung unserer
            Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
            unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies stets auf freiwilliger Basis.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="font-bold text-xl mb-3" style={{ opacity: 1 }}>
            2. Verantwortliche Stelle
          </h2>
          <p className="mb-3">
            Verantwortlich für die Datenverarbeitung auf dieser Website sind:
          </p>
          <div className="rounded-xl p-5" style={{ backgroundColor: "#fff", border: "1px solid #1A3C3420" }}>
            <p className="font-semibold" style={{ opacity: 1 }}>Daniel Altenhof und Kemal David Gülcü</p>
            <p>Katharis GbR</p>
            <p>Olgastraße 8</p>
            <p>71032 Böblingen</p>
            <p className="mt-2">
              Telefon:{" "}
              <a href="tel:07031/6953604" className="underline">07031/6953604</a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@katharis.de" className="underline">info@katharis.de</a>
            </p>
          </div>
          <p className="mt-3 text-sm">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
            Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="font-bold text-xl mb-4" style={{ opacity: 1 }}>
            3. Datenerfassung auf unserer Website
          </h2>

          {/* Hosting */}
          <h3 className="font-semibold mb-2">Hosting bei ALL-INKL</h3>
          <p className="mb-6">
            Unsere Website wird bei der ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68,
            02742 Friedersdorf gehostet. Wenn Sie unsere Website besuchen, erfasst ALL-INKL
            verschiedene Logdateien inklusive Ihrer IP-Adressen zur technischen
            Sicherstellung und Fehleranalyse des Dienstes. Diese Server-Log-Dateien
            umfassen: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL,
            Hostname des zugreifenden Rechners sowie Uhrzeit der Serveranfrage. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse am technisch fehlerfreien Betrieb unserer Website).
          </p>

          {/* CDN */}
          <h3 className="font-semibold mb-2">Content Delivery Network (Cloudflare)</h3>
          <p className="mb-6">
            Wir nutzen den Dienst Cloudflare der Cloudflare Inc., 101 Townsend St., San Francisco,
            CA 94107, USA. Cloudflare bietet ein weltweit verteiltes Content Delivery Network
            (CDN) inklusive DNS-Dienste und Schutz vor Angriffen. Dies hilft uns, unsere Website
            schnell, stabil und sicher auszuliefern. Technisch wird dabei der Datenverkehr zwischen
            Ihrem Browser und unserer Website über das Netzwerk von Cloudflare geleitet. So kann
            Cloudflare Zugriffe auf unsere Website auswerten, um sie gegen Missbrauch (z. B. Bots,
            DDoS-Angriffe) zu schützen. Die Nutzung von Cloudflare erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und schnellen
            Bereitstellung unserer Website). Weitere Informationen finden Sie in der
            Datenschutzerklärung von Cloudflare: https://www.cloudflare.com/privacypolicy/
          </p>

          {/* Resend */}
          <h3 className="font-semibold mb-2">E-Mail-Versand über Resend</h3>
          <p className="mb-6">
            Zum Versand von Anfrage-Benachrichtigungen nutzen wir den Dienst Resend der
            Resend Inc., 2261 Market Street #4008, San Francisco, CA 94114, USA. Wenn Sie
            unser Kontaktformular nutzen, werden Ihre übermittelten Daten (Name, Telefonnummer,
            Einsatzort) über die Infrastruktur von Resend an uns weitergeleitet.
            Mit Resend haben wir einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO
            geschlossen. Resend verarbeitet Ihre Daten ausschließlich zur Übermittlung der
            E-Mail und speichert diese nicht dauerhaft. Weitere Informationen finden Sie unter:{" "}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">
              resend.com/legal/privacy-policy
            </a>
          </p>

          {/* Contact Form */}
          <h3 className="font-semibold mb-2">Kontaktformular</h3>
          <p className="mb-3">
            Wenn Sie uns über unser Kontaktformular Anfragen zukommen lassen, werden Ihre
            Angaben aus dem Anfrageformular zwecks Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen bei uns gespeichert. Im Rahmen einer Anfrage erfassen wir
            die folgenden Daten:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Vor- und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Einsatzort (optional)</li>
            <li>Die von Ihnen gewählte Leistung (z. B. Messie-Hilfe, Haushaltsauflösung)</li>
            <li>Angabe, ob eine optionale Grundreinigung gewünscht ist</li>
            <li>Freitextnachricht (optional)</li>
          </ul>
          <p className="mb-3">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
            Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
            beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
            Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder
            auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
          </p>
          <p className="mb-3">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
            uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
            der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
            Ihrer Anfrage). Reine Anfragen ohne Auftragserteilung werden spätestens nach
            12 Monaten gelöscht. Bei erteiltem Auftrag gelten die gesetzlichen
            Aufbewahrungsfristen (§ 257 HGB, § 147 AO: 6–10 Jahre). Eine Weitergabe Ihrer
            Daten an Dritte erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
          </p>
          <p>
            Zur Wahrnehmung Ihrer Rechte aus Art. 15–21 DSGVO (Auskunft, Berichtigung,
            Löschung etc.) wenden Sie sich bitte an{" "}
            <a href="mailto:info@katharis.de" className="underline">info@katharis.de</a>.
            Wir antworten innerhalb von 30 Tagen.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="font-bold text-xl mb-3" style={{ opacity: 1 }}>
            4. Ihre Rechte
          </h2>
          <p className="mb-3">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
            auf:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong style={{ opacity: 1 }}>Auskunft</strong> über Ihre bei uns gespeicherten
              personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Verarbeitung
              (Art. 15 DSGVO).
            </li>
            <li>
              <strong style={{ opacity: 1 }}>Berichtigung</strong> unrichtiger oder
              unvollständiger personenbezogener Daten (Art. 16 DSGVO).
            </li>
            <li>
              <strong style={{ opacity: 1 }}>Löschung</strong> Ihrer bei uns gespeicherten
              Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen
              (Art. 17 DSGVO).
            </li>
            <li>
              <strong style={{ opacity: 1 }}>Einschränkung der Verarbeitung</strong>
              {" "}Ihrer personenbezogenen Daten (Art. 18 DSGVO).
            </li>
            <li>
              <strong style={{ opacity: 1 }}>Datenübertragbarkeit</strong> – Sie haben das
              Recht, die Sie betreffenden Daten in einem strukturierten, gängigen und
              maschinenlesbaren Format zu erhalten (Art. 20 DSGVO).
            </li>
            <li>
              <strong style={{ opacity: 1 }}>Widerruf einer erteilten Einwilligung</strong>
              {" "}mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).
            </li>
            <li>
              <strong style={{ opacity: 1 }}>Widerspruch</strong> gegen die Verarbeitung
              Ihrer Daten, soweit diese auf berechtigtem Interesse beruht (Art. 21 DSGVO).
            </li>
            <li>
              <strong style={{ opacity: 1 }}>Beschwerde bei einer Aufsichtsbehörde</strong>
              {" "}(Art. 77 DSGVO). Zuständig ist in der Regel die Aufsichtsbehörde Ihres
              Wohnortes oder unseres Firmensitzes.
            </li>
          </ul>
          <p>
            Zur Wahrnehmung Ihrer Rechte sowie bei sonstigen Fragen zum Thema Datenschutz
            können Sie sich jederzeit unter der oben angegebenen Adresse oder per E-Mail
            an{" "}
            <a href="mailto:info@katharis.de" className="underline font-semibold" style={{ opacity: 1 }}>
              info@katharis.de
            </a>{" "}
            an uns wenden.
          </p>
        </section>

      </div>
    </div>
  );
}
