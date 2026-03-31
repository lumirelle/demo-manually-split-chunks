import { defineConfig } from "vite7";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist/vite7-custom',
    assetsDir: '.',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Extract vendor libraries who are base frameworks
          // into separate chunks.
          if (/node_modules[\\/]vue/.test(id)) {
            return 'vue'
          }
          // Extract large vendors into a separate chunk.
          if (/node_modules[\\/]echarts/.test(id)) {
            return 'echarts'
          }
          if (/node_modules[\\/]element-plus/.test(id)) {
            return 'element-plus'
          }
          // Extract common vendors into a separate chunk.
          if (/node_modules/.test(id)) {
            return 'vendor'
          }
          return null
        },
      },
    },
  }
})
