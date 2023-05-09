const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',  /*ou production*/
  entry: '../../src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), /*va créer le folder qui contiendra le index.html et les bundle*/
    filename: 'bundle.js', /*nom du bundle*/
  },
  devServer: { /*configuration du dev server*/
    static: {
      directory: path.join(__dirname, "./dist"),
      serveIndex: true,
    },
    open: true, /* va ouvrir seul le index.html*/
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { 
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], /*va compiler les fichiers css*/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        loader: 'image-webpack-loader',/*va compiler les images*/
        enforce: 'pre'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
  }),
    new CleanWebpackPlugin() /*nettoie le dossier public si je recompile*/
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', /*doit compresser les bundle*/
    },
    minimizer: [new UglifyJsPlugin()], /*for minification of the code*/

  }
};
