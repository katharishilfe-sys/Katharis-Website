/**
 * Matelso-Pool-Frontend-Lookup (Dynamic Number Insertion).
 *
 * Map pathname → wahrscheinliche Pool-Nummer (Funnel-Attribution für GCLID).
 * Bei leerer Pool-Konfiguration oder unbekannter Page fällt der Lookup auf
 * `DEFAULT_NUMBER` zurück (Daniels Hauptnummer), sodass Click-to-Call
 * jederzeit funktioniert auch wenn Matelso-Pool noch nicht aktiv ist.
 *
 * Spiegelbild in functions/_lib/matelso-pool-server.ts (Reverse-Lookup für Webhook).
 * Beide Dateien gemeinsam pflegen nach Pool-Provisionierung.
 */

export const DEFAULT_NUMBER_DISPLAY = '07031/6953604';
export const DEFAULT_NUMBER_HREF = '07031-6953604';

interface PoolEntry {
  display: string;      // Anzeige-Format (DE-Stil mit Slash)
  href: string;         // Tel-Link-Format (Strich statt Slash, kein Leerzeichen)
  pages: string[];      // Pages die diese Nummer rendern
  label: string;        // Funnel-Label
}

// Pool-Default leer bis Daniel die Nummern eingetragen hat (siehe matelso-briefing.md §5).
//
// Beispiel-Eintrag (auskommentiert) zeigt Form:
//
// { display: '07031/1234567', href: '07031-1234567',
//   pages: ['/service/messie-hilfe/', '/ratgeber/messie-syndrom/'],
//   label: 'messie-funnel' }
//
export const MATELSO_POOL_ENTRIES: PoolEntry[] = [
  // TODO Daniel: nach Pool-Provisionierung Einträge einfügen
];

export interface ResolvedNumber {
  display: string;
  href: string;
  label: string;
}

const DEFAULT_RESOLVED: ResolvedNumber = {
  display: DEFAULT_NUMBER_DISPLAY,
  href: DEFAULT_NUMBER_HREF,
  label: 'default',
};

export function resolveMatelsoNumber(pathname: string): ResolvedNumber {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const entry of MATELSO_POOL_ENTRIES) {
    if (entry.pages.some((p) => p === normalized)) {
      return { display: entry.display, href: entry.href, label: entry.label };
    }
  }
  return DEFAULT_RESOLVED;
}
