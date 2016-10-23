var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index',
    './src/assets/less/coms.less'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'coms.io.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'react-hot', 'babel', 'eslint-loader' ], exclude: /node_modules/, include: path.join(__dirname, 'src') },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10240', exclude: /node_modules/ },

      { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },

      // Font Definitions
      { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2' },
      { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream' },
      { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject' }
    ]
  },
  devServer: {
    port: 9001,
    hot: true,
    noInfo: false,
    contentBase: './src',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
