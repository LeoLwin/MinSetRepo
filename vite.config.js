// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MinSetRepo/', // Correct base path matching the repository name
  plugins: [react()]
});
