import Link from "next/link";
import { StaticImage } from "@/components/ui/StaticImage";

/** Original artwork is preserved; CSS only frames its white margins. */
export function BrandSymbol({ className = "" }: { className?: string }) {
  return <span className={`official-symbol ${className}`} aria-hidden="true"><StaticImage src="/images/brand/symbol-color.png" width={1254} height={1254} alt="" /></span>;
}

export function Logo({ compact = false, href = "/", label = "BragaCode — página inicial" }: { compact?: boolean; href?: string; label?: string }) {
  return <Link className="brand-mark" href={href} aria-label={label}>
    <BrandSymbol />
    {!compact && <span className="official-wordmark" aria-hidden="true"><StaticImage src="/images/brand/logo-color.png" width={1448} height={1086} alt="" /></span>}
  </Link>;
}
