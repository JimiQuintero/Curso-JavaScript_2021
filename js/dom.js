console.log("************* Elementos del Documento ****************");
// console.log(window.document);
// console.log(document);
// // Devuelve la cabeza del documento HTML
// console.log(document.head);
// // Devuelve el body del documento HTML
// console.log(document.body);
// // Devuelve el tipo de documento (HTML) sin el doctype
// console.log(document.documentElement);
// // Devuelve el tipo de documento (HTML) solo el doctype
// console.log(document.doctype);
// // Devuelve el juego de caracteres del documento HTML
// console.log(document.charset);
// // Devuelve el title del documento HTML
// console.log(document.title);
// // Devuelve un arreglo HTMLCollection con los enlaces del documento HTML
// console.log(document.links);
// // Devuelve un arreglo HTMLCollection con las imagenes del documento HTML
// console.log(document.images);
// // Devuelve un arreglo HTMLCollection con los formularios del documento HTML
// console.log(document.forms);
// // Devuelve un arreglo HTMLCollection con las hojas de estilos del documento HTML
// console.log(document.styleSheets);
// // Devuelve un arreglo HTMLCollection con las hojas de estilos del documento HTML
// console.log(document.scripts);
// // Escribe un texto al final del documento HTML no es buena practica utilizarlo
// document.write("<h2>Hola Mundo JS desde el DOM</h2>");




/*********** Metodos para acceder al DOM *********************/

// Metodos del DOM ya no utilizados

// 1.- Traer elementos por nombre de etiqueta
// console.log(document.getElementsByTagName("li"));
// // 2.- Traer elementos por nombre de Clase
// console.log(document.getElementsByClassName("card"));
// // 3.- Traer elementos por el atributo Name
// console.log(document.getElementsByName("nombre"));
// // 3.- Traer elementos por el Id
// console.log(document.getElementById("menu"));

// 1,2 y 3 fueron reemplazados por:

// 1.- querySelector (Consulta de Selector) recibe como parametro un selector valido de CSS pero solo trae el primer selector encontrado en el documento HTML 
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// Traer todos los selectores encontrados en el documento HTML 
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach(el => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));

//************* DOM: Atributos y Data-Attributes **************/ 
// 1.- Notación del punto 
// console.log(document.documentElement.lang);
// 2.-
// console.log(document.documentElement.getAttribute("lang"));
// 3.-
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// Establecer nuevos valores a los atributos

// 1.- Con la notación del punto 
// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);
// 2.- Con setAttribute
// document.documentElement.setAttribute("lang", "es-COL");
// console.log(document.documentElement.getAttribute("lang"));

// Variables que hacen referencia al DOM 
// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");
// $linkDOM.setAttribute("href", "https://google.com.co");
// Validar si un elemento tiene un atributo
// console.log($linkDOM.hasAttribute("rel"));
// Remover un atributo
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));

// Data-Attrubutes
console.clear();
// 1.- 
// console.log($linkDOM.getAttribute("data-description"));
// 2.-
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);

// Establecer nuevos valores a los atributos

// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
// console.log($linkDOM.dataset.description);

// Con el metodo el punto 
// $linkDOM.dataset.description = "Aprendiendo el maravilloso mundo JavaScript";
// console.log($linkDOM.dataset.description);

// Validar si un elemento tiene un atributo
// console.log($linkDOM.hasAttribute("data-id"));
// // Remover un atributo
// $linkDOM.removeAttribute("data-id");
// console.log($linkDOM.hasAttribute("data-id"));

//************* DOM: Estilos y Variables CSS **************/
// console.clear(); 
// const $linkDOM2 = document.querySelector(".link-dom");
// console.log($linkDOM2.style);

// Utilizando la segunda forma con getAttribute
// console.log($linkDOM2.getAttribute("style"));

// Acceder a una propiedad en particular
// console.log($linkDOM2.style.backgroundColor);  
// console.log($linkDOM2.style.color);

// Acceder con las propiedades computadas Computed Property
// console.log(window.getComputedStyle($linkDOM2));
// Acceder con las propiedades computadas Computed Property y a un elemento en concreto
// console.log(getComputedStyle($linkDOM2).getPropertyValue("color"));

