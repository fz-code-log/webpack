const path = require('path')
module.exports = {
  // devtool:'none',
  mode:'development',
  entry:  path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'test.js'
  }
}