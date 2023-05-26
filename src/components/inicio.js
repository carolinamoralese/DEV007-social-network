import { onNavigate } from '../main.js';

export const inicio = () => {
    const inicioDiv = document.createElement('div');
    const botonInicio = document.createElement('button');
    const botonRegistro = document.createElement('button');
    const botonGoogle = document.createElement ('button');
    inicioDiv.appendChild(botonInicio);
    inicioDiv.appendChild(botonRegistro);
    inicioDiv.appendChild(botonGoogle);
    botonInicio.textContent = 'Inicia Sesion'
    botonRegistro.textContent = 'Registro'
    botonGoogle.textContent = 'Ingresa con Google'
    botonInicio.addEventListener('click', () => onNavigate('/Inicio'));
    botonRegistro.addEventListener('click', () => onNavigate('/Registro'));
    botonGoogle.addEventListener('click', () => onNavigate('/Google'));

    return inicioDiv;
}

