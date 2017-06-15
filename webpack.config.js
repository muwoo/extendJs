/**
 * @author monkeywang
 * Date: 17/6/11
 */
let path = require('path')
function resolve(dir) {
  return path.join(__dirname, './', dir)
}

const config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '_extendJs.js',
    path: resolve('lib')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        exclude: [resolve('node_modules')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  }
}

module.exports = config