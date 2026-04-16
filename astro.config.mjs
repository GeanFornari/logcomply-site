// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vektoraero.com.br',
  base: '/',
  // Força barras exclusivas no final das URLs para evitar conteúdo duplicado no Google
  trailingSlash: 'always',

  build: {
    format: 'directory'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/obrigado/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        // Páginas principais com prioridade máxima
        if (['https://vektoraero.com.br/', 'https://vektoraero.com.br/journeycomply/', 'https://vektoraero.com.br/aisbr/', 'https://vektoraero.com.br/kontrolsub/', 'https://vektoraero.com.br/sobre-nos/'].includes(item.url)) {
          return { ...item, priority: 1.0 };
        }
        return item;
      },
    })
  ]
});