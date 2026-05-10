import { useEffect, useState } from 'react';

interface Lead {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  source_cta: string;
  source_page: string;
  gclid: string | null;
  wbraid: string | null;
  status: string;
  notes: string | null;
}

const STATUS_COLORS: Record<string, string> = {
  neu: 'bg-blue-100 text-blue-800',
  angerufen: 'bg-yellow-100 text-yellow-800',
  termin: 'bg-purple-100 text-purple-800',
  auftrag: 'bg-green-100 text-green-800',
  abgeschlossen: 'bg-gray-200 text-gray-700',
  abgesagt: 'bg-red-100 text-red-800',
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void loadLeads();
  }, []);

  async function loadLeads(retry = false) {
    setLoading(true);
    setError(null);
    try {
      const headers: Record<string, string> = {};
      const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('katharis_admin_token') : null;
      if (stored) headers['Authorization'] = `Bearer ${stored}`;

      const res = await fetch('/api/leads', { headers });
      if (res.status === 401) {
        if (typeof localStorage !== 'undefined') localStorage.removeItem('katharis_admin_token');
        const token = typeof window !== 'undefined' ? window.prompt('Admin-Token erforderlich:') : null;
        if (token) {
          localStorage.setItem('katharis_admin_token', token);
          if (!retry) return loadLeads(true);
        }
        throw new Error('Authentifizierung erforderlich');
      }
      const data = (await res.json()) as { success: boolean; data?: Lead[]; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Anfrage fehlgeschlagen');
      }
      setLeads(data.data || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function cleanupTestData() {
    if (!confirm('Alle Lead-Zeilen mit Namen TEST/WAIT-TEST/FINAL-TEST/etc. unwiderruflich loeschen?')) return;
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('katharis_admin_token') : null;
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (stored) headers['Authorization'] = `Bearer ${stored}`;

    const res = await fetch('/api/leads/cleanup-test-data', { method: 'POST', headers });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean; deleted?: number; error?: string };
    if (!res.ok || !data.success) {
      alert('Cleanup fehlgeschlagen: ' + (data.error || 'unbekannt'));
      return;
    }
    alert(`${data.deleted ?? 0} Test-Zeilen geloescht.`);
    void loadLeads();
  }

  if (loading) {
    return <p className="text-primary/80">Leads werden geladen…</p>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-800">
        <strong>Fehler:</strong> {error}
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm">
        Noch keine Leads in der Datenbank. Sobald über das Form auf der Site Anfragen kommen, erscheinen
        sie hier.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <button
          onClick={cleanupTestData}
          className="text-xs px-3 py-1.5 bg-white border border-primary/20 rounded-full text-primary/80 hover:bg-primary/5"
        >
          Test-Daten loeschen
        </button>
      </div>
    <div className="overflow-x-auto bg-white rounded-lg border border-primary/15 shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-primary/5 text-left">
          <tr>
            <th className="px-3 py-2 font-bold text-primary">Datum</th>
            <th className="px-3 py-2 font-bold text-primary">Name</th>
            <th className="px-3 py-2 font-bold text-primary">Telefon</th>
            <th className="px-3 py-2 font-bold text-primary">CTA</th>
            <th className="px-3 py-2 font-bold text-primary">Page</th>
            <th className="px-3 py-2 font-bold text-primary">Status</th>
            <th className="px-3 py-2 font-bold text-primary">Tracking</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t border-primary/10 hover:bg-primary/5">
              <td className="px-3 py-2 text-primary/80 whitespace-nowrap">
                {formatDate(lead.created_at)}
              </td>
              <td className="px-3 py-2 text-primary font-medium">{lead.name}</td>
              <td className="px-3 py-2 text-primary/80">
                <a href={`tel:${lead.phone.replace(/\s/g, '')}`} className="underline">
                  {lead.phone}
                </a>
              </td>
              <td className="px-3 py-2 text-primary/70">{lead.source_cta}</td>
              <td className="px-3 py-2 text-primary/70 font-mono text-xs">{lead.source_page}</td>
              <td className="px-3 py-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-bold ${
                    STATUS_COLORS[lead.status] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="px-3 py-2 text-xs text-primary/80 font-mono">
                {lead.gclid && <div title={lead.gclid}>gclid: {lead.gclid.slice(0, 8)}…</div>}
                {lead.wbraid && <div title={lead.wbraid}>wbraid: {lead.wbraid.slice(0, 8)}…</div>}
                {!lead.gclid && !lead.wbraid && <span>-</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
