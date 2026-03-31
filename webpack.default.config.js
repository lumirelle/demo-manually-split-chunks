import { join } from 'node:path'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

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
    path: join(import.meta.dirname, '/dist/webpack-default'),
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
    })
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
  },
}
