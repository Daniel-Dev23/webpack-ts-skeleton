// Importación de CSS
import '../css/reset.css';
import '../css/main.css';

// Importación de Otros Módulos
const RenderImages = require('./components/RenderImages.js');

const d = document;

const mainApp = () => {

    console.log('✔ The Webpack JS has been started...');

    const $webpack = d.getElementById('webpack');
    const $javascript = d.getElementById('javascript');

    RenderImages( $webpack, $javascript );

}

mainApp();