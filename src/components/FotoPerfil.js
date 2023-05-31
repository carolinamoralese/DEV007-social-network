import { Home } from "./Home";
import { fondo2 } from './inicioSesion.js';

export const FotoPerfil = (onNavigate) => {
  /*fondo2()*/
    /*const eslogan = document.getElementById('eslogan');
    eslogan.style.display = 'none';
    document.body.style.backgroundColor = "#E6F2F4"
    document.body.style.backgroundImage = 'url("imagenes/Fondo2.jpg")';
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "bottom center";*/


    const contendorDiv = document.createElement('div');
    const contendorBotones = document.createElement('div');
    const mensajeRegstro = document.createElement('p');
    const mensajeFotoPerfil = document.createElement('p');
    const divFotoPerfil = document.createElement('input')
    const botonExaminar = document.createElement ('button');
    const botonCargar = document.createElement ('button');
    const botonFinalizar = document.createElement('button')
    
    contendorDiv.classList.add("contenedorDiv")
    contendorBotones.classList.add("contenedorBotones")
    mensajeRegstro.classList.add("mensajeRegistro")
    mensajeFotoPerfil.classList.add("mensajeFotoPerfil")
    divFotoPerfil.classList.add("divFotoPerfil")
    botonExaminar.classList.add("botonExaminar")
    botonCargar.classList.add("botonCargar")
    botonFinalizar.classList.add("botonFinalizar")

    mensajeRegstro.textContent = '¡Ya has sido registrado!'
    mensajeFotoPerfil.textContent = 'Para comenzar selecciona tu foto de perfil'
    botonExaminar.textContent = 'Examinar';
    botonCargar.textContent = 'Cargar';
    botonFinalizar.textContent = 'Continuar'

    botonFinalizar.setAttribute("id", "botonFinaliza")

    contendorDiv.appendChild(mensajeRegstro)
    contendorDiv.appendChild(mensajeFotoPerfil)
    contendorDiv.appendChild(divFotoPerfil)
    contendorBotones.appendChild(botonExaminar)
    contendorBotones.appendChild(botonCargar)
    contendorDiv.appendChild(contendorBotones)
    contendorDiv.appendChild(botonFinalizar)

    botonFinalizar.addEventListener('click',() => {
        onNavigate('/Home')}
      );

    return contendorDiv
}