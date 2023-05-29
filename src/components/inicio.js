import { onNavigate } from '../main.js';
import {registroGoogle} from './registroGoogle.js'


export const inicio = () => {
    const inicioDiv = document.createElement('div');
    const botonInicio = document.createElement('button');
    const botonRegistro = document.createElement('button');
    const botonGoogle = document.createElement ('button');
    
    botonInicio.textContent = 'Inicia Sesion';
    botonRegistro.textContent = 'Registrate';
    botonGoogle.textContent = 'Ingresa con Google';
    
    botonInicio.addEventListener('click', () => onNavigate('/Inicio'));
    botonRegistro.addEventListener('click', () => onNavigate('/Registro'));
    botonGoogle.addEventListener('click', () => registroGoogle());

    inicioDiv.appendChild(botonInicio);
    inicioDiv.appendChild(botonRegistro);
    inicioDiv.appendChild(botonGoogle);

    return inicioDiv;
}

