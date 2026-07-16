import type { ServiceSlug } from "./services";

export type ProjectStatus =
  | "Em evolução"
  | "Concluído"
  | "Em operação"
  | "Protótipo"
  | "Laboratório";

export type ProjectCategory =
  | "E-commerce"
  | "Automação"
  | "Sistema web"
  | "Plataforma"
  | "Infraestrutura"
  | "Conteúdo"
  | "Protótipo";

export type ProjectVisualKind =
  | "sync"
  | "store"
  | "directory"
  | "editorial"
  | "finance"
  | "catalog"
  | "infra";

export type ProjectNature =
  | "Trabalho profissional"
  | "Projeto de portfólio"
  | "Projeto próprio"
  | "Protótipo"
  | "Laboratório técnico";

export type ProjectEvidence = {
  nature: ProjectNature;
  lastReviewed: string;
  basis: string;
  disclosure: string;
};

export type ProjectGalleryAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectGalleryItem = {
  kind: ProjectVisualKind;
  title: string;
  caption: string;
  asset?: ProjectGalleryAsset;
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  status: ProjectStatus;
  period: string;
  featured: boolean;
  categories: ProjectCategory[];
  services: ServiceSlug[];
  problem: string[];
  context: string[];
  solution: string[];
  features: string[];
  technologies: string[];
  results: string[];
  metrics: { value: string; label: string; note: string }[];
  evidence: ProjectEvidence;
  gallery: ProjectGalleryItem[];
  confidentialityNote?: string;
  seo: { title: string; description: string };
};