// Establecer valores CSS desde js 

// 1.- 
// $linkDOM.style.setProperty("text-decoration", "none");
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.setProperty("text-align", "center");

// 2.- Utilizando la Notación del punto 
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";

// console.log($linkDOM2.style);
// console.log($linkDOM2.getAttribute("style"));
// console.log(getComputedStyle($linkDOM2));

// Variables CSS - Custom Properties CSS

// const $html = document.documentElement,
//       $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// Cambiar valor a las variables establecidas en el archivo CSS selector root 
// $html.style.setProperty("--dark-color", "#fff");
// $html.style.setProperty("--yellow-color", "#000");

// Actualizar valor de la variable
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// modificar la propiedad deseada
// $body.style.backgroundColor = varDarkColor;
// $body.style.setProperty("background-color", varDarkColor);
// $body.style.setProperty("color", varYellowColor);

// Clases CSS 
// console.clear();

// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);

// Ver si un elemento tiene una clase en particular devuelve un Boolean 
// console.log($card.classList.contains("rotate-45"));

// Agrgar una clase particular a un elemento 
// console.log($card.classList.add("rotate-45"));
// console.log($card.classList.contains("rotate-45"));
// console.log($card.className);
// console.log($card.classList);

// Quitar una clase 
// console.log($card.classList.remove("rotate-45"));
// console.log($card.classList.contains("rotate-45"));

// Metodo toogle agrega o quita una clase a un elemento dependiendo si la tiene o no 

// Aqui agrega la clase rotate-45 ya que no la tiene 
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));

// Aqui le quitamos la clase rotate-45 agregada en el paso anteriror
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));

// Reemplazar un clase por otra diferente
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135");

// Agregar o quitar varias clases al mismo tiempo a un elemento 
// $card.classList.add("opacity-80", "sepia");

// Quitar varias clases al mismo tiempo
// $card.classList.remove("rotate-135", "sepia");
// $card.classList.toggle("sepia");

// DOM: Texto y HTML 
console.clear();
// const $whatIsDOM = document.getElementById("que-es");

