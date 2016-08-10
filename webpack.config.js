var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index'
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
      { test: /\.js$/, loaders: [ 'react-hot', 'babel' ], exclude: /node_modules/, include: __dirname + '/src/' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10240', exclude: /node_modules/ }
    ]
  },
  devServer: {
    port: 9001,
    hot: true,
    noInfo: false,
    contentBase: './src',
    // proxy: {
    //   '/api/*': {
    //     target: 'http://localhost:9000',
    //     secure: false
    //   }
    // },
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
