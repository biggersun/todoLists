const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
    './src/index.js',
  ],
  output: {
    path: __dirname+"/build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: path.join(__dirname, '.'),
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules',
    }, { 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=8192'
    }],
  },
}
