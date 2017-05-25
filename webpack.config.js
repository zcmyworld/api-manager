var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: ['./views/components/app.js']
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.json$/, loader: 'json-loader'
      }
    ]
  }
}