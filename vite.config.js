import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default {
  build: {
    outDir: 'build', // This ensures the output is in the 'build' folder
  },
}
