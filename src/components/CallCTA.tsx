import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { pushEvent, getCurrentPage } from '@lib/tracking';
import { DEFAULT_NUMBER_DISPLAY, DEFAULT_NUMBER_HREF, resolveMatelsoNumber } from '@lib/matelso-pool';

interface Props {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  label?: string;
}

export default function CallCTA({ variant = 'primary', fullWidth = false, label = 'Jetzt anrufen' }: Props) {
  const [trackingNumber, setTrackingNumber] = useState(DEFAULT_NUMBER_DISPLAY);
  const [trackingHref, setTrackingHref] = useState(DEFAULT_NUMBER_HREF);
  const [trackingLabel, setTrackingLabel] = useState('default');

  useEffect(() => {
    const resolved = resolveMatelsoNumber(window.location.pathname);
    setTrackingNumber(resolved.display);
    setTrackingHref(resolved.href);
    setTrackingLabel(resolved.label);
  }, []);

  const handleClick = () => {
    pushEvent({
      event: 'call_initiated',
      source_cta: 'anruf',
      source_page: getCurrentPage(),
      matelso_pool: trackingLabel,
    });
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
