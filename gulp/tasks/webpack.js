let webpack = require('webpack');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');
let argv = require('yargs').argv;
let path = require('path');

let APP_PATH = path.join(__dirname, '../../');
let entry = path.join(APP_PATH, './views/components/app.js');

module.exports = function (gulp, config) {

  webpack({
    entry: entry,
    output: {
      path: path.join(__dirname, '../../'),
      filename: "bundle.js"
    },
    plugins: [
      new ProgressBarPlugin({ clear: false })
    ],
    watch: argv.w || false,
  }, (err, stats) => {

  })
}
