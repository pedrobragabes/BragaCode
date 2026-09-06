# Documento de requisitos - BragaCode

> Planejamento e curadoria atuais: [posicionamento](12-posicionamento.md) e [roadmap](06-roadmap.md), revisão 2026-09-05. Este documento descreve a base do produto; estados externos precisam de evidência.

## 1. Visão do produto

O site será o principal canal comercial da BragaCode e terá duas funções igualmente importantes:

1. explicar, em linguagem de negócio, quais gargalos a BragaCode resolve;
2. provar capacidade técnica com cases que mostram contexto, implementação e resultado.

Posicionamento principal:

> Software, e-commerce e automações para empresas que querem crescer sem depender de processos manuais.

O site não deve se apresentar como uma fábrica de software genérica. A narrativa parte de situações concretas: catálogo que não acompanha o ERP, equipe atualizando preço manualmente, atendimento repetitivo no WhatsApp, sistema interno que não funciona bem no celular e e-commerce sem autonomia operacional.

## 2. Objetivos

### Objetivos de negócio

- gerar contatos qualificados para projetos de software, e-commerce e automação;
- reduzir a necessidade de explicar os serviços do zero em cada conversa;
- demonstrar domínio de projetos que conectam operação, produto e infraestrutura;
- estabelecer Pedro Braga como fundador e responsável técnico;
- criar uma base editorial que possa crescer sem reescrever a aplicação.

### Objetivos do usuário

- entender rapidamente se a BragaCode atende ao seu tipo de problema;
- avaliar projetos reais e tecnologias utilizadas;
- saber como funciona o processo de contratação;
- solicitar uma conversa por formulário ou WhatsApp;
- encontrar informações institucionais e legais com facilidade.

### Indicadores sugeridos

- clique no CTA de orçamento;
- abertura de conversa no WhatsApp;
- envio válido do formulário;
- visualização de pelo menos um case;
- profundidade de navegação entre serviço e projeto relacionado;
- Core Web Vitals dentro da faixa “boa” em produção.

## 3. Públicos prioritários

1. **PMEs com operação manual:** empresas que dependem de planilhas, digitação duplicada ou atualização manual de catálogo.
2. **Comércios com catálogo amplo:** negócios que precisam sincronizar ERP, estoque, preço, WooCommerce ou canais de atendimento.
3. **Empresas que precisam de software sob medida:** equipes que já validaram o processo, mas não encontram uma ferramenta pronta adequada.
4. **Agências e parceiros técnicos:** empresas que precisam terceirizar backend, integrações, automações ou manutenção.

## 4. Proposta de valor

- A BragaCode conecta sistemas existentes em vez de obrigar a operação a recomeçar do zero.
- O projeto considera o uso diário: celular no estoque, catálogo em escala, falhas de integração e necessidade de suporte.
- A entrega pode cobrir interface, backend, automação e infraestrutura, reduzindo pontos de dependência entre fornecedores.
- O escopo é explicado por problema, risco e resultado esperado, não por uma lista solta de tecnologias.

## 5. Escopo funcional

### Navegação e conteúdo

- Home orientada a conversão;
- página de serviços com seis frentes comerciais;
- listagem de projetos com filtros simples por categoria;
- página detalhada para cada projeto publicado;
- página Sobre com trajetória, princípios e competências;
- página Contato com formulário e atalho para WhatsApp;
- Política de Privacidade, Termos de Uso e 404 personalizada;
- navegação responsiva e rodapé com contatos, rotas e informações legais.

### Cases

Cada case deve conter:

- status do projeto e natureza do trabalho;
- problema, contexto e restrições;
- solução e decisões técnicas;
- funcionalidades;
- tecnologias;
- resultados verificáveis ou ganhos qualitativos, sem métricas inventadas;
- galeria de telas ou diagramas visuais;
- links relacionados quando públicos;
- CTA para solicitar projeto semelhante.

### Conversão

- CTA principal “Solicitar orçamento”;
- CTA secundário “Ver projetos”;
- links de WhatsApp com mensagem pré-preenchida e origem da página;
- formulário com nome, empresa, e-mail, telefone opcional, tipo de projeto, contexto e consentimento;
- validação no cliente e no servidor;
- honeypot, verificação de tempo mínimo e suporte opcional a Cloudflare Turnstile;
- envio por provedor configurável, sem expor credenciais no navegador.