// let text = `
//     <p>
//       El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
//     </p>
//     <p>
//       Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//       <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
//   `;

  // Propiedades para agregar Texto 

  // 1.- innerText utilizado para IE 
  // $whatIsDOM.innerText = text;

  // 2.- textContent es el estandar aceptado por la mayoria de navegadores
  // $whatIsDOM.textContent = text;

  // 3.- Para que se renderice como código HTML utilizo:
  // $whatIsDOM.innerHTML = text;

  // 4.- Otra propiedad que es mejor semanticamente utilizar es:
  // $whatIsDOM.outerHTML = text; 

  /*************** DOM Traversing: Recorriendo el DOM ******************/
  console.clear();
  // const $cards = document.querySelector(".cards");
  // console.log($cards);
  
  // Ver los hijos de la etiqueta cards 
  // console.log($cards.children);

  // Acceder a uno de los elementos hijos
  // console.log($cards.children[2]);

  // Ver el elemento padre 
  // console.log($cards.parentElement);

  // Obtener el primero y ultimo elemento hijo
  // console.log($cards.firstChild);
  // console.log($cards.firstElementChild);
  // console.log($cards.lastElementChild);

  // Obtener el elemento previo y posterior
  // console.log($cards.previousElementSibling);
  // console.log($cards.nextElementSibling);


  /************** DOM: Manejadores de Eventos ****************/

  // 1.- Evento con atributo HTML 
  // function holaMundo() {
  //   alert("Hello World Eventos en Javascript");
  //   console.log(event);
  // }

  // 2.- Evento con manejador semántico
  // const $eventoSemantico = document.querySelector("#evento-semantico");
  // console.log($eventoSemantico);
  // function holaMundo(e) {
  //     alert("Hello World Eventos en Javascript");
  //     console.log(e);
  //   }

  // const $eventoSemantico = document.getElementById("evento-semantico");

  // $eventoSemantico.onclick = holaMundo;

  // // Otra manera con una funcion anonima
  // $eventoSemantico.onclick = function (e) {
  //   alert("Hola Mundo Manejador de Eventos Semaánticos");
  //   console.log(e);
  //   console.log(event);
  // }

  // 3.- Evento con manejador multiple
  // function holaMundo(e) {
  //   alert("Hello World Eventos Múltiples en Javascript");
  //   console.log(e);
  // }

  // const $eventoMultiple = document.getElementById("evento-multiple");

  // $eventoMultiple.addEventListener("click", holaMundo);
  // $eventoMultiple.addEventListener("click", (e) => {
  //   alert("Hola Mundo Manejador de Eventos Múltiples");
  //   console.log(e);
  //   console.log(e.type);
  //   console.log(e.target);
  // });


   /************** DOM: Eventos con Parámetros y Remover Eventos ****************/
  //  function holaMundo(e) {
  //   alert("Hello World Eventos Múltiples en Javascript");
  //   console.log(e);
  // }

  // function saludar(nombre = "Desconocid@") {
  //   alert(`Hola ${nombre}`);
  //   console.log(event);
  // }

  // const $eventoMultiple = document.getElementById("evento-multiple");

  // $eventoMultiple.addEventListener("click", holaMundo);
  // $eventoMultiple.addEventListener("click", (e) => {
  //   alert("Hola Mundo Manejador de Eventos Múltiples");
  //   console.log(e);
  //   console.log(e.type);
  //   console.log(e.target);
  // });
  // $eventoMultiple.addEventListener("click", () => {
  //   saludar();
  //   saludar("Jimi");
  // });

   /************** DOM: Remover Eventos ****************/

  //  const removerDobleClick = (e) => {
  //    alert(`Removiendo el evento de tipo ${e.type}`);
  //    console.log(e);
  //    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  //    $eventoRemover.disabled = true;
  //  }

  //  const $eventoRemover = document.getElementById("evento-remover");

  //  $eventoRemover.addEventListener("dblclick", removerDobleClick);


   /************** DOM: Flujo de Eventos (Burbuja y Captura) ****************/
   
  //  const $divsEventos = document.querySelectorAll(".eventos-flujo div");
   
  //  function flujoEventos(e) {
  //    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  //  }
  //  console.log($divsEventos);

  //  $divsEventos.forEach(div => {
  //   // //  Fase de Burbuja
  //   //  div.addEventListener("click", flujoEventos);
  //   // div.addEventListener("click", flujoEventos, false);
  //   //  Fase de Captura
  //   // div.addEventListener("click", flujoEventos, true);
  //   div.addEventListener("click", flujoEventos, {
  //     capture: false,
  //     // Si necesito que el evento se ejecute una sola vez
  //     once: true, 
  //   });
  //  })

   /************** DOM: CREANDO ELEMENTOS Y FRAGMENTOS ****************/

  //  const $figure = document.createElement("figure"),
  //   $img = document.createElement("img"),
  //   $figcation = document.createElement("figcaption"),
  //   $figcationText = document.createTextNode("Animals"),
  //   $cards = document.querySelector(".cards");

  //  $img.setAttribute("src", "https://placeimg.com/200/200/animals");
  //  $img.setAttribute("alt", "Animals");
  //  $figcation.appendChild($figcationText); 
  //  $figure.appendChild($img);
  //  $figure.appendChild($figcation);
  //  $figure.classList.add("card");

  //  $cards.appendChild($figure);

  //  OTRA FORMA NO MUY UTILIZADA CON INNER HTML 

  // const $figure2 = document.createElement("figure");

  // $figure2.innerHTML = `
  //   <img src= "https://placeimg.com/200/200/people" alt= "People"></img>
  //   <figcaption>People</figcaption>
  // `;
  // $figure2.classList.add("card");
  // $cards.appendChild($figure2);

  // Si tengo varios elementos cargados dinamicamente 
  // const estaciones = [ "Primavera", "Verano", "Otoño", "Invierno"],
  //   $ul = document.createElement("ul");

  // document.write("<h3>Estaciones del Año</h3>");
  // document.body.appendChild($ul);

  // estaciones.forEach( el => {
  //   const $li = document.createElement("li");
  //   $li.textContent = el;
  //   $ul.appendChild($li);
  // });

  // Otra forma utilizando InnerHtml 

  // const continentes = ["África", "América", "Asia", "Europa", "Oceania"],
  //   $ul2 = document.createElement("ul");

  // document.write("<h3>Continentes del Mundo</h3>");
  // document.body.appendChild($ul2);
  // $ul2.innerHTML = "";
  // continentes.forEach(el => ($ul2.innerHTML += `<li>${el}</li>`));

   /************** DOM: FRAGMENTOS ****************/

  //  const meses = [
  //    "Enero",
  //    "Febrero",
  //    "Marzo",
  //    "Abril",
  //    "Mayo",
  //    "Junio",
  //    "Julio",
  //    "Agosto",
  //    "Septiembre",
  //    "Octubre",
  //    "Noviembre",
  //    "Diciembre"
  //  ],
  //   $ul3 = document.createElement("ul"),
  //   $fragment = document.createDocumentFragment();

  // meses.forEach( el => {
  //   const $li = document.createElement("li");
  //   $li.textContent = el;
  //   $fragment.appendChild($li);
  // });

  // document.write("<h3>Meses del Año</h3>");
  // $ul3.appendChild($fragment);
  // document.body.appendChild($ul3);

  /************** 69 DOM: TEMPLATES HTML ****************/

  // const $cards = document.querySelector(".cards"),
  //   $template = document.getElementById("template-card").content,
  //   $fragmet = document.createDocumentFragment(),
  //   cardContent = [
  //     {
  //       title: "Tecnológia",
  //       img: "https://placeimg.com/200/200/tech"
  //     },
  //     {
  //       title: "Animales",
  //       img: "https://placeimg.com/200/200/animals"
  //     },
  //     {
  //       title: "Arquitectura",
  //       img: "https://placeimg.com/200/200/arch"
  //     },
  //     {
  //       title: "Gente",
  //       img: "https://placeimg.com/200/200/people"
  //     },
  //     {
  //       title: "Naturaleza",
  //       img: "https://placeimg.com/200/200/nature"
  //     },
  //   ];

  //   cardContent.forEach( el => {
  //     $template.querySelector("img").setAttribute("src", el.img);
  //     $template.querySelector("img").setAttribute("alt", el.title);
  //     $template.querySelector("figcaption").textContent = el.title;

  //     // Clonar el nodo 
  //     let $clone = document.importNode($template, true);
  //     $fragmet.appendChild($clone);
  //   });

  //   $cards.appendChild($fragmet);

  /************** 70 DOM: MODIFICANDO ELEMENTOS (OLD STYLE) ****************/

  // const $cards = document.querySelector(".cards"),
  //   $newCard = document.createElement("figure");

  // $newCard.innerHTML = `
  //   <img src= "https://placeimg.com/200/200/any" alt="Any">
  //   <figcaption>Any</figcaption>
  // `
  // $newCard.classList.add("card");
  // $cards.appendChild($newCard)

  // Reemplazar un Nodo 
  // $cards.replaceChild($newCard, $cards.children[3]);

  // Insertar un Nodo antes de un nodo tomado como referencia
  // $cards.insertBefore($newCard, $cards.firstElementChild);

  // Eliminar un Nodo 
  // $cards.removeChild($cards.lastElementChild);

  // Clonar todos los Nodos de una Seccion 
  // const $cloneCards = $cards.cloneNode(true);

  // document.body.appendChild($cloneCards);

  /************** 71 DOM: MODIFICANDO ELEMENTOS (COOL STYLE) ****************/

  const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

  $newCard.innerHTML = `
    <img src= "https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
  `
  $newCard.classList.add("card");

  // Insertar elemneto como hermano anteriror 
  $cards.insertAdjacentElement("beforebegin", $newCard);

  // Insertar elemneto como primer hijo
  $cards.insertAdjacentElement("afterbegin", $newCard);

  // Insertar elemneto como ultimo hijo
  $cards.insertAdjacentElement("beforeend", $newCard);

  // Insertar elemneto como hermano siguiente
  $cards.insertAdjacentElement("afterend", $newCard);




  




   

  






