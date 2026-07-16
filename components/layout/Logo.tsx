import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-mark" href="/" aria-label="BragaCode — página inicial">
      <span className="brand-symbol" aria-hidden="true">
        <span>B</span>
        <i />
      </span>
      {!compact && (
        <span className="brand-word">
          Braga<span>Code</span>
        </span>
      )}
    </Link>
  );
}
