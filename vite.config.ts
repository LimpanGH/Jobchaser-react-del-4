

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Set this to the base URL you need
  plugins: [react()],
 
});
