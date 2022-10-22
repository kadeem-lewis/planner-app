const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js',
        publicPath: "/dist"
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
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader', options: { importLoaders: 1 } }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
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
        new HtmlWebPackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
          }),
    ],
    
};