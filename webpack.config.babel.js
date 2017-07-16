import fs from 'fs'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'

const coinhover = path.resolve(__dirname, "coinhover")
const src = path.resolve(__dirname, "public/src")
// const environment = process.env.NODE_ENV;
// https://gist.github.com/leongaban/dc92204454b3513e511645af98107775

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: "coinhover.css",
  disable: false,
  allChunks: true
})

const PATHS = {
  app: src,
  build: coinhover,
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: coinhover
        })
      }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  plugins: [ExtractTextPluginConfig, HtmlWebpackPluginConfig]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [ExtractTextPluginConfig, HtmlWebpackPluginConfig, productionPlugin]
}

// module.exports = {
//   context: src,
//   entry: [
//     "./index.js"
//   ],
//   output: {
//     path: coinhover,
//     filename: "coinhover.bundle.js",
//     publicPath: '',
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"]
//       },
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           fallbackLoader: "style-loader",
//           loader: ["css-loader", "sass-loader"],
//           publicPath: coinhover
//         })
//       }
//     ]
//   },
//   devServer: {
//     hot: false,
//     quiet: true,
//     publicPath: "",
//     contentBase: path.join(__dirname, "dist"),
//     compress: true,
//     stats: "errors-only",
//     open: true,
//     proxy: {
//         '/app': {
//             target: 'http://localhost',
//             secure: false
//         }
//     }
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "index.html"
//     }),
//     new ExtractTextPlugin({
//       filename: "coinhover.css",
//       disable: false,
//       allChunks: true
//     }),
//     new CopyWebpackPlugin([{ from: "static", to: "static" }])
//   ],
//   node: {
//     net: 'empty',
//     dns: 'empty'
//   }
// };

console.log('LAUNCH_COMMAND npm run', LAUNCH_COMMAND)

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
)
