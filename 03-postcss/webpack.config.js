// css 的 1抽离 2兼容性处理 3打包压缩
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// webpack5 使用下面的
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin')
// webpack4 使用 optimize-css-assets-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin')

// process.env.NODE_ENV = "development"
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean:true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        /*
        1 添加postcss-loader
        2 package.json 增加
          "browserslist":{
            "development":[ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ],
            "production":[ "> 0.2%", "last 2 versions", "not dead" ]
          }
        3 某些详细配置可以在 postcss.config.js 文件中设置, 当前只保留 "postcss-loader"
        */
        {
          loader: "postcss-loader",
          options:{
            postcssOptions:{
              plugins:[
                "postcss-preset-env",
              ]
            }
          }
        },
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:'[name].[hash:6].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
}