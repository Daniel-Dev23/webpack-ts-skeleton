// Importación de Imágenes
const WebpackImg = require('../../assets/img/webpack.png');
const JavascriptImg = require('../../assets/img/javascript.png');

const RenderImages = ( $webpack, $javascript ) => {

    $webpack.src = WebpackImg;
    $javascript.src = JavascriptImg;

}

module.exports = RenderImages;
