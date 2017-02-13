//import html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

//export configuration
module.exports = {
  //webpack-dev-server option setting
  devServer: {
    contentBase: 'dist',
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
  //從哪個js檔開始編譯
  entry: './app/app.js',
  //設定如何編譯
  module: {
    loaders: [
      //test : 找到match的副檔名
      //loader : 選擇要編譯的loader套件 , 需透過npm安裝
      //exclude : 忽略掉 , 不須編譯
      //query : javascript es6 設定
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png?)($|\?)/, loader: 'file-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']} },
      { test: /\.pug$/, loader: 'pug-html-loader' },
    ],
  },
  //編譯完成後的輸出設定
  output: {
    filename: 'output.js',       //輸出的檔名
    path: __dirname + '/dist',   //輸出的路徑 , 要打絕對路徑
    //__dirname代表使用這個變數的檔案的絕對路徑 , 可以console.log出來看看
  },
  //使用套件支援webpack編譯
  plugins: [
    //選擇要用哪個template來產生html
    //github說明 : https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({ template: './app/index.pug' }),
  ],
}
