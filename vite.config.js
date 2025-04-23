export default defineConfig({
  base: '/ChauxNeuveTourisme.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
});