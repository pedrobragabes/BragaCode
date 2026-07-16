# Operação e monitoramento

## Objetivo

Detectar falhas do Worker e do formulário sem transformar a ferramenta de observabilidade em uma cópia dos dados enviados por clientes.

## Configuração

O Worker usa o SDK oficial `@sentry/cloudflare`. A integração só é ativada quando `SENTRY_DSN` existe no ambiente. Configure também:

- `SENTRY_ENVIRONMENT`: `production`, `staging` ou outro nome estável;
- `SENTRY_TRACES_SAMPLE_RATE`: proporção entre `0` e `1`; o padrão é `0.05`;
- `nodejs_compat`: já habilitado na configuração do Worker.

`sendDefaultPii` permanece desabilitado. Antes do envio, a aplicação remove usuário, corpo, cookies, cabeçalhos, query string e dados extras. Erros operacionais do contato registram somente operação, provedor, possibilidade de nova tentativa e status técnico.

## Alertas iniciais

Criar no painel do Sentry:

1. alerta imediato para um novo tipo de erro em `production`;
2. alerta quando `contact_delivery` ocorrer 3 vezes em 10 minutos;
3. alerta quando a taxa de erros do Worker superar 2% por 10 minutos;
4. entrega por e-mail para Pedro e, quando existir, para o canal operacional da empresa.

O limite reduz ruído pontual, mas torna uma indisponibilidade do formulário visível antes que vários contatos sejam perdidos.

## Retenção e acesso

- usar a menor retenção disponível compatível com a investigação operacional, inicialmente 30 dias;
- conceder acesso apenas a pessoas que atuem no suporte técnico;
- não anexar payloads de leads, prints com dados pessoais ou exportações do CRM;
- excluir manualmente qualquer evento que receba informação pessoal por uma integração futura incorreta.

## Teste de falha

Em `staging`, configurar uma URL de webhook inválida e enviar um contato de teste. O resultado esperado é:

- resposta controlada de falha no formulário;
- evento `contact_delivery` no Sentry;
- tags de ambiente, operação e provedor presentes;
- ausência de nome, e-mail, telefone, empresa e mensagem do lead.

Depois do teste, restaurar a URL válida e resolver o evento com uma nota curta sobre a causa.

## Roteiro de investigação

1. confirmar ambiente, horário, operação e provedor nas tags;
2. verificar saúde do provedor e mudanças recentes de deploy;
3. reproduzir em `staging` com dados fictícios;
4. aplicar correção ou contingência, sem copiar dados do lead para o Sentry;
5. validar um novo envio e registrar a resolução do incidente.
