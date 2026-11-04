import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base makes the build universally deployable to Netlify, Vercel, or GitHub Pages
  server: {
    port: 5173,
    host: true
  }
});
