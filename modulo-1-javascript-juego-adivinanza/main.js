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