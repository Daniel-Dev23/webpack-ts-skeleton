const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

const Plugins = ( isProduction ) => {

    const pathCssExtractDev = './css/[name].css';
    const pathCssExtractProd = './css/[name].[fullhash].css';

    return [
        new HtmlWebpack({
            filename: './index.html',
            template: './src/index.html',
            favicon: './src/favicon.ico',
            chunks: ['app']
        }),
        new MiniCssExtract({
            filename: ( isProduction ) ? pathCssExtractProd : pathCssExtractDev,
            ignoreOrder: false
        }),
    ];

}

module.exports = Plugins;