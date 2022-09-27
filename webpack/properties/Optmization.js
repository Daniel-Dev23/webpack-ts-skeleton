const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require("terser-webpack-plugin");

const Optimization = () => {

    return {
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    }

}

module.exports = Optimization;