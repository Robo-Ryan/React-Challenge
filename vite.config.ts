import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensures paths are relative
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});