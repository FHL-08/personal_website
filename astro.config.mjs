import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Faisal Lawan — immersive portfolio. Static output, React island for the scene.
export default defineConfig({
  integrations: [react()],
  site: 'https://example.pages.dev', // placeholder until a domain is chosen
});
