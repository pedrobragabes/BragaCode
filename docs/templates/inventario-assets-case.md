# Inventário de assets de case

Use uma cópia deste arquivo para cada projeto. Nenhum asset entra em `public/projects/{slug}/` antes de ter origem, tratamento e autorização registrados.

## Identificação

- Projeto:
- Slug:
- Responsável pela revisão:
- Data da revisão:
- Registro de autorização relacionado:

## Inventário

| Arquivo final | Origem | Conteúdo visível | Tratamento aplicado | Autorizado por/em | Alt text | Legenda pública | Destino no site |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |

## Checklist por arquivo

- [ ] não contém nomes, e-mails, telefones, endereços ou outros dados pessoais;
- [ ] não expõe credenciais, tokens, URLs internas, logs sensíveis ou identificadores do ERP;
- [ ] preços, estoques e regras comerciais foram removidos ou aprovados;
- [ ] marcas e logotipos têm autorização de uso;
- [ ] a captura representa o produto descrito e não um mockup apresentado como real;
- [ ] recortes, desfoques e substituições não alteram o sentido da evidência;
- [ ] arquivo convertido para WebP ou AVIF;
- [ ] largura e altura registradas no objeto TypeScript;
- [ ] texto alternativo descreve a informação relevante;
- [ ] legenda explica ambiente e contexto;
- [ ] cópia do original e registro de aprovação foram preservados fora do repositório público.

## Publicação

1. Salvar o arquivo tratado em `public/projects/{slug}/nome-descritivo.webp`.
2. Preencher `asset.src`, `asset.alt`, `asset.width` e `asset.height` em `content/projects.ts`.
3. Confirmar no preview que o selo exibido mudou para “Screenshot autorizado”.
4. Executar lint, build e testes.
5. Registrar o commit e o link da página revisada neste inventário.

- Commit:
- URL revisada:
- Revisado por:
- Data:
