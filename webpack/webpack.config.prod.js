const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: resolve(__dirname, '../src'),
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-saga',
    ],
  },
  output: {
    path: resolve(__dirname, '../dist/assets'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, '../src')],
        use: 'babel-loader',
      },
      {
        test: /\.json$/,
        include: [
          resolve(__dirname, '../src'),
          resolve(__dirname, '../node_modules'),
        ],
        use: 'json-loader',
      },
      {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      title: 'rotate.cc',
      template: 'webpack/template.html',
    }),
  ],
}
