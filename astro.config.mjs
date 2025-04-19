// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://roaring-frangollo-681857.netlify.app",
  integrations: [preact()]
});