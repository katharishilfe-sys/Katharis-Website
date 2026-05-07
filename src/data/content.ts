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
    operativeZentrale: { strasse: 'Olgastraße 8', plz: '71032', ort: 'Boeblingen' },
    rechtlicherSitz: { strasse: 'Mittenfeldstraße 87', plz: '70499', ort: 'Stuttgart' },
  },
};

export const traeger = {
  firma: 'Cleanit Services LLC',
  rechtsform: 'US-LLC (Wyoming) mit deutscher Zweigniederlassung',
  geschaeftsfuehrung: 'Maxim Altenhof, Managing Member',
  steuernummer: '99026/19886',
  vIsdP: 'Maxim Altenhof',
  aufsichtsbehoerde: 'Untere Sozialverwaltung Baden-Wuerttemberg (USTA-BW)',
  para45aGeltungsbereich: ['Stadt Stuttgart', 'Landkreis Boeblingen'],
  versicherung: 'Versichert 3 Mio Euro Sach- und Personenschaeden ohne Selbstbeteiligung',
};

export const hooks = {
  master: 'Bis zu 100 % Kostenuebernahme durch Ihre Pflegekasse moeglich.',
  masterMitDisclaimerVerschaerft:
    'Bis zu 100 % Kostenuebernahme moeglich, abhaengig von Pflegegrad, Topf-Verfuegbarkeit und Pflegekassen-Entscheidung. Keine Garantie.',
  backupB: 'Kostenloses Erstgespraech zu Pflegekassen-Leistungen.',
  sekundaer:
    'Noch kein Pflegegrad? Wir helfen beim Antrag. Bei Bewilligung kann die Pflegekasse Ihre Kosten ab Antragsdatum erstatten.',
  geltungsbereich: 'Anerkannt fuer Stadt Stuttgart und Landkreis Boeblingen.',
};

export const hookConfig = {
  primaryHook: 'master' as 'master' | 'masterMitDisclaimerVerschaerft' | 'backupB',
};

export const initiatoren = [
  {
    name: 'Daniel Altenhof',
    rolle: 'Initiator und operativer Leiter',
    foto: '/daniel.jpg',
    bio: 'Daniel ist seit 2024 das organisatorische Herz von Katharis. Er fuehrt die Erstgespraeche, koordiniert Vor-Ort-Termine, klaert die Pflegekassen-Direktabrechnung mit den Klienten.',
  },
  {
    name: 'Kemal David Guelcue',
    rolle: 'Initiator und operativer Leiter',
    foto: '/kemal.jpg',
    bio: 'Kemal verantwortet die operative Vor-Ort-Arbeit. Er ist erste Ansprechperson am Termin, koordiniert das Spezialisten-Team, sichert Wuerdigungs- und Diskretions-Standards.',
  },
];

export const services = {
  messieHilfe: {
    slug: '/service/messie-hilfe/',
    title: 'Messie-Hilfe in Stuttgart und Landkreis Boeblingen',
    metaTitle: 'Messie-Hilfe Stuttgart - Pflegekasse zahlt | Katharis',
    metaDescription:
      'Spezialist fuer Messie-Hilfe und Verwahrlosung in Stuttgart und LK Boeblingen. Anerkannt nach Para 45a SGB XI. Bis zu 100 Prozent Kostenuebernahme moeglich. Diskret.',
    persona: 'A',
    primary: true,
    karteHeadline: 'Messie-Hilfe und Verwahrlosung',
    karteText:
      'Wenn die Wohnung von Mutter, Vater oder einer Person, die Sie pflegen, ueber lange Zeit auf der Strecke geblieben ist und Sie nicht wissen, wo anfangen. Wir uebernehmen Sortierung, Tiefenreinigung, Vermieter-Uebergabe. Diskret und ohne Wertung.',
  },
  vorDemHeimumzug: {
    slug: '/service/vor-dem-heimumzug/',
    title: 'Vollraeumung vor dem Pflegeheim-Umzug',
    metaTitle: 'Vollraeumung vor Heimumzug Stuttgart - Pflegekasse zahlt | Katharis',
    metaDescription:
      'Vollraeumung mit Pflegekassen-Direktabrechnung in Stuttgart und LK Boeblingen. Vermieter-Uebergabe besenrein. Para 45a anerkannt. Erbstuecke werden gesichert.',
    persona: 'B',
    primary: false,
    karteHeadline: 'Vollraeumung vor dem Pflegeheim-Umzug',
    karteText:
      'Wenn die Eltern ins Pflegeheim ziehen und die Wohnung in wenigen Wochen leer und besenrein an den Vermieter zurueck soll. Wir koordinieren Sortierung, Vollraeumung, Erbstueck-Sicherung, Vermieter-Uebergabe. Mit Direkt-Abrechnung an die Pflegekasse bei vorhandenem Pflegegrad.',
  },
};

