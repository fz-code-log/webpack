// vue 应用构建
// vue-loader vue 13以上版本要配置下plugin
// vue-template-compiler & vue 两者版本要一致
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 必须设置

// todo 可以搭配 glob 遍历文件夹文件, 自动生成多页配置
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
    clean: true,
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue2',
      template: path.resolve(__dirname, 'public.html')
    }),
    new VueLoaderPlugin()
  ]
}