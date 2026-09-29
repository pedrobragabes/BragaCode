# Prompt mestre de execução do ecossistema

Versão 1 — 2026-09-29. Usar com o [Master Plan](16-master-plan-2026-2028.md), a [auditoria](15-auditoria-ecossistema.md) e o [catálogo](17-catalogo-capacidades.md). Este arquivo é uma instrução reutilizável para uma próxima execução; sua criação não inicia implementação, deploy nem comunicação com terceiros.

## Como usar

Copiar o bloco abaixo e acrescentar o resultado desejado para uma única fatia. Informar os repositórios que podem ser alterados, o ambiente de validação e qualquer autorização operacional já concedida. Não colar credenciais. Se esses campos estiverem ausentes, o padrão é auditar e propor a menor fatia, sem mutações nos outros produtos ou ambientes externos.

Exemplos de resultado: “homologar a ponte v1 com os dois produtos em ambientes isolados”, “reconciliar evidências da suíte de integridade com a issue #102” ou “refinar a oferta institucional com base nos serviços comprovados”. “Terminar toda a plataforma” não é uma fatia verificável.

## Texto para reutilização

```text
Você está trabalhando no ecossistema Braga Code. Audite ComércioBES,
BragaCommerce e BragaCode e projete-os como componentes de um único
ecossistema, preservando deploys e responsabilidades independentes, mas
compartilhando infraestrutura, autenticação, design system, modelos de
domínio, APIs e módulos reutilizáveis sempre que tecnicamente apropriado.

Nesta instrução, compartilhar significa começar por contratos e padrões
compatíveis e extrair implementações quando houver consumidores reais.
Não significa fundir bancos, copiar senhas, impor SSO, migrar hospedagem,
criar microserviços ou mover todos os projetos para um monorepo agora.

RESULTADO DESTA EXECUÇÃO
- Fatia e critério de sucesso: [preencher ou identificar após auditoria].
- Repositórios autorizados para alteração: [preencher].
- Ambiente de testes: [preencher; padrão local isolado/sintético].
- Autorizações operacionais adicionais: [registrar somente as já concedidas].
Sem esses campos, avance com leitura e proposta concreta. Não trate a
visão de longo prazo como autorização para implementar todos os produtos.

FONTES E ESTADO ATUAL
1. Leia AGENTS.md de cada repositório envolvido. Em BragaCode, leia README,
   docs/README.md, docs/06-roadmap.md e docs/12-posicionamento.md.
2. Leia o master plan, auditoria e catálogo em docs/15 a docs/18 da BragaCode.
   Eles registram um corte de 29/09/2026, não o estado garantido de hoje.
3. Confirme diretórios, remotes, branch, SHA e git status. Preserve mudanças
   anteriores e arquivos históricos. Use worktree separado se necessário.
   Não reaplique um checkpoint antigo sobre trabalho novo.
4. Confirme as issues e dependências no GitHub antes de planejar mudanças.
   Use pedrobragabes/comercio-bes como repo canônico do BES; o upstream
   RamonVollet/Comercio_BES conserva a origem histórica. Identifique o repo
   em toda referência a número de issue.
5. Inspecione código, migrations, workflows e evidências recentes. Separe:
   hipótese, implementação, teste local, CI, homologação externa e release.
   Issue aberta não significa código ausente; checkbox antigo não comprova
   aceite atual. Não execute suites contra bancos reais por conveniência.

RESPONSABILIDADES
- BragaCode é a empresa: apresentação, serviços, contratação e suporte.
  Preserve Next.js/vinext, lockfile, assets oficiais e o projeto Sites.
- ComércioBES é descoberta/presença local: perfis, fotos, horários,
  consentimento, ownership, moderação, contatos e métricas de descoberta.
  Presença gratuita autorizada independe de assinatura de loja.
- BragaCommerce é dono de catálogo transacional, preço, estoque, carrinho,
  pedido, pagamento, entrega e pós-venda. A marca do lojista aparece na
  vitrine. /admin opera a loja; /platform exige operador central próprio.
- CadastraFácil e os outros produtos mantêm repositório, marca, dados e
  critérios próprios. Leia-os ou altere-os apenas no escopo da fatia.
  Currículo e portfólio pessoal nunca são manutenção incidental.

BASE QUE DEVE SER REAPROVEITADA
- A ponte v1 já existe: GET /api/integrations/bes/v1/stores/[externalStoreId].
  Confirme os contratos dos dois lados, a chave servidor-servidor,
  allowlists, prova bilateral, revogação, limites e resposta sem cache antigo.
  Ela publica vínculo/URL/disponibilidade comercial, não catálogo nem SSO.
- Braga já tem Store, memberships, contexto por domínio, temas versionados,
  solicitação/provisionamento assistido, Plan/Subscription, outboxes e
  testes de integridade. Inspecione o estado atual antes de recriar módulos.
- BES tem Next + Express em transição, contas próprias e demo documentada.
  Não remover legado antes da paridade, inventário de dados e rollback.
- Não usar documento antigo de single-store, ausência de CI ou pagamento
  global para apagar evolução posterior confirmada no código/checkpoint.

INVARIANTES
- Um dono por dado. Sem escrita direta no banco de outro produto.
- Autenticação, vínculo de tenant, papel e direito comercial são distintos.
  Host, e-mail, cookie de seleção ou ID fornecido pelo cliente não autorizam.
- Revalidar preço, estoque, recebedor e estado de pagamento no servidor.
  Isolar cache, arquivos, jobs, chaves e consultas por loja.
- Separar pagamento do comprador de cobrança SaaS do comerciante.
  Cancelamento de assinatura não abandona pedidos, webhooks ou histórico.
- Preservar reserva atômica, idempotência, concorrência e reconciliação.
  Mensageria tolera repetição; não prometer exatamente uma entrega externa.
- Uma evolução do contrato estrito v1 precisa de compatibilidade comprovada
  ou versão nova; não adicionar campos apenas de um lado.
- Se SSO for a fatia escolhida, propor ADR de federação e migração de contas,
  com prova de vínculo, revogação e rollback. Não compartilhar segredo JWT.
- Não inventar clientes, produção, receita, métricas, depoimentos, domínio
  controlado, datas de entrega ou disponibilidade de funcionalidades.
- Segredos e dados pessoais não entram em código, logs, documentos ou issues.

EXECUÇÃO
1. Produza um diagnóstico curto do estado, diferenças para o plano e menor
   fatia útil. Se houver trabalho independente autorizado, continue enquanto
   esclarece apenas a informação que realmente bloqueia o restante.
2. Reutilize issues existentes quando seu escopo já cobrir a mudança. Não
   crie um backlog duplicado de todas as ideias do catálogo. Alterações de
   issues/comentários seguem o escopo de autorização desta execução.
3. Declare domínio dono, arquivos, contratos consumidores, migrations,
   estados de falha, critérios de aceite e rollback antes de implementar.
4. Faça mudanças pequenas e completas dentro da fatia. Prefira módulos
   locais a extrair uma biblioteca sem dois consumidores comprovados.
5. Rode os checks exigidos por AGENTS.md e pelo CI do repo alterado. Nos
   contratos compartilhados, valide produtor e consumidor. Em alterações
   somente documentais, revise links, coerência, cobertura e diff.
6. Teste cenários negativos relevantes: usuário/loja alheios, revogação,
   replay, conflito, indisponibilidade e falha parcial. Use banco isolado
   e fixtures explícitas, sem mensagens ou pagamentos externos por padrão.
7. Prepare release/migração de forma concreta e revisável quando fizer parte
   do pedido. Publicação, DNS, providers, migrations remotas, cobrança e
   mensagens a terceiros exigem autorização correspondente. Reutilize a
   autorização já concedida; não peça confirmação repetida por rotina.
8. Não feche issue/milestone apenas porque o código foi publicado ou um
   subconjunto de testes passou. Registre bloqueios externos exatos sem
   convertê-los em funcionalidades novas ou aceite fictício.

ENTREGA
Apresente o resultado para o usuário, evidências por commit/ambiente,
arquivos alterados, testes realizados e seus limites, issues relacionadas,
autorizações/insumos ainda necessários e próxima dependência. Atualize os
documentos canônicos afetados; preserve o histórico. Se não houve deploy,
não anuncie produção atualizada. Se algo já existia, diga que foi validado
ou reconciliado, sem reivindicar uma implementação nova.
```

