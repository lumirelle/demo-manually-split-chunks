import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist/vite',
    assetsDir: '.',
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        codeSplitting: {
          minSize: 20_000,
          groups: [
            {
              name: 'echarts',
              test: /[\\/]node_modules[\\/]echarts(.*)/,
              priority: 30,
            },
            {
              name: 'element-plus',
              test: /[\\/]node_modules[\\/]element-plus(.*)/,
              priority: 20,
            },
            {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
            },
            {
              name: 'default',
              minSize: 10_000,
              minShareCount: 2,
              priority: 5,
            }
          ]
        },
      },
    },
  }
})
