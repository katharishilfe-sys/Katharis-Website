import { Fragment, useEffect, useMemo, useState } from 'react';

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

const ALL_STATUSES = ['neu', 'angerufen', 'termin', 'auftrag', 'abgeschlossen', 'abgesagt'];

type DateFilter = 'all' | '7d' | '30d';

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

function csvEscape(value: string | null): string {
  if (value === null || value === undefined) return '';
  const needsQuote = /[",\n]/.test(value);
  const escaped = value.replace(/"/g, '""');
  return needsQuote ? `"${escaped}"` : escaped;
}

function leadsToCsv(leads: Lead[]): string {
  const header = [
    'created_at',
    'name',
    'phone',
    'status',
    'source_cta',
    'source_page',
    'gclid',
    'wbraid',
    'notes',
  ].join(',');
  const rows = leads.map((l) =>
    [
      l.created_at,
      l.name,
      l.phone,
      l.status,
      l.source_cta,
      l.source_page,
      l.gclid ?? '',
      l.wbraid ?? '',
      l.notes ?? '',
    ]
      .map(csvEscape)
      .join(','),
  );
  return [header, ...rows].join('\n');
}

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<DateFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [notesDraft, setNotesDraft] = useState('');

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

  async function updateLeadField(id: string, body: Record<string, unknown>): Promise<boolean> {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('katharis_admin_token') : null;
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (stored) headers['Authorization'] = `Bearer ${stored}`;

    const res = await fetch(`/api/leads/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(body),
    });
    return res.ok;
  }

  async function updateLeadStatus(id: string, status: string) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    const ok = await updateLeadField(id, { status });
    if (!ok) {
      alert('Status-Update fehlgeschlagen, lade Liste neu');
      void loadLeads();
    }
  }

  async function saveNotes(id: string) {
    const ok = await updateLeadField(id, { notes: notesDraft });
    if (ok) {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, notes: notesDraft } : l)));
      setExpandedId(null);
    } else {
      alert('Notiz speichern fehlgeschlagen');
    }
  }

  function startEditNotes(lead: Lead) {
    setNotesDraft(lead.notes ?? '');
    setExpandedId(lead.id);
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

  const filteredLeads = useMemo(() => {
    const now = Date.now();
    const cutoff =
      dateFilter === '7d' ? now - 7 * 24 * 60 * 60 * 1000 :
      dateFilter === '30d' ? now - 30 * 24 * 60 * 60 * 1000 :
      0;
    const q = searchQuery.trim().toLowerCase();

    return leads.filter((l) => {
      if (statusFilter !== 'all' && l.status !== statusFilter) return false;
      if (cutoff && new Date(l.created_at).getTime() < cutoff) return false;
      if (q) {
        const hay = `${l.name} ${l.phone} ${l.source_cta} ${l.source_page} ${l.notes ?? ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [leads, statusFilter, dateFilter, searchQuery]);

  function downloadCsv() {
    const csv = leadsToCsv(filteredLeads);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `katharis-leads-${stamp}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

  const statusCounts = ALL_STATUSES.reduce<Record<string, number>>((acc, s) => {
    acc[s] = leads.filter((l) => l.status === s).length;
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 items-end justify-between">
        <div className="flex flex-wrap gap-3">
          <div>
            <label htmlFor="lead-search" className="block text-xs font-bold text-primary/70 mb-1">
              Suche
            </label>
            <input
              id="lead-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Name, Telefon, Notiz…"
              className="text-sm px-3 py-1.5 border border-primary/20 rounded-lg w-56"
            />
          </div>
          <div>
            <label htmlFor="lead-status-filter" className="block text-xs font-bold text-primary/70 mb-1">
              Status
            </label>
            <select
              id="lead-status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-sm px-3 py-1.5 border border-primary/20 rounded-lg bg-white"
            >
              <option value="all">alle ({leads.length})</option>
              {ALL_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s} ({statusCounts[s]})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="lead-date-filter" className="block text-xs font-bold text-primary/70 mb-1">
              Zeitraum
            </label>
            <select
              id="lead-date-filter"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value as DateFilter)}
              className="text-sm px-3 py-1.5 border border-primary/20 rounded-lg bg-white"
            >
              <option value="all">alle</option>
              <option value="7d">letzte 7 Tage</option>
              <option value="30d">letzte 30 Tage</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={downloadCsv}
            disabled={filteredLeads.length === 0}
            className="text-xs px-3 py-1.5 bg-primary text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            CSV-Export ({filteredLeads.length})
          </button>
          <button
            onClick={cleanupTestData}
            className="text-xs px-3 py-1.5 bg-white border border-primary/20 rounded-full text-primary/80 hover:bg-primary/5"
          >
            Test-Daten loeschen
          </button>
        </div>
      </div>

      {filteredLeads.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm">
          {leads.length === 0
            ? 'Noch keine Leads in der Datenbank. Sobald über das Form auf der Site Anfragen kommen, erscheinen sie hier.'
            : 'Keine Leads entsprechen den aktuellen Filtern.'}
        </div>
      ) : (
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
                <th className="px-3 py-2 font-bold text-primary">Notiz</th>
                <th className="px-3 py-2 font-bold text-primary">Tracking</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <Fragment key={lead.id}>
                  <tr className="border-t border-primary/10 hover:bg-primary/5">
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
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full font-bold border-0 cursor-pointer ${
                          STATUS_COLORS[lead.status] || 'bg-gray-100 text-gray-700'
                        }`}
                        aria-label={`Status fuer ${lead.name}`}
                      >
                        {ALL_STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-3 py-2 text-xs text-primary/80 max-w-xs">
                      <button
                        onClick={() => (expandedId === lead.id ? setExpandedId(null) : startEditNotes(lead))}
                        className="text-left hover:underline truncate block max-w-[180px]"
                        title={lead.notes ?? ''}
                      >
                        {lead.notes ? lead.notes.slice(0, 30) + (lead.notes.length > 30 ? '…' : '') : '+ Notiz'}
                      </button>
                    </td>
                    <td className="px-3 py-2 text-xs text-primary/80 font-mono">
                      {lead.gclid && <div title={lead.gclid}>gclid: {lead.gclid.slice(0, 8)}…</div>}
                      {lead.wbraid && <div title={lead.wbraid}>wbraid: {lead.wbraid.slice(0, 8)}…</div>}
                      {!lead.gclid && !lead.wbraid && <span>-</span>}
                    </td>
                  </tr>
                  {expandedId === lead.id && (
                    <tr className="bg-primary/5">
                      <td colSpan={8} className="px-3 py-3">
                        <label htmlFor={`notes-${lead.id}`} className="block text-xs font-bold text-primary/70 mb-1">
                          Notiz fuer {lead.name}
                        </label>
                        <textarea
                          id={`notes-${lead.id}`}
                          value={notesDraft}
                          onChange={(e) => setNotesDraft(e.target.value)}
                          rows={3}
                          maxLength={5000}
                          className="w-full text-sm px-3 py-2 border border-primary/20 rounded-lg"
                          placeholder="Gespräch, Terminvereinbarung, Hinweise…"
                        />
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => saveNotes(lead.id)}
                            className="text-xs px-3 py-1.5 bg-primary text-white rounded-full hover:opacity-90"
                          >
                            Speichern
                          </button>
                          <button
                            onClick={() => setExpandedId(null)}
                            className="text-xs px-3 py-1.5 bg-white border border-primary/20 rounded-full text-primary/80"
                          >
                            Abbrechen
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
