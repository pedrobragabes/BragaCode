import Link from "next/link";

export function Logo({ compact = false, href = "/", label = "BragaCode — página inicial" }: { compact?: boolean; href?: string; label?: string }) {
  return (
    <Link className="brand-mark" href={href} aria-label={label}>
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
