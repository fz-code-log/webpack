const path = require('path')
const {
  DllPlugin
} = require('webpack')
module.exports = {
  mode: 'production',
  entry: {
    vue: ['vue'],
    'element': ['element-ui'] // !!!之前key:element-ui 加载异常
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: '[name].dll.js',
    library: '[name]', //
    libraryTarget: 'window'
  },
  plugins: [
    new DllPlugin({
      name: '[name]',// 与 output.library 保持一致
      path: path.resolve(__dirname, "dll/[name].manifest.json")
    })
  ]
}