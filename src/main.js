import { inicio } from './components/inicio.js';
import './app/firebase.js';

const rutaDiv = document.getElementById('rutaDiv');

const rutas = {
   '/': inicio,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rutaDiv.firstChild) {
    rutaDiv.removeChild(rutaDiv.firstChild);
  }

  rutaDiv.appendChild(rutas[pathname]());
};

const component = rutas[window.location.pathname];

window.onpopstate = () => {
  while (rutaDiv.firstChild) {
    rutaDiv.removeChild(rutaDiv.firstChild);
  }
  rutaDiv.appendChild(rutas[window.location.pathname]());
};

rutaDiv.appendChild(component());    