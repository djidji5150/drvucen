type Props = {
  seed: string;
  label?: string;
  className?: string;
};

function tone(seed: string) {
  let h = 0;
  for (const ch of seed) h = (h * 33 + ch.charCodeAt(0)) >>> 0;
  return h % 4;
}

export function MediaPlaceholder({ seed, label, className = "" }: Props) {
  return (
    <div
      className={`placeholder tone-${tone(seed)} w-full ${className}`}
      aria-hidden={label ? undefined : true}
    >
      <span className="placeholder-lines" />
      <svg className="placeholder-mark" viewBox="0 0 72 72" fill="none">
        <rect x="14" y="18" width="44" height="36" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 46l12-12 8 8 8-10 16 14" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="30" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      {label ? <span className="placeholder-label">{label}</span> : null}
    </div>
  );
}
