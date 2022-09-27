const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const Rules = ( isProduction ) => {

    return {
        rules: [
            {
                test: /\.html$/, 
                loader: 'html-loader', 
                options: {
                    sources: false,
                    minimize: ( isProduction ) ? true : false
                }
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, 
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

}

module.exports = Rules;