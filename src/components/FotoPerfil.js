export const FotoPerfil = (onNavigate) => {
  /*HEADER PRINCIPAL*/
  const header1 = document.createElement("header");
  const logoGrande = document.createElement("img");
  logoGrande.src = "../Imagenes/Logo MountainMe.png";
  header1.classList.add("header1");
  logoGrande.classList.add("logo1");

  const contendorDiv = document.createElement("div");
  const formulario = document.createElement("formulario");
  const contendorBotones = document.createElement("div");
  const mensajeRegstro = document.createElement("p");
  const mensajeFotoPerfil = document.createElement("p");
  const divFotoPerfil = document.createElement("input");
  const botonExaminar = document.createElement("button");
  const botonFinalizar = document.createElement("button");

  contendorDiv.classList.add("contenedorDiv");
  formulario.classList.add("formulario3");
  contendorBotones.classList.add("contenedorBotones");
  mensajeRegstro.classList.add("mensajeRegistro");
  mensajeFotoPerfil.classList.add("mensajeFotoPerfil");
  divFotoPerfil.classList.add("divFotoPerfil");
  botonExaminar.classList.add("botonExaminar");
  botonFinalizar.classList.add("botonFinalizar");

  mensajeRegstro.textContent = "¡Ya has sido registrado!";
  mensajeFotoPerfil.textContent = "Para comenzar selecciona tu foto de perfil";
  botonExaminar.textContent = "Examinar";
  botonFinalizar.textContent = "Continuar";

  botonFinalizar.setAttribute("id", "botonFinaliza");

  contendorDiv.appendChild(header1);
  header1.appendChild(logoGrande);
  contendorDiv.appendChild(formulario);
  formulario.appendChild(mensajeRegstro);
  formulario.appendChild(mensajeFotoPerfil);
  formulario.appendChild(divFotoPerfil);
  formulario.appendChild(botonExaminar);
  formulario.appendChild(contendorBotones);
  formulario.appendChild(botonFinalizar);

  botonFinalizar.addEventListener("click", () => {
    onNavigate("/Home");
  });

  return contendorDiv;
};
