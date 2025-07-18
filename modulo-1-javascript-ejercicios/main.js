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
const originalPrice = 415   
const discountPercentage = 20
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

const fictionCharacter = {
    name: "Tío Ben",
    messageWithTraditionalFunction: function (message)  {
        console.log (`${this.name} dice: ${message}`)
        },
    messageWithArrowFunction: (message) => {
        console.log (`${this.name} dice: ${message}`);
    }
    }
fictionCharacter.messageWithTraditionalFunction ("Un gran poder implica una gran responsabilidad")
//fitionCharacter.messageWithArrowFunction ("Un gran poder conlleva una gran responsabilidad")   lo comento para que no salga el error de undefined

const fruits = Array ("fresones", "manzana", "plátano", "naranaja", "pera")
console.log (fruits)

console.log ("Ejercicio 4 de Adalab: LA CESTA DE PERAS")
//EJERCICIO DE ADALAB-MÓDULO 2-LECCIÓN OBJETOS: EJERCICIO 4
const pearsBasket = {
    max: 10,
    min: 0,
    numberOfPears: 3,
    defaultPears: 0,
    addPears: () => {
        if (pearsBasket.numberOfPears < pearsBasket.max) {
        pearsBasket.numberOfPears ++
        }
    },
    decreasePears: () => {
        if (pearsBasket.numberOfPears > pearsBasket.min) {
        pearsBasket.numberOfPears --
        }
    },
    resetPears: () => {
        pearsBasket.numberOfPears = pearsBasket.defaultPears;
    },
};

const addButton = document.querySelector (".add")
const deleteButton = document.querySelector (".delete")
const resetButton = document.querySelector (".reset")
const pearsText = document.querySelector (".pears")

pearsText.innerHTML = pearsBasket.numberOfPears + " peras"; //para que ponga el número inicial de peras antes de comenzar la lógica

addButton.addEventListener ("click", () => {
    pearsBasket.addPears();
    pearsText.innerHTML = pearsBasket.numberOfPears + " peras";
    console.log (pearsBasket.numberOfPears);
});

deleteButton.addEventListener ("click", () => {
    pearsBasket.decreasePears();
    pearsText.innerHTML = pearsBasket.numberOfPears + " peras";
    console.log (pearsBasket.numberOfPears);
});

resetButton.addEventListener ("click", () => {
    pearsBasket.resetPears();
    pearsText.innerHTML = pearsBasket.numberOfPears + " peras";
    console.log (pearsBasket.numberOfPears)
});

console.log ("**********************")

const frutas = ["manzana", "melón", "sandía"]
console.log ("Primer array de frutas:", frutas);

frutas.push("piña")
console.log ("Añadiendo piña con push:", frutas);

const newFrutas = frutas.concat (["albaricoque", "uvas", "arándanos"])
console.log ("Concatenando arrays:", newFrutas)

const isArray = Array.isArray (frutas)
console.log (isArray);

console.log (frutas.length)

const countries = ["España", "Francia", "Italia"]
console.log ("Primeros países:", countries)
countries.push ("Grecia", "Alemania")
console.log ("Añadiendo dos:", countries)

countries.pop()
console.log ("Eliminando el último país con pop: ", countries)

countries.push ("Alemania")
console.log(countries)
countries.shift()
console.log (countries)

countries.unshift("España","Argentina","Méjico")
console.log (countries)

countries.splice(1,2,"Holanda")
console.log ("Utilizando splice para a partir del índice 1 -Argentina-, borrar dos elementos y añadir Holanda",countries)

const numbers = [1,2,3,4,5]
const squaredNumbers = numbers.map(num => num*num)
console.log (numbers)
console.log (squaredNumbers)

console.log ("EJERCICIO DE: forEach *******************************")

const newNumber = [1,2,3,4,5,6]
let sum = 0
newNumber.forEach(num => {
    sum += num
});
console.log ("Números que había en el array: ",newNumber)
console.log ("Resultado de la suma de array: ", sum)

