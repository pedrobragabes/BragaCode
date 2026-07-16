import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container not-found-grid">
        <div><span className="error-code">404</span><p>ROTA NÃO ENCONTRADA / BRAGA OPS</p></div>
        <div><h1>Essa página não entrou <em>em produção.</em></h1><p>O endereço pode ter mudado ou nunca ter existido. Os projetos e serviços continuam disponíveis pelos caminhos abaixo.</p><div className="hero-actions"><Link className="button" href="/">Voltar para a Home ↗</Link><Link className="button button-secondary" href="/projetos">Ver projetos</Link></div><a className="text-link" href={whatsappUrl("a página 404")} target="_blank" rel="noreferrer">Ou avise pelo WhatsApp ↗</a></div>
      </div>
    </section>
  );
}
