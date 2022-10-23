const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const { Template } = require("webpack");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js',
    },
    mode: "development",
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
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== "production"
                    ? "style-loader"
                    : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
                ],
            },
            ],
        },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
          }),
    ],
    
};