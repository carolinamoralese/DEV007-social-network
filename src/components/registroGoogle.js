import {autenticaGoogle} from '../app/firebase.js';

export const registroGoogle = () => {
 const user = autenticaGoogle()
 console.log(user)
 if(user.emailVerified){
  alert("felicitacion acabas de iniciar sesion con google")
 }
}