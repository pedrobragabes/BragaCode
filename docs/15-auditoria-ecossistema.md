# Auditoria do ecossistema Braga Code

Data da leitura: 2026-09-29. Escopo: BragaCode, ComércioBES e Braga-Commerce, para sustentar o [Master Plan 2026–2028](16-master-plan-2026-2028.md). Esta é uma auditoria de código, documentação, fronteiras e backlog; não é certificação de segurança nem homologação de produção.

## Método e limites

Foram lidos README, instruções locais, schemas, contratos, trechos de autenticação/integração, workflows e checkpoints. As issues foram consultadas no GitHub com filtros explícitos de abertas/encerradas; os SHAs de `main` foram confirmados com `git ls-remote`. A pesquisa de issues retornou campos de estado nulos, por isso o estado abaixo vem das consultas filtradas, não de inferência a partir de checkboxes.

Não foram executados builds, testes funcionais, migrations, chamadas autenticadas aos produtos, pagamentos ou deploys nesta revisão documental. Resultados de testes mencionados nas fontes são históricos e delimitados ao commit/ambiente registrado. A disponibilidade atual dos ambientes hospedados não foi retestada. Não foram lidos arquivos privados de acesso, dumps nem variáveis de ambiente reais.

| Repositório canônico | `main` remota conferida | Corte utilizado |
| --- | --- | --- |
| [BragaCode](https://github.com/pedrobragabes/BragaCode) | `7760bc969d65aea296cd8e9c7178e1fca19acebb` | Worktree limpo deste commit |
| [comercio-bes](https://github.com/pedrobragabes/comercio-bes) | `c2f315f57e4ae8e7ff940702d61914796c01eefa` | Checkout neste commit, distinguindo alterações locais posteriores |
| [Braga-Commerce](https://github.com/pedrobragabes/Braga-Commerce) | `499cddc87ff84c08947274af9b64369164711477` | Checkout limpo de `main`, checkpoint WIP |

O diretório local `Comercio_BES` usa `pedrobragabes/comercio-bes` como origin; `RamonVollet/Comercio_BES` é upstream histórico. Não usar números de issues antigos sem identificar o repositório.

Preservação: a pasta original BragaCode estava dois commits atrás e tinha exclusão local de `build/sites-vite-plugin.ts`. O ComércioBES tinha mudanças em health check, smoke, documentação e arquivos novos, incluindo `docs/PRODUTOS-BRAGA-CODE.md`. Foram apenas lidos; nenhuma mudança desses checkouts foi incorporada, revertida ou publicada por esta auditoria. A nota de produtos local de 29/09 serve como contexto de direção, sem ser tratada como artefato já publicado.

## 1. BragaCode: empresa e aquisição

**Constatado:** aplicação institucional Next.js/App Router, React, TypeScript, vinext/Vite e Workers/Sites. Conteúdo tipado, páginas de serviços, cases, artigos MDX, PT/EN, contato, SEO, analytics e monitoramento opcionais. Não existe um banco central de tenants ou um painel universal neste site.

O catálogo já apresenta sites/landing pages, e-commerce, sistemas web, APIs/integrações, automação e infraestrutura/suporte. Logo, o posicionamento amplo pode evoluir a partir de oferta existente. Um catálogo de serviços não comprova que todos os módulos SaaS estejam disponíveis.

**Fontes:** [serviços](https://github.com/pedrobragabes/BragaCode/blob/7760bc969d65aea296cd8e9c7178e1fca19acebb/content/services.ts), [cases](https://github.com/pedrobragabes/BragaCode/blob/7760bc969d65aea296cd8e9c7178e1fca19acebb/content/projects.ts), [CI](https://github.com/pedrobragabes/BragaCode/blob/7760bc969d65aea296cd8e9c7178e1fca19acebb/.github/workflows/ci.yml), [curadoria](14-project-sources.md) e [publicação](13-repositorio-e-publicacao.md).

O CI define instalação pelo lockfile, lint, build, smoke, E2E, Lighthouse e auditoria de produção. A configuração não contém publicação no Sites. O projeto Sites existente deve ser preservado; seu estado atual de versão/domínio não foi consultado nesta revisão.

## 2. ComércioBES: descoberta e presença autorizada

**Constatado:** frontend Next/React/TypeScript em `web/`, gateway/API Express, PostgreSQL/Prisma e fontes legadas preservadas durante a paridade. Contas da aplicação com bcrypt, cookies JWT, consulta do estado vigente do usuário, revogação e CSRF. Não usa o Supabase Auth do Braga como identidade compartilhada.

O schema contém perfil, horários, imagens, favoritos, avaliações/moderação, reivindicação, convites assistidos, consentimento/publicação, auditoria e vínculo externo. Há itens e promoções informativos; eles não constituem estoque ou catálogo autoritativo para compra. Modelos transacionais históricos ainda presentes no schema não autorizam reconstruir checkout no guia.

**Fontes:** [schema](https://github.com/pedrobragabes/comercio-bes/blob/c2f315f57e4ae8e7ff940702d61914796c01eefa/backend/prisma/schema.prisma), [middleware de sessão](https://github.com/pedrobragabes/comercio-bes/blob/c2f315f57e4ae8e7ff940702d61914796c01eefa/backend/src/middleware/auth.js), [ADR de fronteira](https://github.com/pedrobragabes/comercio-bes/blob/c2f315f57e4ae8e7ff940702d61914796c01eefa/docs/adr/0001-product-scope-and-braga-commerce.md).

**Demonstração documentada:** a [homologação de 25/09](https://github.com/pedrobragabes/comercio-bes/blob/c2f315f57e4ae8e7ff940702d61914796c01eefa/docs/HOMOLOGACAO-HOST-2026-09-25.md) registra instalação privada na Hostinger, PostgreSQL no Neon, jornada principal, recuperação por e-mail, mídia preservada após redeploy e restore de demonstração. Os cadastros são sintéticos; isso não é lançamento público. Rotina periódica de backup, alertas, responsabilidade operacional e aceites completos continuam pendentes.

O [workflow atual](https://github.com/pedrobragabes/comercio-bes/blob/c2f315f57e4ae8e7ff940702d61914796c01eefa/.github/workflows/ci-deploy.yml) contém jobs de backend, frontend e pacote de hospedagem com PostgreSQL isolado. O nome `ci-deploy.yml` não é evidência de deploy automático. As instruções antigas de ausência de cobertura e partes antigas dos documentos de portabilidade precisam ser lidas à luz do checkpoint mais recente.

## 3. BragaCommerce: núcleo transacional em homologação

**Constatado:** Next/React/TypeScript, PostgreSQL/Prisma, Supabase Auth/Storage e integração Mercado Pago. O checkpoint atual inclui mais que o primeiro MVP single-store: memberships por loja, contexto público por domínio, conta do cliente, tema versionado, solicitação de loja, `Plan`, `Subscription`, `PlatformOperator` e provisionamento assistido.

O código inclui reserva/expiração, resolução auditada de pendência de estoque, outbox de e-mail, limpeza durável de mídia e binding da conta de pagamento por loja. Presença de código e testes não equivale a aceite de provedores, recebedores, dois pilotos ou oferta paga.

**Fontes:** [schema](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/prisma/schema.prisma), [ciclo de loja](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/lib/store-lifecycle.ts), [autorização de operador](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/lib/admin-auth.ts), [operação central](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/lib/platform-auth.ts), [consolidação](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/docs/CONSOLIDACAO-MAIN-2026-09-25.md).

O [contrato de pagamento/TLS](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/docs/23-tenant-payment-and-database-tls.md) detalha isolamento de recebedores e conexão remota com validação de certificado. Seu rodapé ainda descreve uma interrupção anterior; o checkpoint de consolidação posterior registra a integração da fatia e novos checks locais. O README também conserva instruções antigas de pagamento global/TLS. Uma release precisa reconciliar documentação, configuração e migrations com o código atual.

O [workflow de qualidade](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/.github/workflows/quality.yml) já contém `commerce-integrity` com PostgreSQL e `test:integration`. A issue #102 permanece aberta; o próximo trabalho é verificar critérios e evidências atuais, não criar a suíte novamente. [vercel.json](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/vercel.json) mantém `git.deploymentEnabled=false`; publicação de código não libera migrations/deploy.

## 4. A ponte existente é a primeira integração do ecossistema

Produtor: `GET /api/integrations/bes/v1/stores/[externalStoreId]`. Consumidor: backend BES. A ponte usa chave apenas no servidor, allowlist de lojas e destinos, prova bilateral por challenge/hash e IDs estáveis. Não usa nome ou e-mail para vincular lojas.

O consumidor confere versão exata, resposta limitada a 32 KiB, timeout de 2 s, idade de até 5 min e desvio futuro de até 1 min. Não segue redirects. Esses limites são do código atual, não metas inventadas para a plataforma inteira.

O v1 retorna identidade pública da loja, URL canônica, habilitação comercial, prova do vínculo e data de leitura. **Não retorna produtos nem implementa SSO.** Falha, cancelamento ou revogação retiram o CTA comercial sem retirar o perfil local autorizado. O fluxo atual usa `no-store`, sem servir uma autorização comercial antiga por cache.

**Fontes dos dois lados:** [contrato consumidor](https://github.com/pedrobragabes/comercio-bes/blob/c2f315f57e4ae8e7ff940702d61914796c01eefa/docs/CONTRATO-PONTE-LOJA.md), [cliente HTTP](https://github.com/pedrobragabes/comercio-bes/blob/c2f315f57e4ae8e7ff940702d61914796c01eefa/backend/src/lib/bragaBridge.js), [contrato produtor](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/docs/22-directory-bridge-v1.md), [implementação](https://github.com/pedrobragabes/Braga-Commerce/blob/499cddc87ff84c08947274af9b64369164711477/lib/directory-bridge.ts).

Há prova HTTP local documentada com bancos separados e operador sintético do Braga. Falta homologação autenticada e operacional nos destinos finais. A projeção futura de produtos pertence ao escopo adicional da BES #22.

## 5. Backlog vivo consultado

Estados abaixo são um retrato de 29/09/2026; reconsultar antes de executar ou fechar trabalho. Uma issue aberta pode ter implementação parcial ou completa sem aceite integral.

| Frente | Estado observado e encaminhamento |
| --- | --- |
| BragaCode — posicionamento | [#29](https://github.com/pedrobragabes/BragaCode/issues/29), [#30](https://github.com/pedrobragabes/BragaCode/issues/30), [#31](https://github.com/pedrobragabes/BragaCode/issues/31) encerradas. Não reabrir entregas antigas por causa deste horizonte novo. |
| BragaCode — lançamento | #1, #2, #3, #5, #6, #7, #8 e #11 abertas: canais, formulário, revisão legal, validação final, autorização/assets/depoimentos e mensuração. Ver [roadmap](06-roadmap.md). |
| BragaCode — manutenção/publicação | [#32](https://github.com/pedrobragabes/BragaCode/issues/32) e [#33](https://github.com/pedrobragabes/BragaCode/issues/33) abertas. Preservar Sites e revisar manutenção pelos checks atuais. |
| BES — fundação e jornadas | #1–#19 abertas, apesar de código e demonstração posteriores. Reconciliar aceite por evidência; não classificar toda a implementação como ausente. |
| BES — integração | [#20](https://github.com/pedrobragabes/comercio-bes/issues/20), [#21](https://github.com/pedrobragabes/comercio-bes/issues/21), [#22](https://github.com/pedrobragabes/comercio-bes/issues/22) abertas: contrato, piloto e projeção de catálogo. |
| BES — qualidade/operação/release | [#23](https://github.com/pedrobragabes/comercio-bes/issues/23), [#24](https://github.com/pedrobragabes/comercio-bes/issues/24), [#25](https://github.com/pedrobragabes/comercio-bes/issues/25) abertas. #24 já registra evidência parcial no host. |
| Braga — integridade | [#98](https://github.com/pedrobragabes/Braga-Commerce/issues/98), #99–#101 e [#102](https://github.com/pedrobragabes/Braga-Commerce/issues/102) abertas: recuperar/reconciliar, permissões, reservas, atendimento e CI. Conferir o checkpoint antes de repetir implementação. |
| Braga — piloto pago | #15, #19, #38, #41, #42, #46, #47, #51, #53, #54 abertas: pagamento, ambiente, recuperação, piloto, comunicação, isolamento e operação. |
| Braga — conta/ponte | #67, #75, #76, #78–#80, [#82](https://github.com/pedrobragabes/Braga-Commerce/issues/82), [#83](https://github.com/pedrobragabes/Braga-Commerce/issues/83), #84 abertas. Auditoria inicial #81 não está aberta. |
| Braga — expansão | [#103](https://github.com/pedrobragabes/Braga-Commerce/issues/103) estoque, [#104](https://github.com/pedrobragabes/Braga-Commerce/issues/104) console, [#105](https://github.com/pedrobragabes/Braga-Commerce/issues/105) planos, [#106](https://github.com/pedrobragabes/Braga-Commerce/issues/106) agente e [#107](https://github.com/pedrobragabes/Braga-Commerce/issues/107) recorrência abertas, com condições próprias de entrada. #43 cupons e #44 frete também permanecem abertas. |

Este trabalho não criou, editou ou encerrou issues e não publicou comentários. O mapa acima permite retomar as existentes sem duplicação. Novas oportunidades do catálogo permanecem propostas documentais até serem selecionadas.

## 6. Conclusões para o plano

1. Integrar a partir da ponte existente e da autoridade de cada domínio. Um banco ou login único imediato contrariaria a base e ampliaria o risco da migração.
2. Reutilizar `Store`, memberships, temas e operação assistida do Braga. Criar um segundo provisionador universal agora duplicaria domínio já implementado.
3. Separar três situações: oferta de serviço sob escopo, código de produto em homologação e ideia futura. O texto de origem mistura essas situações em algumas afirmações comerciais.
4. Publicar serviços demonstráveis pode avançar junto da homologação do comércio. Não condicionar receita de serviços à conclusão de CRM, PDV, identidade comum ou de um monorepo.
5. Investir primeiro em evidência de release e operação: existem aceites abertos que código adicional não resolve sozinho.
6. CadastraFácil, AquaFlora/Stock Sync, Commerce Agent, AquaFloraTV, EPI Detect e demais projetos citados não foram auditados diretamente nesta entrega. São candidatos a integração; referências anteriores não certificam sua prontidão ou disponibilidade comercial.

O [master plan](16-master-plan-2026-2028.md) transforma essas conclusões em decisões propostas, dependências e critérios de avanço. O [prompt mestre](18-prompt-mestre-ecossistema.md) exige revalidar o estado antes de implementar a próxima fatia.
