# Quantum Factory — quantumfactory.io

Sitio corporativo de Quantum Factory (Boutique AI & Data). Astro 7 + Tailwind CSS 3, salida estática.

## Estructura

```
src/
  layouts/Layout.astro      # <head> completo: meta, OG/Twitter, canonical, JSON-LD
  components/               # Header, Hero, Statement, Services, Method, Differentials, Contact, Footer
  pages/index.astro         # Home
  pages/servicios/          # Catálogo (/servicios) + 12 detalles (/servicios/[slug])
  data/services.json        # Contenido de los 12 servicios
  data/services.ts          # Tipos, familias (acentos de color), textos compartidos
  data/site.ts              # Datos de la organización + Organization/WebSite JSON-LD
  data/seo.ts               # Builders JSON-LD (Service, FAQPage, BreadcrumbList, ItemList…)
public/                     # Assets SVG de marca, og.png, robots.txt, manifest
```

## Comandos

| Comando           | Acción                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Instala dependencias                     |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Build de producción en `./dist/`         |
| `npm run preview` | Previsualiza el build                    |

## Notas

- URLs sin barra final (`build.format: 'file'` + `trailingSlash: 'never'`); `vercel.json` activa `cleanUrls`.
- Sitemap en `/sitemap-index.xml`, referenciado desde `robots.txt` y `<link rel="sitemap">`.
- El minificador CSS es esbuild (no lightningcss) para conservar `backdrop-filter` con y sin prefijo.
