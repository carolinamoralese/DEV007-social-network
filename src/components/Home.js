export const Home = (onNavigate) => {
  const eslogan = document.getElementById('eslogan');
  eslogan.style.display = 'none';
  const header = document.getElementById('header');
  header.style.display = 'none';
  document.body.style.backgroundColor = "#E6F2F4"
  document.body.style.backgroundImage = 'url("imagenes/Fondo2.jpg")';
  document.body.style.backgroundRepeat = "no-repeat"; 
  document.body.style.backgroundSize = "contain";
  document.body.style.backgroundPosition = "bottom center";


  const HomeDiv = document.createElement('div');
  const hedearHome = document.createElement('div');
  const menuHome =  document.createElement('div');
  const despliegueMenu = document.createElement('nav');
  const opcioneSection = document.createElement('ul');
  const navHome = document.createElement('li');
  const navPerfil = document.createElement('li');
  const navCerrarSesion = document.createElement('li');
  const buscadorHome = document.createElement('input')
  const botonBuscador = document.createElement('button')
  const imagenLupa = document.createElement('img')
  const publicacionDiv = document.createElement('div')
  const mensajePost = document.createElement('p')
  const botonPopUp = document.createElement('button')
  const publicacionPopUp = document.createElement('dialog')
  const textoPublicacion = document.createElement('input')
  const fotoPublicacion = document.createElement('input')
  

  navHome.textContent = 'HOME';
  navPerfil.textContent = 'PERFIL';
  navCerrarSesion.textContent = 'CERRAR SESION';
  mensajePost.textContent = 'Crear publicacion'

  //imagenLupa.src = "../Imagenes/lupa.png"
  

  buscadorHome.setAttribute("type", "text");
  buscadorHome.setAttribute("placeholder", "Busca por pais")
  botonPopUp.setAttribute("placeholder", "Cuentanos tu nueva aventuta...")
  textoPublicacion.setAttribute("placeholder", "Cuentanos tu nueva aventuta...")
  fotoPublicacion.setAttribute("placeholder", "Copia la URL de la imagen")
  botonBuscador.setAttribute("type", "button")
  botonPopUp.setAttribute("type", "button")
  

  botonBuscador.classList.add("botonBuscarHome")
  imagenLupa.classList.add("imagenLupa")



  HomeDiv.appendChild(hedearHome);
  hedearHome.appendChild(menuHome);
  menuHome.appendChild(despliegueMenu);
  menuHome.appendChild(opcioneSection);
  opcioneSection.appendChild(navHome);
  opcioneSection.appendChild(navPerfil);
  opcioneSection.appendChild(navCerrarSesion);
  HomeDiv.appendChild(buscadorHome)
  HomeDiv.appendChild(botonBuscador)
  botonBuscador.append(imagenLupa)
  HomeDiv.appendChild(publicacionDiv)
  publicacionDiv.appendChild(mensajePost)
  publicacionDiv.appendChild(botonPopUp)
  HomeDiv.appendChild(publicacionPopUp)
  publicacionPopUp.appendChild(textoPublicacion)
  publicacionPopUp.appendChild(fotoPublicacion)
  return HomeDiv;
};