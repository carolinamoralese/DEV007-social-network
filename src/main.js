// Este es el punto de entrada de tu aplicacion
import { inicio } from './components/inicio.js';
import './app/firebase.js';
import './components/inicio.js';

import { myFunction } from './lib/index.js';

inicio();
myFunction();

const rutaDiv = document.getElementById('rutaDiv');

const rutas = {
   '/': inicio,
}

export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    );}


rootDiv.appendChild(component());    