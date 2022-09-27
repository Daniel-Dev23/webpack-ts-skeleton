const DevServer    = require("./properties/DevServer");
const Entry        = require("./properties/Entry");
const Optimization = require("./properties/Optmization");
const Output       = require("./properties/Output");
const Plugins      = require("./properties/Plugins");
const Resolve      = require("./properties/Resolve");
const Rules        = require("./properties/Rules");

const RunWebpack = ( mainConfig ) => {

    console.log('✔ Running loaders and Webpack plugins...\n');

    const isProduction = ( mainConfig.mode === 'production' ) ? true : false;

    return {
        entry: Entry( mainConfig ),
        output: Output( mainConfig, isProduction ),
        module: Rules( isProduction ),
        resolve: Resolve(),
        plugins: Plugins( isProduction ),
        devServer: ( isProduction ) ? {} : DevServer(),
        optimization: ( isProduction ) ? Optimization() : {}
    };

}

module.exports = RunWebpack;