### Tema e preferências

- tema claro, escuro e opção “usar tema do sistema”;
- preferência persistida no dispositivo;
- funcionamento sem JavaScript para o conteúdo principal;
- animações reduzidas quando `prefers-reduced-motion` estiver ativo.

## 6. Requisitos não funcionais

### Acessibilidade

- HTML semântico, landmarks e hierarquia consistente de títulos;
- navegação completa por teclado;
- foco visível e contraste compatível com WCAG 2.2 AA;
- alvos de toque de pelo menos 44 px;
- mensagens de erro associadas aos campos;
- ícones decorativos ignorados por leitores de tela;
- nenhuma informação transmitida apenas por cor.

### Performance

- Server Components por padrão;
- JavaScript no cliente apenas para menu, tema, filtros e formulário;
- fontes locais e subconjuntos necessários;
- imagens dimensionadas e otimizadas;
- animações com `transform` e `opacity`;
- orçamento inicial: LCP <= 2,5 s, INP <= 200 ms e CLS <= 0,1 no percentil 75.

### SEO

- título e descrição individuais;
- canonical e Open Graph por rota;
- `sitemap.xml` e `robots.txt` gerados pela aplicação;
- JSON-LD de `Organization`, `ProfessionalService`, `Service`, `Person`, `BreadcrumbList` e `CreativeWork` conforme a página;
- URL legível e estável para cada projeto;
- conteúdo indexável sem depender de hidratação.

### Segurança e privacidade

- nenhuma chave privada no bundle do cliente;
- validação e normalização de entrada no servidor;
- limitação de tamanho do payload;
- resposta neutra a tentativas de spam;
- política de retenção de contatos documentada;
- analytics desativado quando a variável de ambiente não estiver configurada;
- consentimento claro para envio de informações pelo formulário.

## 7. Conteúdo confirmado pelo currículo

- atuação na AquaFlora AgroShop desde janeiro de 2025;
- experiência com WordPress/WooCommerce, PHP, JavaScript, Python, Node.js, REST APIs e Docker;
- middleware/ETL entre ERP legado e WooCommerce;
- operação com 3.000+ SKUs e fluxo de sincronização preparado para 4.000+ SKUs e 6.300+ ativos;
- aplicativo interno mobile-first com leitura de código de barras e autenticação JWT;
- automação de triagem de atendimento com Node.js e LLM;
- graduação em Engenharia de Computação na UNIVESP, com conclusão prevista para 2030;
- inglês avançado/fluente com certificação EF SET C1;
- Joysticknights mantido desde 2020.

## 8. Restrições editoriais

- não publicar faturamento, economia percentual, nomes de sistemas legados ou dados operacionais não autorizados;
- não apresentar RastreIAGastos e CadastraFácil como produtos finalizados; ambos são protótipos em desenvolvimento;
- não criar depoimentos sem texto e autorização do cliente;
- não chamar experiência individual de “equipe” enquanto a empresa operar sob liderança direta do fundador;
- usar “BragaCode” como marca e “Pedro Braga” como responsável técnico, sem inferir razão social, CNPJ ou endereço fiscal.

## 9. Fora do escopo da primeira versão

- área do cliente e autenticação;
- CMS remoto;
- blog;
- cálculo automático de preço;
- agenda integrada;
- painel para leads;
- versão em inglês;
- chat com IA no site.

## 10. Critérios de aceite da primeira versão

- todas as rotas previstas respondem e têm metadata própria;
- Home contém proposta, prova, serviços, cases, processo, stack, fundador, FAQ, contato e CTA final;
- projetos principais têm páginas completas e projetos menores têm conteúdo honesto sobre maturidade;
- formulário rejeita entradas inválidas e spam básico;
- WhatsApp funciona com mensagem contextual;
- tema é acessível e persistente;
- sitemap, robots e dados estruturados são válidos;
- build de produção conclui sem erro;
- documentação permite configurar, testar e publicar o projeto.
