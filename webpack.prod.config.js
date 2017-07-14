let webpack = require("webpack");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.config');

// disable hot reload
module.exports.entry = [
  'babel-polyfill',
  __dirname + '/' + module.exports.app_root + '/index.js'
];

// production env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
);

// compress the js file
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false
    }
  })
);

// export css to own file
let extractCSS = new ExtractTextPlugin('../css/main.css');

module.exports.module.loaders[1] = {
  test: /\.scss$/,
  loader: extractCSS.extract('style', ['css', 'postcss', 'sass']),
  exclude: [/node_modules/, /test/]
};

module.exports.plugins.push(extractCSS);