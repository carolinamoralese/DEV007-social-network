import { onNavigate } from '../main.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


export const inicioSesion = () => {
    

    const inicioSesionDiv = document.createElement('div');
    const inputCorreo = document.createElement('input');
    const inputPassword = document.createElement('input');
    const botonIngresar = document.createElement('button')
    const textoBienvenida = document.createElement('p')


    inputCorreo.type = "email"
    inputCorreo.id = "email"
    inputCorreo.placeholder = "Ingresa tu correo"
    inputCorreo.required

    inputPassword.type = "password"
    inputPassword.id = "password"
    inputPassword.placeholder = "Clave"
    inputPassword.required

    botonIngresar.classList.add("botonIngresar")

    textoBienvenida.textContent = "¡BIENVENIDO DE VUELTA!"
    botonIngresar.textContent = "INGRESA"
   
   

    inicioSesionDiv.appendChild(textoBienvenida)
    inicioSesionDiv.appendChild(inputCorreo);
    inicioSesionDiv.appendChild(inputPassword);
    inicioSesionDiv.appendChild(botonIngresar);

    botonIngresar.addEventListener('click', validarDatos)
    return inicioSesionDiv
    
}

export const validarDatos = () => {
    
    const correo = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    //ejecuta la funcion para realizar el registro con correo
    loginEmail(correo, password)
 
}

function loginEmail(email,password){
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        onNavigate('/Home')
        
      })
      .catch((error) => {
        alert(error.message);
      });
  }