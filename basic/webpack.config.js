var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: {
        app: "./src/App.js"
    },
    output: {
        filename: "build/bundle.js",
        sourceMapFilename: "build/bundle.map",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist"
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /{node_modules|bower_components}/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}