export const trustIndikatoren = {
  bilanzZahl: 73,
  bilanzText:
    'erfolgreich abgewickelte Faelle in Stadt Stuttgart und Landkreis Boeblingen, 2024 bis heute',
  team: 'Daniel Altenhof und Kemal David Guelcue als Initiatoren plus 6 Spezialisten im operativen Team',
};

export const pflegekassenToepfe = [
  {
    paragraph: 'Para 42a',
    title: 'Gemeinsamer Jahresbetrag',
    betrag: 'bis 3.539 Euro pro Jahr',
    wer: 'Pflegegrad 2 bis 5',
    description:
      'Wenn Pflegegrad 2 oder hoeher vorliegt, steht ein gemeinsamer Jahresbetrag von bis zu 3.539 Euro zur Verfuegung. Dieser Topf wurde mit dem Pflegeunterstuetzungs- und Entlastungsgesetz seit Juli 2025 eingefuehrt und kann flexibel eingesetzt werden.',
  },
  {
    paragraph: 'Para 45b',
    title: 'Entlastungsbetrag',
    betrag: '131 Euro pro Monat (1.572 Euro pro Jahr)',
    wer: 'Pflegegrad 1 bis 5',
    description:
      'Jeder Mensch mit Pflegegrad 1 bis 5 hat 131 Euro pro Monat Anspruch auf Entlastungsleistungen. Nicht abgerufene Betraege koennen bis zum 30. Juni des Folgejahres uebertragen werden, danach verfallen sie.',
  },
  {
    paragraph: 'Para 45a Abs. 4',
    title: 'Umwandlung von Pflegesachleistungen',
    betrag: 'bis 40 Prozent des Pflegesachleistungs-Budgets',
    wer: 'Pflegegrad 2 bis 5',
    description:
      'Bis zu 40 Prozent des monatlichen Pflegesachleistungs-Budgets koennen in Entlastungsleistungen umgewandelt werden. Bei Pflegegrad 4 oder 5 ein erheblicher zusaetzlicher Hebel.',
  },
  {
    paragraph: 'Para 40 Abs. 4',
    title: 'Wohnumfeldverbessernde Massnahmen (Sonderfall)',
    betrag: 'bis 4.180 Euro je Massnahme',
    wer: 'Pflegegrad 1 bis 5',
    description:
      'Wenn die Raeumung Voraussetzung fuer eine bauliche Massnahme ist, kann sie als Teil einer Wohnumfeldverbessernden Massnahme bezuschusst werden. Einzelfallbezogene Pflegekassen-Entscheidung.',
  },
];

export const standorte = [
  { slug: '/standorte/stuttgart/', name: 'Stuttgart', noindex: false },
  { slug: '/standorte/boeblingen/', name: 'Boeblingen', noindex: false },
  { slug: '/standorte/sindelfingen/', name: 'Sindelfingen', noindex: true },
  { slug: '/standorte/leonberg/', name: 'Leonberg', noindex: true },
  { slug: '/standorte/herrenberg/', name: 'Herrenberg', noindex: true },
];
