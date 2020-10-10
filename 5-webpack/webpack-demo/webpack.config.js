const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    // 入口
    // entry: {
    //     index: './src/index.js',
    // },
    entry: {
        main: './src/index.js',
        vendor: ['lodash']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
       
    ],
     // 缓存
    optimization: {
        //抽取公共的dm
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "manifest",
                }
            }
        }
    },
    // 出口
    output: {
        // filename: '[name].bundle.js',
        // chunkFilename:'[name].bundle.js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    }
}