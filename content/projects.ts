import type { ServiceSlug } from "./services";

export type ProjectStatus =
  | "Em desenvolvimento"
  | "Beta protegido"
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
  origin?: string;
  asset?: ProjectGalleryAsset;
};

export type Project = {
  slug: string;
  listed?: boolean;
  sources?: { label: string; href: string }[];
  name: string;
  caseTitle?: string;
  architecture?: {
    title: string;
    steps: { label: string; detail: string }[];
    note?: string;
  };
  components?: { title: string; status: string; description: string }[];
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
    "summary": "E-commerce, sincronização de estoque e ferramentas internas para conectar a operação ao ERP Athos. Experiência profissional de Pedro Braga na AquaFlora.",
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
      "O ERP Athos e a loja WooCommerce não compartilham uma integração nativa adequada à rotina. Estoque e preços passam por exportações estruturadas e precisam chegar ao catálogo sem sobrescrever seu conteúdo.",
      "Além da loja, a operação precisa consultar produtos, organizar ferramentas internas e gerenciar conteúdo para telas. Cada frente tem seu próprio ciclo de implantação."
    ],
    "context": [
      "Experiência profissional de Pedro Braga, fundador da BragaCode, na AquaFlora AgroShop.",
      "A loja pública, a rotina de sincronização e a plataforma interna têm ciclos de implantação independentes."
    ],
    "solution": [
      "Loja em operação: manutenção e evolução do catálogo WordPress/WooCommerce.",
      "Stock Sync LITE: rotina Python que lê o CSV do ERP Athos e atualiza estoque e preço dos SKUs já existentes no WooCommerce, preservando descrições, categorias, imagens e SEO.",
      "AquaApps e API: base implementada e validada localmente com Next.js e Fastify. Consulta por nome, SKU e EAN, sessões assinadas e permissões por perfil. A implantação no servidor ainda é uma etapa separada.",
      "AquaTV: MVP local de digital signage com dashboard, API e player web para mídia, playlists, agendamento e acompanhamento dos dispositivos. O aplicativo Android TV é uma etapa futura."
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
      "lastReviewed": "25 de setembro de 2026",
      "basis": "Loja pública e documentação dos repositórios aquaflora e aquaflora-stock-sync. README do AquaTV para o MVP local.",
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
    ],
    "caseTitle": "Modernizando uma operação de varejo conectada a um ERP legado",
    "components": [
      {
        "title": "Stock Sync",
        "status": "Rotina de integração",
        "description": "Python lê a exportação CSV do ERP Athos e atualiza estoque e preço via WooCommerce REST API."
      },
      {
        "title": "Hub operacional",
        "status": "Base validada localmente",
        "description": "Aplicações internas para consulta por nome, SKU e EAN, com permissões por perfil."
      },
      {
        "title": "API AquaFlora",
        "status": "Implantação independente",
        "description": "Serviços internos em Fastify para conectar as ferramentas à operação."
      },
      {
        "title": "AquaTV",
        "status": "MVP local",
        "description": "Dashboard, API e player web. Playlists e agendamento; Android TV permanece planejado."
      }
    ],
    "architecture": {
      "title": "Do ERP à loja, com responsabilidades claras",
      "steps": [
        {
          "label": "ERP Athos",
          "detail": "Origem de estoque e preços"
        },
        {
          "label": "CSV",
          "detail": "Exportação estruturada"
        },
        {
          "label": "Stock Sync",
          "detail": "Leitura e sincronização"
        },
        {
          "label": "WooCommerce",
          "detail": "Catálogo da loja virtual"
        }
      ],
      "note": "Em paralelo, APIs internas apoiam o hub operacional. AquaTV cuida das mídias e telas, com implantação independente da loja."
    }
  },
  {
    "featured": true,
    "listed": true,
    "metrics": [],
    "period": "Em evolução",
    "results": [
      "A base implementada permite evoluir a experiência pública mantendo o WordPress como fonte editorial.",
      "O projeto documenta como validar beta, conteúdo, URLs e retorno à interface anterior antes da mudança definitiva.",
      "A migração do PromoGames permanece em preparação; não são atribuídos resultados de audiência ou ganhos comerciais."
    ],
    "gallery": [
      {
        "kind": "editorial",
        "title": "Home editorial",
        "caption": "Prévia local do frontend Next.js consumindo conteúdo público do WordPress, capturada em 25 de setembro de 2026. Não representa cutover em produção.",
        "origin": "Captura da prévia local",
        "asset": {
          "src": "/images/projects/promogames-home.jpg",
          "alt": "Home real do frontend PromoGames, com seleção editorial, canais e notícias",
          "width": 1440,
          "height": 1000
        }
      },
      {
        "kind": "editorial",
        "title": "Leitura de um artigo",
        "caption": "Página de matéria na implementação headless. Conteúdo e mídia vêm do CMS existente.",
        "origin": "Captura da prévia local",
        "asset": {
          "src": "/images/projects/promogames-article.jpg",
          "alt": "Artigo no frontend PromoGames com título, autoria e imagem do conteúdo editorial",
          "width": 1440,
          "height": 1100
        }
      },
      {
        "kind": "editorial",
        "title": "Experiência no celular",
        "caption": "A mesma Home em viewport mobile. A captura mostra a implementação responsiva, sem mockup de aparelho.",
        "origin": "Captura da prévia local",
        "asset": {
          "src": "/images/projects/promogames-mobile.jpg",
          "alt": "Home do PromoGames em tela de celular, com navegação e destaques editoriais",
          "width": 430,
          "height": 932
        }
      }
    ],
    "sources": [],
    "slug": "promogames",
    "name": "PromoGames",
    "caseTitle": "Modernização de uma plataforma editorial sem abandonar o WordPress",
    "eyebrow": "Modernização editorial · WordPress headless",
    "summary": "Uma camada pública em Next.js, preservando o WordPress como CMS e o fluxo editorial existente. Implementação com migração em preparação.",
    "status": "Em desenvolvimento",
    "categories": [
      "Conteúdo",
      "Sistema web"
    ],
    "services": [
      "sistemas-web",
      "apis-e-integracoes"
    ],
    "problem": [
      "Modernizar a experiência pública sem obrigar a redação a abandonar o WordPress ou reconstruir seu acervo.",
      "A mudança precisa preservar URLs, mídia, indexação, metadados, comentários e o fluxo editorial. A troca do frontend exige um caminho de retorno."
    ],
    "context": [
      "O projeto separa a camada pública em Next.js da administração editorial em WordPress.",
      "A documentação prevê um piloto com conteúdo do JoysticKnights antes da migração do PromoGames. A implementação não é apresentada como migração comercial concluída."
    ],
    "solution": [
      "Frontend independente em Next.js, React e TypeScript, integrado à WordPress REST API.",
      "Renderização no servidor, cache e revalidação de conteúdo; preview editorial e webhooks assinados.",
      "Conteúdo sanitizado, metadata, canonical, Open Graph, JSON-LD, sitemap e preservação de permalinks.",
      "Testes unitários e E2E; documentação de beta, QA, backup, cutover e rollback."
    ],
    "features": [
      "WordPress como CMS",
      "Frontend independente",
      "SSR e cache / ISR",
      "Preview editorial",
      "Revalidação por webhook",
      "Comentários moderados",
      "SEO e URLs legadas",
      "Migração e rollback"
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress REST API",
      "Vitest",
      "Playwright"
    ],
    "evidence": {
      "nature": "Trabalho profissional",
      "lastReviewed": "25 de setembro de 2026",
      "basis": "README, aplicação web, plugin editorial e documentação de migração do repositório PromoGames.",
      "disclosure": "Trabalho de modernização em desenvolvimento. A contratação da BragaCode e o cutover em produção não são presumidos."
    },
    "architecture": {
      "title": "O conteúdo continua no WordPress. A experiência pode evoluir.",
      "steps": [
        {
          "label": "Redação",
          "detail": "Publicação e curadoria"
        },
        {
          "label": "WordPress",
          "detail": "Conteúdo, mídia e administração"
        },
        {
          "label": "REST + webhooks",
          "detail": "Consulta e revalidação"
        },
        {
          "label": "Next.js",
          "detail": "Interface pública, SSR e cache"
        }
      ],
      "note": "Preview editorial, comentários e SEO fazem parte da integração. Beta e rollback são etapas de validação, não evidência de cutover concluído."
    },
    "components": [
      {
        "title": "WordPress",
        "status": "Fonte editorial",
        "description": "Conteúdo, categorias, mídia, SEO editorial e administração."
      },
      {
        "title": "Next.js",
        "status": "Camada pública",
        "description": "Interface, renderização, metadata, preview, revalidação, comentários e consentimento."
      }
    ],
    "seo": {
      "title": "PromoGames: modernização editorial com WordPress headless",
      "description": "Frontend Next.js independente do WordPress, com SEO, preview, revalidação, testes e estratégia de migração e rollback."
    }
  },
  {
    "featured": true,
    "listed": true,
    "metrics": [],
    "period": "Em evolução",
    "results": [
      "MVP funcional em beta protegido, com a vitrine e o painel operacional implementados.",
      "Estoque, pagamento e pedido têm validação no servidor e tratamento para confirmações repetidas.",
      "Go-live comercial e integrações de produção ainda exigem validação; não são declarados faturamento, clientes ativos ou vendas."
    ],
    "gallery": [
      {
        "kind": "store",
        "title": "Da vitrine à operação",
        "caption": "Catálogo, estoque, pedidos e pagamentos são partes da mesma aplicação."
      }
    ],
    "sources": [],
    "slug": "braga-commerce",
    "name": "Braga Commerce",
    "caseTitle": "Infraestrutura de e-commerce além da vitrine",
    "eyebrow": "Produto próprio · e-commerce para pequenos negócios",
    "summary": "Catálogo, carrinho, checkout e uma base operacional para estoque, pedidos e pagamentos. Produto próprio em beta protegido.",
    "status": "Beta protegido",
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
      "Uma loja virtual precisa manter preço, disponibilidade e pagamento consistentes, mesmo com acessos simultâneos ou notificações repetidas.",
      "A equipe precisa de um painel protegido para tratar catálogo, estoque e pedidos, além da vitrine que o cliente utiliza."
    ],
    "context": [
      "Plataforma própria para pequenos comércios locais. O MVP está em beta protegido por senha; o lançamento comercial ainda depende de validações operacionais.",
      "O projeto tem escopo próprio e não se confunde com o diretório Comércio BES."
    ],
    "solution": [
      "Vitrine responsiva, variações e carrinho persistente, com cotação e checkout validados no servidor.",
      "PostgreSQL e Prisma para pedidos e reserva atômica de estoque, com expiração e liberação controladas.",
      "Integração Mercado Pago Checkout Pro, webhook autenticado e transições idempotentes para não processar a mesma confirmação duas vezes.",
      "Autenticação administrativa com Supabase e autorização por função e loja, acompanhadas de testes e rotinas operacionais."
    ],
    "features": [
      "Carrinho persistente",
      "Checkout validado no servidor",
      "Autenticação e autorização",
      "Reserva de estoque",
      "Mercado Pago",
      "Webhooks idempotentes",
      "Painel operacional",
      "Testes automatizados"
    ],
    "technologies": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Mercado Pago",
      "Vitest"
    ],
    "evidence": {
      "nature": "Projeto próprio",
      "lastReviewed": "25 de setembro de 2026",
      "basis": "README e documentação de arquitetura, checkout, pagamentos e beta do repositório Braga-Commerce.",
      "disclosure": "Produto próprio em beta protegido. Dados do piloto e interfaces administrativas não são expostos."
    },
    "architecture": {
      "title": "Uma compra depende de mais do que uma tela",
      "steps": [
        {
          "label": "Carrinho",
          "detail": "Itens e variações"
        },
        {
          "label": "Checkout",
          "detail": "Preço e estoque validados"
        },
        {
          "label": "Reserva",
          "detail": "Transação no PostgreSQL"
        },
        {
          "label": "Pagamento",
          "detail": "Mercado Pago + webhook"
        }
      ],
      "note": "A confirmação autenticada atualiza o pedido de forma idempotente. Reservas expiradas são liberadas por uma rotina própria."
    },
    "seo": {
      "title": "Braga Commerce: checkout, estoque e pagamentos",
      "description": "Plataforma própria em beta protegido: checkout, PostgreSQL, Prisma, reserva de estoque e integração idempotente com Mercado Pago."
    }
  },
  {
    "slug": "joysticknights",
    "name": "JoysticKnights",
    "eyebrow": "Produto próprio · plataforma editorial",
    "summary": "Um produto próprio que reúne publicação, CMS, SEO e manutenção contínua. Engenharia editorial com responsabilidade sobre a evolução da plataforma.",
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
      "Projeto próprio de Pedro Braga, mantido desde 2020. O frontend atual foi conferido no site público e no repositório.",
      "É um produto próprio do fundador, com responsabilidade contínua sobre conteúdo, manutenção e decisões de arquitetura."
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
    ],
    "caseTitle": "Evolução contínua de uma plataforma editorial própria"
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
    ],
    "listed": false
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
    },
    "listed": false
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
    },
    "listed": false
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
    },
    "listed": false
  }
];

export const listedProjects = projects.filter(project => project.listed !== false);
export const featuredProjects = listedProjects.filter(project => project.featured);
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
