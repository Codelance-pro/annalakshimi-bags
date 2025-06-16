import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0', // 👈 allows access from local network
    port: 5173,       // optional: choose a custom port
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
