const path = require('path');
const nodeExternals = require('webpack-node-externals');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(JPG|jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: 'url-loader?limit=1000000'
      }

    ]

    // loaders: [{
    //   test: /.jsx?$/,
    //   loader: 'babel-loader',
    //   exclude: /node_modules/
    // }, {
    //   test: /\.css$/,
    //   loader: "style-loader!css-loader"
    // }, {
    //   test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    //   loader: 'url-loader?limit=100000' }]
  }
};
