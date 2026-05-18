import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; 
import icon from 'astro-icon'; // 🚀 1. Import the icon integration

export default defineConfig({
  site: 'https://fxTawhid.github.io', // Update with your actual GitHub Pages URL
  base: '/astroship',                 // Omit if utilizing user root domain
  
  integrations: [
    mdx(), 
    sitemap(),
    icon() // 🚀 2. Add icon() here so Vite can find "virtual:astro-icon"
  ],
  
  vite: {
    plugins: [tailwindcss()],
  },
});
