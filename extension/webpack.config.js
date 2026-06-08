'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = (_env, argv) => ({
  entry: './src/index.tsx',
  mode: argv.mode ?? 'production',
  output: {
    filename: 'extension.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      __BUILD_VERSION__: JSON.stringify(new Date().toISOString())
    })
  ],
  optimization: {
    minimize: false
  },
  devtool: 'source-map'
});
