import logoMountainMe from '../Imagenes/Logo_MountainMe.png';

export const FotoPerfil = (onNavigate) => {
  /* HEADER PRINCIPAL */
  const header1 = document.createElement('header');
  const logoGrande = document.createElement('img');
  logoGrande.src = logoMountainMe;
  header1.classList.add('headerRegistro2');
  logoGrande.classList.add('logoRegistro3');

  const contendorDiv = document.createElement('div');
  const formulario = document.createElement('formulario');
  const contendorBotones = document.createElement('div');
  const mensajeRegstro = document.createElement('p');
  const mensajeFotoPerfil = document.createElement('p');
  const pais = document.createElement('input');
  const nivel = document.createElement('input');
  const record = document.createElement('input');
  const botonExaminar = document.createElement('input');
  const botonFinalizar = document.createElement('button');

  contendorDiv.classList.add('contenedorDiv');
  formulario.classList.add('formulario3');
  contendorBotones.classList.add('contenedorBotones');
  mensajeRegstro.classList.add('mensajeRegistro');
  mensajeFotoPerfil.classList.add('mensajeFotoPerfil');
  pais.classList.add('pais');
  nivel.classList.add('nivel');
  record.classList.add('record');
  botonExaminar.classList.add('botonExaminar');
  botonFinalizar.classList.add('botonFinalizar');

  pais.setAttribute('id', 'pais');
  nivel.setAttribute('id', 'nivel');
  record.setAttribute('id', 'record');
  botonExaminar.setAttribute('id', 'fotoPerfil');
  mensajeRegstro.textContent = '¡Ya has sido registrado!';
  mensajeFotoPerfil.textContent = 'Para comenzar llena los siguientes campos';
  botonExaminar.setAttribute('placeholder', 'Copia la URL de tu foto de perfil');
  pais.setAttribute('placeholder', 'Indica a qué país perteneces');
  nivel.setAttribute('placeholder', 'Indica cuál es tu nivel');
  record.setAttribute('placeholder', 'Indica tu track record');
  botonExaminar.textContent = 'Examinar';
  botonFinalizar.textContent = 'Continuar';
  botonFinalizar.setAttribute('id', 'botonFinaliza');

  contendorDiv.appendChild(header1);
  header1.appendChild(logoGrande);
  contendorDiv.appendChild(formulario);
  formulario.appendChild(mensajeRegstro);
  formulario.appendChild(mensajeFotoPerfil);
  formulario.appendChild(pais);
  formulario.appendChild(nivel);
  formulario.appendChild(record);
  formulario.appendChild(botonExaminar);
  formulario.appendChild(contendorBotones);
  formulario.appendChild(botonFinalizar);

  botonFinalizar.addEventListener('click', () => {
    onNavigate('/PerfilUsuario');
  });

  return contendorDiv;
};
