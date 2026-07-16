# Arquitetura proposta

## 1. Decisão principal

A aplicação usa Next.js com App Router, TypeScript e React. Tailwind CSS será mantido porque já faz parte da base e acelera a composição responsiva, mas os valores de marca ficarão centralizados como tokens CSS. Isso evita espalhar cores e medidas arbitrárias pelos componentes.

O conteúdo dos projetos será armazenado em objetos TypeScript validados em tempo de desenvolvimento. Para o volume atual, MDX adicionaria uma camada editorial sem benefício suficiente. A migração para MDX ou CMS permanece possível porque as páginas dependem de um contrato de dados, não do arquivo concreto.

## 2. Princípios

- **Server first:** páginas e seções são Server Components por padrão.
- **Dados antes de markup:** projetos, serviços, FAQs e métricas vivem em módulos próprios.
- **Progressive enhancement:** navegação e conteúdo funcionam sem JavaScript; tema, filtros e formulário aprimoram a experiência.
- **Contratos explícitos:** tipos tornam campos ausentes e status editoriais visíveis durante o build.
- **Integrações por adaptador:** analytics, envio de contato e verificação antispam dependem de configuração, não da interface.
- **SEO como parte da rota:** metadata, canonical e JSON-LD são gerados perto do conteúdo que descrevem.

## 3. Camadas

```text
Rotas (app/)
  -> composição de página e metadata
Componentes (components/)
  -> UI reutilizável, acessível e sem conhecimento de persistência
Conteúdo (content/)
  -> projetos, serviços, FAQ, métricas e dados institucionais
Biblioteca (lib/)
  -> SEO, URLs, validação, contato, formatação e utilitários
Integrações
  -> Resend/webhook, Turnstile e analytics opcionais
```

## 4. Estrutura de diretórios alvo

```text
app/
  api/contact/route.ts
  contato/page.tsx
  politica-de-privacidade/page.tsx
  projetos/[slug]/page.tsx
  projetos/page.tsx
  servicos/page.tsx
  sobre/page.tsx
  termos-de-uso/page.tsx
  layout.tsx
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  analytics/
  contact/
  layout/
  project/
  sections/
  seo/
  ui/
content/
  company.ts
  faq.ts
  projects.ts
  services.ts
lib/
  contact.ts
  projects.ts
  seo.ts
  site.ts
  validation.ts
public/
  projects/
docs/
```

## 5. Renderização

- Home, Serviços, Sobre e páginas legais: conteúdo estático.
- Listagem de projetos: página estática; filtro é aprimoramento no cliente.
- Projeto individual: rotas geradas por `generateStaticParams`.
- Contato: página estática com POST dinâmico em `/api/contact`.
- Sitemap e robots: gerados a partir do mesmo catálogo de rotas e projetos.

## 6. Formulário de contato

Fluxo:

1. o navegador valida campos obrigatórios e formato;
2. o servidor limita o corpo, normaliza strings e valida novamente;
3. o honeypot e o tempo mínimo detectam envios automatizados simples;
4. se configurado, o servidor verifica o token do Turnstile;
5. o adaptador envia para Resend ou webhook;
6. o usuário recebe estado de sucesso ou instrução de contato alternativo.

Não haverá armazenamento de leads na primeira versão. Isso reduz superfície de risco e necessidade de política de retenção em banco.

## 7. SEO e dados estruturados

- `siteConfig` concentra domínio, nome, contato e redes sociais;
- `generateMetadata` deriva título, descrição, canonical e Open Graph;
- JSON-LD é serializado por um componente server-side com escape de `<`;
- projetos usam `CreativeWork` e breadcrumbs;
- serviços usam `Service` vinculados ao `ProfessionalService`;
- a Home publica `Organization`, `ProfessionalService` e `Person`.

## 8. Analytics

O componente de analytics só é renderizado quando `NEXT_PUBLIC_ANALYTICS_PROVIDER` e a chave correspondente existirem. Plausible é o provedor recomendado e usa a URL única do site em `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL`; Google Analytics permanece disponível por `NEXT_PUBLIC_GA_ID`. Nenhum script é carregado por padrão.

`AnalyticsEvents` observa links de WhatsApp e navegações para cases/serviços sem exigir componentes específicos. O formulário dispara um evento apenas depois da resposta de sucesso. As propriedades enviadas são contexto de navegação e tipo de projeto; nome, e-mail, telefone e mensagem nunca entram nos eventos.

## 9. Escalabilidade

- novos projetos exigem apenas um objeto e seus assets;
- categorias e filtros derivam do catálogo;
- um CMS pode substituir `content/projects.ts` sem alterar os componentes;
- envio de contato pode trocar de Resend para webhook/CRM atrás do mesmo adaptador;
- blog e versão em inglês podem ser adicionados como grupos de rota futuros.

## 10. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Case expõe dado confidencial | revisão editorial e campo `visibility` |
| Métrica sem fonte | campo de evidência interno e texto público conservador |
| Formulário vira vetor de spam | honeypot, tempo mínimo, Turnstile opcional e limite no provedor |
| Excesso de JavaScript | Server Components e animações CSS |
| Conteúdo fica acoplado à UI | catálogo tipado e componentes por seção |
| Imagem piora LCP | dimensões explícitas, formatos modernos e prioridade só no hero |
| Tema pisca ao carregar | script mínimo no `<head>` antes da pintura |
