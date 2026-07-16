# Auditoria de qualidade e lançamento

## Cobertura automatizada

A suíte de navegador roda no Chromium desktop/mobile, Firefox e WebKit. Ela verifica:

- jornadas de navegação, tema, filtros, formulário, 404, sitemap e WhatsApp;
- menu mobile por teclado e retorno de foco com `Escape`;
- auditoria axe nas páginas principais, nos temas claro e escuro, para regras WCAG A e AA;
- skip link, sequência de foco e acesso aos controles principais;
- preferência `prefers-reduced-motion: reduce`;
- ausência de overflow horizontal em 320, 360, 640, 768 e 1440 px;
- reflow equivalente a 200% por meio da largura CSS de 640 px para um viewport de 1280 px.

O WebKit oferece detecção antecipada de incompatibilidades do motor usado pelo Safari, mas não substitui a validação final no Safari real. Chromium cobre o motor do Edge; diferenças do navegador distribuído pela Microsoft ainda precisam de um smoke test final.

## Orçamento Lighthouse

| Indicador | Orçamento | Tratamento no CI |
| --- | ---: | --- |
| Performance | 85 ou mais | aviso até existir URL de produção estável |
| Acessibilidade | 95 ou mais | bloqueia merge |
| Boas práticas | 90 ou mais | bloqueia merge |
| SEO | 95 ou mais | bloqueia merge |
| FCP | até 1,8 s | aviso |
| LCP | até 2,5 s | aviso |
| TBT | até 200 ms | aviso |
| CLS | até 0,1 | bloqueia merge |
| JavaScript transferido | até 200 KiB | bloqueia merge |
| Peso total | até 900 KiB | aviso |

Os avisos de tempo não bloqueiam o CI porque medições sintéticas variam entre runners. Depois do domínio e da hospedagem finais, a auditoria deve rodar também na URL pública e os Core Web Vitals de campo devem ser acompanhados no Search Console.

No Windows, `npm run test:lighthouse` executa o diagnóstico da configuração. A coleta completa fica no runner Linux do CI porque a versão estável atual do Lighthouse CI apresenta incompatibilidade de limpeza de arquivos temporários com o Chrome instalado neste ambiente. Isso não afeta o bundle publicado; a auditoria volta a ser repetida diretamente na URL pública antes do lançamento.

## Verificação manual restante

Antes da divulgação pública:

- [ ] percorrer Home, Serviços, Projetos, um case, Sobre e Contato com NVDA + Chrome;
- [ ] conferir Safari em iPhone e macOS reais;
- [ ] conferir Microsoft Edge estável no Windows;
- [ ] validar zoom nativo de 200% no Chrome, Firefox, Safari e Edge;
- [ ] confirmar foco visível e contraste em monitor com tema claro e escuro;
- [ ] testar iPhone com 320/375 px, Android com 360/412 px, tablet e desktop 1440 px;
- [ ] rodar Lighthouse na URL de produção sem extensões do navegador;
- [ ] verificar favicon, ícone de instalação e Open Graph em canais reais;
- [ ] registrar navegador, sistema, data, resultado e evidência no comentário da issue #5.

## Critério de liberação

Não pode existir violação axe A/AA, bloqueio de teclado, perda de foco, overflow horizontal ou regressão que quebre uma jornada em Chromium, Firefox ou WebKit. A issue só deve ser encerrada depois dos testes manuais e da medição na URL de produção.
