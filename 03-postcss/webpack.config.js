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
        use: ['style-loader', 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    // Options
                  },
                ],
                [
                  "autoprefixer",
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        }, 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    // Options
                  },
                ],
                [
                  "autoprefixer",
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        }]
      }
    ]
  }
}