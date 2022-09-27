const Output = ( mainConfig, isProduction ) => {
    
    const pathJsDev = './js/[name].js';
    const pathJsProd = './js/[name].[contenthash].js';

    const pathAssetDev = 'assets/[name][ext]';
    const pathAssetProd = 'assets/[name][hash][ext]';

    return {
        clean: true,
        path: mainConfig.BUILD_DIR,
        filename: ( isProduction ) ? pathJsProd : pathJsDev,
        assetModuleFilename: ( isProduction ) ? pathAssetProd : pathAssetDev
    }

}

module.exports = Output;