const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/start.js',
    output: {
        publicPath: "",
        path: `${path.resolve(__dirname)}/dist/`,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};