import { defineConfig } from "vite7";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";

const inspectEnabled = process.env.INSPECT === 'true'

export default defineConfig({
  plugins: [
    vue(),
    ...(
      inspectEnabled ? 
      [visualizer({
        filename: '.vite-inspect/vite7-default/stats.html'
      })] :
      []
    ),
  ],
  build: {
    outDir: 'dist/vite7-default',
    assetsDir: '.',
    emptyOutDir: true,
    // XXX(Lumirelle): Used to keep the chunk structure clear for inspection. In production, you should not disable it.
    minify: false,
  }
})
