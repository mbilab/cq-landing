const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'), //! path needed?
    host: '0.0.0.0',
    inline: true,
    stats: { //! all needed?
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
    rules: [ //! order
      {
        test: /\.css$/, //! needed?
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      { test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png?)($|\?)/, loader: 'file-loader' }, //! correct?
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']} }, //! correct?
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader'],
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve('dist'), //! path needed?
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true, //! needed?
      disable: false, //! needed?
      filename: 'style.css', //! app.sass & app.css
    }),
    new HtmlWebpackPlugin({ template: './app/index.pug' }),
  ],
}
//- vi:sw=2:ts=2:et
