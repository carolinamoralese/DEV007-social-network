// Este es el punto de entrada de tu aplicacion

import './app/firebase.js';
import './components/inicio.js';
import { inicio } from './components/inicio.js';

//import { myFunction } from './lib/index.js';

//myFunction();

const rutaDiv = document.getElementById('rutaDiv');

const rutas = {
    '/': inicio,
 }

export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.inicio + pathname,
    );
    rutaDiv.appendChild(rutas[pathname]());
}
const component = rutas[window.location.pathname];

rutaDiv.appendChild(component());

