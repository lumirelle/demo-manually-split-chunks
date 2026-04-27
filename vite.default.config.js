import { process } from 'node:process'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

const inspectEnabled = process.env.INSPECT === 'true'

export default defineConfig({
  devtools: inspectEnabled
    ? {
        enabled: true,
        build: { withApp: true },
      }
    : false,
  plugins: [
    vue(),
    ...(
      inspectEnabled
        ? [inspect({
            build: true,
            outputDir: '.vite-inspect/vite-default',
          })]
        : []
    ),
  ],
  build: {
    outDir: 'dist/vite-default',
    assetsDir: '.',
    emptyOutDir: true,
    // XXX(Lumirelle): Used to keep the chunk structure clear for inspection. In production, you should not disable it.
    minify: false,
  },
})
