/**
 * Content-Daten + Brand-Tokens
 * CODEOWNERS: @maxim (Master Anhang B.1)
 *
 * Workshop-Decisions Daniel 2026-05-06/07 (alle 9 Decisions approved).
 */

export const kontakt = {
  telefon: '07031/6953604',
  telefonAnzeige: '07031/6953604',
  telefonHref: '07031-6953604',
  email: 'info@katharis.de',
  oeffnungszeiten: 'Mo-Sa 8 bis 20 Uhr',
  adresse: {
    operativeZentrale: { strasse: 'Olgastraße 8', plz: '71032', ort: 'Böblingen' },
    rechtlicherSitz: { strasse: 'Mittenfeldstraße 87', plz: '70499', ort: 'Stuttgart' },
  },
};

export const traeger = {
  firma: 'Cleanit Services LLC',
  rechtsform: 'US-LLC (Wyoming) mit deutscher Zweigniederlassung',
  geschaeftsfuehrung: 'Maxim Altenhof, Managing Member',
  steuernummer: '99026/19886',
  vIsdP: 'Maxim Altenhof',
  aufsichtsbehoerde: 'Untere Sozialverwaltung Baden-Württemberg (USTA-BW)',
  para45aGeltungsbereich: ['Stadt Stuttgart', 'Landkreis Böblingen'],
  versicherung: 'Versichert 3 Mio Euro Sach- und Personenschäden ohne Selbstbeteiligung',
};

export const hooks = {
  master: 'Bis zu 100 % Kostenübernahme durch Ihre Pflegekasse möglich.',
  masterMitDisclaimerVerschaerft:
    'Bis zu 100 % Kostenübernahme möglich, abhängig von Pflegegrad, Topf-Verfügbarkeit und Pflegekassen-Entscheidung. Keine Garantie.',
  backupB: 'Kostenloses Erstgespräch zu Pflegekassen-Leistungen.',
  sekundaer:
    'Noch kein Pflegegrad? Wir helfen beim Antrag. Bei Bewilligung kann die Pflegekasse Ihre Kosten ab Antragsdatum erstatten.',
  geltungsbereich: 'Anerkannt für Stadt Stuttgart und Landkreis Böblingen.',
};

export const hookConfig = {
  primaryHook: 'master' as 'master' | 'masterMitDisclaimerVerschaerft' | 'backupB',
};

export const initiatoren = [
  {
    name: 'Daniel Altenhof',
    rolle: 'Initiator und operativer Leiter',
    foto: '/daniel.jpg',
    bio: 'Daniel ist seit 2024 das organisatorische Herz von Katharis. Er führt die Erstgespräche, koordiniert Vor-Ort-Termine, klärt die Pflegekassen-Direktabrechnung mit den Klienten.',
  },
  {
    name: 'Kemal David Gülcü',
    rolle: 'Initiator und operativer Leiter',
    foto: '/kemal.jpg',
    bio: 'Kemal verantwortet die operative Vor-Ort-Arbeit. Er ist erste Ansprechperson am Termin, koordiniert das Spezialisten-Team, sichert Würdigungs- und Diskretions-Standards.',
  },
];

