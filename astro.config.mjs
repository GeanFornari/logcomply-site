// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vektoraero.com.br',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});