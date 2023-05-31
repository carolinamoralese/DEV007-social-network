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
  import { registroCorreo } from "./registroCorreo";

  export const registro = (onNavigate) => {
    const nameNewUser = document.getElementById('nameNewUser').value;
    const mailNewUser = document.getElementById('mailNewUser').value;
    const passNewUser = document.getElementById('passNewUser').value;
    const confirPass = document.getElementById('confirPass').value;  

    const expresionRegular = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (nameNewUser === "" || mailNewUser === "" || passNewUser === "" || confirPass === ""){ 
     return alert("Debes de llenar todos los campos")
    }
    
    if (passNewUser !== confirPass) {
        return alert("Las contraseñas deben coincidir")
        
    } 
    
    if(expresionRegular.test(passNewUser) ){
      registroMail( mailNewUser, passNewUser, onNavigate)

    } else {
        alert("Tu contraseña debe incluir los siguientes caracteres:\n Aa1@")
    }
 }
 

 const registroMail = (email, password, onNavigate) =>{
 const auth = getAuth(); 
 createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
     //console.log(result)
     // Signed in
     onNavigate('/FotoPerfil')
   })
   .catch((error) => {
     console.log(error);
   });
 };

