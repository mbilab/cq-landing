const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    host: '0.0.0.0',
    stats: 'minimal',
  },
  entry: ['./app/app.js', './app/build.js'],
  module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract('css-loader') },
      { test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png)($|\?)/, loader: 'file-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']} },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      { test: /\.pug$/, use: ['html-loader', 'pug-html-loader'] },
    ],
  },
  output: {
    filename: '[name].js',
    path: __dirname+'/dist',
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css'}),
    new HtmlWebpackPlugin({
      template: './app/index.pug',
      injection: false,
      filename: 'index.html',
      chunks: 'app',
    }),
    new HtmlWebpackPlugin({
      template: './app/build.pug',
      injection: false,
      filename: 'build.html',
      chunks: 'build',
    }),
  ],
}

//- vi:sw=2:ts=2:et
