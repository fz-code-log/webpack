/* js 兼容性处理 babel-loader @babel/core @babel/preset-env
1 基本的兼容性处理 @babel/reset-env
  问题: 只能转换基本语法, promise不能转换
2 全部js兼容性处理 @babel/polyfill
  问题: 回见全部兼容性代码引入 , 体积大
3 兼容性按需加载 core-js
*/
const path = require('path')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns:'usage',
                corejs:{
                  version: 3
                },
                targets: { chrome: "60", ie: "9" }
              }]
            ]
          }
        }]
      }
    ]
  },

}