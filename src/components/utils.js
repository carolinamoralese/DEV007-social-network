/* eslint-disable no-use-before-define */
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  //onSnapshot,
  query,
  //orderBy,
  getDocs,
  //documentId,
  where,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../app/firebase";
import { usuarioActual } from "./registroGoogle";
const auth = getAuth();

/*------------------------------------FUNCIÓN INICIAR SESIÓN -------------------------------------------*/
export function loginEmail(email, password, onNavigate) {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in

      //valida que el correo esta verificado
      if (auth.currentUser.emailVerified) {
        onNavigate("/Home");
      } else {
        alert("verifica tu correo");
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

/*------------------------------------FUNCIONES REGISTRO CORREO -------------------------------------------*/
export const registroMail = (email, password, onNavigate, nameNewUser) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(email, password);
      addDoc(collection(db, "user"), {
        name: nameNewUser,
        mail: email,
        password: password,
      });
      auth.signOut();
      sendEmailVerification(auth.currentUser).then(() => {
        alert("se ha enviado correo de verificacion");
      });
      onNavigate("/");
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;

      if (errorCode == "auth/email-already-in-use") {
        alert("el correo ya esta en uso");
      } else if (errorCode == "auth/invalid-email") {
        SubtleCrypto("el correo no es valido");
      }
    });
};

export function logout() {
  signOut(auth);
}

/*------------------------------------FUNCIONES CREAR POSTS -------------------------------------------*/
/*export const obtenerUsers = () => getDocs(collection(db, "user", documentId)); NO SABEMOS SI SIRVE PA ALGO*/

/*------------------------------------------------ FUNCIONES HOME -------------------------------------------*/

const usuario = collection(db, "user");
export const usuarioCorreo = await getDocs(usuario); 

/*------------------------------------------------ FUNCION MOSTRAR NOMBRES USUARIO -------------------------------------------*/
export const getUsername = async (email) => {
  const userquery = query(collection(db, "user"), where("mail", "==", email));
  const usersnapshot = await getDocs(userquery);
  if (!usersnapshot.empty) {
    const userdoc = usersnapshot.docs[0];
    return userdoc.data().name;
  }
  return "google";
};

/*------------------------------------------------ FUNCION EDITAR POSTS ---------------------------------------*/
export const traerPost = (id) => getDoc(doc(db, "posts", id));

export const editarPost = (id, camposEditados) =>
  updateDoc(doc(db, "posts", id), camposEditados);

/*------------------------------------------------ FUNCION ELIMINAR POSTS -------------------------------------------*/
export const eliminarPost = (id) => deleteDoc(doc(db, "posts", id));

/*------------------------------------------------ FUNCION ME GUSTA       -------------------------------------------*/
export const updateLike = async (idPost, idUsuario) => {
  const postsQuerySnapshot = await getDocs(collection(db, "posts"));
  const postDoc = postsQuerySnapshot.docs.find((doc) => doc.id === idPost);
  updateDoc(postDoc.ref, { likes: arrayUnion(idUsuario) });
};

export const disLike = async (idPost, idUsuario) => {
  const postsQuerySnapshot = await getDocs(collection(db, "posts"));
  const postDoc = postsQuerySnapshot.docs.find((doc) => doc.id === idPost);
  updateDoc(postDoc.ref, { likes: arrayRemove(idUsuario) });
};

/*------------------------------------------------ FUNCION MOSTRAR PERFIL  -------------------------------------------*/
export const getPerfil = async (email) => {
  let perfilDoc = false
  const perfilQuery = query(collection(db, 'perfil'), where('email_user', '==', email));
  const perfilSnapshot = await getDocs(perfilQuery);
  if (!perfilSnapshot.empty) {
    perfilDoc = perfilSnapshot.docs[0].data();
  }
  return perfilDoc;
};