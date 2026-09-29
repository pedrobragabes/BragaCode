# Fontes e curadoria — setembro de 2026

- AquaFlora: https://aquafloragroshop.com.br/ e https://github.com/pedrobragabes/aquaflora-stock-sync. A documentação local da plataforma aquaflora distingue validação local de implantação. O bot é independente.
- JoysticKnights: https://joysticknights.com.br/ e https://github.com/pedrobragabes/JoysticKnights. Frontend atual Next.js; WordPress é o CMS.
- Comércio BES: [repositório canônico comercio-bes](https://github.com/pedrobragabes/comercio-bes), confirmado em 29/09. Next/React em transição com API Express/PostgreSQL; não confundir com BragaCommerce. O endereço anterior e o upstream Ramon pertencem ao histórico; a [auditoria atual](15-auditoria-ecossistema.md) identifica fontes, commits e limites.
- Imagens: capturas das interfaces públicas feitas em 6 de setembro de 2026, sem login. Originais PNG e versões WebP no diretório public/images/projects. Os jogos e produtos retratados pertencem aos respectivos titulares; uso contextual como registro dos projetos.
- Retrato: imagem existente no portfólio pessoal do fundador.

O case de floricultura permanece acessível pelo endereço histórico, fora da seleção comercial. Não foram criados clientes, depoimentos ou métricas da empresa. A experiência profissional do fundador é atribuída a ele, sem inferir contratação da BragaCode.

## Revisão de marca e cases — 25 de setembro de 2026

- Logo: três arquivos oficiais fornecidos por Pedro Braga nesta solicitação, preservados sem redesenho em `public/images/brand/`. Cabeçalho, rodapé, Home, ícones e compartilhamento usam esses arquivos. O CSS enquadra as margens do arquivo para a apresentação compacta.
- Seleção comercial: AquaFlora, PromoGames, Braga Commerce e JoysticKnights. Os demais projetos mantêm seus endereços históricos; Comércio BES fica fora da seleção enquanto a maturidade não for confirmada.
- PromoGames: README, aplicação Next.js, plugin WordPress e runbooks do repositório `pedrobragabes/promogames`, commit `5db85c8243e530aaf1480c34c29ae76c0ebdc4a8`. A migração está em preparação, com piloto e rollback documentados. Não é declarada como concluída.
- Galeria PromoGames: capturas de uma cópia temporária desse commit em execução local, consumindo a API pública do WordPress. Home desktop (1440 × 1000), artigo (1440 × 1100) e mobile (430 × 932), em `public/images/projects/promogames-*.jpg`. Sem acesso administrativo ao CMS; o papel do CMS aparece no diagrama de arquitetura. Nenhum screenshot de painel foi simulado.
- Braga Commerce: README e documentos de arquitetura, checkout, pagamentos e beta do repositório `Braga-Commerce`, commit `c06cfd7329ab40e4a89c7da1f1deb4b7ca803bd2`. Beta protegido; o go-live comercial continua pendente. PostgreSQL, Prisma, reserva atômica, autorização e webhooks idempotentes são capacidades descritas no código/documentação, sem promessa de vendas.
- AquaTV: README do repositório `AquaFloraTV`, commit `f27b54b44f385a223f9f3f1ae81de63838245ca5`. MVP local com dashboard, API e player web; Android TV permanece planejado. A maturidade é independente da loja WooCommerce e dos apps internos.

O texto comercial distingue o serviço da BragaCode da carreira de Pedro. A página Sobre aponta ao portfólio pessoal para trajetória e currículo; nenhum outro repositório ou domínio foi alterado.
