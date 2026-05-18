import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({

  site: 'https://fxTawhid.github.io',
  base: '/astroship', 

  integrations: [tailwind()],
});
