import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // You can use '/' because this is a "user/organization" GitHub Pages repo
  plugins: [react()],
});