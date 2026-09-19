import { z } from "zod";
import type { ServiceSlug } from "./services";

export type ProjectStatus =
  | "Em desenvolvimento"
  | "Em evolução"
  | "Concluído"
  | "Em operação"
  | "Protótipo"
  | "Laboratório"
  | "Piloto"
  | "Beta"
  | "Estudo/protótipo";

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
  flow?: string[];
};

export type Project = {
  slug: string;
  editorialStatus: "publicado" | "rascunho";
  role: string;
  parentSlug?: string;
  decisions?: string[];
  limits?: string[];
  modules?: { title: string; status: string; description: string; slug?: string }[];
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

const projectContent: Project[] = [
  {
    "slug": "aquaflora-agroshop",
    "name": "AquaFlora: do ERP à loja",
    "eyebrow": "AquaFlora AgroShop · integração operacional",
    "summary": "Estoque, preços e consulta interna conectados à operação da AquaFlora AgroShop. Evolução do WooCommerce e integração com ERP por Pedro Braga.",
    "status": "Em operação",
    "period": "Revisado em setembro de 2026",
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
      "A atualização exigia abrir o exportador do ERP, escolher categorias, colunas e formato e preparar o arquivo antes de alimentar a loja.",
      "Era preciso atualizar preço e estoque sem sobrescrever descrições, imagens e categorias já organizadas no WooCommerce.",
      "Para consultas de produtos, a equipe precisava de uma interface própria com busca por nome, código, SKU e EAN."
    ],
    "context": [
      "Experiência profissional de Pedro Braga na AquaFlora AgroShop, apresentada como trabalho do fundador da BragaCode.",
      "O desafio era conectar o ERP existente à loja e às ferramentas internas, mantendo cada serviço independente."
    ],
    "solution": [
      "A rotina Stock Sync processa o CSV exportado pelo ERP, normaliza os dados e valida os identificadores antes de enviar atualizações.",
      "O modo LITE usa um mapeamento de produtos existentes e limita a escrita a preço e estoque. Nomes, descrições, imagens, categorias e decisões editoriais permanecem na loja.",
      "Um conector independente prepara um snapshot de catálogo. A API Fastify e a interface Next.js oferecem consulta com controle de acesso e indicação da idade dos dados.",
      "A loja WooCommerce recebe manutenção e evolução. A sincronização agendada não depende da API de consulta interna."
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
      "Segundo o relato do fundador, a atualização deixou de depender da sequência manual de exportação e preparação do arquivo.",
      "O modo LITE separa a atualização operacional da edição do catálogo e registra as execuções.",
      "O fundador relata uso diário das aplicações internas. A documentação consultada comprova a base implementada; esta revisão não realizou auditoria do ambiente operacional."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Trabalho profissional",
      "lastReviewed": "18 de setembro de 2026",
      "basis": "Documentação técnica consultada e relato operacional do fundador registrado no briefing de setembro de 2026.",
      "disclosure": "Experiência de Pedro Braga na AquaFlora; não implica contratação da BragaCode. A captura retrata apenas a loja pública."
    },
    "gallery": [
      {
        "kind": "store",
        "title": "A loja pública da AquaFlora",
        "caption": "Interface pública capturada em 6 de setembro de 2026. Não representa as aplicações internas.",
        "asset": {
          "src": "/images/projects/aquaflora-live.webp",
          "alt": "Página inicial da AquaFlora AgroShop, com navegação e vitrine de produtos",
          "width": 1265,
          "height": 712
        }
      },
      {
        "kind": "sync",
        "title": "Do arquivo à atualização",
        "caption": "Fluxo simplificado do Stock Sync LITE. A consulta interna usa um conector independente.",
        "flow": [
          "CSV do ERP",
          "Validação e mapeamento",
          "Preço e estoque",
          "WooCommerce"
        ]
      }
    ],
    "confidentialityNote": "Catálogo real completo, regras comerciais, credenciais e interfaces internas não são exibidos.",
    "seo": {
      "title": "Integração de ERP, estoque e WooCommerce",
      "description": "Como uma rotina de processamento de CSV conecta preço e estoque à loja WooCommerce sem sobrescrever o conteúdo editorial."
    },
    "editorialStatus": "publicado",
    "role": "Desenvolvimento por Pedro Braga, fundador da BragaCode.",
    "decisions": [
      "Manter o ERP e o WooCommerce: integrar as fontes disponíveis sem exigir a troca de todo o sistema.",
      "Atualizar somente os produtos mapeados: impedir que a rotina de estoque recrie ou substitua o catálogo editorial.",
      "Usar fluxos independentes: uma falha na consulta interna não torna a nova API um intermediário obrigatório do Stock Sync."
    ],
    "limits": [
      "A sincronização é periódica, não em tempo real.",
      "O conjunto não é um ERP completo. Finanças, emissão fiscal e compras não fazem parte do escopo descrito.",
      "O atendimento conversacional continua em desenvolvimento e não integra o fluxo operacional apresentado.",
      "Não foram publicadas métricas de economia, receita ou volume de catálogo."
    ],
    "modules": [
      {
        "title": "Loja WooCommerce",
        "status": "Em operação",
        "description": "Manutenção do catálogo e evolução da experiência da loja."
      },
      {
        "title": "Stock Sync",
        "status": "Uso operacional relatado",
        "description": "Processamento periódico de CSV; atualização restrita a estoque e preço."
      },
      {
        "title": "Consulta interna e API",
        "status": "Uso diário relatado",
        "description": "Busca por nome, SKU e EAN, permissões e indicação da idade do catálogo."
      },
      {
        "title": "Sinalização digital",
        "status": "Piloto em dispositivo físico",
        "description": "Dashboard e player Android TV. Validações de operação ainda pendentes.",
        "slug": "sinalizacao-digital"
      }
    ],
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
    "slug": "joysticknights",
    "name": "JoysticKnights",
    "eyebrow": "Produto próprio · plataforma editorial",
    "summary": "Evolução de um portal próprio: uma experiência de leitura em Next.js, mantendo o WordPress e o fluxo de publicação da redação.",
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
      "A interface pública precisava evoluir sem obrigar a redação a abandonar o WordPress e sem descartar o conteúdo existente."
    ],
    "context": [
      "Portal editorial próprio do fundador, com conteúdo público de games e cultura geek. Não representa um cliente de software da BragaCode."
    ],
    "solution": [
      "Frontend Next.js, React e TypeScript integrado ao WordPress como CMS editorial.",
      "Rotas de notícias, análises e categorias, navegação temática e páginas individuais de conteúdo.",
      "Rotinas documentadas de verificação técnica e publicação, com frontend e CMS mantidos como partes distintas."
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
      "O portal público mantém notícias e análises acessíveis na nova interface.",
      "O conteúdo continua administrado no WordPress; a experiência de leitura é construída no frontend Next.js."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Projeto próprio",
      "lastReviewed": "18 de setembro de 2026",
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
    "editorialStatus": "publicado",
    "role": "Criação, desenvolvimento e manutenção do portal próprio por Pedro Braga.",
    "decisions": [
      "Preservar o CMS para manter a rotina editorial enquanto a interface pública evolui.",
      "Separar apresentação e conteúdo sem apresentar headless como solução obrigatória para qualquer portal."
    ],
    "limits": [
      "A mudança de arquitetura não comprova, sozinha, ganho de tráfego ou conversão.",
      "Marcas citadas na cobertura editorial não são clientes de software da BragaCode."
    ]
  },
  {
    "slug": "sinalizacao-digital",
    "name": "AquaTV: conteúdo da loja em uma tela",
    "eyebrow": "AquaFlora AgroShop · sinalização digital",
    "summary": "Painel para organizar conteúdos e playlists, com player Android TV e cache local. Piloto em dispositivo físico, associado à mesma operação do case de integração.",
    "status": "Piloto",
    "period": "Instalação registrada em agosto de 2026",
    "featured": false,
    "categories": [
      "Sistema web"
    ],
    "services": [
      "sistemas-web",
      "infraestrutura-e-suporte"
    ],
    "problem": [
      "Centralizar imagens, vídeos e programação exibidos na loja, com reprodução dos arquivos em cache durante falhas de rede."
    ],
    "context": [
      "Componente da mesma experiência profissional apresentada no case de integração de varejo. Não representa um segundo cliente."
    ],
    "solution": [
      "Dashboard Next.js para conteúdos, playlists, programação e acompanhamento da TV.",
      "API Node.js/Express com Prisma e SQLite, separada do painel.",
      "Player Expo/React Native TV com cache transacional, reprodução offline e recuperação de falhas de vídeo."
    ],
    "features": [
      "Playlists",
      "Programação de conteúdos",
      "Cache local",
      "Player Android TV"
    ],
    "technologies": [
      "Next.js",
      "Express",
      "Prisma",
      "SQLite",
      "Expo",
      "React Native TV"
    ],
    "results": [
      "A documentação registra a instalação do primeiro APK assinado em dispositivo físico.",
      "O núcleo local está implementado; os testes de operação prolongada ainda precisam ser concluídos."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Trabalho profissional",
      "lastReviewed": "18 de setembro de 2026",
      "basis": "README técnico consultado; sem inspeção do dispositivo nesta revisão.",
      "disclosure": "Recorte da mesma operação de varejo. Telas, conteúdo comercial e identificadores do dispositivo não são divulgados."
    },
    "gallery": [
      {
        "kind": "infra",
        "title": "Do painel à tela",
        "caption": "Arquitetura local documentada. A TV mantém uma cópia dos arquivos para reprodução offline.",
        "flow": [
          "Painel web",
          "API e arquivos locais",
          "Cache no dispositivo",
          "Android TV"
        ]
      }
    ],
    "seo": {
      "title": "Sinalização digital com player Android TV",
      "description": "Piloto de painel de conteúdos e playlists, API e player Android TV com cache local e reprodução offline."
    },
    "role": "Desenvolvimento do painel, API e player por Pedro Braga.",
    "decisions": [
      "Manter a API separada do painel para preservar o contrato do player.",
      "Cache local para reproduzir conteúdos já sincronizados durante indisponibilidade da rede."
    ],
    "limits": [
      "Instalação inicial não equivale a operação contínua validada.",
      "Calibração, codecs, reinicialização, teste prolongado e backup externo ainda aparecem como pendências na documentação.",
      "Sem integração automática de preços com o ERP declarada."
    ],
    "parentSlug": "aquaflora-agroshop",
    "editorialStatus": "publicado",
    "sources": [
      {
        "label": "Documentação técnica",
        "href": "https://github.com/pedrobragabes/AquaFloraTV"
      }
    ]
  },
  {
    "slug": "braga-commerce",
    "name": "Braga Commerce",
    "eyebrow": "Produto próprio · e-commerce em beta",
    "summary": "Vitrine, carrinho, checkout e painel operacional para pequenos comércios. Beta protegido por senha, com regras de preço e estoque validadas no servidor.",
    "status": "Beta",
    "period": "Revisado em setembro de 2026",
    "featured": false,
    "categories": [
      "E-commerce",
      "Sistema web"
    ],
    "services": [
      "ecommerce",
      "sistemas-web"
    ],
    "problem": [
      "Uma loja pequena precisa de catálogo, pedidos e administração de estoque em um fluxo transacional enxuto."
    ],
    "context": [
      "Produto próprio com loja piloto. A demonstração não é apresentada como cliente pagante nem como resultado de vendas."
    ],
    "solution": [
      "Vitrine com categorias, variações, carrinho e checkout sem cadastro.",
      "Preço e disponibilidade recalculados no servidor e reserva de estoque.",
      "Integração Mercado Pago implementada, com webhook assinado e processamento idempotente.",
      "Painel protegido por funções, com catálogo, pedidos e estoque."
    ],
    "features": [
      "Vitrine responsiva",
      "Carrinho",
      "Checkout no servidor",
      "Reserva de estoque",
      "Painel operacional"
    ],
    "technologies": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Mercado Pago"
    ],
    "results": [
      "MVP documentado e beta publicado sob proteção por senha.",
      "Consistência de preço, estoque e eventos de pagamento tratada no backend."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Projeto próprio",
      "lastReviewed": "18 de setembro de 2026",
      "basis": "README atual do repositório público Braga Commerce.",
      "disclosure": "Produto em beta; sem transações comerciais ou receita declaradas."
    },
    "gallery": [
      {
        "kind": "store",
        "title": "Uma compra validada no servidor",
        "caption": "Fluxo de responsabilidade documentado no beta; não é uma captura da aplicação.",
        "flow": [
          "Vitrine e carrinho",
          "Cotação no servidor",
          "Reserva de estoque",
          "Pagamento"
        ]
      }
    ],
    "seo": {
      "title": "Braga Commerce: e-commerce em beta",
      "description": "Produto próprio em beta com vitrine, carrinho, checkout validado no servidor, reserva de estoque e painel operacional."
    },
    "role": "Desenvolvimento do produto por Pedro Braga.",
    "decisions": [
      "Recalcular preço e disponibilidade no servidor, sem confiar nos valores enviados pelo navegador.",
      "Processar eventos de pagamento de forma idempotente, evitando duplicação por novas tentativas."
    ],
    "limits": [
      "Go-live comercial ainda depende dos aceites de infraestrutura, pagamentos, remetente e textos legais.",
      "Integração implementada não equivale a transações reais ou testes ponta a ponta aprovados.",
      "Marketplace, ERP, emissão fiscal e plataforma multiloja completa estão fora do MVP."
    ],
    "sources": [
      {
        "label": "Código e documentação",
        "href": "https://github.com/pedrobragabes/Braga-Commerce"
      }
    ],
    "editorialStatus": "publicado"
  },
  {
    "slug": "comercio-bes",
    "name": "Comércio BES",
    "eyebrow": "Produto próprio · guia comercial local",
    "summary": "Guia comercial de Boa Esperança do Sul: busca por categoria, perfis de estabelecimentos e contato direto. Produto próprio em evolução.",
    "status": "Em desenvolvimento",
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
      "lastReviewed": "18 de setembro de 2026",
      "basis": "Escopo registrado no portfólio público do fundador; funcionamento atual não reproduzido nesta revisão.",
      "disclosure": "Resultados descritos de forma qualitativa; não há métricas comerciais publicadas."
    },
    "gallery": [
      {
        "kind": "directory",
        "title": "Comércio BES",
        "caption": "Guia de descoberta de negócios locais; não é um marketplace transacional."
      }
    ],
    "seo": {
      "title": "Comércio BES: guia comercial local em desenvolvimento",
      "description": "Produto próprio para descoberta de negócios locais, com busca, perfis e contato. Escopo separado de uma loja transacional."
    },
    "sources": [],
    "editorialStatus": "publicado",
    "role": "Desenvolvimento por Pedro Braga, fundador da BragaCode.",
    "limits": [
      "Sem volume de estabelecimentos, clientes ou pedidos declarado.",
      "Repositório e aplicação pública não foram disponibilizados neste estudo."
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
    "metrics": [],
    "evidence": {
      "nature": "Protótipo",
      "lastReviewed": "18 de setembro de 2026",
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
    "editorialStatus": "publicado",
    "role": "Desenvolvimento por Pedro Braga, fundador da BragaCode.",
    "listed": false
  },
  {
    "slug": "cadastra-facil",
    "name": "CadastraFácil",
    "eyebrow": "Produto próprio · fundação em desenvolvimento",
    "summary": "Produto independente em desenvolvimento para transformar informações de produtos em cadastros revisáveis. A proposta prevê publicação como rascunho no WooCommerce.",
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
      "A base atual organiza contratos, configuração e portas de conectores.",
      "O adapter WooCommerce implementa leitura via REST v3; persistência, isolamento e validação em sandbox ainda compõem a evolução da fundação."
    ],
    "features": [
      "Contratos de dados",
      "Conector de leitura WooCommerce",
      "Base de configuração"
    ],
    "technologies": [
      "TypeScript",
      "WooCommerce REST API"
    ],
    "results": [
      "Fundação e conectores iniciais documentados. O fluxo comercial completo ainda não está disponível."
    ],
    "metrics": [],
    "evidence": {
      "nature": "Projeto próprio",
      "lastReviewed": "18 de setembro de 2026",
      "basis": "Documentação atual da fundação e dos conectores, consultada em setembro de 2026.",
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
      "title": "CadastraFácil: produto em desenvolvimento",
      "description": "Fundação de um produto de cadastro assistido, com conector de leitura WooCommerce e evolução prevista para revisão humana."
    },
    "editorialStatus": "publicado",
    "role": "Desenvolvimento por Pedro Braga, fundador da BragaCode.",
    "limits": [
      "Revisão humana e publicação em rascunho fazem parte da proposta, não de uma operação comercial validada.",
      "Sem planos, preços, teste grátis ou disponibilidade comercial."
    ]
  },
  {
    "slug": "hybrid-homelab",
    "name": "Hybrid Homelab",
    "eyebrow": "Laboratório de infraestrutura",
    "summary": "Ambiente prático com Proxmox, Docker/LXC, Linux e Nginx para estudar redes, isolamento, SSL e deploy de aplicações.",
    "status": "Estudo/protótipo",
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
    "metrics": [],
    "evidence": {
      "nature": "Laboratório técnico",
      "lastReviewed": "18 de setembro de 2026",
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
    "editorialStatus": "publicado",
    "role": "Desenvolvimento por Pedro Braga, fundador da BragaCode.",
    "listed": false
  }
];

const publicProjectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(3), summary: z.string().min(30), role: z.string().min(10),
  editorialStatus: z.enum(["publicado", "rascunho"]),
  status: z.enum(["Em desenvolvimento", "Em evolução", "Concluído", "Em operação", "Protótipo", "Laboratório", "Piloto", "Beta", "Estudo/protótipo"]),
  problem: z.array(z.string().min(10)).min(1),
  context: z.array(z.string().min(10)).min(1),
  solution: z.array(z.string().min(10)).min(1),
  results: z.array(z.string().min(10)).min(1),
  gallery: z.array(z.object({ title: z.string().min(1), caption: z.string().min(1),
    asset: z.object({src: z.string().startsWith("/"), alt: z.string().min(1), width: z.number().positive(), height: z.number().positive()}).optional()
  })).min(1),
  sources: z.array(z.object({label: z.string().min(1), href: z.url().startsWith("https://")})).optional(),
  seo: z.object({title: z.string().min(10), description: z.string().min(30)}),
});
const seenSlugs = new Set<string>();
for (const project of projectContent) {
  z.enum(["publicado", "rascunho"]).parse(project.editorialStatus);
  if (seenSlugs.has(project.slug)) throw new Error(`Slug de projeto duplicado: ${project.slug}`);
  seenSlugs.add(project.slug);
  if (project.editorialStatus === "publicado") publicProjectSchema.parse(project);
}
export const projects = projectContent.filter(project => project.editorialStatus === "publicado");
for (const project of projects) {
  if (project.parentSlug && !projects.some(parent => parent.slug === project.parentSlug)) throw new Error(`Projeto-pai inválido: ${project.slug}`);
}
export const listedProjects = projects.filter(project => project.listed !== false);
export const featuredProjects = listedProjects.filter(project => project.featured);
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
