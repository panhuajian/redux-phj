const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = requrie('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugin: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'index'
    })
  ]
}