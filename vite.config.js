import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, proxy: { '/api': 'http://localhost:5000' } },
  build: { rollupOptions: { output: { manualChunks(id) { if (id.includes('framer-motion') || id.includes('motion-dom')) return 'motion'; if (id.includes('/gsap/')) return 'gsap'; if (id.includes('lucide-react')) return 'icons'; if (id.includes('react-dom') || id.includes('react-router') || /node_modules\/react\//.test(id)) return 'react'; } } } },
  test: { environment: 'jsdom', globals: true, setupFiles: './src/test-setup.js' },
});
