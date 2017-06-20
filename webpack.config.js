let autoprefixer = require('autoprefixer');

module.exports = {
  devServer : {
    historyApiFallback : true,
    contentBase : './public',
  },
  entry : [
    './src/index.js',
  ],
  output : {
    path : __dirname,
    publicPath : '/public',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        exclude : [/node_modules/, /test/],
        loader : 'babel',
        query : {
          presets : [
            'react',
            'es2015',
            'stage-2'
          ]
        },
      },
      {
        test : /\.css$/,
        loader : 'style!css!postcss'
      }
    ]
  },
  postcss : function () {
    return [
      autoprefixer({
        browsers : [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  resolve : {
    extensions : [ '', '.js', '.jsx' ]
  },
};
