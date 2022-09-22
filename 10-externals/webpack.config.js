const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 必须设置

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:6].js',
    clean: true,
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader'],
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue22',
      template: path.resolve(__dirname, 'public.html')
    }),
  ],
  optimization :{
    splitChunks: {
      chunks: 'all'
    }
  },
  externals:{
    vue: 'Vue'
  }
}