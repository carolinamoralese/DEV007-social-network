import { registroGoogle } from "./registroGoogle.js";
import logoMountainMe from '../Imagenes/Logo MountainMe.png';

export const inicio = (onNavigate) => {
  /*HEADER PRINCIPAL*/
  const header1 = document.createElement("header");
  const logoGrande = document.createElement("img");
  logoGrande.src = logoMountainMe
  header1.classList.add("header1");
  logoGrande.classList.add("logo1");
  

  const inicioDiv = document.createElement("div");
  const eslogan = document.createElement("h2");
  const formDiv = document.createElement("div");
  const botonInicio = document.createElement("button");
  const botonRegistro = document.createElement("button");
  const botonGoogle = document.createElement("button");

  inicioDiv.classList.add("inicioDiv");
  eslogan.classList.add("eslogan");
  botonInicio.classList.add("botonInicio");
  botonRegistro.classList.add("botonRegistro");
  botonGoogle.classList.add("botonGoogle");
  formDiv.classList.add("formDiv");

  eslogan.innerHTML = "No conquistamos a la montaña, <br> sino a nosotros mismos.";
  botonInicio.textContent = "INICIA SESIÓN";
  botonRegistro.textContent = "REGISTRATE";
  botonGoogle.textContent = "Ingresa con Google";

  botonInicio.addEventListener("click", () => {
    onNavigate("/InicioSesion");
  });

  botonRegistro.addEventListener("click", () => {
    onNavigate("/Registro");
  });

  botonGoogle.addEventListener("click", () => {
    registroGoogle(onNavigate);
  });

  inicioDiv.appendChild(header1);
  header1.appendChild(logoGrande);
  inicioDiv.appendChild(eslogan);
  inicioDiv.appendChild(formDiv);
  formDiv.appendChild(botonInicio);
  formDiv.appendChild(botonRegistro);
  formDiv.appendChild(botonGoogle);

  return inicioDiv;
};
