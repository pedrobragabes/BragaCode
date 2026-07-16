import Link from "next/link";
import { company } from "@/content/company";
import { whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";

const pages = [
  ["Serviços", "/servicos"],
  ["Projetos", "/projetos"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Logo />
          <p>{company.positioning}</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Navegação</p>
            {pages.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">Contato</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={whatsappUrl("o rodapé")} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={company.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} BragaCode. Fundada por Pedro Braga.</p>
        <div>
          <Link href="/politica-de-privacidade">Privacidade</Link>
          <Link href="/termos-de-uso">Termos</Link>
        </div>
      </div>
    </footer>
  );
}
