const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var env = process.env.WEBPACK_ENV;
module.exports = {
    target: 'node',
    entry: {
      landing: [path.resolve(__dirname, "src", "comps", "index.jsx"),
            path.resolve(__dirname, "src", "comps", "Layout.jsx"),
            path.resolve(__dirname, "src", "comps", "Workouts", "Workouts.jsx"),
       ],

    },
    output: {
        path: path.resolve(__dirname, "src", "js"),
        filename: "[name].js",
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
       ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash]-[name].[ext]',
            },
          },
        ]
      }
        ]
    },
    mode: "development",
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
      template: "./src/js/landing.html",
      template: "./src/js/landing.html",
      filename: "./landing.html"
    })
    ],
    devServer: {
        contentBase: "./",
        hot: true,
        historyApiFallback: true
    }
};