import { db } from "../app/firebase";
import { getAuth } from "firebase/auth";
import logoMountainMe from '../Imagenes/Logo MountainMe.png';
import menu from '../Imagenes/menu.png';
import lupa from '../Imagenes/lupa.png';
import {
  logout,
  crearPost,
  validarpost,
  obtenerUsers,
  usuarioCorreo,
  getUsername,
  traerPost,
  editarPost,
  eliminarPost,
  updateLike,
  disLike,
 
} from "./utils.js";
import {
  onSnapshot,
  getDoc,
  deleteDoc,
  collection,
  query,
  orderBy,
} from "firebase/firestore";

export const Home = (onNavigate) => {
  /*HEADER HOME*/
  const header2 = document.createElement("header");
  const logoChico = document.createElement("img");
  const despliegueMenu = document.createElement("button");
  const imagenMenu = document.createElement("img");
  const menuHome = document.createElement("div");
  const opcionSection = document.createElement("ul");
  const navHome = document.createElement("li");
  const navPerfil = document.createElement("li");
  const navCerrarSesion = document.createElement("li");
  logoChico.src = logoMountainMe
  imagenMenu.src = menu
  header2.classList.add("header2");
  logoChico.classList.add("logo2");
  imagenMenu.classList.add("tresLineas");
  menuHome.classList.add("menuHome");
  despliegueMenu.classList.add("despliegueMenu");
  opcionSection.classList.add("opcionSection");

  const HomeDiv = document.createElement("div");
  const buscadorDiv = document.createElement("div");
  const buscadorHome = document.createElement("input");
  const botonBuscador = document.createElement("button");
  const imagenLupa = document.createElement("img");
  const publicacionDiv = document.createElement("div");
  const mensajePost = document.createElement("p");
  const botonPopUp = document.createElement("button");
  const botonPopUpText = document.createElement("span");
  const modalDiv = document.createElement("div");
  const publicacionPopUp = document.createElement("div");
  const close = document.createElement("span");
  const nombreUsuario = document.createElement("input");
  const ubicacion = document.createElement("input");
  const dificultad = document.createElement("select");
  const unselect = document.createElement("option");
  const bajo = document.createElement("option");
  const medio = document.createElement("option");
  const alto = document.createElement("option");
  const equipo = document.createElement("input");
  const textoPublicacion = document.createElement("input");
  const fotoPublicacion = document.createElement("input");
  const botonPublicar = document.createElement("button");
  const divPosts = document.createElement("div");
  //const botonicon = document.createElement("button");//
  //const icon = document.createElement("i");//

  HomeDiv.classList.add("homeDiv");
  buscadorDiv.classList.add("buscadorDiv");
  buscadorHome.classList.add("buscadorHome");
  botonBuscador.classList.add("botonBuscarHome");
  imagenLupa.classList.add("imagenLupa");
  publicacionDiv.classList.add("publicacionDiv");
  botonPopUp.classList.add("botonPopUp");
  botonPopUpText.classList.add("placeholder");
  modalDiv.classList.add("modalDiv");
  publicacionPopUp.classList.add("publicacionPopUp"); //
  publicacionPopUp.classList.add("active"); //
  mensajePost.classList.add("mensajePost");
  textoPublicacion.classList.add("textoPublicacion");
  fotoPublicacion.classList.add("fotoPublicacion");
  close.classList.add("close");
  botonPublicar.classList.add("botonPublicar");
  nombreUsuario.classList.add("nombreUsuario");
  ubicacion.classList.add("ubicacion");
  dificultad.classList.add("dificultad");
  equipo.classList.add("equipo");
  divPosts.classList.add("divPosts");
  //botonicon.classList.add("botonicon");
  //icon.classList.add("fa-solid fa-trash-can");

  buscadorHome.setAttribute("type", "text");
  buscadorHome.setAttribute("placeholder", "Busca por pais");
  imagenLupa.src = lupa
  textoPublicacion.setAttribute(
    "placeholder",
    "Cuentanos tu nueva aventura..."
  );
  fotoPublicacion.setAttribute("placeholder", "Copia la URL de la imagen");
  botonBuscador.setAttribute("type", "button");
  botonPopUp.setAttribute("type", "button");
  divPosts.setAttribute("id", "divPosts");
  unselect.value = "";
  unselect.disabled = true;
  unselect.selected = true;

  publicacionPopUp.setAttribute("id", "publicacionPopUp");
  textoPublicacion.setAttribute("id", "textoPublicacion");
  fotoPublicacion.setAttribute("id", "fotoPublicacion");
  ubicacion.setAttribute("placeholder", "UBICACIÓN");
  equipo.setAttribute("placeholder", "EQUIPO NECESARIO");
  ubicacion.setAttribute("id", "ubicacion");
  dificultad.setAttribute("id", "dificultad");
  equipo.setAttribute("id", "equipo");
  textoPublicacion.setAttribute.required;
  fotoPublicacion.setAttribute.required;
  ubicacion.setAttribute.required;
  equipo.setAttribute.required;
  ubicacion.setAttribute.required;
  dificultad.setAttribute.required;
  //icon.setAttribute('aria-hidden', 'true');
  

  navHome.textContent = "HOME";
  navPerfil.textContent = "PERFIL";
  navCerrarSesion.textContent = "SALIR";
  mensajePost.textContent = "Crear publicacion";
  botonPopUpText.textContent = "Cuentanos tu nueva aventura...";
  botonPublicar.textContent = "PUBLICAR";
  unselect.textContent = "DIFICULTAD";
  bajo.textContent = "BAJA";
  medio.textContent = "MEDIA";
  alto.textContent = "ALTA";

  HomeDiv.appendChild(header2);
  header2.appendChild(logoChico);
  header2.appendChild(despliegueMenu);
  despliegueMenu.appendChild(imagenMenu);
  despliegueMenu.appendChild(menuHome);
  menuHome.appendChild(opcionSection);
  opcionSection.appendChild(navHome);
  opcionSection.appendChild(navPerfil);
  opcionSection.appendChild(navCerrarSesion);
  HomeDiv.appendChild(buscadorDiv);
  buscadorDiv.appendChild(buscadorHome);
  buscadorDiv.appendChild(botonBuscador);
  botonBuscador.append(imagenLupa);
  HomeDiv.appendChild(publicacionDiv);
  publicacionDiv.appendChild(mensajePost);
  publicacionDiv.appendChild(botonPopUp);
  botonPopUp.appendChild(botonPopUpText);
  HomeDiv.appendChild(modalDiv);
  modalDiv.appendChild(publicacionPopUp);
  publicacionPopUp.appendChild(nombreUsuario);
  publicacionPopUp.appendChild(ubicacion);
  publicacionPopUp.appendChild(dificultad);
  dificultad.appendChild(unselect);
  dificultad.appendChild(bajo);
  dificultad.appendChild(medio);
  dificultad.appendChild(alto);
  publicacionPopUp.appendChild(equipo);
  publicacionPopUp.appendChild(textoPublicacion);
  publicacionPopUp.appendChild(fotoPublicacion);
  publicacionPopUp.appendChild(botonPublicar);
  HomeDiv.appendChild(divPosts);
  //divPosts.appendChild(botonicon);
  //botonicon.appendChild(icon);

  despliegueMenu.addEventListener("click", () => {
    menuHome.classList.toggle("active");
  });

  botonPopUp.addEventListener("click", function () {
    modalDiv.style.display = "block";
    console.log("holi");
  });

  close.addEventListener("click", function () {
    modalDiv.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modalDiv) {
      modalDiv.style.display = "none";
    }
  });

  navPerfil.addEventListener("click", () => {
    onNavigate("/PerfilUsuario");
  });

  navCerrarSesion.addEventListener("click", () => {
    logout();
    onNavigate("/");
  });

  navHome.addEventListener("click", () => {
    onNavigate("/Home");
  });



  const q = query(collection(db, "posts"), orderBy("fecha", "desc"));
  let postEditado = false;
  let id = "";

  onSnapshot(q, (querySnapshot) => {
    divPosts.innerHTML = "";
    const usuarioActual = getAuth().currentUser;

    querySnapshot.forEach(async (doc) => {
      const username = await getUsername(doc.data().email_user);
      const usernametoshow =
        username === "google" ? doc.data().nombre : username;

        /*<p class="descripcionPost">${doc.data().textoPublicacion}</p> ESTABA EN LA 221*/
      let divPost = `
    <div class="publicacionPost">
    <p class="usuario">${usernametoshow} : ${doc.data().textoPublicacion}</p>
    <p class="ubicacion2">UBICACIÓN: ${doc.data().ubicacion}</p>
    <p class="dificultad2">DIFICULTAD: ${doc.data().dificultad}</p>
    <p class="equipo2">EQUIPO: ${doc.data().equipo}</p>
    <p class="contadorLikes">${doc.data().likes.length} me gusta</p>
    <img class="imagenPost" src="${doc.data().fotoPublicacion}"></img>`

    if(doc.data().likes.includes(usuarioActual.uid)){
      divPost += `<div class="likePublicacion">
      <button class="like" data-id="${doc.id}"><img class="montana" id="montana" src="./imagenes/montaña.png"></img>DISLIKE</button>
    </div>`
    }else{
      divPost += `<div class="likePublicacion">
      <button class="like" data-id="${doc.id}"><img class="montana" id="montana" src="./imagenes/montaña.png"></img>ME GUSTA</button>
    </div>`
    }

    if(usuarioActual.email === doc.data().email_user){
      divPost += `<div class="editarPublicacion">
          <button class="editar" data-id="${doc.id}">Editar</button>
      </div>
      <div class="eliminarPublicacion">
          <button class="eliminar" data-id="${doc.id}">Eliminar</button>
      </div>`
    }
    divPost += `</div>
    </div>`;

    divPosts.innerHTML += divPost;

      const btnsEditar = divPosts.querySelectorAll(".editar");
      btnsEditar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          console.log(e.target.dataset.id);
          modalDiv.style.display = "block";
          const postEditar = await traerPost(e.target.dataset.id);
          const post = postEditar.data();
          console.log(post);

          ubicacion.value = post.ubicacion;
          dificultad.value = post.dificultad;
          equipo.value = post.equipo;
          textoPublicacion.value = post.textoPublicacion;
          fotoPublicacion.value = post.fotoPublicacion;

          postEditado = true;
          id = e.target.dataset.id;
        });

        const btnsEliminar = divPosts.querySelectorAll(".eliminar");
        btnsEliminar.forEach((btn) => {
          btn.addEventListener('click', ({target: {dataset}}) => {
            console.log("borrar")
            eliminarPost(dataset.id)
          })
        })

      });

      const botonLike = divPosts.querySelectorAll(".like");
      botonLike.forEach((boton) => {
        boton.addEventListener("click", async (e) => {
          e.preventDefault();
          const doc = await traerPost(e.target.dataset.id);
          const usuarioActual = getAuth().currentUser;
         
          if (doc.data().likes.includes(usuarioActual.uid)) {
            disLike(doc.id, usuarioActual.uid);
          } else {
            updateLike(doc.id, usuarioActual.uid);
          }
        });
      });
 
    });

  });

  botonPublicar.addEventListener("click", () => {
    modalDiv.style.display = "none";

    if (postEditado == true) {
      editarPost(id, {
        ubicacion: ubicacion.value,
        dificultad: dificultad.value,
        equipo: equipo.value,
        textoPublicacion: textoPublicacion.value,
        fotoPublicacion: fotoPublicacion.value,
      });

      postEditado = false;
    } else {
      validarpost();
      crearPost();
    }

    document.getElementById("ubicacion").value = "";
    document.getElementById("dificultad").value = "";
    document.getElementById("equipo").value = "";
    document.getElementById("textoPublicacion").value = "";
    document.getElementById("fotoPublicacion").value = "";
  });


  
  return HomeDiv;
};




  
   


