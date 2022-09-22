const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 必须设置
const {
  DllReferencePlugin
} = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: {
                  version: 3
                },
                targets: {
                  chrome: "60",
                  ie: "9"
                }
              }]
            ]
          }
        }]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue22',
      template: path.resolve(__dirname, 'public.html')
    }),
    new DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dll/element.manifest.json')
    }),
    new DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dll/vue.manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin([{
        filepath: path.resolve(__dirname, "dll/element.dll.js"),
        publicPath: ''
      },
      {
        filepath: path.resolve(__dirname, "dll/vue.dll.js"),
        publicPath: ''
      },
    ])
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
  },
}