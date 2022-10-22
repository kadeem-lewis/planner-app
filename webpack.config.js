const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports = {
  module: {
    rules: [
        {
            test: /\.html$/, 
            use: [
                {
                    loader: "html-loader",
                    options: {minimize: true } 
                }
            ]
        }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "index.html",
        filename: "index.html"
    }),
  ],
};