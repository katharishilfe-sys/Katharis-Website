import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { pushEvent, getCurrentPage } from '@lib/tracking';

interface Props {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  label?: string;
}

const DEFAULT_NUMBER = '07031/6953604';
const DEFAULT_HREF = '07031-6953604';

export default function CallCTA({ variant = 'primary', fullWidth = false, label = 'Jetzt anrufen' }: Props) {
  const [trackingNumber, setTrackingNumber] = useState(DEFAULT_NUMBER);
  const [trackingHref, setTrackingHref] = useState(DEFAULT_HREF);

  useEffect(() => {
    // Matelso-Tracking-Nummer-Lookup (Etappe 6 mit echten Pool-Nummern)
    // Aktuell: Default-Nummer fuer alle Pages
    const pathname = window.location.pathname;
    // TODO Etappe 6: Map pathname -> Matelso-Pool-Nummer
    void pathname;
  }, []);

  const handleClick = () => {
    pushEvent({ event: 'call_initiated', source_cta: 'anruf', source_page: getCurrentPage() });
  };

  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-opacity hover:opacity-90';
  const variantClasses = variant === 'primary'
    ? 'bg-accent-dark text-white text-base'
    : 'bg-primary text-white text-base';
  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <a
      href={`tel:${trackingHref}`}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${widthClasses}`}
      data-cta="anruf"
      aria-label={`${label}: ${trackingNumber}`}
    >
      <Phone size={20} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
