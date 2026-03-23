# 🚀 Guia de Performance e Otimizações

## 1. Imagens e Mídia

### Otimizar Imagens WebP
```bash
# Instalar ferramenta (opcional)
# Convert PNG/JPG para WebP mantendo qualidade
```

**Recomendações:**
- ✅ Usar WebP para fotos de projetos
- ✅ Fornecer fallback para PNG/JPG em navegadores antigos
- ✅ Compactar SVGs
- ✅ Lazy load para imagens fora da viewport

### Exemplo no React:
```tsx
<picture>
  <source srcSet="projeto.webp" type="image/webp" />
  <img src="projeto.jpg" alt="Descrição projeto" loading="lazy" />
</picture>
```

## 2. Code Splitting (Lazy Loading)

### Implementar no React:
```tsx
import { lazy, Suspense } from 'react'

const Projetos = lazy(() => import('./pages/Projetos'))

export default function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Projetos />
    </Suspense>
  )
}
```

## 3. Performance Checklist

- [ ] Imagens otimizadas (WebP)
- [ ] Lazy loading ativo
- [ ] Code splitting implementado
- [ ] Service Worker para cache
- [ ] Preload recursos críticos
- [ ] Remove unused CSS (Tailwind já faz via Vite)
- [ ] Minify JS/CSS (Vite build já faz)
- [ ] Gzip compression no servidor

## 4. Lighthouse - Targets

| Métrica | Target | Status |
|---------|--------|--------|
| Performance | 90+ | 🟠 Implementar lazy loading |
| Accessibility | 95+ | 🟢 Implementado |
| Best Practices | 95+ | 🟢 Desfazer links vazios ✅ |
| SEO | 95+ | 🟢 Implementado |

## 5. Próximos Passos

1. **Converter imagens para WebP**
2. **Implementar lazy loading** em componentes pesados
3. **Setup service worker** para offline
4. **Configure preload** em CSS/Fonts
5. **Test no Lighthouse** (DevTools → Lighthouse)

## 6. Ferramentas Teste Performance

```bash
# Vite já oferece build otimizado
npm run build  # Production build

# Para analytics detalhado
npm install @vitejs/plugin-compression
```

---

**Lembre-se:** Vite já oferece ótimas otimizações por padrão. O foco agora é em Lazy Loading e otimização de imagens.
