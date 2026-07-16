import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/content/company";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Política de Privacidade",
  description: "Saiba quais dados a BragaCode recebe pelo site, para que são usados e como solicitar acesso, correção ou exclusão.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal / Privacidade" title={<>Política de <em>Privacidade.</em></>} description="Uma explicação direta sobre os dados enviados pelo formulário e as ferramentas que podem ser ativadas no site." aside={<p className="page-index">ATUALIZADA EM 16 JUL 2026</p>} />
      <article className="section legal-page"><div className="container legal-grid">
        <aside><p>Navegação</p><a href="#responsavel">1. Responsável</a><a href="#dados">2. Dados</a><a href="#uso">3. Uso</a><a href="#compartilhamento">4. Compartilhamento</a><a href="#direitos">5. Direitos</a><a href="#seguranca">6. Segurança</a></aside>
        <div className="legal-content">
          <section id="responsavel"><span>01</span><h2>Responsável pelo tratamento</h2><p>A BragaCode, operação fundada por Pedro Braga, é responsável pelos dados enviados diretamente por este site. O canal para assuntos de privacidade é <a href={`mailto:${company.email}`}>{company.email}</a>.</p><p>Este texto é uma base operacional e deve ser revisado quando houver definição de razão social, CNPJ, novo canal de atendimento ou mudança nas integrações.</p></section>
          <section id="dados"><span>02</span><h2>Dados que podem ser recebidos</h2><p>O formulário pode receber nome, empresa, e-mail, telefone, tipo de projeto e a descrição enviada por você. O servidor também pode processar dados técnicos necessários para segurança, como horário de envio, endereço IP e resultado da verificação antispam.</p><p>Não envie senhas, chaves de acesso, dados financeiros, informações médicas ou dados pessoais de terceiros pelo formulário.</p></section>
          <section id="uso"><span>03</span><h2>Finalidades e base do uso</h2><p>Os dados são usados para responder ao contato, entender a necessidade, elaborar uma proposta solicitada e proteger o formulário contra abuso. Quando você inicia uma conversa comercial, o tratamento ocorre para atender à sua solicitação e conduzir medidas pré-contratuais; registros estritamente necessários também podem ser mantidos para cumprir obrigações legais ou exercer direitos.</p></section>
          <section id="compartilhamento"><span>04</span><h2>Fornecedores e compartilhamento</h2><p>Dados podem passar por provedores de hospedagem, envio de e-mail e proteção antispam configurados para operar o site. A BragaCode não vende os dados recebidos.</p><p>Quando configurado, o Plausible mede visitas e eventos agregados como cliques em WhatsApp, acesso a cases/serviços e envio bem-sucedido do formulário. Os eventos não recebem nome, e-mail, telefone nem o conteúdo da mensagem. Se outro provedor ou forma de rastreamento for ativado, esta política e a necessidade de consentimento devem ser revistas antes da mudança.</p></section>
          <section id="retencao"><span>05</span><h2>Retenção e exclusão</h2><p>Contatos são mantidos pelo período necessário para responder, acompanhar a negociação e cumprir obrigações aplicáveis. Mensagens sem continuidade comercial devem ser revisadas e eliminadas conforme a rotina interna de retenção. Backups podem conservar cópias por tempo limitado até sua rotação.</p></section>
          <section id="direitos"><span>06</span><h2>Seus direitos</h2><p>Você pode solicitar confirmação do tratamento, acesso, correção, informação sobre compartilhamento e, quando aplicável, eliminação, oposição ou revisão. Envie o pedido para <a href={`mailto:${company.email}`}>{company.email}</a>. Poderá ser necessário confirmar sua identidade antes de fornecer informações.</p></section>
          <section id="seguranca"><span>07</span><h2>Segurança e alterações</h2><p>São adotadas medidas proporcionais ao tipo de dado recebido, incluindo validação no servidor, limitação do formulário, proteção antispam e controle de acesso às credenciais. Nenhum sistema é totalmente imune a incidentes. Esta política pode ser atualizada quando o site, os fornecedores ou a operação mudarem; a data no topo indica a versão atual.</p></section>
        </div>
      </div></article>
    </>
  );
}
