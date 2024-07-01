const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
}