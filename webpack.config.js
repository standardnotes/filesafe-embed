const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    "dist.js" : path.resolve(__dirname, 'app/main.js'),
    "dist.min.js" : path.resolve(__dirname, 'app/main.js'),
    "dist.css" : path.resolve(__dirname, 'app/stylesheets/main.scss'),
  },
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    filename: './[name]',
    library: 'FilesafeEmbed',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'react': 'react',
    'react-dom' : 'react-dom',
    'standard-file-js': 'standard-file-js'
  },
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  module: {
    rules: [
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            { loader: 'sass-loader', query: { sourceMap: false } },
          ],
          publicPath: '../'
        }),
      },
      {
        test: /\.js[x]?$/, include: [
          path.resolve(__dirname, 'app'),
        ], exclude: /node_modules/, loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
        stylekit: path.join(__dirname, 'node_modules/sn-stylekit/dist/stylekit.css')
    }
  },
  plugins: [
    function() {
      this.plugin("done", function(stats) {
        // console.log("done", stats);
        if (stats.compilation.errors && stats.compilation.errors.length &&
          process.argv.indexOf("--watch") == -1) {
          console.log(stats.compilation.errors);
          process.exit(1);
        }
      });
    },

    new ExtractTextPlugin({ filename: './dist.css', disable: false, allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './app/index.html', to: 'index.html' },
        { from: './app/index.min.html', to: 'index.min.html' }
      ],
    }),
  ],
};
