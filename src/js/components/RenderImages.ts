// Importación de Imágenes
const WebpackImg = require('../../assets/img/webpack.png');
const TypescriptImg = require('../../assets/img/typescript.png');

const RenderImages = ( $webpack: HTMLImageElement, $typescript: HTMLImageElement ) => {

    $webpack.src = WebpackImg;
    $typescript.src = TypescriptImg;

}

module.exports = RenderImages;