## Referências para selecionar a primeira fatia

| Necessidade | Referência existente |
| --- | --- |
| Qualidade e operação BES | [#23](https://github.com/pedrobragabes/comercio-bes/issues/23), [#24](https://github.com/pedrobragabes/comercio-bes/issues/24) |
| Piloto e isolamento Braga | [#42](https://github.com/pedrobragabes/Braga-Commerce/issues/42), [#51](https://github.com/pedrobragabes/Braga-Commerce/issues/51), dependências de pagamento/conta/recuperação |
| Integridade e CI Braga | [#98](https://github.com/pedrobragabes/Braga-Commerce/issues/98)–[#102](https://github.com/pedrobragabes/Braga-Commerce/issues/102); suíte já existe no corte auditado |
| Ponte | BES [#20](https://github.com/pedrobragabes/comercio-bes/issues/20)/[#21](https://github.com/pedrobragabes/comercio-bes/issues/21) e Braga [#82](https://github.com/pedrobragabes/Braga-Commerce/issues/82)/[#83](https://github.com/pedrobragabes/Braga-Commerce/issues/83) |
| Projeção de catálogo | BES [#22](https://github.com/pedrobragabes/comercio-bes/issues/22); verificar se a subissue produtora já foi criada antes de abrir outra |
| Publicação institucional | BragaCode [#32](https://github.com/pedrobragabes/BragaCode/issues/32), com canais e aceites de lançamento |
| Planos/console/agente/recorrência | Braga [#104](https://github.com/pedrobragabes/Braga-Commerce/issues/104)–[#107](https://github.com/pedrobragabes/Braga-Commerce/issues/107), conforme condições de entrada |

As referências são pontos de partida; a escolha da fatia não dispensa consultar o estado e as dependências atuais.
