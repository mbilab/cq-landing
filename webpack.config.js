const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = require('path').resolve

module.exports = {
  devServer: {
    contentBase: resolve('dist'),
    host: '0.0.0.0',
    inline: true,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      colors: true,
      hash: false,
      modules: false,
      timings: false,
      version: false,
      warnings: false,
    },
  },
  entry: './app/app.js',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.sass$/, use: ['style-loader','css-loader','sass-loader'] },
      { test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png?)($|\?)/, loader: 'file-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']} },
      { test: /\.pug$/, loader: 'pug-html-loader' },
    ],
  },
  output: {
    filename: 'app.js',
    path: resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './app/index.pug' }),
  ],
}
