import { defineConfig } from "vite7";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist/vite7-default',
    assetsDir: '.',
    emptyOutDir: true,
  }
})
