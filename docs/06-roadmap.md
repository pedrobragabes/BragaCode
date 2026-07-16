# Roadmap, milestones e backlog

## Milestone 0 - Descoberta e base editorial

Objetivo: remover ambiguidades antes do código de produto.

Tarefas:

- [x] consolidar requisitos;
- [x] validar fatos do currículo;
- [x] propor arquitetura;
- [x] definir sitemap;
- [x] definir design system;
- [x] modelar projetos;
- [x] registrar restrições editoriais;
- [ ] confirmar domínio final;
- [ ] confirmar número de WhatsApp que será publicado;
- [ ] obter autorização para uso de nome, marca e imagens de clientes.

## Milestone 1 - Fundação técnica

Objetivo: criar uma base executável, acessível e consistente.

Issues:

- BC-001: configurar rotas, layout, fontes e tokens;
- BC-002: implementar header, menu mobile, footer e tema;
- BC-003: criar catálogo tipado de serviços, projetos e empresa;
- BC-004: criar componentes de UI e seções reutilizáveis;
- BC-005: configurar metadata base, canonical e JSON-LD.

Critério de saída: shell responsivo, tema funcional e conteúdo carregado a partir dos módulos.

## Milestone 2 - Home comercial

Objetivo: entregar a principal jornada de aquisição.

Issues:

- BC-101: hero e CTAs;
- BC-102: métricas com contexto e origem;
- BC-103: serviços e problemas atendidos;
- BC-104: projetos em destaque;
- BC-105: processo de trabalho;
- BC-106: stack e apresentação do fundador;
- BC-107: FAQ;
- BC-108: CTA e formulário de contato.

Critério de saída: visitante entende oferta, evidência e próximo passo sem navegar para outra página.

## Milestone 3 - Serviços, projetos e institucional

Objetivo: aprofundar intenção e prova.

Issues:

- BC-201: página Serviços;
- BC-202: listagem e filtros de Projetos;
- BC-203: template de case;
- BC-204: publicar sete cases com status editorial correto;
- BC-205: página Sobre;
- BC-206: página Contato;
- BC-207: páginas legais e 404.

Critério de saída: todas as rotas do sitemap estão completas e interligadas.

## Milestone 4 - Integrações, SEO e qualidade

Objetivo: deixar o site pronto para aquisição real.

Issues:

- BC-301: endpoint de contato e validação;
- BC-302: honeypot, tempo mínimo e Turnstile opcional;
- BC-303: integração Resend/webhook;
- BC-304: WhatsApp contextual;
- BC-305: analytics configurável;
- BC-306: metadata individual e Open Graph;
- BC-307: sitemap, robots e JSON-LD;
- BC-308: auditoria de acessibilidade e performance.

Critério de saída: build válido, formulário configurável e SEO técnico coberto.

## Milestone 5 - Conteúdo aprovado e lançamento

Objetivo: substituir pendências editoriais e publicar com segurança.

Issues:

- BC-401: inserir domínio e contatos finais;
- BC-402: adicionar screenshots aprovados;
- BC-403: adicionar depoimentos autorizados;
- BC-404: revisar política e termos;
- BC-405: configurar DNS, analytics e canal de contato;
- BC-406: smoke test em produção;
- BC-407: monitorar erros e conversão na primeira semana.

Materiais operacionais:

- [`templates/autorizacao-case.md`](templates/autorizacao-case.md): escopo e registro da autorização;
- [`templates/inventario-assets-case.md`](templates/inventario-assets-case.md): tratamento e rastreabilidade de cada imagem;
- [`templates/pedido-depoimento.md`](templates/pedido-depoimento.md): coleta, edição e aprovação da citação.

O andamento executável é acompanhado também nas milestones e issues do GitHub. Itens manuais só são concluídos depois que o registro de autorização ou validação estiver disponível.

## Backlog priorizado

### P1 - antes do lançamento público

- domínio e e-mail comercial;
- provedor de formulário;
- Turnstile em produção;
- consentimento e revisão jurídica das páginas legais;
- imagem social final;
- autorização dos cases.

### P2 - após validar aquisição

- páginas individuais de serviço;
- versão em inglês;
- integração com CRM;
- agendamento de conversa;
- blog técnico com estudos de caso;
- eventos de analytics por projeto e origem.

### P3 - expansão

- CMS;
- área de cliente;
- calculadora de escopo orientativa;
- newsletter;
- biblioteca de conteúdos técnicos.
