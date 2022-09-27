// Importación de CSS
import '../css/reset.css';
import '../css/main.css';

// Importación de Otros Módulos
const RenderImages = require('./components/RenderImages');

const d = document;

const mainApp = () => {

    console.log('✔ The Webpack TS has been started...');

    const $webpack = d.getElementById('webpack');
    const $typescript = d.getElementById('typescript');

    RenderImages( $webpack, $typescript );
    
}

mainApp();