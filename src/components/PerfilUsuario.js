import {logout} from "./utils.js"

export const PerfilUsuario = (onNavigate) =>{
/*HEADER HOME*/
  const header2 = document.createElement("header");
  const logoChico = document.createElement("img");
  const despliegueMenu = document.createElement('button');
  const imagenMenu = document.createElement('img');
  const menuHome = document.createElement('div');
  const opcionSection = document.createElement('ul');
  const navHome = document.createElement('li');
  const navPerfil = document.createElement('li');
  const navCerrarSesion = document.createElement('li');
  logoChico.src = "../Imagenes/Logo MountainMe.png";
  imagenMenu.src = "../Imagenes/menu.png";
  header2.classList.add("header3");
  logoChico.classList.add("logo3");
  imagenMenu.classList.add("tresLineas");
  menuHome.classList.add("menuHome2");
  despliegueMenu.classList.add("despliegueMenu2");
  opcionSection.classList.add("opcionSection2");

  

  const perfilDiv = document.createElement('div');
  const containerPerfil = document.createElement('div');
  const nombreUsuario =  document.createElement('p');
  const fotoPerfil = document.createElement('div');
  const paisUsuario = document.createElement('div');
  const nivelTrackUsuario = document.createElement('div');
  const infoTrackUsuario = document.createElement('div');


  perfilDiv.classList.add("perfilDiv");
  containerPerfil.classList.add("containerPerfil");
  nombreUsuario.classList.add("nombreUsuario");
  fotoPerfil.classList.add("fotoPerfil");
  paisUsuario.classList.add("paisUsuario");
  nivelTrackUsuario.classList.add("nivelTrackUsuario");
  infoTrackUsuario.classList.add("infoTrackUsuario");
  menuHome.classList.add("menuHome");
  despliegueMenu.classList.add("despliegueMenu");
  navHome.classList.add("navHome");
  navPerfil.classList.add("navPerfil");
  navCerrarSesion.classList.add("navCerrarSesion");


  //debe ser dinamico
  nombreUsuario.textContent = "Nombre usuario"
  paisUsuario.textContent = "PAIS"
  nivelTrackUsuario.textContent = "NIVEL"
  infoTrackUsuario.textContent = "TRACK RECORD"
  navHome.textContent = 'HOME';
  navPerfil.textContent = 'PERFIL';
  navCerrarSesion.textContent = 'CERRAR SESION';
  
  perfilDiv.appendChild(header2);
  header2.appendChild(logoChico);
  header2.appendChild(despliegueMenu);
  despliegueMenu.appendChild(imagenMenu);
  despliegueMenu.appendChild(menuHome);
  menuHome.appendChild(opcionSection);
  opcionSection.appendChild(navHome);
  opcionSection.appendChild(navPerfil);
  opcionSection.appendChild(navCerrarSesion)
  perfilDiv.appendChild(containerPerfil);
  containerPerfil.appendChild(nombreUsuario);
  containerPerfil.appendChild(fotoPerfil);
  containerPerfil.appendChild(paisUsuario);
  containerPerfil.appendChild(nivelTrackUsuario);
  containerPerfil.appendChild(infoTrackUsuario);
  
  despliegueMenu.addEventListener('click', () => {
    menuHome.classList.toggle('active');
   });

  navHome.addEventListener('click', () => {
    onNavigate("/Home");
  })

  navCerrarSesion.addEventListener('click', () => {
    logout();
    onNavigate("/");
  })

  navPerfil.addEventListener('click', () => {
    onNavigate("/PerfilUsuario");
  })

  return perfilDiv


}