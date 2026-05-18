import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; // 🚀 This uses your v4 package natively

export default defineConfig({
  site: 'https://fxTawhid.github.io', // Ensure this is set correctly
  base: '/astroship',                 // Omit if deploying to your primary username.github.io domain
  
  integrations: [
    mdx(), 
    sitemap()
    // ❌ REMOVE tailwind() from here entirely
  ],
  
  vite: {
    plugins: [tailwindcss()], // 🚀 THIS IS THE CORRECT TAILWIND V4 SETUP
  },
});