export const projects: Project[] = [
  {
    slug: "aquaflora-agroshop",
    name: "AquaFlora AgroShop",
    eyebrow: "E-commerce + integração operacional",
    summary:
      "Evolução de uma operação WooCommerce com middleware de estoque e preços, consulta interna por código de barras e automação de atendimento.",
    status: "Em evolução",
    period: "2025 — atual",
    featured: true,
    categories: ["E-commerce", "Automação", "Sistema web"],
    services: ["ecommerce", "automacoes", "apis-e-integracoes", "sistemas-web"],
    problem: [
      "O catálogo cresceu, mas preço e estoque ainda dependiam de rotinas manuais entre um ERP legado e o WooCommerce.",
      "No atendimento e no estoque, consultar um item precisava ser rápido no celular e partir do código de barras disponível na embalagem.",
      "Perguntas recorrentes chegavam pelo WhatsApp sem uma triagem inicial padronizada.",
    ],
    context: [
      "A solução precisava conviver com sistemas existentes, milhares de produtos e uma operação que não poderia parar para uma troca completa de plataforma.",
      "Dados inconsistentes, falhas temporárias de rede e limites da API exigiam tratamento explícito, registro e retentativas.",
    ],
    solution: [
      "Manutenção e evolução da loja WordPress/WooCommerce, incluindo catálogo, páginas internas e fluxos de atualização.",
      "Middleware/ETL em Python executado com Docker para ler, tratar e sincronizar estoque e preços do ERP com a WooCommerce REST API.",
      "Web app interno mobile-first com autenticação JWT, leitura de código de barras e consulta de preço/estoque via API.",
      "Automação em Node.js com LLM para triagem inicial, respostas recorrentes e encaminhamento de atendimentos no WhatsApp.",
    ],
    features: [
      "sincronização de estoque e preços",
      "importação massiva de catálogo",
      "retentativas e registro de execução",
      "consulta por código de barras",
      "autenticação JWT",
      "triagem inicial de atendimento",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Docker",
      "WooCommerce REST API",
      "WordPress",
      "PHP",
      "Node.js",
      "JWT",
      "LLMs",
    ],
    results: [
      "A atualização de catálogo deixou de depender exclusivamente de edição produto a produto.",
      "A equipe ganhou uma consulta móvel orientada ao código de barras para responder preço e disponibilidade no ponto de operação.",
      "O atendimento recorrente passou a ter uma primeira triagem padronizada antes do encaminhamento.",
    ],
    metrics: [
      { value: "4.000+", label: "SKUs", note: "no fluxo de sincronização" },
      { value: "6.300+", label: "ativos", note: "tratados no catálogo" },
      { value: "3", label: "frentes", note: "loja, operação interna e atendimento" },
    ],
    evidence: {
      nature: "Trabalho profissional",
      lastReviewed: "16 de julho de 2026",
      basis: "Experiência profissional e currículo de Pedro Braga.",
      disclosure: "Cliente identificado; métricas operacionais publicadas sem expor regras comerciais ou dados internos.",
    },
    gallery: [
      { kind: "sync", title: "Fluxo de sincronização", caption: "Representação do caminho entre ERP, middleware e WooCommerce." },
      { kind: "catalog", title: "Consulta no estoque", caption: "Recorte reconstruído da experiência mobile por código de barras." },
      { kind: "store", title: "Operação do catálogo", caption: "Painel visual do processamento de produtos e ativos." },
    ],
    confidentialityNote:
      "Detalhes do ERP, credenciais, regras comerciais e telas com dados reais foram omitidos para preservar a operação do cliente.",
    seo: {
      title: "AquaFlora AgroShop: WooCommerce, ERP e automação",
      description:
        "Case de evolução WooCommerce com sincronização de estoque e preços em Python/Docker, app interno e automação de atendimento.",
    },
  },
  {
    slug: "ecommerce-floricultura",
    name: "E-commerce para floricultura",
    eyebrow: "Catálogo B2B/B2C + painel administrativo",
    summary:
      "Plataforma mobile-first que organiza catálogo, imagens e pedidos e leva a conversa de compra para o WhatsApp.",
    status: "Concluído",
    period: "2025",
    featured: true,
    categories: ["E-commerce", "Sistema web"],
    services: ["ecommerce", "sistemas-web", "apis-e-integracoes"],
    problem: [
      "A floricultura precisava apresentar linhas para públicos B2B e B2C sem depender de catálogo enviado manualmente a cada contato.",
      "Produtos, categorias e imagens precisavam ser administrados sem alteração direta no código.",
    ],
    context: [
      "Grande parte da descoberta e da negociação acontece pelo celular. O site precisava carregar rápido e transformar o interesse em uma conversa contextualizada no WhatsApp.",
      "O catálogo tinha necessidades diferentes de uma compra com checkout tradicional, por isso o fluxo comercial foi priorizado em vez de impor etapas desnecessárias.",
    ],
    solution: [
      "Frontend em Next.js, React e Tailwind CSS com arquitetura mobile-first, páginas indexáveis e navegação por categorias.",
      "Backend Node.js com MySQL e Prisma, expondo REST APIs para o catálogo.",
      "Painel administrativo CRUD para produtos e categorias, upload de imagens via Cloudinary e integração com WhatsApp.",
    ],
    features: [
      "catálogo B2B/B2C",
      "busca e categorias",
      "painel CRUD",
      "upload com Cloudinary",
      "mensagem contextual no WhatsApp",
      "SEO técnico e layout mobile-first",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MySQL", "Prisma", "Cloudinary", "WhatsApp"],
    results: [
      "O catálogo passou a ter uma fonte de administração própria para produtos, categorias e imagens.",
      "A jornada móvel conecta o item visualizado a uma conversa de compra já contextualizada.",
      "A separação entre interface e API deixa espaço para novos canais consumirem os mesmos dados.",
    ],
    metrics: [
      { value: "B2B/B2C", label: "catálogo", note: "duas jornadas no mesmo produto" },
      { value: "1", label: "painel", note: "para produtos, categorias e imagens" },
      { value: "mobile", label: "first", note: "do catálogo ao contato" },
    ],
    evidence: {
      nature: "Projeto de portfólio",
      lastReviewed: "16 de julho de 2026",
      basis: "Escopo técnico implementado por Pedro Braga.",
      disclosure: "Cliente e ativos comerciais permanecem anônimos até autorização expressa.",
    },
    gallery: [
      { kind: "store", title: "Catálogo responsivo", caption: "Representação da vitrine organizada por categorias." },
      { kind: "catalog", title: "Painel administrativo", caption: "Recorte reconstruído do cadastro de produtos e imagens." },
      { kind: "directory", title: "Compra assistida", caption: "Fluxo entre descoberta do item e conversa no WhatsApp." },
    ],
    confidentialityNote:
      "A identidade do cliente e imagens comerciais não são exibidas nesta versão do portfólio.",
    seo: {
      title: "E-commerce para floricultura com Next.js e Node.js",
      description:
        "Case de catálogo B2B/B2C com Next.js, painel administrativo, MySQL, Cloudinary e integração com WhatsApp.",
    },
  },
  {
    slug: "comercio-bes",
    name: "Comércio BES",
    eyebrow: "Marketplace e guia comercial hiperlocal",
    summary:
      "Uma experiência instalável para descobrir estabelecimentos por categoria, abrir páginas locais e conversar direto pelo WhatsApp.",
    status: "Em evolução",
    period: "2024 — 2025",
    featured: true,
    categories: ["Plataforma", "Sistema web"],
    services: ["sites-e-landing-pages", "sistemas-web"],
    problem: [
      "Negócios locais estavam espalhados entre redes sociais, listas e indicações, dificultando a descoberta por categoria ou necessidade.",
      "Uma busca útil precisava terminar em ação: rota, contato ou conversa, sem exigir cadastro do visitante.",
    ],
    context: [
      "A proposta era hiperlocal e mobile-first, com baixo atrito para acesso recorrente e compartilhamento direto de páginas de estabelecimentos.",
      "Conectividade variável exigia uma base leve, instalável e com navegação previsível.",
    ],
    solution: [
      "Marketplace/guia comercial em JavaScript com pesquisa por categorias e tags.",
      "Páginas individuais de estabelecimentos com deep links e integração com WhatsApp.",
      "Recursos de PWA para instalação e acesso semelhante a aplicativo no celular.",
    ],
    features: ["categorias e tags", "páginas de estabelecimentos", "PWA", "deep links", "WhatsApp", "mobile-first"],
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "PWA", "WhatsApp"],
    results: [
      "A descoberta local ganhou uma estrutura pesquisável por intenção, não apenas por nome do negócio.",
      "Cada estabelecimento tem uma rota compartilhável que aproxima busca, contexto e contato.",
      "A PWA permite acesso recorrente sem exigir publicação em loja de aplicativos.",
    ],
    metrics: [
      { value: "PWA", label: "instalável", note: "sem loja de aplicativos" },
      { value: "2", label: "entradas", note: "categoria e tags" },
      { value: "1 toque", label: "contato", note: "via WhatsApp" },
    ],
    evidence: {
      nature: "Projeto próprio",
      lastReviewed: "16 de julho de 2026",
      basis: "Produto hiperlocal desenvolvido e mantido por Pedro Braga.",
      disclosure: "Resultados descritos de forma qualitativa; não há métricas comerciais publicadas.",
    },
    gallery: [
      { kind: "directory", title: "Descoberta hiperlocal", caption: "Representação da busca por categoria e proximidade." },
      { kind: "store", title: "Página do estabelecimento", caption: "Recorte reconstruído de uma página comercial mobile-first." },
      { kind: "sync", title: "Deep link até o contato", caption: "Fluxo entre busca, página e conversa no WhatsApp." },
    ],
    seo: {
      title: "Comércio BES: marketplace e guia comercial PWA",
      description:
        "Case de guia comercial hiperlocal com busca por categorias, páginas de estabelecimentos, PWA, deep links e WhatsApp.",
    },
  },
  {
    slug: "joysticknights",
    name: "Joysticknights",
    eyebrow: "Plataforma editorial própria",
    summary:
      "Projeto de conteúdo sobre games mantido desde 2020, com WordPress, customizações e evolução contínua de SEO e performance.",
    status: "Em operação",
    period: "2020 — atual",
    featured: false,
    categories: ["Conteúdo"],
    services: ["sites-e-landing-pages", "infraestrutura-e-suporte"],
    problem: ["Publicar conteúdo com autonomia e manter uma base técnica sustentável ao longo do tempo."],
    context: ["Projeto próprio usado para praticar operação real: pauta, publicação, atualização, SEO, performance e manutenção."],
    solution: ["WordPress com customizações em PHP, JavaScript e CSS, além de ajustes recorrentes de SEO e desempenho."],
    features: ["gestão editorial", "customizações de tema", "SEO", "performance", "manutenção contínua"],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "SEO"],
    results: ["O projeto permanece como ambiente real de publicação e manutenção desde 2020."],
    metrics: [{ value: "2020", label: "início", note: "operação contínua do projeto" }],
    evidence: {
      nature: "Projeto próprio",
      lastReviewed: "16 de julho de 2026",
      basis: "Projeto editorial operado por Pedro Braga desde 2020.",
      disclosure: "A continuidade operacional é pública; números de audiência não são apresentados sem medição atualizada.",
    },
    gallery: [
      { kind: "editorial", title: "Fluxo editorial", caption: "Representação do ciclo de pauta, publicação e otimização." },
      { kind: "store", title: "Página de conteúdo", caption: "Recorte editorial reconstruído para o portfólio." },
      { kind: "infra", title: "Manutenção técnica", caption: "Camadas de aplicação, SEO e operação." },
    ],
    seo: {
      title: "Joysticknights: WordPress, conteúdo e operação",
      description: "Projeto editorial sobre games mantido desde 2020 com WordPress, PHP, JavaScript, SEO e performance.",
    },
  },
  {
    slug: "rastreia-gastos",
    name: "RastreIAGastos",
    eyebrow: "Protótipo de controle financeiro com IA/OCR",
    summary:
      "Exploração de uma rotina que extrai dados de comprovantes e organiza gastos para reduzir digitação manual.",
    status: "Protótipo",
    period: "Em desenvolvimento",
    featured: false,
    categories: ["Protótipo", "Sistema web"],
    services: ["sistemas-web", "apis-e-integracoes", "automacoes"],
    problem: ["Registrar gastos manualmente a partir de comprovantes é lento e sujeito a campos incompletos."],
    context: ["O projeto ainda valida fluxo, qualidade de extração e quais informações geram valor antes de evoluir para produto."],
    solution: ["Protótipo com React, FastAPI, PostgreSQL e experimentos de OCR/IA para extração e validação assistida."],
    features: ["upload de comprovante", "extração OCR", "validação de campos", "API", "organização de gastos"],
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "IA/OCR"],
    results: ["A arquitetura inicial e APIs de validação foram estruturadas; o produto ainda está em desenvolvimento."],
    metrics: [{ value: "MVP", label: "status", note: "protótipo em validação" }],
    evidence: {
      nature: "Protótipo",
      lastReviewed: "16 de julho de 2026",
      basis: "Arquitetura e APIs iniciais desenvolvidas por Pedro Braga.",
      disclosure: "Não é apresentado como produto finalizado nem como operação de cliente.",
    },
    gallery: [
      { kind: "finance", title: "Entrada assistida", caption: "Representação do envio e leitura de comprovante." },
      { kind: "catalog", title: "Validação humana", caption: "Recorte reconstruído para revisar campos extraídos." },
      { kind: "sync", title: "Pipeline OCR", caption: "Fluxo proposto entre arquivo, extração, validação e banco." },
    ],
    seo: {
      title: "RastreIAGastos: protótipo financeiro com IA e OCR",
      description: "Protótipo em desenvolvimento para extrair e validar gastos com React, FastAPI, PostgreSQL e OCR.",
    },
  },
  {
    slug: "cadastra-facil",
    name: "CadastraFácil",
    eyebrow: "Protótipo de cadastro para PMEs",
    summary:
      "Exploração de um fluxo assistido para reduzir digitação e inconsistência no cadastro de produtos.",
    status: "Protótipo",
    period: "Em desenvolvimento",
    featured: false,
    categories: ["Protótipo", "Automação"],
    services: ["sistemas-web", "automacoes", "apis-e-integracoes"],
    problem: ["Cadastrar produtos um a um consome tempo e gera diferenças de padrão entre descrições, códigos e categorias."],
    context: ["A proposta está sendo validada para pequenas e médias empresas, com foco em assistência e revisão em vez de automação opaca."],
    solution: ["APIs iniciais para validação de dados, interface React e experimentos de automação para sugerir campos de produto."],
    features: ["cadastro assistido", "validação de dados", "padronização", "API", "revisão antes de salvar"],
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "IA/OCR"],
    results: ["O fluxo e as APIs iniciais estão em desenvolvimento; ainda não é apresentado como produto finalizado."],
    metrics: [{ value: "MVP", label: "status", note: "protótipo em validação" }],
    evidence: {
      nature: "Protótipo",
      lastReviewed: "16 de julho de 2026",
      basis: "Fluxo e APIs iniciais desenvolvidos por Pedro Braga.",
      disclosure: "Não é apresentado como produto finalizado nem como operação de cliente.",
    },
    gallery: [
      { kind: "catalog", title: "Cadastro assistido", caption: "Representação do formulário com sugestões e validação." },
      { kind: "sync", title: "Validação de dados", caption: "Fluxo proposto antes de persistir o produto." },
      { kind: "store", title: "Catálogo consistente", caption: "Visão reconstruída do resultado esperado." },
    ],
    seo: {
      title: "CadastraFácil: protótipo de cadastro assistido",
      description: "Protótipo em desenvolvimento para reduzir digitação e padronizar cadastros de produtos em PMEs.",
    },
  },
  {
    slug: "hybrid-homelab",
    name: "Hybrid Homelab",
    eyebrow: "Laboratório de infraestrutura",
    summary:
      "Ambiente prático com Proxmox, Docker/LXC, Linux e Nginx para estudar redes, isolamento, SSL e deploy de aplicações.",
    status: "Laboratório",
    period: "Contínuo",
    featured: false,
    categories: ["Infraestrutura"],
    services: ["infraestrutura-e-suporte"],
    problem: ["Aprender infraestrutura apenas em ambientes descartáveis não reproduz as decisões e falhas da operação contínua."],
    context: ["O homelab funciona como laboratório pessoal, não como infraestrutura de cliente ou serviço de hosting comercial."],
    solution: ["Serviços isolados em Docker e LXC sobre Proxmox, com Nginx, SSL, redes privadas, Tailscale e rotinas de publicação."],
    features: ["virtualização", "containers", "proxy reverso", "SSL", "rede privada", "deploy"],
    technologies: ["Proxmox VE", "Docker", "LXC", "Linux", "Nginx", "Tailscale"],
    results: ["O ambiente permite testar deploy, isolamento e recuperação antes de aplicar padrões semelhantes em projetos."],
    metrics: [{ value: "24/7", label: "laboratório", note: "operação e aprendizado contínuos" }],
    evidence: {
      nature: "Laboratório técnico",
      lastReviewed: "16 de julho de 2026",
      basis: "Ambiente pessoal de estudo, testes e operação de Pedro Braga.",
      disclosure: "Não representa infraestrutura de cliente ou serviço comercial de hospedagem.",
    },
    gallery: [
      { kind: "infra", title: "Camadas do laboratório", caption: "Representação de host, containers e proxy reverso." },
      { kind: "sync", title: "Publicação de serviço", caption: "Fluxo entre aplicação, rede privada, Nginx e SSL." },
      { kind: "catalog", title: "Operação e logs", caption: "Painel reconstruído de saúde dos serviços." },
    ],
    seo: {
      title: "Hybrid Homelab: Proxmox, Docker, Linux e Nginx",
      description: "Laboratório prático de infraestrutura com Proxmox, Docker/LXC, Linux, Nginx, SSL e redes privadas.",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
