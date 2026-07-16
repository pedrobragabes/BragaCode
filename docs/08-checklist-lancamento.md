# Checklist de lançamento

## Conteúdo e comercial

- [ ] domínio final confirmado;
- [ ] e-mail comercial confirmado;
- [ ] WhatsApp comercial confirmado;
- [ ] nomes de clientes e marcas autorizados;
- [ ] métricas revisadas com fonte;
- [ ] screenshots tratados e autorizados;
- [ ] depoimentos aprovados por escrito;
- [ ] status de cada projeto revisado;
- [ ] CTAs testados em todas as páginas.

Use os modelos em [`docs/templates`](templates/) para registrar autorização de cases, inventário de assets e aprovação de depoimentos. Os registros preenchidos podem conter dados de contato e não devem ser versionados no repositório público.

## Legal e privacidade

- [ ] razão social/CNPJ incluídos apenas se aplicáveis;
- [ ] Política de Privacidade revisada por responsável jurídico;
- [ ] Termos de Uso revisados;
- [ ] finalidade e retenção dos dados do formulário confirmadas;
- [ ] consentimento compatível com o fluxo real;
- [ ] analytics e cookies refletidos na política.

## Formulário e integrações

- [ ] `CONTACT_TO_EMAIL` configurado;
- [ ] provedor de envio ou webhook configurado;
- [ ] domínio remetente verificado;
- [ ] Turnstile configurado em produção;
- [ ] mensagem de sucesso recebida pelo usuário;
- [ ] erro do provedor monitorado;
- [ ] teste de spam básico concluído;
- [ ] link de WhatsApp abre no desktop e mobile.

## SEO

- [ ] `NEXT_PUBLIC_SITE_URL` aponta para HTTPS final;
- [ ] title e description revisados por rota;
- [ ] canonical correto;
- [ ] Open Graph validado;
- [ ] favicon e ícones instaláveis;
- [ ] sitemap acessível;
- [ ] robots acessível;
- [ ] JSON-LD validado no Rich Results Test/validator;
- [ ] Search Console configurado;
- [ ] compartilhamento testado em WhatsApp e LinkedIn.

## Acessibilidade

- [ ] teclado percorre menu, filtros, acordeões e formulário;
- [ ] foco nunca fica oculto;
- [ ] contraste AA validado nos dois temas;
- [ ] zoom a 200% sem perda de conteúdo;
- [ ] leitor de tela anuncia navegação e erros;
- [ ] `prefers-reduced-motion` respeitado;
- [ ] touch targets com tamanho adequado;
- [ ] página 404 oferece saída clara.

## Performance e compatibilidade

- [ ] Lighthouse executado em produção;
- [ ] LCP, INP e CLS dentro do orçamento;
- [ ] imagens responsivas e comprimidas;
- [ ] fontes sem bloquear conteúdo;
- [ ] sem erro no console;
- [ ] sem overflow em 320/360 px;
- [ ] testado em Chrome, Firefox, Safari e Edge atuais;
- [ ] testado em Android e iOS reais ou serviço equivalente.

## Operação

- [ ] variáveis de ambiente registradas sem valores secretos;
- [ ] deploy reproduzível a partir do README;
- [ ] rollback conhecido;
- [ ] monitoramento de erros configurado;
- [ ] analytics de conversão configurado;
- [ ] responsável por responder leads definido;
- [ ] cópia de segurança dos assets finais;
- [ ] revisão após 7 e 30 dias agendada.
