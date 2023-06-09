import { db } from "../app/firebase";
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
  logoChico.src = "../Imagenes/Logo MountainMe.png";
  imagenMenu.src = "../Imagenes/menu.png";
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

  buscadorHome.setAttribute("type", "text");
  buscadorHome.setAttribute("placeholder", "Busca por pais");
  imagenLupa.src = "../Imagenes/lupa.png";
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

  navHome.textContent = "HOME";
  navPerfil.textContent = "PERFIL";
  navCerrarSesion.textContent = "SALIR";
  mensajePost.textContent = "Crear publicacion";
  botonPopUpText.textContent = "Cuentanos tu nueva aventura...";
  botonPublicar.textContent = "PUBLICAR";
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

    querySnapshot.forEach(async (doc) => {
      const username = await getUsername(doc.data().email_user);
      const usernametoshow =
        username === "google" ? doc.data().nombre : username;

      const divPost = `
    <div class="publicacionPost">
    <p class="usuario">Usuario: ${usernametoshow}</p>
    <p class="ubicacion2">Ubicación: ${doc.data().ubicacion}</p>
    <p class="dificultad2">Nivel: ${doc.data().dificultad}</p>
    <p class="equipo2">Equipo: ${doc.data().equipo}</p>
    <img class="imagenPost" src="${doc.data().fotoPublicacion}"></img>
    <p class="descripcionPost">${doc.data().textoPublicacion}</p>
    <div class="like">
      <button id="like">Like</button>
    </div>
    <div class="editarPublicacion">
      <button class="editar" data-id="${doc.id}">Editar</button>
    </div>
    <div class="eliminarPublicacion">
      <button class="eliminar" data-id="${doc.id}">Eliminar</button>
    </div>
    </div>
    </div>
    `;
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
  });

  return HomeDiv;
};
