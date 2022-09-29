// 多页应用打包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// todo 可以搭配 glob 遍历文件夹文件, 自动生成多页配置
module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'pages/home/index.js'),
    login: path.resolve(__dirname, 'pages/login/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
    clean: true, // 构建前是否清空输出目录
    publicPath: 'xxx',// 资源引入公共路径前缀
    // chunkFileName: 'js/[name]_chunk.js',// 非入口chunk的名称
    // library:'jquery', // 作为库构建, 库名称
    // libraryTarget :'window' // 作为库构建, 库挂载到什么对象上 浏览器:window; node:golbal; ...
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.html',
      chunks: ['home'], // 制定对应模块
      title: '首页',
      template: path.resolve(__dirname, 'public.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      // chunks: ['login'],
      title: '登录',
      template: path.resolve(__dirname, 'public.html')
    })
  ]
}