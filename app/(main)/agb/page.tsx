import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen | Katharis",
  description: "Allgemeine Geschäftsbedingungen der Katharis GbR für Entrümpelung, Haushaltsauflösung und Spezialreinigung.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "§ 1 Geltungsbereich & Vertragsschluss",
    content: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen Katharis GbR (nachfolgend „Auftragnehmer") und dem Auftraggeber über die Erbringung von Dienstleistungen im Bereich Entrümpelung, Haushaltsauflösung, Messie-Räumung und Spezialreinigung (nachfolgend „Leistungen") geschlossen werden.

Ein Vertrag kommt durch schriftliche oder mündliche Auftragserteilung des Auftraggebers und die Annahme durch den Auftragnehmer zustande. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt diesen ausdrücklich schriftlich zu.`,
  },
  {
    title: "§ 2 Leistungsumfang",
    content: `Der genaue Leistungsumfang ergibt sich aus dem vor Auftragsbeginn erstellten Kostenvoranschlag sowie der mündlichen oder schriftlichen Auftragsbestätigung. Zu den angebotenen Leistungen zählen insbesondere:

• Entrümpelung und Haushaltsauflösung
• Messie-Räumungen und begleitete Sanierung
• Intensiv- und Spezialreinigung
• Entsorgung und umweltgerechte Verwertung von Räumungsgut
• Unterstützung bei der Antragstellung zur Kostenübernahme durch Pflegekassen

Zusätzliche Leistungen, die erst während der Ausführung erkennbar oder vereinbart werden, werden gesondert in Rechnung gestellt.`,
  },
  {
    title: "§ 3 Preise & Kalkulation",
    content: `Alle Preisangaben basieren auf einem unverbindlichen Kostenvoranschlag, der auf Grundlage einer Vor-Ort-Besichtigung oder der Angaben des Auftraggebers erstellt wird. Eine Festpreisgarantie wird ausdrücklich nicht übernommen.

Die Abrechnung erfolgt transparent nach dem tatsächlichen Arbeitsaufwand (Stunden, Anzahl der Mitarbeiter), dem tatsächlichen Entsorgungsvolumen sowie anfallenden Sonderentsorgungskosten für meldepflichtige oder schwer entsorgbare Materialien.

Weicht der tatsächliche Aufwand durch unvorhergesehene Umstände (z. B. versteckte Gegenstände, Sondermüll, erschwerte Zugänglichkeit) um mehr als 15 % vom Kostenvoranschlag ab, informiert der Auftragnehmer den Auftraggeber unverzüglich. In diesem Fall kann der Auftraggeber den Auftrag schriftlich widerrufen oder der Mehrleistung zustimmen.`,
  },
  {
    title: "§ 4 Abrechnung mit Kostenträgern (Pflegekassen)",
    content: `Der Auftragnehmer unterstützt den Auftraggeber auf Wunsch bei der Beantragung einer Kostenübernahme durch Pflegekassen oder andere Kostenträger gemäß den geltenden gesetzlichen Regelungen (SGB XI u. a.).

Unabhängig vom Ausgang des Antragsverfahrens bleibt der Auftraggeber vollständig zahlungspflichtig für die erbrachten Leistungen. Lehnt der Kostenträger die Übernahme ganz oder teilweise ab – aus welchem Grund auch immer – ist der Auftraggeber verpflichtet, den offenen Betrag innerhalb von 14 Tagen nach Rechnungsstellung direkt an den Auftragnehmer zu bezahlen.

Der Auftragnehmer übernimmt keine Haftung für den Ausgang von Antragsverfahren bei Kostenträgern.`,
  },
  {
    title: "§ 5 Mitwirkungspflicht des Auftraggebers",
    content: `Der Auftraggeber ist verpflichtet, den Auftragnehmer vor Beginn der Arbeiten unaufgefordert und vollständig über alle Umstände zu informieren, die die Leistungserbringung beeinflussen können. Hierzu zählen insbesondere:

