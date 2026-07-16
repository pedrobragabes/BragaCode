"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/content/company";
import { whatsappUrl, whatsappUrlEnglish } from "@/lib/site";
import { Logo } from "./Logo";

const pages = [
  ["Serviços", "/servicos"],
  ["Projetos", "/projetos"],
  ["Artigos", "/artigos"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
] as const;

const englishPages = [
  ["Services", "/en/services"],
  ["Projects", "/en/projects"],
  ["About", "/en/about"],
  ["Contact", "/en/contact"],
] as const;

export function SiteFooter() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const activePages = isEnglish ? englishPages : pages;

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Logo href={isEnglish ? "/en" : "/"} label={isEnglish ? "BragaCode — home page" : "BragaCode — página inicial"} />
          <p>{isEnglish ? "Software, e-commerce and automation for companies that want to grow without relying on manual processes." : company.positioning}</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">{isEnglish ? "Navigation" : "Navegação"}</p>
            {activePages.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">{isEnglish ? "Contact" : "Contato"}</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={isEnglish ? whatsappUrlEnglish("the website footer") : whatsappUrl("o rodapé")} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={company.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} BragaCode. {isEnglish ? "Founded by Pedro Braga." : "Fundada por Pedro Braga."}</p>
        <div>
          <Link href="/politica-de-privacidade">{isEnglish ? "Privacy (PT-BR)" : "Privacidade"}</Link>
          <Link href="/termos-de-uso">{isEnglish ? "Terms (PT-BR)" : "Termos"}</Link>
        </div>
      </div>
    </footer>
  );
}
