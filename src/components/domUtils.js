import {loginEmail, registroMail} from "./utils.js"
import {serverTimestamp, addDoc, collection,} from "firebase/firestore";
import { usuarioActual } from "./registroGoogle";
import { db } from "../app/firebase";

/*------------------------------------FUNCIONES INICIAR SESIÓN -------------------------------------------*/
export const validarDatos = (onNavigate) => {
    const correo = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    //ejecuta la funcion para realizar el registro con correo
    loginEmail(correo, password, onNavigate);
};

/*------------------------------------FUNCIONES REGISTRAR CORREO-------------------------------------------*/
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

  /*------------------------------------FUNCIÓN CREAR PUBLICACIONES-------------------------------------*/
    export const crearPost = () => {
    const textoPublicacion = document.getElementById("textoPublicacion").value;
    const fotoPublicacion = document.getElementById("fotoPublicacion").value;
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
        fotoPublicacion: fotoPublicacion,
        textoPublicacion: textoPublicacion,
        fecha: fecha,
        likes: [],
      });
    }
  };

 /*------------------------------------VALIDAR QUE EL FORM ESTÉ LLENO -------------------------------------*/
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