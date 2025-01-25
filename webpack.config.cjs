const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

// const MODE = "development";
// const MODE = "production";
// const isProduction = MODE === "production";

const isProduction = process.env.NODE_ENV === "production";
console.log(`Running in ${isProduction ? "production" : "development"} mode`);

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: isProduction ? "." : "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".scss"],
    modules: ["node_modules"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
  ].filter(Boolean),
  devServer: {
    static: path.join(__dirname, "src"),
    port: 3000,
    open: true,
  },
};
