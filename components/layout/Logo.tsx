import Link from "next/link";
import { StaticImage as Image } from "@/components/ui/StaticImage";

export function Logo({ compact = false, href = "/", label = "BragaCode — página inicial" }: { compact?: boolean; href?: string; label?: string }) {
  const asset = compact ? "symbol" : "horizontal";
  return <Link className="brand-mark" href={href} aria-label={label}>
    <Image className="brand-logo brand-logo-color" src={`/brand/${asset}.svg`} alt="" width={compact ? 120 : 386} height={76} priority />
    <Image className="brand-logo brand-logo-negative" src={`/brand/${asset}-white.svg`} alt="" width={compact ? 120 : 386} height={76} priority />
  </Link>;
}
