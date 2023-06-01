import {registroGoogle} from './registroGoogle.js'
import { fondo2 } from './inicioSesion.js';

  

export const inicio = (onNavigate) => {
    const eslogan = document.getElementById('eslogan');
    eslogan.style.display = 'block';
    document.body.style.backgroundImage = 'url("imagenes/Fondo1.png")';
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundColor = "#E6F2F4"


    //const inicioTotal = document.getElementById('inicioTotal');
    const inicioDiv = document.createElement('div');
    const botonInicio = document.createElement('button');
    const botonRegistro = document.createElement('button');
    const botonGoogle = document.createElement ('button');
    
    inicioDiv.classList.add("inicioDiv")
    botonInicio.classList.add("botonInicio")
    botonRegistro.classList.add("botonRegistro")
    botonGoogle.classList.add("botonGoogle")

    botonInicio.textContent = 'Inicia Sesion';
    botonRegistro.textContent = 'Registrate';
    botonGoogle.textContent = 'Ingresa con Google';
    
    //botonInicio.addEventListener('click', () => onNavigate('/InicioSesion'));
    botonInicio.addEventListener('click', () => {
        eslogan.style.display = 'none';
        onNavigate('/InicioSesion');
        fondo2()
      });
    
    //botonRegistro.addEventListener('click', () => onNavigate('/Registro'));
    botonRegistro.addEventListener('click', () => {
        eslogan.style.display = 'none';
        onNavigate('/Registro');
        fondo2()
      });
    
    //botonGoogle.addEventListener('click', () => registroGoogle());
    botonGoogle.addEventListener('click', () => {
        registroGoogle(onNavigate);
      });


    inicioDiv.appendChild(botonInicio);
    inicioDiv.appendChild(botonRegistro);
    inicioDiv.appendChild(botonGoogle);

    //inicioTotal.style.display = 'none';
    
    return inicioDiv;
}

