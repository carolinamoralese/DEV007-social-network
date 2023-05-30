import { provider } from '../app/firebase.js';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

let usuarioActual ;
const auth = getAuth();

export function loginGoogle(onNavigate) {
    //es una funcion de la libreria que permite hacer login con google en popup
    signInWithPopup(auth, provider)
    .then((result) => {
      onNavigate('/FotoPerfil')
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  
  export function logoutGoogle(){
    signOut(auth);
  } 

onAuthStateChanged(auth, (usuario) =>{
    //si hay un usuario que aparezca usuario logueado
    if(usuario){
        usuarioActual = usuario;
        console.log("usuario logueado", usuarioActual.displayName)
    }else {
        usuarioActual = null
        console.log("no hay usuario logueado")
    }
})

export const registroGoogle = (onNavigate) => {
    //ejecuta la funcion para realizar el registro con google
    loginGoogle(onNavigate)
 
}

