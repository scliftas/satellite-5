const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015'],
      },
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader', 'postcss-loader'],
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'file-loader?limit=8192&name=assets/[name].[ext]?[hash]',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
    new CopyWebpackPlugin([
      { from: './src/favicon.ico' },
      { from: './src/assets', to: 'assets' },
    ]),
  ],
  devtool: 'eval',
};
