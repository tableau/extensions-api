'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
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
  optimization: {
    minimize: false
  },
  devtool: 'source-map'
};
