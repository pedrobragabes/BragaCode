"use client";

import { usePathname } from "next/navigation";

export function SkipLink() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  return <a className="skip-link" href="#conteudo">{isEnglish ? "Skip to content" : "Pular para o conteúdo"}</a>;
}
