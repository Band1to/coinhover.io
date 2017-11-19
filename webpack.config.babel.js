import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import chalk from 'chalk';

const coinhover = path.resolve(__dirname, 'coinhover');
const app = path.resolve(__dirname, 'app');
/* eslint-disable no-console */
const log = console.log;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'coinhover.css',
  disable: false,
  allChunks: true
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([{ from: 'app/static', to: 'static' }]);

const PATHS = {
  app,
  build: coinhover
};

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  resolve: { modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'] }
};

const developmentConfig = {
  devServer: {
    publicPath: '',
    contentBase: path.join(__dirname, 'coinhover'),
    quiet: true,
    inline: true,
    compress: true,
    stats: 'errors-only',
    open: true
  },
  devtool: 'cheap-module-inline-source-map',
  plugins: [
    CopyWebpackPluginConfig,
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig
  ]
};

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    CopyWebpackPluginConfig,
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
    productionPlugin
  ]
};

log(`${chalk.magenta('🤖 ')} ${chalk.italic.green('npm run:')} ${chalk.red(LAUNCH_COMMAND)}`);

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
);
