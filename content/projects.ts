import type { ServiceSlug } from "./services";

export type ProjectStatus =
  | "Em desenvolvimento"
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
  listed?: boolean;
  sources?: { label: string; href: string }[];
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
    "slug": "aquaflora-agroshop",
    "name": "AquaFlora AgroShop",
    "eyebrow": "E-commerce + integração operacional",
    "summary": "Loja WooCommerce e integração de estoque e preços com o ERP. Trabalho de Pedro Braga na operação digital da AquaFlora.",
    "status": "Em evolução",
    "period": "2025 — atual",
    "featured": true,
    "categories": [
      "E-commerce",
      "Automação",
      "Sistema web"
    ],
    "services": [
      "ecommerce",
      "automacoes",
      "apis-e-integracoes",
      "sistemas-web"
    ],
    "problem": [
      "Preço e estoque precisam acompanhar o ERP sem sobrescrever o conteúdo editorial dos produtos.",
      "A consulta interna de produtos exige uma interface própria, com acesso controlado e busca por nome, SKU ou código de barras."
    ],
    "context": [
      "Experiência profissional de Pedro Braga, fundador da BragaCode, na AquaFlora AgroShop.",
      "A loja pública, a rotina de sincronização e a plataforma interna têm ciclos de implantação independentes."
    ],
    "solution": [
      "Loja em operação: manutenção e evolução do catálogo WordPress/WooCommerce.",
      "Stock Sync LITE: rotina Python que lê o CSV do ERP Athos e atualiza estoque e preço dos SKUs já existentes no WooCommerce, preservando descrições, categorias, imagens e SEO.",
      "AquaApps e API: base implementada e validada localmente com Next.js e Fastify. Consulta por nome, SKU e EAN, sessões assinadas e permissões por perfil. A implantação no servidor ainda é uma etapa separada.",
      "Atendimento automatizado: frente em desenvolvimento; não integra a rotina Stock Sync e não é apresentada como bot em produção."
    ],
    "features": [
      "Catálogo WooCommerce",
      "Sincronização de preço e estoque",
      "Preservação do conteúdo dos produtos",
      "Registros de execução",
      "Consulta interna por SKU/EAN",
      "Acesso por perfil"
    ],
    "technologies": [
      "WordPress",
      "WooCommerce",
      "Python",
      "Next.js",
      "Fastify",
      "TypeScript"
    ],
    "results": [
      "A rotina LITE separa a atualização de estoque e preço da edição do catálogo.",
      "O código da plataforma interna possui uma base local validada; publicação e operação precisam de validação própria.",
      "A loja pública pode ser consultada. Indicadores comerciais e dados internos não fazem parte deste case."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Trabalho profissional",
      "lastReviewed": "6 de setembro de 2026",
      "basis": "Loja pública e documentação dos repositórios aquaflora e aquaflora-stock-sync.",
      "disclosure": "Experiência de Pedro Braga na AquaFlora; não implica contratação da BragaCode. Captura apenas da loja pública."
    },
    "gallery": [
      {
        "kind": "store",
        "title": "AquaFlora AgroShop",
        "caption": "Loja pública capturada em setembro de 2026. A imagem documenta a interface da loja; não representa os aplicativos internos.",
        "asset": {
          "src": "/images/projects/aquaflora-live.webp",
          "alt": "Página inicial real da AquaFlora AgroShop, com navegação e vitrine de produtos",
          "width": 1265,
          "height": 712
        }
      }
    ],
    "confidentialityNote": "Detalhes do ERP, credenciais, regras comerciais e telas com dados reais foram omitidos para preservar a operação do cliente.",
    "seo": {
      "title": "AquaFlora: WooCommerce e integração de estoque",
      "description": "Trabalho de Pedro Braga na loja WooCommerce, sincronização Python e desenvolvimento da plataforma interna AquaFlora."
    },
    "sources": [
      {
        "label": "Visitar a loja",
        "href": "https://aquafloragroshop.com.br/"
      },
      {
        "label": "Stock Sync no GitHub",
        "href": "https://github.com/pedrobragabes/aquaflora-stock-sync"
      }
    ]
  },
  {
    "slug": "ecommerce-floricultura",
    "name": "E-commerce para floricultura",
    "eyebrow": "Catálogo B2B/B2C + painel administrativo",
    "summary": "Plataforma mobile-first que organiza catálogo, imagens e pedidos e leva a conversa de compra para o WhatsApp.",
    "status": "Concluído",
    "period": "2025",
    "featured": false,
    "categories": [
      "E-commerce",
      "Sistema web"
    ],
    "services": [
      "ecommerce",
      "sistemas-web",
      "apis-e-integracoes"
    ],
    "problem": [
      "A floricultura precisava apresentar linhas para públicos B2B e B2C sem depender de catálogo enviado manualmente a cada contato.",
      "Produtos, categorias e imagens precisavam ser administrados sem alteração direta no código."
    ],
    "context": [
      "Grande parte da descoberta e da negociação acontece pelo celular. O site precisava carregar rápido e transformar o interesse em uma conversa contextualizada no WhatsApp.",
      "O catálogo tinha necessidades diferentes de uma compra com checkout tradicional, por isso o fluxo comercial foi priorizado em vez de impor etapas desnecessárias."
    ],
    "solution": [
      "Frontend em Next.js, React e Tailwind CSS com arquitetura mobile-first, páginas indexáveis e navegação por categorias.",
      "Backend Node.js com MySQL e Prisma, expondo REST APIs para o catálogo.",
      "Painel administrativo CRUD para produtos e categorias, upload de imagens via Cloudinary e integração com WhatsApp."
    ],
    "features": [
      "catálogo B2B/B2C",
      "busca e categorias",
      "painel CRUD",
      "upload com Cloudinary",
      "mensagem contextual no WhatsApp",
      "SEO técnico e layout mobile-first"
    ],
    "technologies": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MySQL",
      "Prisma",
      "Cloudinary",
      "WhatsApp"
    ],
    "results": [
      "O catálogo passou a ter uma fonte de administração própria para produtos, categorias e imagens.",
      "A jornada móvel conecta o item visualizado a uma conversa de compra já contextualizada.",
      "A separação entre interface e API deixa espaço para novos canais consumirem os mesmos dados."
    ],
    "metrics": [
      {
        "value": "B2B/B2C",
        "label": "catálogo",
        "note": "duas jornadas no mesmo produto"
      },
      {
        "value": "1",
        "label": "painel",
        "note": "para produtos, categorias e imagens"
      },
      {
        "value": "mobile",
        "label": "first",
        "note": "do catálogo ao contato"
      }
    ],
    "evidence": {
      "nature": "Projeto de portfólio",
      "lastReviewed": "16 de julho de 2026",
      "basis": "Escopo técnico implementado por Pedro Braga.",
      "disclosure": "Cliente e ativos comerciais permanecem anônimos até autorização expressa."
    },
    "gallery": [
      {
        "kind": "store",
        "title": "E-commerce para floricultura",
        "caption": "Catálogo B2B/B2C + painel administrativo"
      }
    ],
    "confidentialityNote": "A identidade do cliente e imagens comerciais não são exibidas nesta versão do portfólio.",
    "seo": {
      "title": "E-commerce para floricultura com Next.js e Node.js",
      "description": "Case de catálogo B2B/B2C com Next.js, painel administrativo, MySQL, Cloudinary e integração com WhatsApp."
    },
    "listed": false
  },
  {
    "slug": "comercio-bes",
    "name": "Comércio BES",
    "eyebrow": "Marketplace e guia comercial hiperlocal",
    "summary": "Guia comercial de Boa Esperança do Sul: busca por categoria, perfis de estabelecimentos e contato direto. Produto próprio em evolução.",
    "status": "Em evolução",
    "period": "2024 — 2025",
    "featured": false,
    "categories": [
      "Plataforma",
      "Sistema web"
    ],
    "services": [
      "sites-e-landing-pages",
      "sistemas-web"
    ],
    "problem": [
      "Negócios locais estavam espalhados entre redes sociais, listas e indicações, dificultando a descoberta por categoria ou necessidade.",
      "Uma busca útil precisava terminar em ação: rota, contato ou conversa, sem exigir cadastro do visitante."
    ],
    "context": [
      "A proposta era hiperlocal e mobile-first, com baixo atrito para acesso recorrente e compartilhamento direto de páginas de estabelecimentos.",
      "Conectividade variável exigia uma base leve, instalável e com navegação previsível."
    ],
    "solution": [
      "Frontend web instalável como PWA para descoberta de estabelecimentos.",
      "API em Node.js/Express com PostgreSQL e Prisma para dados e moderação."
    ],
    "features": [
      "categorias e tags",
      "páginas de estabelecimentos",
      "PWA",
      "deep links",
      "WhatsApp",
      "mobile-first"
    ],
    "technologies": [
      "JavaScript",
      "PWA",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma"
    ],
    "results": [
      "Base de um guia comercial local com perfis, horários, fotos e contato.",
      "Projeto distinto do BragaCommerce, que concentra catálogo transacional, carrinho e checkout."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Projeto próprio",
      "lastReviewed": "16 de julho de 2026",
      "basis": "Produto hiperlocal desenvolvido e mantido por Pedro Braga.",
      "disclosure": "Resultados descritos de forma qualitativa; não há métricas comerciais publicadas."
    },
    "gallery": [
      {
        "kind": "directory",
        "title": "Comércio BES",
        "caption": "Marketplace e guia comercial hiperlocal"
      }
    ],
    "seo": {
      "title": "Comércio BES: marketplace e guia comercial PWA",
      "description": "Case de guia comercial hiperlocal com busca por categorias, páginas de estabelecimentos, PWA, deep links e WhatsApp."
    },
    "sources": [
      {
        "label": "Código no GitHub",
        "href": "https://github.com/pedrobragabes/Comercio_BES"
      }
    ]
  },
  {
    "slug": "joysticknights",
    "name": "JoysticKnights",
    "eyebrow": "Produto próprio · plataforma editorial",
    "summary": "Portal de games e cultura geek com frontend Next.js e WordPress como CMS. Publicação editorial e experiência de leitura em uma plataforma própria.",
    "status": "Em operação",
    "period": "2020 — atual",
    "featured": true,
    "categories": [
      "Conteúdo"
    ],
    "services": [
      "sites-e-landing-pages",
      "infraestrutura-e-suporte"
    ],
    "problem": [
      "Evoluir a experiência de leitura mantendo o fluxo editorial e o conteúdo do WordPress."
    ],
    "context": [
      "Projeto próprio de Pedro Braga, mantido desde 2020. O frontend atual foi conferido no site público e no repositório."
    ],
    "solution": [
      "Frontend em Next.js, React e TypeScript, com Tailwind CSS.",
      "WordPress desacoplado como CMS para organizar notícias, análises e categorias.",
      "Navegação por temas, destaque editorial e páginas de conteúdo na experiência pública."
    ],
    "features": [
      "CMS desacoplado",
      "Notícias e análises",
      "Categorias editoriais",
      "Interface responsiva"
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress"
    ],
    "results": [
      "Portal público disponível com conteúdo editorial real.",
      "Frontend e CMS possuem responsabilidades separadas."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Projeto próprio",
      "lastReviewed": "6 de setembro de 2026",
      "basis": "Site público e README do repositório JoysticKnights.",
      "disclosure": "Produto próprio do fundador, apresentado como experiência de desenvolvimento e operação."
    },
    "gallery": [
      {
        "kind": "editorial",
        "title": "Seleção da redação",
        "caption": "Interface pública do JoysticKnights, capturada em setembro de 2026.",
        "asset": {
          "src": "/images/projects/joysticknights-live.webp",
          "alt": "Portal JoysticKnights com menu lateral e seleção de notícias sobre games",
          "width": 1265,
          "height": 712
        }
      }
    ],
    "seo": {
      "title": "JoysticKnights: portal editorial Next.js e WordPress",
      "description": "Portal próprio de games com frontend Next.js, React, TypeScript e WordPress como CMS."
    },
    "sources": [
      {
        "label": "Visitar o portal",
        "href": "https://joysticknights.com.br/"
      },
      {
        "label": "Código no GitHub",
        "href": "https://github.com/pedrobragabes/JoysticKnights"
      }
    ]
  },
  {
    "slug": "rastreia-gastos",
    "name": "RastreIAGastos",
    "eyebrow": "Protótipo de controle financeiro com IA/OCR",
    "summary": "Exploração de uma rotina que extrai dados de comprovantes e organiza gastos para reduzir digitação manual.",
    "status": "Protótipo",
    "period": "Em desenvolvimento",
    "featured": false,
    "categories": [
      "Protótipo",
      "Sistema web"
    ],
    "services": [
      "sistemas-web",
      "apis-e-integracoes",
      "automacoes"
    ],
    "problem": [
      "Registrar gastos manualmente a partir de comprovantes é lento e sujeito a campos incompletos."
    ],
    "context": [
      "O projeto ainda valida fluxo, qualidade de extração e quais informações geram valor antes de evoluir para produto."
    ],
    "solution": [
      "Protótipo com React, FastAPI, PostgreSQL e experimentos de OCR/IA para extração e validação assistida."
    ],
    "features": [
      "upload de comprovante",
      "extração OCR",
      "validação de campos",
      "API",
      "organização de gastos"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "IA/OCR"
    ],
    "results": [
      "A arquitetura inicial e APIs de validação foram estruturadas; o produto ainda está em desenvolvimento."
    ],
    "metrics": [
      {
        "value": "MVP",
        "label": "status",
        "note": "protótipo em validação"
      }
    ],
    "evidence": {
      "nature": "Protótipo",
      "lastReviewed": "16 de julho de 2026",
      "basis": "Arquitetura e APIs iniciais desenvolvidas por Pedro Braga.",
      "disclosure": "Não é apresentado como produto finalizado nem como operação de cliente."
    },
    "gallery": [
      {
        "kind": "finance",
        "title": "RastreIAGastos",
        "caption": "Protótipo de controle financeiro com IA/OCR"
      }
    ],
    "seo": {
      "title": "RastreIAGastos: protótipo financeiro com IA e OCR",
      "description": "Protótipo em desenvolvimento para extrair e validar gastos com React, FastAPI, PostgreSQL e OCR."
    }
  },
  {
    "slug": "cadastra-facil",
    "name": "CadastraFácil",
    "eyebrow": "Protótipo de cadastro para PMEs",
    "summary": "Produto independente em desenvolvimento para cadastro assistido por IA, revisão humana e criação de rascunhos no WooCommerce.",
    "status": "Em desenvolvimento",
    "period": "Em desenvolvimento",
    "featured": false,
    "categories": [
      "Protótipo",
      "Automação"
    ],
    "services": [
      "sistemas-web",
      "automacoes",
      "apis-e-integracoes"
    ],
    "problem": [
      "Cadastrar produtos um a um consome tempo e gera diferenças de padrão entre descrições, códigos e categorias."
    ],
    "context": [
      "A proposta está sendo validada para pequenas e médias empresas, com foco em assistência e revisão em vez de automação opaca."
    ],
    "solution": [
      "APIs iniciais para validação de dados, interface React e experimentos de automação para sugerir campos de produto."
    ],
    "features": [
      "cadastro assistido",
      "validação de dados",
      "padronização",
      "API",
      "revisão antes de salvar"
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "IA/OCR"
    ],
    "results": [
      "O fluxo e as APIs iniciais estão em desenvolvimento; ainda não é apresentado como produto finalizado."
    ],
    "metrics": [
      {
        "value": "MVP",
        "label": "status",
        "note": "protótipo em validação"
      }
    ],
    "evidence": {
      "nature": "Projeto próprio",
      "lastReviewed": "16 de julho de 2026",
      "basis": "Fluxo e APIs iniciais desenvolvidos por Pedro Braga.",
      "disclosure": "Não é apresentado como produto finalizado nem como operação de cliente."
    },
    "gallery": [
      {
        "kind": "catalog",
        "title": "CadastraFácil",
        "caption": "Protótipo de cadastro para PMEs"
      }
    ],
    "seo": {
      "title": "CadastraFácil: protótipo de cadastro assistido",
      "description": "Protótipo em desenvolvimento para reduzir digitação e padronizar cadastros de produtos em PMEs."
    }
  },
  {
    "slug": "hybrid-homelab",
    "name": "Hybrid Homelab",
    "eyebrow": "Laboratório de infraestrutura",
    "summary": "Ambiente prático com Proxmox, Docker/LXC, Linux e Nginx para estudar redes, isolamento, SSL e deploy de aplicações.",
    "status": "Laboratório",
    "period": "Contínuo",
    "featured": false,
    "categories": [
      "Infraestrutura"
    ],
    "services": [
      "infraestrutura-e-suporte"
    ],
    "problem": [
      "Aprender infraestrutura apenas em ambientes descartáveis não reproduz as decisões e falhas da operação contínua."
    ],
    "context": [
      "O homelab funciona como laboratório pessoal, não como infraestrutura de cliente ou serviço de hosting comercial."
    ],
    "solution": [
      "Serviços isolados em Docker e LXC sobre Proxmox, com Nginx, SSL, redes privadas, Tailscale e rotinas de publicação."
    ],
    "features": [
      "virtualização",
      "containers",
      "proxy reverso",
      "SSL",
      "rede privada",
      "deploy"
    ],
    "technologies": [
      "Proxmox VE",
      "Docker",
      "LXC",
      "Linux",
      "Nginx",
      "Tailscale"
    ],
    "results": [
      "O ambiente permite testar deploy, isolamento e recuperação antes de aplicar padrões semelhantes em projetos."
    ],
    "metrics": [
      {
        "value": "24/7",
        "label": "laboratório",
        "note": "operação e aprendizado contínuos"
      }
    ],
    "evidence": {
      "nature": "Laboratório técnico",
      "lastReviewed": "16 de julho de 2026",
      "basis": "Ambiente pessoal de estudo, testes e operação de Pedro Braga.",
      "disclosure": "Não representa infraestrutura de cliente ou serviço comercial de hospedagem."
    },
    "gallery": [
      {
        "kind": "infra",
        "title": "Hybrid Homelab",
        "caption": "Laboratório de infraestrutura"
      }
    ],
    "seo": {
      "title": "Hybrid Homelab: Proxmox, Docker, Linux e Nginx",
      "description": "Laboratório prático de infraestrutura com Proxmox, Docker/LXC, Linux, Nginx, SSL e redes privadas."
    }
  }
];

export const listedProjects = projects.filter(project => project.listed !== false);
export const featuredProjects = listedProjects.filter(project => project.featured);
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
