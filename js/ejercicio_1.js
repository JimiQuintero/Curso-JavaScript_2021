// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


// const contarLetras = function (cadena = "") {
//   if (!cadena) {
//     console.warn("No ingresaste ninguna cadena de texto");
//   }else {
//     if (typeof cadena === "string") {
//       console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//     }
//   }
// }

// // contarLetras();
// contarLetras("Hello World");

// Utilizando arrows functions sin validar el tipo de dato
const contarLetras = (cadena = "") => 
  (!cadena) 
  ? console.warn("No ingresaste ninguna cadena de texto") 
  : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarLetras("Hello World");


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

console.clear();

// const quitarLetras = function (cadena = "", n) {
//   if (!cadena) {
//     console.warn("No ingresate ninguna cadena de texto");
//   } else {
//     cadena2 = cadena.slice(0, n); 
//     console.log(cadena2);
//   }
// }

// quitarLetras("Hello World", 7);

// Con arrow functions
const quitarLetras = (cadena = "", longitud = undefined) =>
(!cadena) 
? console.warn("No ingresaste ninguna cadena de texto")
: (longitud === undefined)
  ? console.warn("No ingresaste la longitud para recortar el texto")
  : console.info(cadena.slice(0, longitud))

quitarLetras("Hello World");




// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
console.clear();
const dividirCadena = (cadena = "", separador = undefined) =>
(!cadena) 
? console.warn("No ingresaste ninguna cadena de texto")
: (separador === undefined)
  ? console.warn("No indicaste el separador para dividir el texto")
  : console.info(cadena.split(separador))
dividirCadena("hola, que, tal", ' ')
dividirCadena("Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic", ',')
dividirCadena("hola que tal")


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

console.clear();

const repetirCadena = (cadena = "",   repeat = undefined) => {
  if (!cadena) {
    return console.warn("No ingresaste ninguna cadena de texto");
  }
  if (repeat === undefined) {
    return console.warn("No ingresaste el número de veces a repetir el texto");
  }
  if (repeat === 0) {
    return console.error("El número de veces a repetir el texto no puede ser cero(0)");
  }
  if (Math.sign(repeat) === -1) {
    return console.error("El número de veces a repetir el texto no puede ser negativo");
  }

  console.info(`${cadena.repeat(repeat)}`);

  
}
 
repetirCadena("Hello World javascript ",);
repetirCadena("Hello World javascript ", 0);
repetirCadena("Hello World javascript ", -20);
repetirCadena("Hello World javascript ", 3);
