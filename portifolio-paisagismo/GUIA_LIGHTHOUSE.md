# 🔍 Guia: Testando com Chrome DevTools Lighthouse

## 📊 Como Fazer Auditoria Completa

### Passo 1: Build de Produção
```bash
npm run build
npm run preview
```

### Passo 2: Abrir Chrome DevTools
1. Abra seu navegador em `http://localhost:4173`
2. Pressione `F12` ou `Ctrl+Shift+I`
3. Vá para a aba "Lighthouse"

### Passo 3: Executar Auditorias
```
☑ Performance
☑ Accessibility  
☑ Best Practices
☑ SEO
☑ PWA (opcional)
```

### Passo 4: Gerar Relatório
- Clique em "Analyze page load"
- Aguarde a análise completar
- Salve o relatório (PNG/JSON)

## 📈 Métricas Importantes

### Performance Metrics
| Métrica | Target | Descrição |
|---------|--------|-----------|
| FCP | < 1.8s | First Contentful Paint |
| LCP | < 2.5s | Largest Contentful Paint |
| CLS | < 0.1 | Cumulative Layout Shift |
| TBT | < 300ms | Total Blocking Time |

### Accessibility Score
- **90-100**: Excelente ✅
- **80-89**: Bom 🟢
- **70-79**: Médio 🟡
- **< 70**: Precisa melhorias 🔴

### SEO Score
- **90-100**: Excelente ✅
- **80-89**: Bom 🟢
- **70-79**: Médio 🟡
- **< 70**: Precisa melhorias 🔴

## 🎯 Checklist Pré-Auditoria

- [ ] Servidor está rodando em `npm run preview`
- [ ] Sem console errors/warnings
- [ ] Cache devtools limpo (Disable cache)
- [ ] Modo incógnito (elimina extensões)
- [ ] Vindo de mobile device (ou usando mobile emulation)

## 📝 Interpretando Resultados

### Performance
```
✅ Green (90+): Home rapidamente
🟡 Yellow (50-89): Melhorias disponíveis
🔴 Red (<50): Otimização crítica necessária
```

### Acessibilidade
```
✅ Todos elementos com aria-label
✅ Navegação por teclado funciona
✅ Contraste de cores OK
✅ Headings estruturados
```

### SEO
```
✅ Meta tags presentes
✅ Title e description uniques
✅ Structured data (JSON-LD)
✅ Mobile friendly
✅ Robots.txt e sitemap
```

## 🔧 Como Exportar Relatório

1. Clique nos 3 pontos (menu) no relatório
2. Selecione "Save as JSON"
3. Salve em `/reports/lighthouse-{data}.json`

## 🚀 Próximos Passos Após Auditoria

```bash
# Se Performance < 80
→ Implementar lazy loading
→ Otimizar imagens
→ Code splitting

# Se Acessibilidade < 90
→ Testar com screen reader
→ Corrigir contrast issues
→ Implementar mais aria labels

# Se SEO < 90
→ Adicionar og: tags de imagem
→ Implementar schema.org adicional
→ Verificar mobile responsiveness
```

## 💡 Dica Pro

Execute em múltiplas sessões (3x) e pegue a média:
```bash
# Cria variabilidade em network/CPU
# 1ª rodada: cache frio
# 2ª rodada: cache morno  
# 3ª rodada: cache quente
```

---

**Salve os relatórios** para acompanhamento do progresso ao longo do tempo!
