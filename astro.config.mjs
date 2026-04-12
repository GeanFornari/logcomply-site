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

  integrations: [sitemap()]
});