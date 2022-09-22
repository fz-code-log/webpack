const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 必须设置
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// todo 可以搭配 glob 遍历文件夹文件, 自动生成多页配置
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
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 1 * 1024,
      // name:'vendors', 
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: `chunk-common`,
          minChunks: 1,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  }
}