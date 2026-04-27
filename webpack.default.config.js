import { join } from 'node:path'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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
        use: 'css-loader',
      }
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
  },
}