• Das Vorhandensein von Gefahrstoffen, Asbest, Schimmel, Schädlingsbefall oder anderen meldepflichtigen Materialien
• Schwer zugängliche Bereiche (z. B. enge Treppenhäuser, fehlende Aufzüge)
• Wertgegenstände oder persönliche Dokumente, die gesichert werden sollen
• Besondere Sperrfristen oder Hausordnungen des Gebäudes

Unterlässt der Auftraggeber eine erforderliche Mitteilung, trägt er die daraus entstehenden Mehrkosten (z. B. Sonderentsorgung, Verzögerungen) selbst. Der Auftragnehmer behält sich in diesem Fall vor, die Arbeiten zu unterbrechen oder den Auftrag zu kündigen.`,
  },
  {
    title: "§ 6 Haftungsausschluss für verdeckte Vorschäden",
    content: `Der Auftragnehmer haftet nicht für Schäden an Böden, Wänden, Decken, Leitungen oder sonstigen Bauteilen, die zum Zeitpunkt der Räumung bereits vorhanden, jedoch durch Gegenstände, Möbel oder Ablagerungen verdeckt waren und erst im Zuge der Räumung sichtbar werden.

Der Auftraggeber erkennt an, dass der Zustand von verdeckten Flächen vor Beginn der Arbeiten nicht zuverlässig beurteilt werden kann. Etwaige Schäden, die nachweislich durch die Arbeiten des Auftragnehmers verursacht wurden, werden nach Maßgabe der abgeschlossenen Betriebshaftpflichtversicherung reguliert.`,
  },
  {
    title: "§ 7 Gefahrgut & Wertsachen",
    content: `Werden während der Räumung unerwartet Wertsachen (z. B. Bargeld, Schmuck, Dokumente) aufgefunden, werden diese dem Auftraggeber oder – sofern nicht erreichbar – der zuständigen Behörde übergeben. Der Auftragnehmer ist nicht verpflichtet, Wertsachen zu verwahren.

Bei unerwartetem Auffinden von Gefahrstoffen, Sondermüll oder meldepflichtigen Materialien behält sich der Auftragnehmer das Recht vor, die Arbeiten sofort zu unterbrechen. Die Entsorgung erfolgt ausschließlich durch zugelassene Fachbetriebe auf Kosten des Auftraggebers. Die bis zur Unterbrechung erbrachten Leistungen werden vollständig in Rechnung gestellt.`,
  },
  {
    title: "§ 8 Zahlung & Fälligkeit",
    content: `Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen, sofern keine abweichende Vereinbarung getroffen wurde. Im Falle eines Zahlungsverzuges behält sich der Auftragnehmer das Recht vor, Zahlungserinnerungen und Mahnungen zu versenden.

Der Auftragnehmer behält sich vor, bei größeren Aufträgen eine angemessene Anzahlung zu verlangen.`,
  },
  {
    title: "§ 9 Datenschutz",
    content: `Die im Rahmen der Auftragsabwicklung erhobenen personenbezogenen Daten werden ausschließlich zur Vertragserfüllung verwendet und nicht ohne Einwilligung an Dritte weitergegeben. Näheres regelt unsere Datenschutzerklärung, die auf unserer Website abrufbar ist.`,
  },
  {
    title: "§ 10 Salvatorische Klausel & Gerichtsstand",
    content: `Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, berührt dies die Gültigkeit der übrigen Bestimmungen nicht. Anstelle der unwirksamen Bestimmung gilt die gesetzlich zulässige Regelung, die dem wirtschaftlichen Zweck am nächsten kommt.

Gerichtsstand ist Böblingen, sofern der Auftraggeber Kaufmann ist oder keinen allgemeinen Gerichtsstand in Deutschland hat. Es gilt das Recht der Bundesrepublik Deutschland.`,
  },
];

export default function AgbPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#1A3C34" }}>
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="text-sm mb-10" style={{ color: "#1A3C34", opacity: 0.6 }}>
        Katharis GbR · Olgastraße 8 · 71032 Böblingen · Stand: 2026
      </p>

      <div className="space-y-10 text-base leading-relaxed" style={{ color: "#1A3C34", opacity: 0.85 }}>
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-bold text-lg mb-3" style={{ opacity: 1 }}>
              {s.title}
            </h2>
            {s.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-3 whitespace-pre-line">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
