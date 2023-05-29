import {loginGoogle} from '../app/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

let usuarioActual ;
const auth = getAuth();

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

export const registroGoogle = () => {
    //ejecuta la funcion para realizar el registro con google
    loginGoogle()
 
}

