import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { loginEmail, registroMail } from './utils.js';
import { usuarioActual } from './registroGoogle';
import { db } from '../app/firebase';

/* ------------------------------------FUNCIONES INICIAR SESIÓN ----------------------------------*/
export const validarDatos = (onNavigate) => {
  const correo = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // ejecuta la funcion para realizar el registro con correo
  loginEmail(correo, password, onNavigate);
};

/* ------------------------------------FUNCIONES REGISTRAR CORREO---------------------------------*/
export const registro = (onNavigate) => {
  const nameNewUser = document.getElementById('nameNewUser');
  const mailNewUser = document.getElementById('mailNewUser');
  const passNewUser = document.getElementById('passNewUser');
  const confirPass = document.getElementById('confirPass');
  const expresionRegular = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (nameNewUser.value === '' || mailNewUser.value === '' || passNewUser.value === '' || confirPass.value === '') {
    return alert('Debes de llenar todos los campos');
  } 

  if (passNewUser.value !== confirPass.value) {
    return alert('Las contraseñas deben coincidir');
  }

  if (expresionRegular.test(passNewUser.value)) {
    registroMail(
      mailNewUser.value,
      passNewUser.value,
      onNavigate,
      nameNewUser.value,
    );
  } else {
    alert('Tu contraseña debe incluir los siguientes caracteres:\n Aa1@');
  } return console.log('hola');
};

/* ------------------------------------FUNCIÓN CREAR PUBLICACIONES-------------------------------*/
export const crearPost = () => {
  const textoPublicacion = document.getElementById('textoPublicacion').value;
  const fotoPublicacion = document.getElementById('fotoPublicacion').value;
  const ubicacion = document.getElementById('ubicacion').value;
  const dificultad = document.getElementById('dificultad').value;
  const equipo = document.getElementById('equipo').value;
  const fecha = serverTimestamp();

  console.log(usuarioActual);
  if (usuarioActual) {
    addDoc(collection(db, 'posts'), {
      email_user: usuarioActual.email,
      nombre: usuarioActual.displayName,
      ubicacion,
      dificultad,
      equipo,
      fotoPublicacion,
      textoPublicacion,
      fecha,
      likes: [],
    });
  }
};

/* ------------------------------------VALIDAR QUE EL FORM ESTÉ LLENO ----------------------------*/
export const validarpost = () => {
  const dificultad = document.getElementById('dificultad');
  const equipo = document.getElementById('equipo');
  const textoPublicacion = document.getElementById('textoPublicacion');
  const ubicacion = document.getElementById('ubicacion');
  const fotoPublicacion = document.getElementById('fotoPublicacion');

  if (dificultad.value === '' || equipo.value === '' || textoPublicacion.value === '' || ubicacion.value === '' || fotoPublicacion.value === '') {
    return false
    //alert('Debes de llenar todos los campos');
  } else {
    return true
    //console.log("todo okei")
  }
};

/* ------------------------------------CREAR PERFIL -----------------------------------------------*/
export const crearPerfil = () => {
  const fotoPerfil = document.getElementById('fotoPerfil').value;
  const pais = document.getElementById('pais').value;
  const nivel = document.getElementById('nivel').value;
  const record = document.getElementById('record').value;
  const fecha = serverTimestamp();

  console.log(usuarioActual);
  if (usuarioActual) {
    addDoc(collection(db, 'perfil'), {
      email_user: usuarioActual.email,
      nombre: usuarioActual.displayName,
      fotoPerfil,
      pais,
      nivel,
      record,
      fecha,
    });
  }
};