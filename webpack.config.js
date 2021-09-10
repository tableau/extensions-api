"use strict";

const path = require('path');

module.exports = {
  entry: {
    datasources: './Samples-Typescript/DataSources/datasources.ts',
    filtering: './Samples-Typescript/Filtering/filtering.ts',
    parameters: './Samples-Typescript/Parameters/parameters.ts',
    vizImage: './Samples-Typescript/VizImage/vizImage.ts',
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [
      '*', '.ts', '.js'
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: 'inline-source-map'
};
