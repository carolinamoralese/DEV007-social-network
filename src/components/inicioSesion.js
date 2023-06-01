import { validarDatos } from "./utils.js"

export const fondo2 = () => {
  eslogan.style.display = 'none';
  document.body.style.backgroundColor = "#E6F2F4"
  document.body.style.backgroundImage = 'url("imagenes/Fondo2.jpg")';
  document.body.style.backgroundRepeat = "no-repeat"; 
  document.body.style.backgroundSize = "contain";
  document.body.style.backgroundPosition = "bottom center";
}

export const inicioSesion = (onNavigate) => {
    /*document.body.style.backgroundColor = "#E6F2F4"
    document.body.style.backgroundImage = 'url("imagenes/Fondo2.jpg")';
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "bottom center";*/

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
    inputPassword.placeholder = "Ingresa tu contraseña"
    inputPassword.required

    inicioSesionDiv.classList.add("inicioSesionDiv")
    textoBienvenida.classList.add("textoBienvenida")
    inputCorreo.classList.add("inputCorreo")
    inputPassword.classList.add("inputPassword")
    botonIngresar.classList.add("botonIngresar")
    
    textoBienvenida.textContent = "¡BIENVENIDO DE VUELTA!"
    botonIngresar.textContent = "INGRESA"
   
   

    inicioSesionDiv.appendChild(textoBienvenida)
    inicioSesionDiv.appendChild(inputCorreo);
    inicioSesionDiv.appendChild(inputPassword);
    inicioSesionDiv.appendChild(botonIngresar);

    botonIngresar.addEventListener('click', () =>{
        validarDatos(onNavigate)
    })
    return inicioSesionDiv
    
}

