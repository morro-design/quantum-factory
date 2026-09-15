// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://quantumfactory.io',
  trailingSlash: 'never',
  // `file` format => /servicios/foo.html, served as /servicios/foo by static hosts
  build: { format: 'file' },
  integrations: [sitemap()],
  vite: {
    build: {
      // lightningcss (Vite 8 default) collapses `-webkit-backdrop-filter` /
      // `backdrop-filter` pairs and drops one of them; esbuild keeps both,
      // matching the Tailwind CDN output the design was built against.
      cssMinify: 'esbuild',
    },
  },
});
