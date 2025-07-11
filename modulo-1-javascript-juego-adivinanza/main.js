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

let expr = "plátanos"

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
        console.log (`Lo sentimos, el producto ${expr} está agotado`);2
}
