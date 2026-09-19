# Redesign comercial — 18 de setembro de 2026

## Implementação

Home, serviços, projetos, Sobre e contato apresentam a BragaCode como operação de software conduzida por Pedro Braga. Quatro frentes comerciais, dois contextos principais de trabalho, processo, fundador e FAQ orientam a conversa comercial. Next.js/vinext, lockfile, rotas úteis, inglês, temas e projeto Sites foram preservados.

A marca usa uma única geometria da referência bicolor enviada (imagem (1)). Símbolo e lettering foram vetorizados por contornos, com simplificação de 0,7 pixel e cores normalizadas. Os SVGs têm paths reais e vazados preservados, sem PNG embutido. A assinatura horizontal reposiciona os mesmos elementos; versões vertical, monocromática e negativa compartilham a geometria. Assets em public/brand; cartão social 1200 × 630 em public/og.png.

A [curadoria](14-project-sources.md) descreve AquaFlora por componente, AquaTV como piloto e Braga Commerce como beta. O case excluído foi retirado e números antigos não medidos foram removidos. A página Sobre não repete uma linha do tempo de currículo.

## Funcionamento

- Navegação, filtros, teclado, temas, PT/EN e formulário preservados.
- Sucesso do formulário significa aceite para envio; falta de provedor retorna indisponibilidade e oferece WhatsApp.
- Canonical padrão: https://bragacode.dev. NEXT_PUBLIC_SITE_INDEXABLE=false mantém previews fora da indexação.
- Lighthouse ativa indexação somente no processo isolado de auditoria de SEO.
- Duas incompatibilidades de tipo preexistentes foram corrigidas: Sentry.ErrorEvent e contrato local de assets do Worker. Não foram adicionadas dependências.
- A exclusão local anterior do plugin Sites foi preservada no checkout original, fora desta branch.

## Verificações locais

Windows, Node 24.19.0, vinext 0.0.50 e dependências pelo lockfile.

| Verificação | Resultado |
| --- | --- |
| Lint, typecheck, build | Aprovados |
| Smoke de HTML, SEO, conteúdo e contato | 15 testes aprovados |
| Chromium desktop/mobile e WebKit | 21 verificações aprovadas; cenários não aplicáveis ignorados pela configuração existente |
| Firefox no Windows | Executável não iniciou: spawn UNKNOWN, antes da navegação; verificar a suíte no Linux |
| axe claro/escuro | Sem violações nas cinco jornadas da suíte existente |
| Layout: 360, 768, 1024 e 1440 px | 24 combinações sem overflow, erro JavaScript ou imagem quebrada |
| Lighthouse local | Healthcheck aprovado; auditoria completa prevista no CI Linux |
| Audit de produção | Sem vulnerabilidade alta/crítica; uma moderada preexistente em baseline-browser-mapping |

Capturas e relatórios locais: outputs/review, ignorados pelo Git. O CI deve ser conferido no commit final do PR; não equivale a publicação.

Os auxiliares de instalação/build do plugin Sites falharam na localização do npm neste Windows. Foram usados npm ci e npm run build, preservando os scripts do projeto.

## Preparação de publicação

Esta entrega prepara uma versão revisável. Não altera DNS, produção ou serviços dos cases.

1. Revisar o PR e conferir CI no commit final.
2. Confirmar provedor, remetente real e recebimento no canal do responsável (#2).
3. Revisar textos legais e tratamento efetivo de dados (#3).
4. Publicar a versão validada no projeto Sites existente, conforme o [procedimento](13-repositorio-e-publicacao.md), registrando commit, versão e URL.
5. Configurar domínio (#1), validar formulário e rotas PT/EN no ambiente publicado (#5). Só então ativar NEXT_PUBLIC_SITE_INDEXABLE=true.
6. Validar canonical, robots, sitemap, assets e analytics sem dados pessoais (#11).
7. Para rollback, republicar a versão validada anterior do mesmo projeto. Registrar essa versão antes da implantação.

As issues #5, #6, #7, #32 e #33 têm critérios externos/adicionais e não são encerradas pela revisão local. #29–#31 já estavam fechadas no GitHub consultado.
