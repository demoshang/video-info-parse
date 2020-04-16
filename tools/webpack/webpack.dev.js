const merge = require('webpack-merge');
const path = require('path');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const { codeFrame } = require('./ts-checker-formatter');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, '../../dist'),
    compress: true,
    port: 9000,
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new WebpackNotifierPlugin(),

    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      eslintOptions: { fix: true },
      formatter: codeFrame,
    }),
    new ForkTsCheckerNotifierWebpackPlugin(),
  ],
});
