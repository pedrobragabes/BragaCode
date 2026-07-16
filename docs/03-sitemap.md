# Sitemap e arquitetura de informação

## Mapa de rotas

```text
/
├── /servicos
├── /projetos
│   ├── /projetos/aquaflora-agroshop
│   ├── /projetos/ecommerce-floricultura
│   ├── /projetos/comercio-bes
│   ├── /projetos/joysticknights
│   ├── /projetos/rastreia-gastos
│   ├── /projetos/cadastra-facil
│   └── /projetos/hybrid-homelab
├── /sobre
├── /contato
├── /politica-de-privacidade
├── /termos-de-uso
└── /404 (estado de rota não encontrada)
```

## Navegação global

Menu principal: Serviços, Projetos, Sobre, Contato.

CTA persistente em desktop: **Solicitar orçamento**.

No mobile, o menu abre em painel com foco gerenciado, fecha por Escape e mantém o CTA visível.

## Estrutura da Home

1. Header e navegação.
2. Hero com proposta e dois CTAs.
3. Prova operacional: 4.000+ SKUs, 6.300+ ativos e projetos desde 2020.
4. Problemas que a BragaCode resolve.
5. Serviços principais.
6. Cases em destaque.
7. Processo em quatro etapas.
8. Tecnologias organizadas por função.
9. Apresentação do fundador.
10. Evidências e princípios de trabalho; depoimentos entram após aprovação dos clientes.
11. FAQ.
12. Formulário de contato.
13. CTA final e rodapé.

## Páginas de serviço

Na primeira versão, `/servicos` reúne as frentes em uma única página indexável:

- sites e landing pages;
- e-commerce;
- sistemas web e painéis;
- APIs e integrações;
- automações e sincronização;
- infraestrutura, suporte e manutenção.

Cada bloco liga o problema típico a entregáveis, tecnologias e case relacionado. Páginas individuais de serviço ficam no backlog após validação de demanda orgânica.

## Taxonomia dos projetos

- `ecommerce`
- `automacao`
- `sistema-web`
- `plataforma`
- `infraestrutura`
- `conteudo`
- `prototipo`

Filtros são controles de interface, não novas URLs na primeira versão. Isso evita páginas finas e duplicação de conteúdo.

## Jornada de conversão

```text
Busca/indicação
  -> Home ou case
  -> entendimento do problema resolvido
  -> evidência técnica/operacional
  -> serviço relacionado
  -> formulário ou WhatsApp
```

## Estratégia de links internos

- Home aponta para os três cases principais.
- Cada serviço aponta para projetos que comprovam a capacidade.
- Cada case aponta para o serviço relacionado e para Contato.
- Sobre aponta para projetos e Contato.
- Contato oferece WhatsApp como alternativa, sem competir com o formulário.
- Páginas legais retornam à Home e ao contato do responsável.
