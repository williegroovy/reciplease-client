let app_root = 'src';
let path = require('path');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  app_root: app_root,
  entry : [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    __dirname + '/' + app_root + '/index.js'
  ],
  output : {
    path : __dirname + '/public/js',
    publicPath : 'js/',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: [/node_modules/, /test/]
      },
      {
        test : /\.scss$/,
        loaders : ['style', 'css', 'postcss', 'sass'],
        exclude: [/node_modules/, /test/]
      },
      {
        test : /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        exclude: [/node_modules/, /test/]
      },
      {
        test: /antd.*\.css/,
        loaders: ['style', 'css', 'postcss'],
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  plugins: [

    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false //true for simulation
    })
  ]
};
