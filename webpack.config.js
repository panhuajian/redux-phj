const path = require('path')
const Webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 输出
  output: {
    // publicPath: '/',
    // path: path.resolve(__dirname, 'dist'),
    // filename: '[name]-build.js'
  },
  // 本地服务
  devServer: {
    // 自动打开浏览器
    // open: true
    // 本地服务文件的位置
    contentBase: path.resolve(__dirname, 'dist'),
    // 域名
    host: '0.0.0.0',
    // 端口号
    port: 8080,
    // 热更新
    hot: true,
    // 仅允许热更新
    hotOnly: true
  },
  // 配置映射文件
  devtool:'source-map',
  // 模块配置
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        // 配置babel-loader
        loader: 'babel-loader'
      }
    }]
  },
  // 插件
  plugins: [
    // 自动生成html模板
    new HtmlWebpackPlugin({
      title: 'redux-phj',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    // 配置webpack的热更新
    new Webpack.HotModuleReplacementPlugin(),
    // 每次执行npm run 的时候都清楚dist文件夹
    new CleanWebpackPlugin('./dist')
  ]
}