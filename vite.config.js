import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Poți schimba portul dacă este necesar
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend-ul tău
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
