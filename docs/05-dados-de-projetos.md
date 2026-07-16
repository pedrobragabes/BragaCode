# Estrutura de dados dos projetos

## 1. Escolha editorial

Projetos serão objetos TypeScript. O contrato diferencia evidência pública, resultado qualitativo e informação ainda não autorizada. Isso reduz o risco de uma página publicar número provisório como resultado final.

## 2. Contrato proposto

```ts
type ProjectStatus = "em-operacao" | "concluido" | "evolucao" | "prototipo" | "laboratorio";

type ProjectMetric = {
  value: string;
  label: string;
  evidence: "curriculo" | "cliente" | "medicao" | "qualitativa";
};

type ProjectGalleryItem = {
  type: "image" | "interface" | "diagram";
  src?: string;
  alt: string;
  caption: string;
};

type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  categories: ProjectCategory[];
  services: ServiceSlug[];
  problem: string[];
  context: string[];
  solution: string[];
  features: string[];
  technologies: string[];
  results: string[];
  metrics: ProjectMetric[];
  gallery: ProjectGalleryItem[];
  confidentialityNote?: string;
  publicUrl?: string;
  repositoryUrl?: string;
  seo: { title: string; description: string };
};
```

## 3. Inventário editorial

### AquaFlora AgroShop

- Status: evolução contínua.
- Natureza: trabalho profissional.
- Problema: catálogo amplo dependia de atualização manual e de integração com ERP legado.
- Solução: manutenção WooCommerce, middleware Python/Docker, app interno mobile-first e automação de triagem em Node.js/LLM.
- Evidência pública: 3.000+ SKUs na operação; rotina preparada para 4.000+ SKUs e 6.300+ ativos.
- Restrições: não expor nome do ERP, credenciais, arquitetura interna detalhada ou dados financeiros.

### E-commerce para floricultura

- Status: concluído/evolutivo, a confirmar antes da publicação final.
- Natureza: projeto de portfólio comercial.
- Problema: catálogo B2B/B2C precisava funcionar no celular e transformar consulta em conversa de venda.
- Solução: Next.js, backend Node.js, MySQL/Prisma, CRUD administrativo, Cloudinary e WhatsApp.
- Resultado público: operação do catálogo centralizada e fluxo de compra por WhatsApp; sem números inventados.
- Restrições: manter cliente anônimo até autorização.

### Comércio BES

- Status: produto em evolução.
- Natureza: plataforma própria/hiperlocal.
- Problema: estabelecimentos locais tinham presença digital fragmentada e descoberta difícil.
- Solução: busca por categoria/tag, páginas de estabelecimentos, PWA, deep links e WhatsApp.
- Resultado público: experiência instalável e acesso direto da descoberta à conversa.

### Joysticknights

- Status: em operação/manutenção.
- Natureza: projeto próprio desde 2020.
- Problema: publicar e manter conteúdo de games com autonomia.
- Solução: WordPress, customizações PHP/JS/CSS, SEO e performance.
- Resultado público: continuidade do projeto desde 2020.

### RastreIAGastos

- Status: protótipo.
- Problema: consolidar gastos e extrair informações de comprovantes.
- Solução em desenvolvimento: React, FastAPI, PostgreSQL e OCR/IA.
- Regra: deixar explícito que não é produto finalizado.

### CadastraFácil

- Status: protótipo.
- Problema: reduzir digitação no cadastro de produtos para PMEs.
- Solução em desenvolvimento: APIs de validação, automação de entrada e interface React.
- Regra: deixar explícito que não é produto finalizado.

### Hybrid Homelab

- Status: laboratório contínuo.
- Natureza: infraestrutura de estudo e validação.
- Escopo: Proxmox, Docker/LXC, Linux, Nginx, SSL, redes privadas, Tailscale e deploy.
- Resultado público: ambiente prático para testar operação, isolamento e publicação de aplicações.

## 4. Dados de galeria

Enquanto não houver assets aprovados pelo cliente, cada case usa três representações claramente legendadas:

1. visão do fluxo do sistema;
2. recorte de interface reconstruído;
3. painel com tecnologia e responsabilidade operacional.

Ao receber screenshots reais:

- remover dados pessoais e comerciais;
- usar WebP/AVIF com fallback;
- registrar largura e altura;
- escrever alt text que descreve informação, não decoração;
- manter a legenda indicando ambiente e contexto;
- solicitar autorização antes de publicar marca de cliente.

## 5. Critério para destaque

Um projeto pode ser `featured` se cumprir pelo menos dois itens:

- problema comercial fácil de reconhecer;
- implementação demonstrável;
- resultado verificável;
- diversidade em relação aos demais cases;
- conteúdo suficiente para página própria.

A primeira Home destaca AquaFlora AgroShop, E-commerce para Floricultura e Comércio BES.
