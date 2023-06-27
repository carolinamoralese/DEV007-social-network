# Creando una Red Social

## Índice

* [1. Producto](#1-producto)
* [2. Diseño UX](#2-diseño-ux)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Página finalizada](#3-pagina-finalizada)
* [5. Flujo de trabajo](#5-flujo-de-trabajo)
* [6. Fuentes consultadas](#6-fuentes-consultadas)


## 1. PRODUCTO

MountainMe es una red social enfocada a senderistas, montañistas o cualquiera que disfrute la naturaleza.

![montañismo](https://github.com/PaosLuna/DEV007-social-network/blob/77b2b1491bde17966b0202f80ccfbb98c82d24f2/src/Imagenes/readme1.jpg)

## 2. Diseño UX

### Diseño

El diseño esta basado en colores que rememoran a la naturaleza, está diseñadp para poder ser usado en formato mobile y desktop. 
Cuenta con una interfaz dinámica e intuititva que permite al usuario compartir sus experincias.

### Prototipo

Se realizaron dos prototipos, uno de alta fidelidad en Canva: https://www.canva.com/design/DAFj9dxC5iM/H1pLjscfsgE6OPPGSwVrOg/edit?utm_content=DAFj9dxC5iM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Así como nuestro prototipo de alta fidelidad realizado en Figma: https://www.figma.com/file/g4Xt2LetGCl19i1tzWeutI/MountainMe-Team?type=design&node-id=19-273&mode=design&t=s10jLavFVmQEL9pH-0

![prototipo-alta-fidelidad](https://github.com/PaosLuna/DEV007-social-network/blob/ac9196f3f017ed5fd1254aa71eb55d58c78c83ef/src/Imagenes/image%20(18).png)

### Modificaciones basadas en test de usabilidad 

1. Cambio paleta de colores
2. Estructura de la interfaz
3. Fondos para las pantallas
4. Modificamos la sección de Perfil de usuario
5. Agregamos sección de eventos

   
## 3. Historias de usuario 

La página se baso en seis historias de usuario.

### Historia 1

Usuarios que practican senderismo o gustan de la naturaleza que deseen formar parte de una comunidad para conocer personas con los mismo gustos, compartir fotos y experiencias.

### Historia 2

Se visualizan campos para que los usuarios puedan ingresar sus datos y poder hacer su respectivo registro, crear una cuenta personal y que cuente con su propio perfil para poder editarlos con
los datos personales.

### Historia 3

El usuario se podrá logear con la cuenta de google para facilitar su registro a la red social para crear una cuenta personal que cuente con su propio perfil.

### Historia 4

El usuario pueda ingresar a la red social con los datos de registro ya guardados, sin volver a repetir los datos.

### Historia 5

Que el usuario pueda cargar una foto de perfil.

### Historia 6

El usuario vera las publicaciones del resto de los miembros y podrá interactuar dando like.


## 4. PÁGINA FINALIZADA

### INICIO 

Es la primera sección de la red social. Permite ingresar con una cuenta ya creada, con Google o registrarse con un nuevo correo. 

![inicio](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Inicio.jpeg)

### INICIO SESIÓN

En esta sección se ingresa una cuenta ya creada. 

![inicio-sesion](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Inicio%20Sesion.jpeg)

### REGISTRO

En esta sección se dan de alta las cuentas nuevas, deben ser correos reales y se envía un correo de verificación.

![registro](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Registro.jpeg)

### HOME

La sección principal de la página donde se muestran las publicaciones de todos los usuarios registrados.

![home](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Home.jpeg)

Para publicar se muestra un popUp, no permite publicar si los campos no están llenos.

![publicacion](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Publicacion.jpeg)

Permite borrar y editar la publicación.

![editar](https://github.com/PaosLuna/DEV007-social-network/blob/3feaeb527aea600033e91cce8673515069a0ba8c/src/Imagenes/eliminar%201%20(1).png)

Antes de salir debes confirmar.

![salir](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Salir.jpeg)

### PERFIL

El perfil muestra la foto seleccionada por el usuario y su información personal.

![perfil](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Perfil.jpeg)

También permite editar los campos.

![ediatr-perfil](https://github.com/PaosLuna/DEV007-social-network/blob/48a3e990430d8c74893bf52ba03c885b2290c908/src/Imagenes/Editar%20Perfil.jpeg)


## 5. FLUJO DE TRABAJO

El tiempo para desarrollar este proyecto fue de 5 strings, durante este tiempo seguímos el siguiente flujo de trabajo usando Trello para la organización.

![ediatr-perfil](https://github.com/PaosLuna/DEV007-social-network/blob/0da57f738d3b9c78d940934459bbf71beccb1a1a/src/Imagenes/trello1.jpeg)

## 6. FUENTES CONSULTADAS 

A continuación algunos de los muchos artículos, videos y páginas consultadas para lograr desarrollar este proyecto:

- https://www.freecodecamp.org/espanol/news/javascript-firestore-tutorial-2020-aprende-con-ejemplos/
- https://www.rowy.io/blog/firestore-timestamp
- https://emilyxiong.medium.com/how-to-write-a-firebase-cloud-function-to-implement-a-counter-a6acd9452826
- https://ricardogeek.com/como-subir-archivos-con-javascript/
- https://lenguajejs.com/javascript/asincronia/promesas/
- https://developero.io/blog/jest-mock-module-function-class-promises-axios-y-mas#c%C3%B3mo-hacer-jestmock-o-jest-mock-function
- https://medium.com/front-end-chile/c%C3%B3mo-alojar-tu-sitio-web-en-firebase-hosting-1a828641d7b3

![gracias](https://github.com/PaosLuna/DEV007-social-network/blob/746398cf431173940766dfc31331bae95d807dc7/src/Imagenes/gracias2.jpg)
