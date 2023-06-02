import { registroGoogle } from "./registroGoogle.js";

export const inicio = (onNavigate) => {
  /*HEADER PRINCIPAL*/
  const header1 = document.createElement("header");
  const logoGrande = document.createElement("img");
  logoGrande.src = "../Imagenes/Logo MountainMe.png";
  header1.classList.add("header1");
  logoGrande.classList.add("logo1");
  

  const inicioDiv = document.createElement("div");
  const eslogan = document.createElement("h2");
  const botonInicio = document.createElement("button");
  const botonRegistro = document.createElement("button");
  const botonGoogle = document.createElement("button");

  inicioDiv.classList.add("inicioDiv");
  eslogan.classList.add("eslogan");
  botonInicio.classList.add("botonInicio");
  botonRegistro.classList.add("botonRegistro");
  botonGoogle.classList.add("botonGoogle");

  eslogan.textContent = "No conquistamos a la montaña, sino a nosotros mismos.";
  botonInicio.textContent = "Inicia Sesion";
  botonRegistro.textContent = "Registrate";
  botonGoogle.textContent = "Ingresa con Google";

  botonInicio.addEventListener("click", () => {
    eslogan.style.display = "none";
    onNavigate("/InicioSesion");
    /*fondo2()*/
  });

  botonRegistro.addEventListener("click", () => {
    eslogan.style.display = "none";
    onNavigate("/Registro");
    //fondo2()
  });

  botonGoogle.addEventListener("click", () => {
    registroGoogle(onNavigate);
  });

  inicioDiv.appendChild(header1);
  header1.appendChild(logoGrande);
  inicioDiv.appendChild(eslogan);
  inicioDiv.appendChild(botonInicio);
  inicioDiv.appendChild(botonRegistro);
  inicioDiv.appendChild(botonGoogle);

  return inicioDiv;
};
