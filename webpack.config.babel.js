import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        use: 'babel-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      }
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      favicon: "./public/favicon.ico"
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(true),
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
}