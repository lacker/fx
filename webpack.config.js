var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.web.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-native']
        }
      }
    ]
  },
};
