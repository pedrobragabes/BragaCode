# Repositório, sincronização e publicação

Auditoria: 2026-09-05.

## Estado observado

- GitHub: [pedrobragabes/BragaCode](https://github.com/pedrobragabes/BragaCode), branch main.
- Checkout original e origin/main: f94fade498c62510f59ba6e981049e08739a7270.
- CI da main aprovado na [execução 29506992696](https://github.com/pedrobragabes/BragaCode/actions/runs/29506992696).
- Publicação existente: https://bragacode-portfolio.pedrobraga855.chatgpt.site. Domínio comercial próprio permanece em #1.
- Projeto Sites existente identificado em .openai/hosting.json; deve ser reutilizado.
- O Sites informou uma versão salva, nº 1, associada ao commit 397e3b57d1dd07f3dff3aac63fda05bf0418aa6d. Esse commit difere da main do GitHub. A existência de uma URL não comprova que a main atual foi publicada.
- Não há deploy no workflow ci.yml nem webhook de repositório retornado pela API. Push executa qualidade; não foi comprovada publicação automática no Sites.

## Fluxo de trabalho

Branch → PR → CI (lint, build, smoke, E2E, Lighthouse, audit) → integração na main → publicação da versão validada no Sites conforme o acesso e o escopo autorizados. Registrar commit, versão, resultado e URL. Reverter publicação exige selecionar uma versão validada anterior ou publicar uma correção.

Não transferir a BragaCode para Hostinger por analogia com o portfólio: a aplicação tem endpoint e runtime Workers. Não criar um segundo projeto Sites e não persistir credenciais temporárias de fonte. A validação operacional está em [#32](https://github.com/pedrobragabes/BragaCode/issues/32).

## Cópias locais

A pasta original tinha a exclusão não commitada de build/sites-vite-plugin.ts, ainda importado por vite.config.ts. Ela foi preservada. O planejamento foi feito em worktree limpo com o arquivo rastreado intacto. Para retomar desenvolvimento na pasta original, reconciliar essa exclusão conscientemente; não concluir que main está quebrada por causa de uma diferença local.

## Manutenção pendente

PR #23 contém dependências, documentação, varredura de segredos e licença; #24–#28 contêm atualizações de dependências. Foram preservadas, sem merge cego. A [issue #33](https://github.com/pedrobragabes/BragaCode/issues/33) acompanha a revisão conjunta, o risco de sobreposição e checks atuais.

Esta entrega altera docs e governança no GitHub. Não altera domínio, integrações, acesso, catálogo ou publicação do Sites.
