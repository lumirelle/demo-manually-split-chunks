import { process } from 'node:process'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite7'

const inspectEnabled = process.env.INSPECT === 'true'

export default defineConfig({
  plugins: [
    vue(),
    ...(
      inspectEnabled
        ? [visualizer({
            filename: '.vite-inspect/vite7-custom/stats.html',
          })]
        : []
    ),
  ],
  build: {
    outDir: 'dist/vite7-custom',
    assetsDir: '.',
    emptyOutDir: true,
    // XXX(Lumirelle): Used to keep the chunk structure clear for inspection. In production, you should not disable it.
    minify: false,
    rollupOptions: {
      output: {
        // We only extract vendor libraries, who are used in every page, into separate chunks. Because:
        // 1. Vite 7 (Rollup) only supports chunks grouping;
        // 2. For business libraries, we may used different parts in different pages, if we group them together, we may get a full size chunk in each page, which reduces the performance.
        manualChunks: (id) => {
          // Extract vendor libraries who are base frameworks
          // into separate chunks.
          if (/node_modules[\\/]@?vue/.test(id)) {
            return 'vue'
          }
          return null
        },
      },
    },
  },
})
