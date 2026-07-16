export type ServiceSlug =
  | "sites-e-landing-pages"
  | "ecommerce"
  | "sistemas-web"
  | "apis-e-integracoes"
  | "automacoes"
  | "infraestrutura-e-suporte";

export type Service = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  scope: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  technologies: string[];
  projectSlugs: string[];
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "sites-e-landing-pages",
    number: "01",
    title: "Sites institucionais e landing pages",
    shortTitle: "Sites e landing pages",
    summary:
      "Páginas rápidas e claras para explicar a oferta, provar capacidade e transformar visita em conversa comercial.",
    problem:
      "A empresa depende de indicação, envia apresentação desatualizada ou perde lead porque o site não responde dúvidas básicas.",
    scope: [
      "Organizar a proposta comercial em uma hierarquia que o visitante consiga percorrer sem reunião prévia.",
      "Construir páginas rápidas, acessíveis e preparadas para busca, compartilhamento e campanhas.",
      "Conectar formulários, WhatsApp e mensuração sem bloquear a publicação por integrações desnecessárias.",
    ],
    deliverables: [
      "arquitetura de informação e conteúdo",
      "interface responsiva e acessível",
      "SEO técnico e dados estruturados",
      "formulários e analytics configuráveis",
    ],
    process: [
      { title: "Mensagem e estrutura", description: "Levantamento de público, oferta, objeções e evidências antes de desenhar as páginas." },
      { title: "Interface e conteúdo", description: "Implementação responsiva com conteúdo real, estados de interação e componentes reutilizáveis." },
      { title: "Publicação mensurável", description: "SEO técnico, formulários, eventos de conversão e checklist de lançamento." },
    ],
    faq: [
      { question: "A BragaCode também escreve o conteúdo?", answer: "Sim. A empresa fornece o conhecimento do negócio e a BragaCode transforma isso em uma estrutura comercial objetiva, revisada em conjunto antes da publicação." },
      { question: "É possível começar por uma landing page?", answer: "Sim. Quando há uma oferta ou campanha bem delimitada, uma página única pode validar mensagem e aquisição antes de ampliar o site." },
      { question: "O site fica fácil de atualizar?", answer: "A arquitetura é definida conforme a frequência de mudança. Conteúdo estável pode ficar tipado no código; equipes com atualização recorrente podem receber integração com CMS." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    projectSlugs: ["joysticknights", "comercio-bes"],
    seo: {
      title: "Sites institucionais e landing pages",
      description: "Sites rápidos e acessíveis com conteúdo comercial, SEO técnico, formulários e mensuração configurável.",
    },
  },
  {
    slug: "ecommerce",
    number: "02",
    title: "E-commerce que acompanha a operação",
    shortTitle: "E-commerce",
    summary:
      "Catálogo, painel e jornada de compra conectados à forma real como preço, estoque e atendimento funcionam.",
    problem:
      "Produto muda no ERP, mas a loja continua desatualizada; catálogo cresce, e a equipe passa o dia corrigindo informação.",
    scope: [
      "Mapear de onde vêm produtos, preços, estoque, imagens e pedidos antes de escolher a arquitetura.",
      "Construir ou evoluir catálogo, checkout, painel e integrações sem ignorar a rotina da equipe.",
      "Criar mecanismos de sincronização, observabilidade e recuperação para reduzir correções manuais.",
    ],
    deliverables: [
      "loja ou catálogo B2B/B2C",
      "painel administrativo",
      "integração com WhatsApp e meios existentes",
      "evolução de WordPress e WooCommerce",
    ],
    process: [
      { title: "Diagnóstico da operação", description: "Fontes de dados, regras de preço, estoque, logística e atendimento são documentadas." },
      { title: "Catálogo e integrações", description: "A loja e os conectores são implementados em etapas verificáveis, com ambiente de teste." },
      { title: "Operação assistida", description: "Publicação, monitoramento das rotinas e transferência do fluxo para quem administra o catálogo." },
    ],
    faq: [
      { question: "Vocês trabalham com WooCommerce existente?", answer: "Sim. A BragaCode pode corrigir, evoluir e integrar uma operação existente sem exigir reconstrução total quando a plataforma ainda atende ao negócio." },
      { question: "É possível sincronizar com um ERP legado?", answer: "Depende das formas de acesso disponíveis. API, banco autorizado ou arquivos de exportação podem alimentar um middleware com validação, logs e retentativas." },
      { question: "Todo catálogo precisa de checkout online?", answer: "Não. Em vendas consultivas, B2B ou produtos sob orçamento, o catálogo pode levar uma seleção contextualizada ao WhatsApp ou ao time comercial." },
    ],
    technologies: ["Next.js", "Node.js", "WooCommerce", "MySQL", "Prisma"],
    projectSlugs: ["aquaflora-agroshop", "ecommerce-floricultura"],
    seo: {
      title: "Desenvolvimento e integração de e-commerce",
      description: "E-commerce, WooCommerce, catálogo B2B/B2C, painel e sincronização de preços e estoque com a operação real.",
    },
  },
  {
    slug: "sistemas-web",
    number: "03",
    title: "Sistemas web e painéis internos",
    shortTitle: "Sistemas web",
    summary:
      "Ferramentas sob medida para consultas, cadastros e rotinas que não cabem bem em planilha ou software de prateleira.",
    problem:
      "A equipe redigita dados, alterna entre muitas telas ou precisa voltar ao computador para uma consulta simples no estoque.",
    scope: [
      "Observar a rotina atual e separar exceções reais de etapas que só existem por limitação da ferramenta.",
      "Projetar consultas, cadastros, permissões e painéis para desktop ou celular conforme o ambiente de uso.",
      "Entregar uma aplicação documentada, implantável e preparada para evoluir por módulos.",
    ],
    deliverables: [
      "descoberta do fluxo operacional",
      "painel CRUD e controle de acesso",
      "interface mobile-first",
      "documentação e implantação",
    ],
    process: [
      { title: "Mapeamento do fluxo", description: "Usuários, dados, decisões, exceções e riscos são levantados com quem executa a rotina." },
      { title: "Entrega por módulos", description: "O núcleo de maior valor entra primeiro e é validado com dados e cenários próximos da operação." },
      { title: "Implantação e evolução", description: "Acesso, backups, documentação e próximos incrementos são definidos antes do uso contínuo." },
    ],
    faq: [
      { question: "Quando um sistema sob medida vale a pena?", answer: "Quando a rotina é recorrente, tem regras próprias e o custo de planilhas, retrabalho ou ferramentas desconectadas já afeta a operação." },
      { question: "É possível começar com um MVP?", answer: "Sim. O primeiro módulo pode resolver uma consulta ou cadastro crítico e produzir evidência antes de ampliar o investimento." },
      { question: "O sistema funciona no celular?", answer: "Quando o trabalho acontece no estoque, loja ou campo, a interface é planejada mobile-first e testada nos fluxos essenciais." },
    ],
    technologies: ["React", "Next.js", "FastAPI", "PostgreSQL", "JWT"],
    projectSlugs: ["aquaflora-agroshop", "cadastra-facil"],
    seo: {
      title: "Sistemas web e painéis administrativos",
      description: "Sistemas sob medida, painéis CRUD e aplicações mobile-first para consultas, cadastros e rotinas internas.",
    },
  },
  {
    slug: "apis-e-integracoes",
    number: "04",
    title: "APIs e integrações entre sistemas",
    shortTitle: "APIs e integrações",
    summary:
      "Camadas de integração para sistemas que precisam trocar dados com segurança, rastreabilidade e tolerância a falhas.",
    problem:
      "ERP, loja, atendimento e aplicação interna usam fontes diferentes e criam versões conflitantes da mesma informação.",
    scope: [
      "Definir qual sistema é responsável por cada dado e como conflitos devem ser resolvidos.",
      "Criar contratos de API, autenticação, validação e limites compatíveis com os sistemas envolvidos.",
      "Registrar execuções, erros e retentativas para que a integração seja operável depois do deploy.",
    ],
    deliverables: [
      "mapeamento de contratos e dados",
      "REST APIs e webhooks",
      "autenticação e validação",
      "logs, retentativas e monitoramento",
    ],
    process: [
      { title: "Contrato de dados", description: "Origem, formato, frequência, volume e responsabilidade de cada informação são documentados." },
      { title: "Conector resiliente", description: "Validação, autenticação, idempotência e tratamento de falhas entram junto com o fluxo principal." },
      { title: "Observação em produção", description: "Logs úteis, alertas e procedimentos de reprocessamento reduzem dependência do desenvolvedor." },
    ],
    faq: [
      { question: "É possível integrar um sistema sem API?", answer: "Às vezes. Exportações de arquivo, webhooks intermediários ou acesso controlado ao banco podem ser alternativas, avaliadas conforme segurança e suporte do fornecedor." },
      { question: "Como evitar dados duplicados?", answer: "A integração define identificadores estáveis, operações idempotentes e regras explícitas para criação, atualização e reprocessamento." },
      { question: "A API fica documentada?", answer: "Sim. Contratos, autenticação, exemplos de payload, códigos de erro e procedimentos operacionais fazem parte da entrega aplicável." },
    ],
    technologies: ["Node.js", "Python", "FastAPI", "REST", "Docker"],
    projectSlugs: ["aquaflora-agroshop", "rastreia-gastos"],
    seo: {
      title: "APIs e integrações entre sistemas",
      description: "APIs, webhooks e conectores com autenticação, validação, logs e retentativas para integrar ERP, loja e aplicações.",
    },
  },
  {
    slug: "automacoes",
    number: "05",
    title: "Automações, estoque e preços",
    shortTitle: "Automações",
    summary:
      "Rotinas em Python e Node.js para remover trabalho repetitivo de catálogo, dados, atendimento e conciliação.",
    problem:
      "Uma atualização simples exige exportar arquivo, ajustar coluna, importar novamente e conferir item por item.",
    scope: [
      "Identificar tarefas repetitivas com regras suficientes para automatizar sem esconder decisões importantes.",
      "Tratar entradas inconsistentes e criar validações antes que um erro se espalhe para catálogo ou atendimento.",
      "Manter trilha de execução, alertas e revisão humana nos pontos em que o risco exige confirmação.",
    ],
    deliverables: [
      "ETLs e sincronizações agendadas",
      "tratamento e validação de dados",
      "automação de atendimento",
      "alertas e trilha de execução",
    ],
    process: [
      { title: "Linha de base", description: "Tempo, volume, exceções e resultado esperado são registrados antes da automação." },
      { title: "Automação controlada", description: "A rotina começa com amostras, modo de simulação e validações antes de alterar dados reais." },
      { title: "Agendamento e suporte", description: "Execução, alertas, reprocessamento e responsabilidades ficam documentados para a operação." },
    ],
    faq: [
      { question: "Qual processo pode ser automatizado?", answer: "Tarefas frequentes, baseadas em dados e com regras identificáveis são boas candidatas. Processos instáveis devem ser organizados antes de receber código." },
      { question: "A automação substitui toda conferência humana?", answer: "Não necessariamente. Valores fora do padrão, dados incompletos e decisões comerciais podem seguir para uma fila de revisão." },
      { question: "Vocês usam IA nas automações?", answer: "Quando texto, classificação ou extração justificam o uso. A saída recebe limites, validação e fallback; IA não é adicionada onde uma regra determinística resolve melhor." },
    ],
    technologies: ["Python", "Pandas", "Node.js", "LLMs", "Docker"],
    projectSlugs: ["aquaflora-agroshop", "cadastra-facil"],
    seo: {
      title: "Automações com Python e Node.js",
      description: "Automações, ETLs e sincronizações com validação, alertas e revisão humana para reduzir tarefas repetitivas.",
    },
  },
  {
    slug: "infraestrutura-e-suporte",
    number: "06",
    title: "Infraestrutura, suporte e manutenção",
    shortTitle: "Infra e suporte",
    summary:
      "Ambientes reproduzíveis, publicação segura e acompanhamento para o software continuar utilizável depois do deploy.",
    problem:
      "A aplicação funciona apenas na máquina de quem criou, atualizações viram risco e ninguém sabe onde procurar quando algo falha.",
    scope: [
      "Empacotar aplicações e dependências para reduzir diferenças entre desenvolvimento e produção.",
      "Configurar proxy, HTTPS, rede, variáveis, backups e publicação de acordo com o risco do projeto.",
      "Definir manutenção corretiva e evolutiva com registro de mudanças e procedimentos de recuperação.",
    ],
    deliverables: [
      "Docker e Docker Compose",
      "Nginx, SSL e Linux",
      "rotinas de backup e atualização",
      "manutenção evolutiva e corretiva",
    ],
    process: [
      { title: "Inventário técnico", description: "Aplicações, domínios, dependências, dados, acessos e pontos únicos de falha são mapeados." },
      { title: "Ambiente reproduzível", description: "Containers, configuração e publicação são documentados e testados fora da máquina local." },
      { title: "Rotina de operação", description: "Atualizações, backup, logs e resposta a incidentes recebem responsáveis e procedimentos claros." },
    ],
    faq: [
      { question: "A BragaCode oferece hospedagem?", answer: "O foco é configurar e manter a aplicação na infraestrutura contratada pelo cliente. Homelab não é apresentado como serviço comercial de hospedagem." },
      { question: "Docker é obrigatório?", answer: "Não, mas costuma ajudar a reproduzir dependências e implantações. A decisão considera o tamanho da aplicação e a infraestrutura disponível." },
      { question: "O suporte inclui evolução do sistema?", answer: "Pode incluir. Manutenção corretiva, atualizações e ciclos de evolução são separados por prioridade, janela e modelo de contratação." },
    ],
    technologies: ["Docker", "Linux", "Nginx", "Proxmox", "Tailscale"],
    projectSlugs: ["hybrid-homelab", "joysticknights"],
    seo: {
      title: "Infraestrutura, suporte e manutenção",
      description: "Docker, Linux, Nginx, HTTPS, deploy, backups e manutenção para aplicações reproduzíveis e operáveis.",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
