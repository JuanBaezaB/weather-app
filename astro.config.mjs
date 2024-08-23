import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind({
    applyBaseStyles: false
  }), alpinejs()],
  adapter: vercel()
});