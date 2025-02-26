// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://admirable-empanada-40f82e.netlify.app',
  integrations: [preact()]
});