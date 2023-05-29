import { onNavigate } from '../main.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registroCorreo = () => {
    const registroCorreoDiv = document.createElement('div');
    const botonRegistrate = document.createElement('button');
    const formularioRegistro = document.createElement('form');
    const nameNewUser = document.createElement('input');
    const mailNewUser = document.createElement('input');
    const passNewUser = document.createElement('input');
    const confirPass = document.createElement('input');

    nameNewUser.setAttribute("type", "text");
    nameNewUser.setAttribute("name", "username");
    nameNewUser.setAttribute("placeholder", "Selecciona tu nombre de usuario");
    nameNewUser.setAttribute('id', 'nameNewUser')

    mailNewUser.setAttribute("type", "text");
    mailNewUser.setAttribute("name", "email");
    mailNewUser.setAttribute("placeholder", "Ingresa tu correo");
    mailNewUser.setAttribute('id', 'mailNewUser')

    passNewUser.setAttribute("type", "password");
    passNewUser.setAttribute("name", "password");
    passNewUser.setAttribute("placeholder", "Selecciona tu contraseña");
    passNewUser.setAttribute('id', 'passNewUser')

    confirPass.setAttribute("type", "password");
    confirPass.setAttribute("name", "password2");
    confirPass.setAttribute("placeholder", "Confirma tu contraseña");
    confirPass.setAttribute('id', 'confirPass')

    botonRegistrate.textContent = 'Holaaaaa';
    
    registroCorreoDiv.classList.add("registroCorreoDiv");
    botonRegistrate.classList.add("botonRegistrate");

    registroCorreoDiv.appendChild(formularioRegistro);
    formularioRegistro.appendChild(nameNewUser);
    formularioRegistro.appendChild(mailNewUser);
    formularioRegistro.appendChild(passNewUser);
    formularioRegistro.appendChild(confirPass);
    formularioRegistro.appendChild(botonRegistrate);

    botonRegistrate.addEventListener('click', registro);

    return registroCorreoDiv;
};

const registro = () => {
   const nameNewUser = document.getElementById('nameNewUser').value;
   const mailNewUser = document.getElementById('mailNewUser').value;
   const passNewUser = document.getElementById('passNewUser').value;
   const confirPass = document.getElementById('confirPass').value;  
   registroMail(mailNewUser, passNewUser)
}

const registroMail = (email, password) =>{
const auth = getAuth(); 
createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    console.log(result)
    // Signed in
    onNavigate('/Home')
  })
  .catch((error) => {
    console.log(error);
  });
};

