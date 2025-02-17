'use strict';

const path = require('path');

module.exports = {
  entry: {
    annotation: './Samples-Typescript/Dashboard/Annotation/annotation.ts',
    dashboardLayout: './Samples-Typescript/Dashboard/DashboardLayout/dashboardLayout.ts',
    datasources: './Samples-Typescript/Dashboard/DataSources/datasources.ts',
    filtering: './Samples-Typescript/Dashboard/Filtering/filtering.ts',
    formatting: './Samples-Typescript/Dashboard/Formatting/formatting.tsx',
    moveAndResize: './Samples-Typescript/Dashboard/MoveAndResize/moveAndResize.tsx',
    parameters: './Samples-Typescript/Dashboard/Parameters/parameters.ts',
    pdfViewer: './Samples-Typescript/Dashboard/PdfViewer/pdfViewer.tsx',
    pdfViewerDialog: './Samples-Typescript/Dashboard/PdfViewer/pdfViewerDialog.tsx',
    dashboardObjectVisibility: './Samples-Typescript/Dashboard/DashboardObjectVisibility/dashboardObjectVisibility.tsx',
    replayAnimation: './Samples-Typescript/Dashboard/ReplayAnimation/replayAnimation.tsx',
    vizImage: './Samples-Typescript/Dashboard/VizImage/vizImage.ts'
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [
      '*', '.ts', '.js', '.tsx'
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: 'inline-source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 370,
    maxAssetSize: 370
  }
};
