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
  deliverables: string[];
  technologies: string[];
  projectSlugs: string[];
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
    deliverables: [
      "arquitetura de informação e conteúdo",
      "interface responsiva e acessível",
      "SEO técnico e dados estruturados",
      "formulários e analytics configuráveis",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    projectSlugs: ["joysticknights", "comercio-bes"],
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
    deliverables: [
      "loja ou catálogo B2B/B2C",
      "painel administrativo",
      "integração com WhatsApp e meios existentes",
      "evolução de WordPress e WooCommerce",
    ],
    technologies: ["Next.js", "Node.js", "WooCommerce", "MySQL", "Prisma"],
    projectSlugs: ["aquaflora-agroshop", "ecommerce-floricultura"],
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
    deliverables: [
      "descoberta do fluxo operacional",
      "painel CRUD e controle de acesso",
      "interface mobile-first",
      "documentação e implantação",
    ],
    technologies: ["React", "Next.js", "FastAPI", "PostgreSQL", "JWT"],
    projectSlugs: ["aquaflora-agroshop", "cadastra-facil"],
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
    deliverables: [
      "mapeamento de contratos e dados",
      "REST APIs e webhooks",
      "autenticação e validação",
      "logs, retentativas e monitoramento",
    ],
    technologies: ["Node.js", "Python", "FastAPI", "REST", "Docker"],
    projectSlugs: ["aquaflora-agroshop", "rastreia-gastos"],
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
    deliverables: [
      "ETLs e sincronizações agendadas",
      "tratamento e validação de dados",
      "automação de atendimento",
      "alertas e trilha de execução",
    ],
    technologies: ["Python", "Pandas", "Node.js", "LLMs", "Docker"],
    projectSlugs: ["aquaflora-agroshop", "cadastra-facil"],
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
    deliverables: [
      "Docker e Docker Compose",
      "Nginx, SSL e Linux",
      "rotinas de backup e atualização",
      "manutenção evolutiva e corretiva",
    ],
    technologies: ["Docker", "Linux", "Nginx", "Proxmox", "Tailscale"],
    projectSlugs: ["hybrid-homelab", "joysticknights"],
  },
];
