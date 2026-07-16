# ADR-009 — CMS e fluxo editorial

- **Status:** aceito
- **Data:** 16 de julho de 2026
- **Decisão:** manter projetos em objetos TypeScript e artigos em MDX; não adotar CMS headless nesta fase.

## Contexto editorial

Pedro Braga é o responsável por escrever, revisar e publicar o conteúdo técnico e comercial. A frequência planejada é de um ou dois artigos por mês e revisão trimestral dos cases, além de correções pontuais. Não existe hoje uma equipe não técnica que precise publicar sem Git.

Os projetos têm campos repetíveis e sensíveis à precisão: natureza do trabalho, origem da evidência, problema, solução, tecnologias, métricas e regras de confidencialidade. Os artigos precisam de texto longo, títulos, listas, código e relações com serviços e projetos.

## Alternativas consideradas

| Critério | Objetos TypeScript | MDX no repositório | CMS headless |
| --- | --- | --- | --- |
| Melhor uso | catálogo estruturado | artigos e conteúdo longo | edição frequente por várias pessoas |
| Validação | tipos e build | Zod no frontmatter e build | schema no CMS e validação na aplicação |
| Preview | ambiente local ou preview do PR | ambiente local ou preview do PR | preview editorial antes do merge |
| Versionamento | Git, diff e revisão por PR | Git, diff e revisão por PR | histórico do provedor, às vezes com Git separado |
| Imagens | arquivos aprovados no repositório | arquivos aprovados no repositório | biblioteca de mídia e transformações do provedor |
| Custo operacional | baixo | baixo | conta, permissões, webhooks, backup e monitoramento |
| Dependência externa | nenhuma para o conteúdo | nenhuma para o conteúdo | API, disponibilidade, limites e modelo do fornecedor |
| Experiência não técnica | fraca | média | forte |

Um CMS resolveria um problema que ainda não existe e adicionaria dois caminhos de falha: o build dependeria de uma API externa e o contrato editorial passaria a existir tanto no provedor quanto no código.

## Decisão

1. `content/projects.ts` continua sendo a fonte de verdade dos cases.
2. `content/articles/*.mdx` continua armazenando corpo e frontmatter dos artigos.
3. Mudanças editoriais passam por branch, preview, revisão e merge.
4. Imagens só entram depois de autorização e inventário de origem.
5. O build deve falhar quando slug, status, relações ou campos obrigatórios forem inválidos.

Essa decisão preserva preview e histórico por pull request, mantém o conteúdo disponível mesmo sem fornecedor externo e combina a ferramenta com o número atual de publicadores.

## Contrato de dados portável

Uma eventual API de CMS deve devolver estruturas equivalentes às atuais. A camada de páginas não deve importar o SDK do fornecedor diretamente; um adaptador converte a resposta para estes contratos:

```ts
type ProjectRecord = {
  slug: string;
  name: string;
  summary: string;
  status: ProjectStatus;
  period: string;
  featured: boolean;
  categories: ProjectCategory[];
  serviceSlugs: ServiceSlug[];
  problem: string[];
  context: string[];
  solution: string[];
  features: string[];
  technologies: string[];
  results: string[];
  metrics: { value: string; label: string; note: string }[];
  evidence: ProjectEvidence;
  gallery: ProjectGalleryItem[];
  seo: { title: string; description: string };
};

type ArticleRecord = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  status: "rascunho" | "revisao" | "publicado";
  readingTime: string;
  category: string;
  serviceSlugs: string[];
  projectSlugs: string[];
  body: unknown;
};
```

Slugs permanecem únicos e estáveis. Relações usam slug, datas seguem ISO `YYYY-MM-DD`, rascunhos não entram no sitemap e cada asset conserva texto alternativo, dimensões, origem e autorização.

## Gatilhos para reavaliar

Abrir uma nova ADR quando pelo menos dois sinais ocorrerem por dois meses, ou quando um único sinal bloquear publicação:

- duas ou mais pessoas não técnicas precisam publicar regularmente;
- volume superior a quatro alterações editoriais por semana;
- aprovação precisa acontecer em uma interface separada do GitHub;
- tradução passa a abranger artigos e todos os cases;
- biblioteca supera 50 novos assets por mês;
- o tempo entre conteúdo aprovado e publicação supera dois dias úteis por causa do fluxo técnico;
- agendamento, permissões por função ou preview compartilhável tornam-se requisitos comerciais.

## Plano de migração, se acionado

1. medir volume, publicadores e tempo de publicação por oito semanas;
2. testar dois fornecedores com um projeto e um artigo reais, sem migrar tudo;
3. comparar preview, permissões, CDN de imagens, exportação, preço total e limites de API;
4. implementar um adaptador que retorne `ProjectRecord` e `ArticleRecord`;
5. exportar conteúdo e assets para um backup versionado antes da troca;
6. migrar por tipo de conteúdo e manter fallback por arquivos durante a validação;
7. conferir canonicals, sitemap, redirects, imagens e datas antes de remover o fallback.

## Consequências

O fluxo atual exige familiaridade com Git e não oferece agendamento editorial pronto. Em troca, não há mensalidade de CMS, lock-in de conteúdo, segredo adicional nem indisponibilidade editorial externa. A migração futura continua possível porque os contratos e gatilhos foram definidos antes da escolha de fornecedor.