export const services = {
  messieHilfe: {
    slug: '/service/messie-hilfe/',
    title: 'Messie-Hilfe in Stuttgart und Landkreis Böblingen',
    metaTitle: 'Messie-Hilfe Stuttgart - Pflegekasse zahlt | Katharis',
    metaDescription:
      'Spezialist für Messie-Hilfe und Verwahrlosung in Stuttgart und LK Böblingen. Anerkannt nach Para 45a SGB XI. Bis zu 100 Prozent Kostenübernahme möglich. Diskret.',
    persona: 'A',
    primary: true,
    karteHeadline: 'Messie-Hilfe und Verwahrlosung',
    karteText:
      'Wenn die Wohnung von Mutter, Vater oder einer Person, die Sie pflegen, über lange Zeit auf der Strecke geblieben ist und Sie nicht wissen, wo anfangen. Wir übernehmen Sortierung, Tiefenreinigung, Vermieter-Übergabe. Diskret und ohne Wertung.',
  },
  vorDemHeimumzug: {
    slug: '/service/vor-dem-heimumzug/',
    title: 'Vollräumung vor dem Pflegeheim-Umzug',
    metaTitle: 'Vollräumung vor Heimumzug Stuttgart - Pflegekasse zahlt | Katharis',
    metaDescription:
      'Vollräumung mit Pflegekassen-Direktabrechnung in Stuttgart und LK Böblingen. Vermieter-Übergabe besenrein. Para 45a anerkannt. Erbstücke werden gesichert.',
    persona: 'B',
    primary: false,
    karteHeadline: 'Vollräumung vor dem Pflegeheim-Umzug',
    karteText:
      'Wenn die Eltern ins Pflegeheim ziehen und die Wohnung in wenigen Wochen leer und besenrein an den Vermieter zurück soll. Wir koordinieren Sortierung, Vollräumung, Erbstück-Sicherung, Vermieter-Übergabe. Mit Direkt-Abrechnung an die Pflegekasse bei vorhandenem Pflegegrad.',
  },
};

export const trustIndikatoren = {
  bilanzZahl: 73,
  bilanzText:
    'erfolgreich abgewickelte Fälle in Stadt Stuttgart und Landkreis Böblingen, 2024 bis heute',
  team: 'Daniel Altenhof und Kemal David Gülcü als Initiatoren plus 6 Spezialisten im operativen Team',
};

export const pflegekassenTöpfe = [
  {
    paragraph: 'Para 42a',
    title: 'Gemeinsamer Jahresbetrag',
    betrag: 'bis 3.539 Euro pro Jahr',
    wer: 'Pflegegrad 2 bis 5',
    description:
      'Wenn Pflegegrad 2 oder höher vorliegt, steht ein gemeinsamer Jahresbetrag von bis zu 3.539 Euro zur Verfügung. Dieser Topf wurde mit dem Pflegeunterstützungs- und Entlastungsgesetz seit Juli 2025 eingeführt und kann flexibel eingesetzt werden.',
  },
  {
    paragraph: 'Para 45b',
    title: 'Entlastungsbetrag',
    betrag: '131 Euro pro Monat',
    wer: 'Pflegegrad 1 bis 5',
    description:
      'Jeder Mensch mit Pflegegrad 1 bis 5 hat 131 Euro pro Monat Anspruch auf Entlastungsleistungen. Nicht abgerufene Beträge können bis zum 30. Juni des Folgejahres übertragen werden, danach verfallen sie.',
  },
  {
    paragraph: 'Para 45a Abs. 4',
    title: 'Umwandlung von Pflegesachleistungen',
    betrag: 'bis 40 Prozent des Pflegesachleistungs-Budgets',
    wer: 'Pflegegrad 2 bis 5',
    description:
      'Bis zu 40 Prozent des monatlichen Pflegesachleistungs-Budgets können in Entlastungsleistungen umgewandelt werden. Bei Pflegegrad 4 oder 5 ein erheblicher zusätzlicher Hebel.',
  },
  {
    paragraph: 'Para 40 Abs. 4',
    title: 'Wohnumfeldverbessernde Maßnahmen (Sonderfall)',
    betrag: 'bis 4.180 Euro je Maßnahme',
    wer: 'Pflegegrad 1 bis 5',
    description:
      'Wenn die Räumung Voraussetzung für eine bauliche Maßnahme ist, kann sie als Teil einer Wohnumfeldverbessernden Maßnahme bezuschusst werden. Einzelfallbezogene Pflegekassen-Entscheidung.',
  },
];

export const standorte = [
  { slug: '/standorte/stuttgart/', name: 'Stuttgart', noindex: false },
  { slug: '/standorte/boeblingen/', name: 'Böblingen', noindex: false },
  { slug: '/standorte/sindelfingen/', name: 'Sindelfingen', noindex: false },
  { slug: '/standorte/leonberg/', name: 'Leonberg', noindex: false },
  { slug: '/standorte/herrenberg/', name: 'Herrenberg', noindex: false },
];
