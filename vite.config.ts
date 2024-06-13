

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Jobchaser/', // Set this to the base URL you need
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Ensure JavaScript files are treated as ES modules
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
