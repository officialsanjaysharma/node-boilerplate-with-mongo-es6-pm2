const path = require('path');
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: "production",
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    app: './bin/www'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "dist")
  },
  loader: {
    rules: [{
      test: /\.js$/,
      loader: ["babel-loader", "remove-hashbag-loader"],
      exclude: /node_modules/,
      query: {
        present: ['es2015']
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}