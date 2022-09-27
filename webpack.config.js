const path = require('path');
const RunWebpack = require('./webpack/RunWebpack');

const BuildConfig = ( env, arg ) => {

    const mainConfig = {
        mode     : arg.mode,
        BUILD_DIR: path.resolve( __dirname, './build' ),
        APP_DIR  : path.resolve( __dirname, './src' )
    }

    if ( mainConfig.mode === 'development' || mainConfig.mode === 'production' ) {
        
        console.log(`✔ Executing Webpack in mode "${ mainConfig.mode }"...`);
        return RunWebpack( mainConfig );

    } else {
        console.log(`The "${ mainConfig.mode }" parameter is not a valid configuration mode for Webpack.\n`);
        console.log('Maybe you meant to put "development" or "production."\n');
    }

}

module.exports = BuildConfig;