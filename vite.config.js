import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ChauxNeuveTourisme.github.io/', // You can use '/' because this is a "user/organization" GitHub Pages repo
  plugins: [react()],
});