console.log ("EJERCICIO FILTER", "extraer números pares del array, par en inglés es even")

const filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = filterNumbers.filter(number => number % 2 === 0)
console.log (filterNumbers)
console.log (evenNumbers)

console.log ("Ejemplo con el método reduce **************")

const cars = ["seat", "fiat", "peugeot", "seat", "opel", "opel", "nissan", "fiat", "seat", "seat"]
const carsFrecuency = cars.reduce ((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue]= 1;
            }
    return accumulator;
    }, {})
console.log (cars)
console.log (carsFrecuency)
const multiplesOf5 = [5,10,15,20,25]
const firstNumberGreaterThan10 = multiplesOf5.find (number => number >10)
console.log (multiplesOf5)
console.log (firstNumberGreaterThan10)

console.log ("find e findIndex")
const randomNumber = [6, 14, 27, 56, 60, 42]
const indexNumber = randomNumber.findIndex (number => number >50)

console.log (randomNumber)
console.log ("Estas son las posiciones del primer elemento del array mayor de 50: ", indexNumber)

console.log ("Ejemplo slice")
const animals =["ant", "bison", "camel", "duck", "elephant"]
console.log (animals.slice(2))
console.log (animals.slice(-2))

console.log ("Ejemplo spread operator")
const originalArray = [1,2,3,4,5]
const copyAnArray = [...originalArray]
console.log (originalArray)
console.log (copyAnArray)

const array1 = ["perro", "gato", "ratón"]
const array2 = ["loro", "conejito", "tortuga"]
const combinedArray = [...array1,...array2]
console.log (combinedArray)

const menArray = ["Juan", "Antonio", "Lucas"]
const arrayWithWomen = [...menArray, "Soraya", "Beatriz", "Marta", "Arantxa"]
console.log (menArray)
console.log (arrayWithWomen)

function sum2(a, b, c) {
    return a+b+c
}
sum2 (1,2,3)
const result = sum2 (1,2,3)
console.log (result)

console.log ("****************")
console.log ("OBJETOS")

const persona = {
    nombre: "Tania S. Sainz de Aja",
    edad: 41,
    direccion: {
        calle: "la Almazara, 10",
        poblacion: "Pedrezuela"
    },
    genero: "mujer"
};
console.log (persona)
console.log ("Añadimos propiedades y función saludo")
persona.email = "tssainzdeaja@gmail.com";
persona.saludar = () => console.log (`Hola, me llamo ${persona.nombre}`);
persona.saludar ();

persona.despedida = () => console.log ("Hasta luego, firmado: " + persona.nombre);
persona.despedida();
console.log ("Borramos propiedades y funciones: email y despedida")
delete persona.email;
delete persona.despedida;

console.log ("FUNCIÓN CONSTRUCTORA Y CREACIÓN DE INSTANCIAS")

function Persona (Nombre, Apellido, Edad, Teléfono) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Edad = Edad;
    this.Teléfono = Teléfono;
};

console.log (Persona);
const persona1 = new Persona ("Juan", "Pérez", 30);
console.log (persona1);
const persona2 = new Persona ("Diego", "García", 42);
console.log (persona2);

console.log ("añadir una propiedad a una instancia en particular - persona1 Nacionalidad: Argentino");
persona1.Nacionalidad = "Argentino";

console.log ("Añadir nueva propiedad a la función constructora a partir del prototype. este teléfono se quedará como por default sin que se pueda modificar en ninguna instancia")
Persona.prototype.teléfono = "91 843 35 97"; //este teléfono se quedará como por default sin que se pueda modificar en ninguna instancia
console.log (Persona);
const persona3 = new Persona ("Laura", "Martín", 46, "633 584 209"); //para añadir la propiedad teléfono, lo hemos tenido que hacer en la declaración de la función constructora.
console.log (persona3);

Persona.prototype.saludar = function () {
    console.log (`Hola me llamo ${this.Nombre} ${this.Apellido}`);
}
persona1.saludar();
persona3.saludar();  

