var webpack = require('webpack');

module.exports = {
  entry: './app/index.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    /*new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),*/
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      mangle: true,
      comments: false
    })
  ],
  devtool: "source-map"
}
