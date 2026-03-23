# 📋 Checklist: Manutenção Contínua A11Y, SEO & Performance

## 🔄 Semanal

- [ ] Rodar `npm run build` e verificar tamanho do bundle
- [ ] Testar navegação com TAB (teclado)
- [ ] Verificar se não há console warnings
- [ ] Testar em 2 navegadores diferentes (Chrome, Firefox)

## 📅 Mensal

- [ ] Executar Lighthouse completo (Performance, A11Y, SEO)
- [ ] Testar com mobile device real
- [ ] Verificar links quebrados (ferramentas como Screaming Frog)
- [ ] Revisar Google Search Console para erros
- [ ] Testar com screen reader (NVDA grátis no Windows)

## 🔐 Antes de Deploy

```bash
# 1. Build de produção
npm run build
npm run preview

# 2. Lighthouse check
# F12 → Lighthouse → Analyze page load

# 3. Performance check
# DevTools → Performance → Record

# 4. SEO Meta Tags
# Verificar no DevTools se todas as metas estão presentes

# 5. Mobile Responsiveness
# DevTools → Toggle device toolbar
# Testar em: 320px, 768px, 1024px resolutions
```

## 🚨 Red Flags - NÃO Deploy Se

- 🔴 Lighthouse Accessibility < 90
- 🔴 Lighthouse SEO < 90
- 🔴 Console errors/warnings
- 🔴 Links com href="" ou href="#"
- 🔴 Imagens sem alt text
- 🔴 H1 tag ausente
- 🔴 Meta description vazia ou > 160 caracteres

## 💡 Monitoramento Contínuo

### Setup Google Search Console
1. Acesse: https://search.google.com/search-console
2. Adicione seu domínio
3. Verifique com robots.txt
4. Envie sitemap.xml
5. Monitore erros de crawl

### Setup Google Analytics 4
```html
<!-- Adicionar ao <head> do index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Status Monitor
```
✅ Google Search Console: Monitorar erros de indexação
✅ GTmetrix: Performance monitoring (gtmetrix.com)
✅ Lighthouse CI: Automático a cada deploy
```

## 🔗 Recursos Úteis

### Acessibilidade (A11Y)
- WAVE: https://wave.webaim.org/extension/
- axe DevTools: https://www.deque.com/axe/devtools/
- NVDA Screen Reader: https://www.nvaccess.org/

### SEO
- Google Search Console: https://search.google.com/search-console
- Ubersuggest: https://ubersuggest.com/
- Schema.org Validator: https://validator.schema.org/

### Performance
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/
- Chrome DevTools: Built-in F12 → Lighthouse

## 📊 Metricas a Acompanhar

| Métrica | Target | Check |
|---------|--------|-------|
| Lighthouse Performance | 85+ | Mensal |
| Lighthouse Accessibility | 95+ | Mensal |
| Lighthouse SEO | 95+ | Mensal |
| Core Web Vitals LCP | < 2.5s | Semanal |
| Core Web Vitals CLS | < 0.1 | Semanal |
| Bundle Size (gzip) | < 100kB | Cada deploy |
| Organic Traffic | Crescente | Mensal |

## 🧪 Template de Teste Mensal

```markdown
## Auditoria - [MÊS/ANO]

### Lighthouse
- [ ] Performance: __ (Target: 85+)
- [ ] Accessibility: __ (Target: 95+)
- [ ] Best Practices: __ (Target: 90+)
- [ ] SEO: __ (Target: 95+)

### Manual Testing
- [ ] Navegação por teclado OK
- [ ] Skip link funciona
- [ ] Sem console errors
- [ ] Mobile responsiveness OK
- [ ] Links testados

### Search Console
- [ ] Sem erros de crawl
- [ ] Impressões: __
- [ ] Clicks: __
- [ ] CTR: __%
- [ ] Ranking médio: __

### Notas
```

---

## 🎯 Objetivos 2026

- Q1: ✅ Lighthouse 95/95/95/95
- Q2: 📱 Mobile First responsiveness
- Q3: 🚀 Service Worker implementado
- Q4: 🎨 Dark mode com accessibility

---

*Última revisão: 18/03/2026*
*Responsável: Equipe de Development*
