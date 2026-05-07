import { useEffect, useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const DEFAULT_HREF = '07031-6953604';

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: 'call_initiated',
        source_page: window.location.pathname,
        source_cta: 'anruf-sticky',
      });
    }
  };

  const handleRueckruf = () => {
    document.dispatchEvent(
      new CustomEvent('open-lead-form-modal', { detail: { sourceCta: 'rueckruf-sticky' } }),
    );
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 grid grid-cols-2 shadow-lg"
      role="region"
      aria-label="Kontakt-Schnellzugriff"
    >
      <a
        href={`tel:${DEFAULT_HREF}`}
        onClick={handleCall}
        className="flex items-center justify-center gap-2 py-4 bg-accent-dark text-white font-bold"
        aria-label="Jetzt anrufen"
      >
        <Phone size={20} aria-hidden="true" />
        Anrufen
      </a>
      <button
        onClick={handleRueckruf}
        className="flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold"
        aria-label="Rückruf anfordern"
      >
        <MessageSquare size={20} aria-hidden="true" />
        Rückruf
      </button>
    </div>
  );
}
