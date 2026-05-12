import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { pushEvent, getCurrentPage } from '@lib/tracking';

export default function LeadFormModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [sourceCta, setSourceCta] = useState('rueckruf');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setSourceCta(detail?.sourceCta ?? 'rueckruf');
      setOpen(true);
      setSuccess(false);
      setError('');
    };
    document.addEventListener('open-lead-form-modal', onOpen);
    return () => document.removeEventListener('open-lead-form-modal', onOpen);
  }, []);

  // Scroll-Lock + Auto-Focus beim Oeffnen
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTarget = success ? closeButtonRef.current : nameInputRef.current;
    focusTarget?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open, success]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setSubmitting(true);
    setError('');

    try {
      const gclid = readCookie('__gclid');
      const wbraid = readCookie('__wbraid');

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          source_cta: sourceCta,
          source_page: window.location.pathname,
          gclid,
          wbraid,
          honeypot,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Anfrage konnte nicht gesendet werden.');
      }

      setSuccess(true);
      setName('');
      setPhone('');

      pushEvent({ event: 'form_submit_success', source_cta: sourceCta, source_page: getCurrentPage() });
    } catch (err) {
      const message = (err as Error).message || 'Unbekannter Fehler';
      setError(message);
      pushEvent({
        event: 'form_submit_error',
        source_cta: sourceCta,
        source_page: getCurrentPage(),
        error: message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  function readCookie(name: string): string | undefined {
    if (typeof document === 'undefined') return undefined;
    const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[2]) : undefined;
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
    >
      <div
        className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
          aria-label="Schließen"
        >
          <X size={24} aria-hidden="true" />
        </button>

        {success ? (
          <div className="py-8 text-center">
            <h2 id="lead-form-title" className="text-2xl font-bold text-primary">
              Danke für Ihre Anfrage!
            </h2>
            <p className="mt-3 text-primary/80">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            <p className="text-sm mt-3 text-primary/80">
              Bei akuter Eile rufen Sie uns gerne direkt an: 07031/6953604
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-full font-bold"
            >
              Schließen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 id="lead-form-title" className="text-2xl font-bold text-primary">
              Rückruf anfordern
            </h2>
            <p className="text-sm text-primary/70">Wir rufen Sie kostenlos zurück.</p>

            <div>
              <label htmlFor="lead-name" className="block text-sm font-medium text-primary">
                Name <span aria-label="Pflichtfeld">*</span>
              </label>
              <input
                ref={nameInputRef}
                id="lead-name"
                type="text"
                required
                maxLength={200}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="lead-phone" className="block text-sm font-medium text-primary">
                Telefonnummer <span aria-label="Pflichtfeld">*</span>
              </label>
              <input
                id="lead-phone"
                type="tel"
                required
                minLength={5}
                maxLength={30}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="z. B. 0711 1234567"
              />
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
              aria-hidden="true"
            />

            <p className="text-xs text-primary/80">
              Mit Absenden bestätigen Sie, dass Katharis Ihre Angaben (Name, Telefonnummer) zur
              Bearbeitung Ihrer Rückruf-Anfrage verarbeiten darf. Speicherdauer 6 Monate. Mehr in der{' '}
              <a href="/datenschutz/" className="underline">
                Datenschutzerklärung
              </a>
              .
            </p>

            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-accent-dark text-white font-bold rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Wird gesendet…' : 'Rückruf anfordern'}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}
