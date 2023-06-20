import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { provider } from '../app/firebase.js';

export let usuarioActual;
const auth = getAuth();

export function loginGoogle(onNavigate) {
  signInWithPopup(auth, provider)
    .then((result) => {
      onNavigate('/FotoPerfil');
    })
    .catch((error) => {
      console.log(error.message);
    });
}

onAuthStateChanged(auth, (usuario) => {
  if (usuario) {
    usuarioActual = usuario;
    console.log('usuario logueado', usuarioActual.displayName);
    console.log(usuarioActual);
  } else {
    usuarioActual = null;
    console.log('no hay usuario logueado');
  }
});

export const registroGoogle = (onNavigate) => {
  loginGoogle(onNavigate);
};
