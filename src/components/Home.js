import { PerfilUsuario } from "./PerfilUsuario";
import {logout, crearPost} from "./utils.js"


export const Home = (onNavigate) => {
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
  header2.classList.add("header2");
  logoChico.classList.add("logo2");
  imagenMenu.classList.add("tresLineas");
  menuHome.classList.add("menuHome");
  despliegueMenu.classList.add("despliegueMenu");
  opcionSection.classList.add("opcionSection");


  const HomeDiv = document.createElement('div');
  const buscadorDiv = document.createElement('div');
  const buscadorHome = document.createElement('input')
  const botonBuscador = document.createElement('button')
  const imagenLupa = document.createElement('img')
  const publicacionDiv = document.createElement('div')
  const mensajePost = document.createElement('p')
  const botonPopUp = document.createElement('button')
  const botonPopUpText = document.createElement('span');
  const modalDiv = document.createElement('div')
  const publicacionPopUp = document.createElement('div')
  const close = document.createElement('span');
  const nombreUsuario = document.createElement('input')
  const ubicacion = document.createElement('input')
  const dificultad = document.createElement('select')
  const unselect = document.createElement('option')
  const bajo = document.createElement('option')
  const medio = document.createElement('option')
  const alto = document.createElement('option')
  const equipo = document.createElement('input')
  const textoPublicacion = document.createElement('input')
  const fotoPublicacion = document.createElement('input')
  const botonPublicar = document.createElement('button')

  HomeDiv.classList.add("homeDiv")
  buscadorDiv.classList.add("buscadorDiv")
  buscadorHome.classList.add("buscadorHome")
  botonBuscador.classList.add("botonBuscarHome")
  imagenLupa.classList.add("imagenLupa")
  publicacionDiv.classList.add("publicacionDiv")
  botonPopUp.classList.add("botonPopUp")
  botonPopUpText.classList.add("placeholder");
  modalDiv.classList.add("modalDiv");
  publicacionPopUp.classList.add("publicacionPopUp")//
  publicacionPopUp.classList.add("active")//
  mensajePost.classList.add("mensajePost")
  textoPublicacion.classList.add('textoPublicacion')
  fotoPublicacion.classList.add('fotoPublicacion')
  close.classList.add('close')
  botonPublicar.classList.add('botonPublicar')
  nombreUsuario.classList.add('nombreUsuario')
  ubicacion.classList.add('ubicacion')
  dificultad.classList.add('dificultad')
  equipo.classList.add('equipo')
  
  buscadorHome.setAttribute("type", "text");
  buscadorHome.setAttribute("placeholder", "Busca por pais")
  imagenLupa.src = "../Imagenes/lupa.png"
  textoPublicacion.setAttribute("placeholder", "Cuentanos tu nueva aventura...")
  fotoPublicacion.setAttribute("placeholder", "Copia la URL de la imagen")
  botonBuscador.setAttribute("type", "button")
  botonPopUp.setAttribute("type", "button")
  unselect.value = "";
  unselect.disabled = true;
  unselect.selected = true;



  textoPublicacion.setAttribute("id", "textoPublicacion")
  fotoPublicacion.setAttribute("id", "fotoPublicacion")



  
  navHome.textContent = 'HOME';
  navPerfil.textContent = 'PERFIL';
  navCerrarSesion.textContent = 'CERRAR SESION';
  mensajePost.textContent = 'Crear publicacion'
  botonPopUpText.textContent = "Cuentanos tu nueva aventura...";
  botonPublicar.textContent = "PUBLICAR";
  ubicacion.textContent = "UBICACIÓN";
  unselect.textContent = "DIFICULTAD";
  bajo.textContent = "Dificultad-Baja";
  medio.textContent = "Dificultad-Media";
  alto.textContent = "Dificultad-Alta";
  


  HomeDiv.appendChild(header2);
  header2.appendChild(logoChico);
  header2.appendChild(despliegueMenu);
  despliegueMenu.appendChild(imagenMenu);
  despliegueMenu.appendChild(menuHome);
  menuHome.appendChild(opcionSection);
  opcionSection.appendChild(navHome);
  opcionSection.appendChild(navPerfil);
  opcionSection.appendChild(navCerrarSesion);
  HomeDiv.appendChild(buscadorDiv)
  buscadorDiv.appendChild(buscadorHome)
  buscadorDiv.appendChild(botonBuscador)
  botonBuscador.append(imagenLupa)
  HomeDiv.appendChild(publicacionDiv)
  publicacionDiv.appendChild(mensajePost)
  publicacionDiv.appendChild(botonPopUp)
  botonPopUp.appendChild(botonPopUpText);
  HomeDiv.appendChild(modalDiv)
  modalDiv.appendChild(publicacionPopUp)
  publicacionPopUp.appendChild(nombreUsuario)
  publicacionPopUp.appendChild(ubicacion)
  publicacionPopUp.appendChild(dificultad)
  dificultad.appendChild(unselect)
  dificultad.appendChild(bajo)
  dificultad.appendChild(medio)
  dificultad.appendChild(alto)
  publicacionPopUp.appendChild(equipo)
  publicacionPopUp.appendChild(textoPublicacion)
  publicacionPopUp.appendChild(fotoPublicacion)
  publicacionPopUp.appendChild(botonPublicar)
  
  /*botonPopUp.addEventListener('click', () => {
   publicacionPopUp.classList.toggle('active');
  });*/

  

  despliegueMenu.addEventListener('click', () => {
   menuHome.classList.toggle('active');
  });

 /*const span = document.getElementsByClassName("close")[0];*/


  botonPopUp.addEventListener('click', function() {
    modalDiv.style.display = "block";
    console.log("holi");
  });

  close.addEventListener("click", function() {
    modalDiv.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modalDiv) {
      modalDiv.style.display = "none";
    }
  });

 navPerfil.addEventListener("click", ()=> {
  onNavigate("/PerfilUsuario");
 })

 navCerrarSesion.addEventListener("click",() =>{
  logout();
  onNavigate("/")
 })

 navHome.addEventListener("click", ()=> {
  onNavigate("/Home");
})

botonPublicar.addEventListener("click", () =>{
  crearPost()
})

  return HomeDiv;
};