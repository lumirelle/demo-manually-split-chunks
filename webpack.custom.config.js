import { join } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

/**
 * @type {import('webpack').Configuration}
 */
export default {
  entry: {
    index: './src/main.js',
  },
  output: {
    filename: '[name]-[contenthash:8].js',
    clean: true,
    path: join(import.meta.dirname, '/dist/webpack-custom'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
  ],
  optimization: {
    // XXX(Lumirelle): Used to keep the chunk structure clear for inspection. In production, you should not disable it.
    minimize: false,
    splitChunks: {
      /**
       * We want apply cache groups to both `async` and `initial` chunks, so we should use `chunks: 'all'`.
       */
      chunks: 'all',

      // Default Group options, which will be used to control the chunk size and other behaviors.
      minSize: 100_000, // 100 KB
      maxSize: 250_000, // 250 KB

      cacheGroups: {
        // For vendor libraries who are used in every page, we can group them into separate chunk groups.
        vue: {
          // Group name, which will be used as the chunk name.
          name: 'vue',
          // Group rules, which will be used to determine whether a module will be captured by this group.
          test: /node_modules[\\/]@?vue/,
          priority: 40,
        },

        // For business libraries, we only extract the commonly used ones into separate chunk groups.
        echarts: {
          name: 'echarts',
          test: /node_modules[\\/]echarts/,
          priority: 30,
          minChunks: 2,
          reuseExistingChunk: true,
        },
        elementplus: {
          name: 'element-plus',
          test: /node_modules[\\/]element-plus/,
          priority: 20,
          minChunks: 2,
          reuseExistingChunk: true,
        },
        defaultVendors: {
          name: 'vendor',
          test: /node_modules/,
          priority: 10,
          minChunks: 2,
          reuseExistingChunk: true,
        },

        // For source code, we only extract the commonly used ones into separate chunk groups.
        default: {
          name: 'source',
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
  },
}
