import { registro } from './utils.js';

export const registroCorreo = (onNavigate) => {
    document.body.style.backgroundColor = "#E6F2F4"
    document.body.style.backgroundImage = 'url("imagenes/Fondo2.jpg")';
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "bottom center";


    const registroCorreoDiv = document.createElement('div');
    const bienvenido = document.createElement('p');
    const textoRegistro = document.createElement('p');
    //const formularioRegistro = document.createElement('div');
    const nameNewUser = document.createElement('input');
    const mailNewUser = document.createElement('input');
    const passNewUser = document.createElement('input');
    const confirPass = document.createElement('input');
    const botonRegistrate = document.createElement('button');
    const textoPrivacidad = document.createElement('p');

    nameNewUser.setAttribute("type", "text");
    nameNewUser.setAttribute("name", "username");
    nameNewUser.setAttribute("placeholder", "Selecciona tu nombre de usuario");
    nameNewUser.setAttribute('id', 'nameNewUser')
    nameNewUser.required

    mailNewUser.setAttribute("type", "text");
    mailNewUser.setAttribute("name", "email");
    mailNewUser.setAttribute("placeholder", "Ingresa tu correo");
    mailNewUser.setAttribute('id', 'mailNewUser')
    mailNewUser.required

    passNewUser.setAttribute("type", "text");
    passNewUser.setAttribute("name", "password");
    passNewUser.setAttribute("placeholder", "Selecciona tu contraseña");
    passNewUser.setAttribute('id', 'passNewUser')
    passNewUser.required

    confirPass.setAttribute("type", "text");
    confirPass.setAttribute("name", "password2");
    confirPass.setAttribute("placeholder", "Confirma tu contraseña");
    confirPass.setAttribute('id', 'confirPass')
    confirPass.required

    botonRegistrate.textContent = 'REGISTRATE';
    
    registroCorreoDiv.classList.add("registroCorreoDiv");
    bienvenido.classList.add("bienvenido");
    textoRegistro.classList.add("textoRegistro");
    nameNewUser.classList.add("nameNewUser");
    mailNewUser.classList.add("mailNewUser");
    passNewUser.classList.add("passNewUser");
    confirPass.classList.add("confirPass");
    botonRegistrate.classList.add("botonRegistrate");
    textoPrivacidad.classList.add("textoPrivacidad");

    bienvenido.textContent = "¡BIENVENIDO!"
    textoRegistro.textContent = "Para crear una nueva cuenta, por favor llena los siguientes campos"
    textoPrivacidad.textContent = "Al registrarte aceptas nuestras Condiciones de Uso y Política de Privacidad"

    //registroCorreoDiv.appendChild(formularioRegistro);
    registroCorreoDiv.appendChild(bienvenido);
    registroCorreoDiv.appendChild(textoRegistro);
    registroCorreoDiv.appendChild(nameNewUser);
    registroCorreoDiv.appendChild(mailNewUser);
    registroCorreoDiv.appendChild(passNewUser);
    registroCorreoDiv.appendChild(confirPass);
    registroCorreoDiv.appendChild(botonRegistrate);
    registroCorreoDiv.appendChild(textoPrivacidad);

    botonRegistrate.addEventListener('click',() => {
      registro(onNavigate)}
    );

    return registroCorreoDiv;
};



