# Integração operacional de leads

## Contrato do webhook

Quando `CONTACT_WEBHOOK_URL` e `CONTACT_WEBHOOK_SECRET` estão configurados, o endpoint de contato envia:

```json
{
  "id": "UUID estável criado pelo formulário",
  "source": "bragacode-site",
  "name": "Nome informado",
  "company": "Empresa, quando informada",
  "email": "email@exemplo.com",
  "phone": "Telefone, quando informado",
  "projectType": "E-commerce",
  "message": "Contexto comercial informado",
  "consent": true
}
```

O corpo não inclui IP, token do Turnstile, honeypot nem marcadores internos de tempo. A URL do webhook e seu segredo ficam apenas no ambiente do servidor.

## Autenticidade

Cabeçalhos enviados:

- `Idempotency-Key: contact/<UUID>`;
- `X-BragaCode-Timestamp`: horário Unix em segundos;
- `X-BragaCode-Signature: sha256=<hex>`.

A assinatura é o HMAC SHA-256 de `<timestamp>.<corpo JSON exato>`. O receptor deve recalcular o valor com `CONTACT_WEBHOOK_SECRET`, comparar em tempo constante e rejeitar timestamps com mais de cinco minutos.

## Idempotência

Antes de criar um lead, o receptor deve inserir a `Idempotency-Key` em uma coluna ou tabela com restrição única. Se a chave já existir, deve devolver sucesso sem criar outro registro. A chave e o corpo permanecem iguais nas novas tentativas feitas pelo site.

No fluxo por e-mail, a mesma chave é enviada à API do Resend, que mantém a deduplicação no provedor.

## Tentativas e falhas

O site faz no máximo três tentativas, com intervalos curtos, somente para falha de rede, `408`, `425`, `429` ou respostas `5xx`. Erros permanentes `4xx` não são repetidos. Depois do limite, o visitante recebe uma alternativa pelo WhatsApp e o monitoramento registra apenas metadados operacionais.

## Teste de aceite

1. enviar um lead de teste e confirmar a assinatura;
2. responder `503` na primeira chamada e `200` na segunda;
3. conferir que corpo, assinatura e chave são idênticos;
4. repetir manualmente a requisição e confirmar que só existe um lead;
5. confirmar que logs e eventos de erro não contêm o corpo.
