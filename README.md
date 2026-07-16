# BragaCode - site institucional e portfólio

[![CI](https://github.com/pedrobragabes/BragaCode/actions/workflows/ci.yml/badge.svg)](https://github.com/pedrobragabes/BragaCode/actions/workflows/ci.yml)

Site comercial da BragaCode, operação de desenvolvimento de software fundada por Pedro Braga. O projeto apresenta serviços, cases, trajetória e canais de contato com conteúdo em português brasileiro.

## Stack

- Next.js com App Router e Server Components;
- React e TypeScript;
- Tailwind CSS v4 com design tokens em CSS;
- Zod para validação do formulário;
- fontes variáveis locais Manrope e JetBrains Mono;
- vinext/Vite para build compatível com Cloudflare Workers e Sites.

## Requisitos

- Node.js 22.13 ou superior;
- npm 10 ou superior.

## Configuração local

1. Instale dependências:

   ```bash
   npm install
   ```

2. Copie `.env.example` para `.env.local` e preencha apenas as integrações que deseja testar.

3. Inicie o ambiente local:

   ```bash
   npm run dev
   ```

4. Abra a URL indicada no terminal.

Sem provedor de contato configurado, o formulário valida os dados e orienta a usar o WhatsApp. Nenhum analytics é carregado por padrão.

## Scripts

```bash
npm run dev      # desenvolvimento com HMR
npm run build    # build de produção
npm run lint     # ESLint
npm test         # build e smoke tests das rotas
```

## Qualidade contínua

Pull requests e pushes em `main` executam automaticamente:

- instalação reproduzível com `npm ci` e Node.js 22;
- lint;
- build de produção;
- smoke tests de rotas, SEO e validação do formulário;
- auditoria das dependências usadas em produção.

O merge deve acontecer somente quando o workflow `CI` estiver aprovado.

## Estrutura

```text
app/              rotas, metadata, sitemap, robots e endpoint de contato
components/       layout, formulário, cases, SEO e elementos reutilizáveis
content/          dados tipados da empresa, serviços, projetos e FAQ
docs/             requisitos, arquitetura, sitemap, design, roadmap e lançamento
lib/              URLs, SEO e validação
public/           assets públicos, incluindo Open Graph
tests/            smoke tests de renderização server-side
```

## Conteúdo dos projetos

Edite `content/projects.ts`. Cada projeto possui problema, contexto, solução, funcionalidades, tecnologias, resultados, métricas, galeria e metadata. O `slug` gera a rota em `/projetos/[slug]`, o sitemap e os links relacionados.

Projetos em protótipo devem continuar com status `Protótipo` e texto explícito sobre maturidade. Métricas só devem ser publicadas quando houver fonte ou autorização.

## Formulário

O POST `/api/contact` inclui:

- validação Zod;
- limite de payload;
- honeypot;
- tempo mínimo de preenchimento;
- rate limit de melhor esforço por instância;
- Cloudflare Turnstile opcional;
- envio por Resend ou `CONTACT_WEBHOOK_URL`.

Para Resend, configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL`. Para webhook, configure `CONTACT_WEBHOOK_URL`; ele tem prioridade.

O rate limit em memória reduz abuso simples, mas não substitui proteção persistente ou regra de borda em produção.

## Analytics

- Recomendado — Plausible: `NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible` e `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` com a URL única fornecida em **Site Settings > Site Installation**.
- Alternativa mantida — Google Analytics: `NEXT_PUBLIC_ANALYTICS_PROVIDER=ga` e `NEXT_PUBLIC_GA_ID`.
- Sem as variáveis correspondentes, nenhum script ou listener de analytics é carregado.

Eventos implementados:

- `WhatsApp Click`: links para `wa.me`;
- `Contact Form Submitted`: somente após resposta de sucesso, com origem e tipo de projeto, sem nome, e-mail ou telefone;
- `Case Click`: navegação para uma página individual de projeto;
- `Service Click`: navegação para uma página individual de serviço.

No Plausible, crie metas com esses quatro nomes exatamente como escritos. O cadastro do domínio, a verificação da instalação, o Search Console e o envio do sitemap são etapas manuais.

## SEO

- metadata e canonical individuais;
- Open Graph e Twitter Card;
- `app/sitemap.ts` e `app/robots.ts`;
- JSON-LD de Organization, ProfessionalService, Person, Service, CreativeWork e BreadcrumbList;
- conteúdo server-rendered e URLs estáveis.

Defina `NEXT_PUBLIC_SITE_URL` com o domínio HTTPS final antes do build público para gerar canonicals, sitemap e imagens sociais corretos.

## Deploy

### Sites/Cloudflare

O projeto mantém a configuração vinext e o plugin Sites. Gere o build com `npm run build`, configure as variáveis no ambiente de hospedagem e publique o artefato resultante pelo fluxo Sites.

### Outro provedor Next.js

O conteúdo e os componentes seguem APIs do App Router. Como a base atual usa vinext para Workers, valide o adaptador do provedor e preserve as variáveis de ambiente. Não publique `.env.local`.

## Documentação de produto

- [Requisitos](docs/01-requisitos.md)
- [Arquitetura](docs/02-arquitetura.md)
- [Sitemap](docs/03-sitemap.md)
- [Design system](docs/04-design-system.md)
- [Dados de projetos](docs/05-dados-de-projetos.md)
- [Roadmap, milestones e backlog](docs/06-roadmap.md)
- [Decisões técnicas](docs/07-decisoes-tecnicas.md)
- [Checklist de lançamento](docs/08-checklist-lancamento.md)

### Materiais para etapas manuais

- [Autorização de divulgação de case](docs/templates/autorizacao-case.md)
- [Inventário de screenshots e assets](docs/templates/inventario-assets-case.md)
- [Solicitação e aprovação de depoimento](docs/templates/pedido-depoimento.md)

## Pendências antes do lançamento público

- confirmar domínio e e-mail comercial;
- revisar WhatsApp público;
- configurar o provedor do formulário e Turnstile;
- obter autorização para marcas, screenshots e depoimentos;
- revisar os textos legais conforme a estrutura jurídica real;
- executar o checklist de acessibilidade, performance e compatibilidade em produção.
