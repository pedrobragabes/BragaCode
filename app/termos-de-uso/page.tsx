import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Termos de Uso",
  description: "Condições de uso do site institucional e portfólio comercial da BragaCode.",
  path: "/termos-de-uso",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal / Termos" title={<>Termos de <em>Uso.</em></>} description="Condições para consultar o conteúdo, entrar em contato e usar as informações deste site." aside={<p className="page-index">ATUALIZADOS EM 16 JUL 2026</p>} />
      <article className="section legal-page"><div className="container legal-grid">
        <aside><p>Navegação</p><a href="#finalidade">1. Finalidade</a><a href="#conteudo">2. Conteúdo</a><a href="#propostas">3. Propostas</a><a href="#uso">4. Uso aceitável</a><a href="#responsabilidade">5. Responsabilidade</a></aside>
        <div className="legal-content">
          <section id="finalidade"><span>01</span><h2>Finalidade do site</h2><p>Este site apresenta a BragaCode, os serviços oferecidos por Pedro Braga e projetos selecionados para portfólio. A navegação ou o envio de mensagem não cria, por si só, contrato de prestação de serviços.</p></section>
          <section id="conteudo"><span>02</span><h2>Conteúdo e propriedade intelectual</h2><p>Textos, identidade visual, organização dos cases e componentes próprios são protegidos pela legislação aplicável. Marcas e tecnologias citadas pertencem aos respectivos titulares. Representações de interface identificadas como reconstruídas servem para explicar o trabalho e não devem ser interpretadas como reprodução exata de ambiente do cliente.</p></section>
          <section id="propostas"><span>03</span><h2>Orçamentos e contratação</h2><p>Informações do site são descritivas e podem mudar conforme contexto, volume, integração e risco. Prazo, preço, escopo, propriedade do código, suporte e critérios de aceite só são definidos em proposta ou contrato específico aprovado pelas partes.</p></section>
          <section id="uso"><span>04</span><h2>Uso aceitável</h2><p>Você concorda em não tentar interromper o site, explorar vulnerabilidades, automatizar spam, obter acesso não autorizado ou enviar conteúdo ilícito pelo formulário. Medidas de proteção podem bloquear solicitações abusivas.</p></section>
          <section id="links"><span>05</span><h2>Links e serviços de terceiros</h2><p>Links para WhatsApp, LinkedIn, GitHub e outros serviços levam a ambientes administrados por terceiros, sujeitos aos próprios termos e políticas. A BragaCode não controla disponibilidade ou tratamento realizado nesses sites.</p></section>
          <section id="responsabilidade"><span>06</span><h2>Disponibilidade e responsabilidade</h2><p>Há esforço para manter o conteúdo correto e o site disponível, mas não há garantia de funcionamento ininterrupto. O uso de exemplos, tecnologias ou informações do portfólio sem avaliação do contexto é responsabilidade de quem os utiliza.</p></section>
          <section id="contato-legal"><span>07</span><h2>Contato e alterações</h2><p>Dúvidas podem ser enviadas para <a href={`mailto:${company.email}`}>{company.email}</a>. Estes termos podem ser atualizados para refletir mudanças no site ou na operação; a data no topo identifica a versão vigente.</p></section>
        </div>
      </div></article>
    </>
  );
}
