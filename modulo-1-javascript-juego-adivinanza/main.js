'use strict';

const numeroSecreto = Math.floor (Math.random () * 10 + 1)
const numeroJugador = parseInt (prompt ("Adivina el número secreto entre el 1 y el 10"))

console.log (`Este es el número con el que estás jugando ${numeroJugador}`)
console.log ('Número secreto:', numeroSecreto)

if (numeroJugador === numeroSecreto) {
    console.log ("Felicidades!! Has acertado el número secreto")
} else if (numeroJugador < numeroSecreto) {
    console.log ("Demasiado bajo, inténtalo de nuevo")
} else {
    console.log ("Esta vez fue demasiado alto, inténtalo otra vez") 
}