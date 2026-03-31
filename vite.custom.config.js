import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import inspect from 'vite-plugin-inspect'

export default defineConfig({
  /* devtools: { 
    enabled: true,
    build: { withApp: true } 
  }, */
  plugins: [
    vue(),
    /* inspect({ 
      build: true,
      outputDir: '.vite-inspect/vite'
    }), */
  ],
  build: {
    outDir: 'dist/vite-custom',
    assetsDir: '.',
    emptyOutDir: true,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            // For vendor libraries who are base frameworks, group them into separate chunk groups, set `minSize` and `maxSize` to control the chunk size.
            {
              // Group name, which will be used as the chunk name.
              name: 'vue',
              // Group rules, which will be used to determine whether a module will be captured by this group.
              test: /node_modules[\\/]vue/,
              priority: 40,
              // Group options, which will be used to control the chunk size and other behaviors.
              minSize: 100_000, // 100 KB
              maxSize: 250_000, // 250 KB
            },

            // For large vendor libraries, group them into separate chunk group, set `minSize` and `maxSize` to control the chunk size.
            {
              name: 'echarts',
              test: /node_modules[\\/]echarts/,
              priority: 30,
              minSize: 100_000, // 100 KB
              maxSize: 250_000, // 250 KB
            },
            {
              name: 'element-plus',
              test: /node_modules[\\/]element-plus/,
              priority: 20,
              minSize: 100_000, // 100 KB
              maxSize: 250_000, // 250 KB
            },

            // For other smaller vendor libraries, group them into one chunk group.
            {
              name: 'vendor',
              test: /node_modules/,
              priority: 10,
              minSize: 20_000,
            },
            
            // For source code, group them into one chunk group, set `minShareCount` to ensure that only modules shared by at least 2 chunks are captured by this group.
            {
              name: 'source',
              minShareCount: 2,
              priority: 5,
              minSize: 10_000,
            }
          ]
        },
      },
    },
  }
})