console.log ("*******************OBJETOS CREADOS CON CLASES*******************");
class Coche {
    constructor (marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    oferta () {
        console.log (`La oferta del mes: ${this.marca} ${this.modelo} por sólo ${this.precio}€`);
    }
};

console.log (Coche);
const coche1 = new Coche ("Seat", "León", "12.300");
coche1.oferta ();
console.log (coche1);

Coche.prototype.saludar = function () {                 //como voy a usar this. en la función, tengo que usar function en lugar de arrow
    console.log (`Hola soy un ${this.marca} ${this.modelo}`);}

coche1.saludar ();

console.log ("***********HERENCIA EN JAVASCRIPT***************");

class Animal {                              // clase constructora (clase madre)
    constructor (nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido =  () => {
        console.log ("El animal emite un sonido")
    };
};
class Perro extends Animal {                    // otra clase constructora extendida de la madre
    constructor (nombre, tipo, raza) {
        super (nombre, tipo);
        this.raza = raza;
    }
    emitirSonido =  () => {                 //mientras no tenga que usar this. puedo usar funciones arrow
        console.log ("Los perros ladran");
    }
    correr = function () {
        console.log (`${this.nombre} corre alegre`);
    }
};

const perro1 = new Perro ("Toby", "perro", "podenco");
const animal1 = new Animal ("Zape", "gato");

perro1.emitirSonido();
animal1.emitirSonido();
perro1.correr();
console.log (perro1)

Perro.prototype.segundoMetodo = (Nombre) => {
    console.log ("Esto es un segundo método de un perro ladrando");
};

perro1.segundoMetodo ();
console.log (animal1);

const perro2 = new Perro ("Tango", "perro", "golden, dálmata y pitt");
perro2.segundoMetodo ();

Animal.prototype.cuidaLaNaturaleza = () => {
    console.log ("La naturaleza es nuestra madre, debemos cuidarla");
};
perro2.cuidaLaNaturaleza();
animal1.cuidaLaNaturaleza();

class Empleados {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    };
    saludando = function () {
        console.log (`${this.nombre} ${this.apellido} te saluda`);
    };
};

const empleado1 = new Empleados ("Miguel", "Pérez");
const empleado2 = new Empleados ("Lucía", "Vergara");

empleado1.saludando ();
empleado2.saludando();

//RETO VALIDACIÓN DE USUARIO EN UNA RED SOCIAL . LO COMENTO ENTERO PARA QUE LA PÁGINA DE EJERCICIOS Y EJEMPLOS SIGA FUNCIONANDO
//1º creo las bases de datos:

const userDatabase = [
    {username: "carol", password:"123",},
    {usarname:"andrés", password:"456",},
    {username:"Marina", password:"789",},
];
const userTimeline = [
    {username: "Estefany", timeline:"Me encanta JavaScript"},
    {username: "Oscar", timeline:"Developer es lo mejor"},
    {username: "Marina", timeline:"Me gusta más el té que el café"},
    {username: "Andrés", timeline:"Hoy no me apetece trabajar"},
];

//2º Creo los prompt para que el navegador pida usuario y contraseña al cliente y lo guardo en sus variables correspondientes:

const username = prompt ("¿Cuál es tu usuario?");           
const password = prompt ("¿Cuál es tu contraseña?");


// 3º Creo una función arrow para que me haga la validación


const usuarioExistente = (username, password) => {
    for (let i = 0; i < userDatabase.length; i++){
        if (
            userDatabase[i].username === username &&
            userDatabase[i].password === password
                ){
                    return true;
                    break;
                }
                else {
                   return false;
            };
    };
};

const signIn = (username, password) => {
    if (usuarioExistente (username, password)) {
        alert ("Qué alegría verte " + username);
        console.log (userTimeline);
    } else {
        alert ("Oh vaya, ¡aún no te has registrado! o ¿es que te has equivocado de usuario o contraseña?");
    }
}
signIn (username, password);
