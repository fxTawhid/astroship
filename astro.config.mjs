import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fxTawhid.github.io',
  base: '/astroship', // Make sure this matches your exact repo name!
  integrations: [tailwind()],
});
