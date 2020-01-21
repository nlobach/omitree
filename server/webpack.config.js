const path = require('path');

module.exports = [{
  entry: './dist_ts/index.js',
  target: 'node',
  mode: 'development'
},
{
  entry: './dist_ts/index.js',
  target: 'electron-renderer',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../app/dist"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /node_modules[\/\\](iconv-lite)[\/\\].+/,
        resolve: {
          aliasFields: ['main']
        }
      }
    ],
  },
  node: {
    __dirname: false
  }
}]