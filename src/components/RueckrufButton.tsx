interface Props {
  variant?: 'primary' | 'outline';
  label?: string;
  fullWidth?: boolean;
  sourceCta?: string;
}

export default function RueckrufButton({
  variant = 'outline',
  label = 'Rückruf anfordern',
  fullWidth = false,
  sourceCta = 'rueckruf-button',
}: Props) {
  const handleClick = () => {
    document.dispatchEvent(
      new CustomEvent('open-lead-form-modal', { detail: { sourceCta } }),
    );
  };

  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-colors';
  const variantClasses = variant === 'primary'
    ? 'bg-primary text-white hover:opacity-90'
    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white';
  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${widthClasses}`}
      data-cta="rueckruf"
    >
      {label}
    </button>
  );
}
