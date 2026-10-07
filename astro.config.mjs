import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://andregasapucarana.com.br',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // CSS inline no HTML: uma requisição a menos no 4G
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
