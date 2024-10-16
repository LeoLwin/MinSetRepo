// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MinsetRepo-github/', // Base path for GitHub Pages deployment
  plugins: [react()]
});
