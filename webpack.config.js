const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
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
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      { test: /\.sass$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
      },
      { test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png?)($|\?)/, loader: 'file-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']} },
      { test: /\.pug$/, use: ['html-loader', 'pug-html-loader'] },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve('dist'),
  },
  plugins: [
    new ExtractTextPlugin({
      disable: false,
      filename: 'style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({ template: './app/index.pug' }),
  ],
}
