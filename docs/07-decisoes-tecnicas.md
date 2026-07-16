# Decisões técnicas

## ADR-001 - Next.js App Router

**Status:** aceito.

**Decisão:** usar App Router, Server Components e geração estática sempre que possível.

**Motivo:** atende SEO, reduz JavaScript e permite metadata por rota sem criar uma camada paralela.

## ADR-002 - Tailwind CSS com tokens CSS

**Status:** aceito.

**Decisão:** usar Tailwind para layout e estados, com cores, tipografia, raios e espaçamentos de marca definidos em CSS.

**Motivo:** mantém velocidade de composição sem transformar classes utilitárias em fonte de valores arbitrários.

## ADR-003 - Objetos TypeScript em vez de MDX

**Status:** aceito para a primeira versão.

**Decisão:** projetos e serviços ficam em módulos TypeScript.

**Motivo:** o catálogo é pequeno, estruturado e repetível. Tipos oferecem melhor controle editorial. MDX volta a ser avaliado quando houver artigos longos ou autoria não técnica.

## ADR-004 - Sem biblioteca de animação

**Status:** aceito.

**Decisão:** usar CSS para movimento discreto.

**Motivo:** os efeitos necessários são simples; uma dependência de animação aumentaria bundle e hidratação sem ganho proporcional.

## ADR-005 - Formulário sem banco local

**Status:** aceito.

**Decisão:** validar no servidor e encaminhar para Resend ou webhook.

**Motivo:** a primeira versão não precisa persistir leads. Menos dados armazenados significam menos risco e operação.

## ADR-006 - Depoimentos somente com autorização

**Status:** aceito.

**Decisão:** não publicar quotes inventadas ou não aprovadas. A primeira versão usa evidências operacionais e princípios de trabalho.

**Motivo:** credibilidade vale mais que preencher uma seção por convenção de landing page.

## ADR-007 - Representações visuais quando não há screenshot

**Status:** aceito.

**Decisão:** usar diagramas e recortes reconstruídos com legenda explícita.

**Motivo:** demonstra arquitetura e experiência sem fingir que um mockup é tela real do cliente ou expor dados internos.

## ADR-008 - Analytics opt-in por ambiente

**Status:** aceito.

**Decisão:** nenhum script de terceiros é carregado sem variável de ambiente.

**Motivo:** desenvolvimento e prévias permanecem limpos, e o provedor pode mudar sem refatorar páginas.
