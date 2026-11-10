import Link from "next/link";
import { StaticImage } from "@/components/ui/StaticImage";

/** Optimized copies of the original artwork; CSS frames the white margins. */
export function BrandSymbol({ className = "" }: { className?: string }) {
  return <span className={`official-symbol ${className}`} aria-hidden="true"><StaticImage src="/images/brand/symbol-color.webp" width={360} height={360} alt="" /></span>;
}

export function Logo({ compact = false, href = "/", label = "BragaCode — página inicial" }: { compact?: boolean; href?: string; label?: string }) {
  return <Link className="brand-mark" href={href} aria-label={label}>
    <BrandSymbol />
    {!compact && <span className="official-wordmark" aria-hidden="true"><StaticImage src="/images/brand/logo-color.webp" width={560} height={420} alt="" /></span>}
  </Link>;
}
