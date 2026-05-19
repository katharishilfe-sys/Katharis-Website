/**
 * Matelso-Pool-Reverse-Lookup für den Webhook-Endpoint.
 *
 * Spiegelbild von src/lib/matelso-pool.ts (Frontend-Lookup), nur in Reverse:
 * Pool-Nummer → wahrscheinliche Source-Page.
 *
 * Daniel pflegt nach Pool-Provisionierung die Mapping-Tabelle in BEIDEN Dateien.
 * (Bewusst dupliziert weil functions/ kein Bundle-Import aus src/ erlaubt.)
 */

interface PoolEntry {
  number: string;        // Internationales E.164-Format, wie Matelso sendet (z. B. "+497031...")
  pages: string[];        // Pages die mit dieser Nummer gerendert werden
  label: string;          // Funnel-Label für Lead-Tracking
}

// Pool-Default leer bis Daniel die Nummern eingetragen hat.
// Beispiel-Eintrag (auskommentiert) zeigt Form:
//
// { number: '+49703112345671', pages: ['/service/messie-hilfe/', '/ratgeber/messie-syndrom/'], label: 'messie-funnel' }
//
export const MATELSO_POOL_ENTRIES: PoolEntry[] = [
  // TODO Daniel: nach Pool-Provisionierung Einträge einfügen, siehe matelso-briefing.md §5
];

const DEFAULT_SOURCE_PAGE = '/?source=matelso-default-pool';

export function reverseLookupSourcePage(targetPhone: string): string {
  const normalized = normalizePhone(targetPhone);
  for (const entry of MATELSO_POOL_ENTRIES) {
    if (normalizePhone(entry.number) === normalized) {
      return entry.pages[0] || DEFAULT_SOURCE_PAGE;
    }
  }
  return DEFAULT_SOURCE_PAGE;
}

function normalizePhone(input: string): string {
  return input.replace(/[\s\-/()]/g, '').replace(/^00/, '+');
}
