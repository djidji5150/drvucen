type Props = {
  seed: string;
  label?: string;
  className?: string;
};

function tone(seed: string) {
  let h = 0;
  for (const ch of seed) h = (h * 33 + ch.charCodeAt(0)) >>> 0;
  return h % 6;
}

export function MediaPlaceholder({ seed, label, className = "" }: Props) {
  return (
    <div
      className={`placeholder tone-${tone(seed)} w-full ${className}`}
      aria-hidden={label ? undefined : true}
    >
      <span className="placeholder-orb" />
      <span className="placeholder-beam" />
      <span className="placeholder-grid" />
      {label ? <span className="placeholder-label">{label}</span> : null}
    </div>
  );
}
