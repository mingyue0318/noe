const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        })
    ],
    // 出口
    output: {
        filename: '[name].bundle.js',
        chunkFilename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}