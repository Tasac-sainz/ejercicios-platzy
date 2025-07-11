'use strict';

//EJERCICIO DE ADIVINAR EL NÚMERO (COMENTADO PORQUE SI NO, CORRE EL CÓDIGO CUANDO SE ACTUALIZA LA PÁG Y PIDE NÚMERO...)

// const numeroSecreto = Math.floor (Math.random () * 10 + 1)
// const numeroJugador = parseInt (prompt ("Adivina el número secreto entre el 1 y el 10"))

// console.log (`Este es el número con el que estás jugando ${numeroJugador}`)
// console.log ('Número secreto:', numeroSecreto)

// if (numeroJugador === numeroSecreto) {
//     console.log ("Felicidades!! Has acertado el número secreto")
// } else if (numeroJugador < numeroSecreto) {
//     console.log ("Demasiado bajo, inténtalo de nuevo")
// } else {
//     console.log ("Esta vez fue demasiado alto, inténtalo otra vez") 
// }

//EJERICICIO SWITCH

let expr = "mango"

switch (expr) {
    case "manzana":
        console.log ("Las manzanas están a 1,20€/kilo")
    break;
    case "pera":
        console.log ("Las peras están a 1,70€/kilo")
    break;
    case "plátanos":
    case "ciruelas":
        console.log ("Los plátanos y las ciruelas están a 2,10€/kilo")
    break;
    case "mango":
        console.log ("Los mangos están a 3€/kilo")
    break;
    default:
        console.log (`Lo sentimos, el producto ${expr} está agotado`);
}

//EJERCICIO FOR (BUCLES,LOOP,CICLO)
 let list = ["dormir", "pasear a Jack", "estudiar", "comer", "estudiar", "pasear a Jack", "dormir", "repetir"]
 for (let i= 0; i < list.length; i++) {
    console.log (list[i]);
 }
console.log ("************************")

 //EJERCICIO DE FOR-OF

 let protectora = ["jakson", "lola", "richie", "luna", "mika", "thor"]
 for (let cachorros of protectora) {
    console.log (cachorros);
 }
console.log ("************************")

//EJERCICIO FOR-IN

const concesionario = {
    nissan: 1,
    opel: 6,
    seat: 2,
    kia: 3,
}

for (let coches in concesionario) {
    console.log (coches);
}
console.log ("---------------")

for (let coches in concesionario)  {
    console.log (`${coches}: ${concesionario[coches]}`);
}
console.log ("---------------")

//EJERCICIO WHILE

let contador = 0
while (contador <=10) {
    console.log ("vuelta:", contador)
    contador ++
}
console.log ("***************")

//PRECIO CON DESCUENTO

function calculateDiscountPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

//el precio del producto es 120€ y el descuento es del 15%
const originalPrice = 322   
const discountPercentage = 15
const finalPrice = calculateDiscountPrice (originalPrice, discountPercentage)

console.log ("El precio original era:", originalPrice, "€")
console.log ("El descuento es del:", discountPercentage,"%")
console.log ("El precio final es:", finalPrice, "€")

document.querySelector (".title").innerHTML = "Calcula el precio de tu producto descontado";
document.querySelector (".subtitle").innerHTML = `
<p class= "subtitle-line">El precio original era:  ${originalPrice} € </p> <br>
<p class= "subtitle-line">El descuento es del:  ${discountPercentage} % </p> <br>
<p class= "subtitle-line">El precio final es:  ${finalPrice} € </p> `;

console.log ("***************")

//CALLBACK

function procesarUsuario (nombre, callback) {
    console.log ("Procesando el nombre...");
    callback (nombre)
}
function saludar (nombre) {
    console.log ("¡Hola, " + nombre + "!");
}
procesarUsuario ("Leda", saludar)

//FUNCIONES DENTRO DE OBJETOS

const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage () {
        console.log ("🔥")
    }
}
rocket.launchMessage()