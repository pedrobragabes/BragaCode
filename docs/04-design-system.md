# Design system BragaCode

## 1. Direção visual

Conceito: **infraestrutura legível**.

A interface combina tipografia editorial forte, linhas técnicas, blocos de dados e superfícies contidas. O resultado deve lembrar um estúdio de engenharia que entende operação, não um template de startup com gradientes aleatórios.

Características:

- títulos curtos, grandes e com quebras intencionais;
- grid visível em detalhes, sem transformar a página em “terminal hacker”;
- verde-lima usado como sinal de ação e estado, não como fundo dominante;
- azul frio para dados e relações técnicas;
- cantos moderados, bordas finas e sombras discretas;
- mockups de produto abstratos e construídos com componentes reais;
- animação limitada a entrada, hover, menu e transição de tema.

## 2. Marca verbal

Tom: direto, técnico e acessível.

Exemplos aprovados:

- “Seu ERP não precisa conversar por planilha com a loja.”
- “Atualização de estoque, preço e catálogo sem depender de digitação repetitiva.”
- “Do código de barras no estoque à atualização no e-commerce.”

Evitar:

- “soluções inovadoras”;
- “transformamos sonhos em realidade”;
- “tecnologia de ponta” sem evidência;
- superlativos sem prova;
- jargão técnico antes do problema de negócio.

## 3. Cores

### Base escura

- `--bg`: `#0A0D0C`
- `--surface`: `#111613`
- `--surface-raised`: `#171D19`
- `--text`: `#F3F6F0`
- `--text-muted`: `#AAB4AA`
- `--border`: `#2A332D`

### Base clara

- `--bg`: `#F3F5EF`
- `--surface`: `#FFFFFF`
- `--surface-raised`: `#E9EEE6`
- `--text`: `#101411`
- `--text-muted`: `#566057`
- `--border`: `#CDD5CD`

### Acentos

- `--accent`: `#B7F34B` - CTA, foco e estados ativos;
- `--accent-ink`: `#182307` - texto sobre o verde;
- `--signal`: `#71A7FF` - informação técnica e gráficos;
- `--danger`: `#FF766E` - erro;
- `--success`: `#72D69A` - confirmação.

Contraste deve ser validado por combinação. Verde-lima não será usado para texto pequeno sobre branco.

## 4. Tipografia

- Display e texto: Manrope Variable, pesos 400 a 800, hospedada localmente.
- Dados e labels: JetBrains Mono Variable, pesos 400 a 700, hospedada localmente.
- Fallback: `Segoe UI`, `Arial`, `sans-serif` e `ui-monospace`.

Escala fluida:

- Display XL: `clamp(3.2rem, 8vw, 7.5rem)`;
- H1 interno: `clamp(2.6rem, 6vw, 5.5rem)`;
- H2: `clamp(2rem, 4vw, 3.75rem)`;
- H3: `clamp(1.25rem, 2vw, 1.65rem)`;
- corpo grande: `clamp(1.08rem, 1.5vw, 1.35rem)`;
- corpo: `1rem`;
- label: `0.75rem`, uppercase, tracking `0.12em`.

## 5. Espaçamento e layout

- unidade base: 4 px;
- espaço entre seções: 96-160 px desktop, 72-96 px mobile;
- largura máxima: 1280 px;
- texto corrido: 68 caracteres por linha;
- grid desktop: 12 colunas;
- grid tablet: 8 colunas;
- grid mobile: 4 colunas;
- gutter: 20 px mobile, 32 px desktop.

## 6. Componentes

### Botões

- primário: fundo accent, texto escuro, seta curta;
- secundário: fundo transparente, borda e texto;
- textual: sem caixa, sublinhado animado;
- estados: default, hover, active, focus-visible, disabled e loading;
- altura mínima: 48 px.

### Cards

- `ProjectCard`: área, título, problema, resultado/evidência e CTA;
- `ServiceCard`: número, problema, entregáveis e projeto relacionado;
- `Metric`: valor, unidade e explicação da origem;
- `TechGroup`: categoria, tecnologias e uso real;
- `ProcessStep`: etapa, saída esperada e participação do cliente.

### Formulário

- label sempre visível;
- ajuda e erro abaixo do campo;
- borda de 1 px e foco de 2 px;
- feedback de envio em região `aria-live`;
- checkbox de consentimento com texto explícito;
- campos não usam placeholder como label.

### Galeria de case

Em ausência de screenshots publicáveis, usar painéis visuais honestos: fluxos, recortes de interface reconstruídos e diagramas de integração identificados como representação. Nunca apresentar um mockup inventado como tela real do cliente.

## 7. Movimento

- duração curta: 160 ms;
- duração média: 280 ms;
- easing: `cubic-bezier(.2,.8,.2,1)`;
- entrada de seção: opacidade + deslocamento máximo de 16 px;
- hover de card: deslocamento máximo de 4 px;
- nenhum parallax em mobile;
- com movimento reduzido, transições essenciais ficam instantâneas.

## 8. Tema

O tema inicial segue o sistema. A pessoa pode alternar entre claro e escuro. O controle usa texto acessível, ícone complementar e atualiza `color-scheme` para inputs nativos.

## 9. Responsividade

- o hero deve caber sem cortar CTA em 360 px;
- cards viram lista de uma coluna no mobile;
- métricas mantêm leitura em 2 x 2 ou rolagem apenas quando semanticamente adequada;
- menus, acordeões e filtros têm alvos de toque confortáveis;
- palavras técnicas longas podem quebrar sem provocar overflow;
- galeria de case usa scroll snap opcional no mobile e grid no desktop.
