# Repositório, sincronização e publicação

Revisão operacional: 2026-09-29. O histórico anterior continua no Git.

## Estado observado

- GitHub: [pedrobragabes/BragaCode](https://github.com/pedrobragabes/BragaCode), branch main.
- Na abertura desta execução, `origin/main` estava em `7760bc969d65aea296cd8e9c7178e1fca19acebb`.
- Publicação existente: [BragaCode no Sites](https://bragacode-portfolio.pedrobraga855.chatgpt.site), pública e ativa. Domínio comercial próprio permanece em [#1](https://github.com/pedrobragabes/BragaCode/issues/1).
- Projeto Sites: `appgprj_6a5852df734c8191bc29437ac96effe8`, identificado em `.openai/hosting.json`; deve ser reutilizado.
- A versão nº 3 consultada na abertura corresponde ao mesmo commit `7760bc969d65aea296cd8e9c7178e1fca19acebb`. O deploy `appgdep_6ab5f48aa5b88191a4952e877449b9d0` retornou `succeeded`. O retrato de setembro que citava apenas a versão nº 1 estava desatualizado.
- Não há deploy no workflow `ci.yml`; a credencial de fonte consultada informa `publish_on_push_accepted: false`. Push no GitHub e publicação no Sites continuam etapas separadas.
- Os resultados das próximas publicações, com versão, SHA e CI, são registrados na [issue #32](https://github.com/pedrobragabes/BragaCode/issues/32). A versão nº 3 acima é a referência anterior à manutenção desta revisão, não uma afirmação de que mudanças posteriores já foram publicadas.

## Fluxo de trabalho

Branch → PR → CI (lint, build, smoke, E2E, Lighthouse, audit e gitleaks) → integração na main → publicação da versão validada no Sites conforme o acesso e o escopo autorizados.

1. Consultar o projeto existente, suas versões, deploy ativo e HEAD do GitHub. Verificar diferenças locais e concorrência antes de editar.
2. Abrir a fonte do mesmo projeto pelo fluxo Sites. Manter credencial temporária somente em memória e passá-la pelo stdin protegido do helper, nunca por argumento, arquivo ou histórico de comandos.
3. Instalar pelo lockfile e executar os checks. No Windows, o Lighthouse do projeto apenas valida a configuração; a coleta completa exige o CI Linux. Não substituir esse resultado por um healthcheck local.
4. Depois de integrar a fonte validada, usar os helpers do plugin Sites para build, push da fonte e empacotamento. O archive deve corresponder exatamente ao commit enviado. A falha de push por concorrência exige reconciliação e nova validação, sem force push.
5. Salvar a versão com o SHA e o archive, publicar essa versão no mesmo projeto e acompanhar o deploy até `succeeded` ou `failed`. A existência de versão salva ou URL, isoladamente, não confirma publicação.
6. Registrar na #32: PR, SHA validado/integrado, execução do CI, versão, deploy, resultado, URL e versão anterior para recuperação. Nunca registrar o token.

### Rollback

Selecionar uma versão anterior cujo deploy tenha sido comprovado, confirmar compatibilidade com as variáveis atuais e publicá-la no mesmo projeto. Acompanhar o novo deploy e registrar o resultado na #32; depois reconciliar a fonte do GitHub por revert ou correção em PR. Reverter código no GitHub não reverte o site automaticamente.

Antes desta manutenção, a referência disponível é a versão nº 3, ID `appgprj_6a5852df734c8191bc29437ac96effe8~appgver_996d70fbf46c81918b497d3668632353`, do SHA citado acima. Selecionar sempre o ID retornado pela consulta atual. Não houve ensaio de rollback em produção nesta revisão; o procedimento documenta recuperação, sem declarar um teste que não ocorreu.

### Automação

Manter a publicação explícita pelo fluxo Sites por enquanto. A integração automática GitHub → Sites não está configurada nem comprovada. Só considerar a automação pronta depois de uma execução real com vínculo de SHA, status final e recuperação documentados; não salvar credenciais temporárias como secrets permanentes para improvisar um pipeline.

Não transferir a BragaCode para Hostinger por analogia com o portfólio: a aplicação tem endpoint e runtime Workers. Não criar um segundo projeto Sites e não persistir credenciais temporárias de fonte. A validação operacional está em [#32](https://github.com/pedrobragabes/BragaCode/issues/32).

## Cópias locais

A pasta original tinha a exclusão não commitada de build/sites-vite-plugin.ts, ainda importado por vite.config.ts. Ela foi preservada. O planejamento foi feito em worktree limpo com o arquivo rastreado intacto. Para retomar desenvolvimento na pasta original, reconciliar essa exclusão conscientemente; não concluir que main está quebrada por causa de uma diferença local.

## Reconciliação de manutenção

Consulta em 29/09: #24, #25 e #27 já estavam encerradas. As PRs #26, #28, #35, #36, #38, #39 e #42 sobrepõem correções desta manutenção. Seus estados só devem mudar após integração com CI atual; os resultados ficam na [issue #33](https://github.com/pedrobragabes/BragaCode/issues/33).

| Componente | Correção selecionada | Verificação e limite |
| --- | --- | --- |
| React / React DOM / RSC | Cohort 19.2.8 | Preserva a linha 19.2; smoke e E2E conferem renderização e formulário. |
| Next / ESLint Next | Next permanece 16.3.4; ESLint alinhado | Não aplicar o downgrade de Next/PostCSS contido em #23. |
| Cloudflare / Wrangler | Plugin 1.62.1 e Wrangler 4.143.1 | Dependências transitivas seguem as versões do fornecedor, incluindo Miniflare; requer build Workers e navegador. |
| Imagens | `sharp` 0.35.4 e override de `image-size` 2.0.4 sob vinext | Preserva vinext 0.0.50; overrides devem ser removidos quando as dependências de origem incorporarem versões corrigidas. |
| Frontmatter MDX | `remark-mdx-frontmatter` 6 | Substitui parser TOML vulnerável. O projeto já usa Node ≥22.13, não importa o tipo renomeado e os artigos usam YAML; smoke verifica conteúdo, metadados e sitemap. [Changelog do fornecedor](https://github.com/remcohaszing/remark-mdx-frontmatter/releases/tag/v6.0.0). |
| Dependências indiretas | Lockfile atualizado dentro das faixas compatíveis | Inclui undici, fast-uri, browserslist, baseline-browser-mapping, js-yaml e ip-address; sem `audit fix --force`. |

Na instalação limpa local, a auditoria completa caiu de 30 para 10 alertas, todos na árvore do Lighthouse CI: `extract-zip`/Puppeteer/Lighthouse, `tmp`/external-editor/inquirer e `uuid` (7 altos, 1 moderado, 2 baixos). A auditoria `--omit=dev` retornou zero. Isso não equivale a ausência total de risco: ferramentas de desenvolvimento também exigem manutenção. Preservar a auditoria local/CI com entradas controladas e acompanhar a correção upstream na #33; não degradar `@lhci/cli` para 0.1.0, como sugerido pelo modo forçado.

A PR #23 permanece parcialmente pendente: secret scan já existe, documentação e versões antigas se sobrepõem ao estado atual; licença MIT e configuração adicional do Dependabot não foram incorporadas nesta fatia. A PR #40 tem revisão visual própria e não deve ser mesclada como atualização de dependências.
