/*------------------------------------FUNCIONES INICIO SESIÓN -------------------------------------------*/

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  getDocs,
  documentId,
  where,
} from "firebase/firestore";

export const validarDatos = (onNavigate) => {
  const correo = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //ejecuta la funcion para realizar el registro con correo
  loginEmail(correo, password, onNavigate);
};

const auth = getAuth();
export function loginEmail(email, password, onNavigate) {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in
      onNavigate("/Home");
    })
    .catch((error) => {
      alert(error.message);
    });
}

/*------------------------------------FUNCIONES REGISTRO CORREO -------------------------------------------*/

import { createUserWithEmailAndPassword } from "@firebase/auth";
import { db } from "../app/firebase";

export const registro = (onNavigate) => {
  const nameNewUser = document.getElementById("nameNewUser");
  const mailNewUser = document.getElementById("mailNewUser");
  const passNewUser = document.getElementById("passNewUser");
  const confirPass = document.getElementById("confirPass");

  const expresionRegular =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (
    nameNewUser.value === "" ||
    mailNewUser.value === "" ||
    passNewUser.value === "" ||
    confirPass.value === ""
  ) {
    return alert("Debes de llenar todos los campos");
  }

  if (passNewUser.value !== confirPass.value) {
    return alert("Las contraseñas deben coincidir");
  }

  if (expresionRegular.test(passNewUser.value)) {
    registroMail(
      mailNewUser.value,
      passNewUser.value,
      onNavigate,
      nameNewUser.value
    );
  } else {
    alert("Tu contraseña debe incluir los siguientes caracteres:\n Aa1@");
  }
};

const registroMail = (email, password, onNavigate, nameNewUser) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(email, password);
      addDoc(collection(db, "user"), {
        name: nameNewUser,
        mail: email,
        password: password,
      });
      //console.log(result) adddoc aqui va la logica para traer datos
      // Signed in
      onNavigate("/FotoPerfil");
    })
    .catch((error) => {
      console.log(error);
    });
};

export function logout() {
  signOut(auth);
}

/*------------------------------------FUNCIONES REGISTRO CORREO -------------------------------------------*/
import { usuarioActual } from "./registroGoogle";

export const crearPost = () => {
  const mensaje = document.getElementById("textoPublicacion").value;
  const imagen = document.getElementById("fotoPublicacion").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const dificultad = document.getElementById("dificultad").value;
  const equipo = document.getElementById("equipo").value;

  const fecha = serverTimestamp();

  console.log(usuarioActual);
  if (usuarioActual) {
    addDoc(collection(db, "posts"), {
      email_user: usuarioActual.email,
      nombre: usuarioActual.displayName,
      ubicacion: ubicacion,
      dificultad: dificultad,
      equipo: equipo,
      imagen: imagen,
      mensaje: mensaje,
      fecha: fecha,
    });
  }
};

export const obtenerUsers = () => getDocs(collection(db, "user", documentId));
console.log(obtenerUsers);

/*------------------------------------------------ FUNCIONES HOME -------------------------------------------*/

export const validarpost = () => {
  const dificultad = document.getElementById("dificultad");
  const equipo = document.getElementById("equipo");
  const textoPublicacion = document.getElementById("textoPublicacion");
  const ubicacion = document.getElementById("ubicacion");
  const fotoPublicacion = document.getElementById("fotoPublicacion");

  if (
    dificultad.value === "" ||
    equipo.value === "" ||
    textoPublicacion.value === "" ||
    ubicacion.value === "" ||
    fotoPublicacion.value === ""
  ) {
    alert("Debes de llenar todos los campos");
  }
};

const usuario = collection(db, "user");
export const usuarioCorreo = await getDocs(usuario);

/*------------------------------------------------ FUNCIONES HOME -------------------------------------------*/

export const getUsername = async (email) => {
  const userquery = query(collection(db, "user"), where("mail", "==", email));
  const usersnapshot = await getDocs(userquery);
  if (!usersnapshot.empty) {
    const userdoc = usersnapshot.docs[0];
    return userdoc.data().name;
  }
  return "google";
};
