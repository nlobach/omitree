const path = require('path');

module.exports = [{
  entry: './dist_ts/main.js',
  target: 'electron-main',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  }
}]