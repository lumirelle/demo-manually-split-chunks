import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import inspect from 'vite-plugin-inspect'

const inspectEnabled = process.env.INSPECT === 'true'

export default defineConfig({
  devtools: inspectEnabled ? { 
    enabled: true,
    port: 9998,
    build: { withApp: true,  }
  } : false,
  plugins: [
    vue(),
    ...(
      inspectEnabled ? 
      [inspect({ 
          build: true,
          outputDir: '.vite-inspect/vite-custom'
        })] :
      []
    ),
  ],
  build: {
    outDir: 'dist/vite-custom',
    assetsDir: '.',
    emptyOutDir: true,
    // XXX(Lumirelle): Used to keep the chunk structure clear for inspection. In production, you should not disable it.
    minify: false,
    rolldownOptions: {
      output: {
        codeSplitting: {
          // Default Group options, which will be used to control the chunk size and other behaviors.
          minSize: 100_000, // 100 KB
          maxSize: 250_000, // 250 KB

          groups: [
            // For vendor libraries who are used in every page, we can group them into separate chunk groups.
            {
              // Group name, which will be used as the chunk name.
              name: 'vue',
              // Group rules, which will be used to determine whether a module will be captured by this group.
              test: /node_modules[\\/]@?vue/,
              priority: 40,
            },

            // For business libraries, we only extract the commonly used ones into separate chunk groups.
            {
              name: 'echarts',
              test: /node_modules[\\/]echarts/,
              minShareCount: 2,
              priority: 30,
            },
            {
              name: 'element-plus',
              test: /node_modules[\\/]element-plus/,
              minShareCount: 2,
              priority: 20,
            },
            {
              name: 'vendor',
              test: /node_modules/,
              minShareCount: 2,
              priority: 10,
            },
            
            // For source code, we only extract the commonly used ones into separate chunk groups.
            {
              name: 'source',
              minShareCount: 2,
              priority: 5,
            }
          ]
        },
      },
    },
  }
})
