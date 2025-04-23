import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ChauxNeuveTourisme.github.io/', // <-- adjust this to your repo name!
  plugins: [react()],
});