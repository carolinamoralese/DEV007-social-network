/*------------------------------------FUNCIONES INICIO SESIÓN -------------------------------------------*/

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const validarDatos = () => {
    
    const correo = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    //ejecuta la funcion para realizar el registro con correo
    loginEmail(correo, password)
}

const auth = getAuth();
export function loginEmail(email,password){
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        onNavigate('/Home')
        
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  /*------------------------------------FUNCIONES REGISTRO CORREO -------------------------------------------*/

  import { createUserWithEmailAndPassword } from "@firebase/auth";

  export const registro = () => {
    const nameNewUser = document.getElementById('nameNewUser').value;
    const mailNewUser = document.getElementById('mailNewUser').value;
    const passNewUser = document.getElementById('passNewUser').value;
    const confirPass = document.getElementById('confirPass').value;  
    registroMail( mailNewUser, passNewUser)
 }
 
 const registroMail = (email, password) =>{
 const auth = getAuth(); 
 createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
     //console.log(result)
     // Signed in
     onNavigate('/Home')
   })
   .catch((error) => {
     console.log(error);
   });
 };