import { join } from 'node:path'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: './template.html',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
      }),
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash:8].css',
      }),
    ],
    splitChunks: {
      /**
       * We want apply cache groups to both `async` and `initial` chunks, so we should use `chunks: 'all'`.
       */
      chunks: 'all',
      cacheGroups: {
        // For vendor libraries who are base frameworks, group them into separate chunk groups, set `minSize` and `maxSize` to control the chunk size.
        vue: {
          // Group name, which will be used as the chunk name.
          name: 'vue',
          // Group rules, which will be used to determine whether a module will be captured by this group.
          test: /node_modules[\\/]vue/,
          priority: 40,
          // Group options, which will be used to control the chunk size and other behaviors.
          minSize: 100_000, // 100 KB
          maxSize: 250_000, // 250 KB
          reuseExistingChunk: true,
        },

        // For large vendor libraries, group them into separate chunk group, set `minSize` and `maxSize` to control the chunk size.
        echarts: {
          name: 'echarts',
          test: /node_modules[\\/]echarts/,
          priority: 30,
          minSize: 100_000, // 100KB
          maxSize: 250_000, // 250KB
          reuseExistingChunk: true,
        },
        elementplus: {
          name: 'element-plus',
          test: /node_modules[\\/]element-plus/,
          priority: 20,
          minSize: 100_000, // 100KB
          maxSize: 250_000, // 250KB
          reuseExistingChunk: true,
        },

        // For other smaller vendor libraries, group them into one chunk group.
        defaultVendors: {
          name: 'vendor',
          test: /node_modules/,
          priority: 10,
          minSize: 20_000,
          reuseExistingChunk: true,
        },
        
        // For source code, group them into one chunk group, set `minShareCount` to ensure that only modules shared by at least 2 chunks are captured by this group.
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
