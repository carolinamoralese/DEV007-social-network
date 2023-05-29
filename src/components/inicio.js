import { onNavigate } from '../main.js';

export const inicio = () => {

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
    
    botonInicio.addEventListener('click', () => onNavigate('/Inicio'));
    botonRegistro.addEventListener('click', () => onNavigate('/Registro'));
    botonGoogle.addEventListener('click', () => onNavigate('/Google'));

    inicioDiv.appendChild(botonInicio);
    inicioDiv.appendChild(botonRegistro);
    inicioDiv.appendChild(botonGoogle);

    return inicioDiv;
}

