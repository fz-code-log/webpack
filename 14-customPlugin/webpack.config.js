/* 自定义loader */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const { FileListPlugin } = require('./file-list-plugin.js');
// const { demoPlugin } = require('./demo-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:6].js',
    clean: true,
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'javascript/auto', // 支持所有的模块化 , 包括 commomjs / AMD /  es module / 
        use: [
          // {
          //   loader: path.resolve(__dirname, 'loaders/over-url-loader.js'),
          //   options: {
          //     maxSize: 10 * 1024,
          //     mappingJson: path.resolve(__dirname, 'img2cdn.json'),
          //     fallback:  (context)=>{
          //       return new Promise((resolve)=>{
          //         setTimeout((context) => {
          //           resolve('https://webpack.js.org/assets/icon-square-big.svg')
          //         }, 3*1000);
          //       })
          //     }
          //   }
          // },
          {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:10].[ext]',
            limit: 8 * 1024,
            esModule: false, // url-loader、file-loader都是采用es6语法规范的，而不是commonjs规范 , 关闭esMoudel规范
            outputPath: 'img'
          },
        }]

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new FileListPlugin(),
    // new demoPlugin({txt:'xxxxx'}),
  ]
}