// Clase 1 - Calculadora Simple en Consola
// Tema: variables, tipos de datos, operadores basicos (+, -, *, /)
// Pedir datos al usuario
/*let numero1 = parseFloat(prompt("Ingrese el primer numero:"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
let operacion = prompt("Ingrese la operacion a realizar (+, -, *, /):");

let resultado;

// Estructura condicional
if (operacion === "+") {
        resultado = numero1 + numero2;
} else if (operacion === "-") {
        resultado = numero1 - numero2;
} else if (operacion === "*") {
        resultado = numero1 * numero2;
} else if (operacion === "/") {
        resultado = numero1 / numero2 || "Error: division por cero";
} else {
        resultado = "Operacion no valida";
}

// Mostrar resultado
console.log(`Resultado: ${resultado}`);
// Ejercicio adicional: agrega validaciones para que el usuario solo ingrese numeros.


/////////////////////////////////////////////////////////////////////*
///Clase 2 - Juego Adivina el Numero
// Tema: Bucles, condicionales, generacion de numeros aleatorios
const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Numero entre 1 y 10

let intentos = 3;
let adivinado = false;

while (intentos > 0 && !adivinado) {
        let numero = parseInt(prompt(`Adivina el numero (1-10). Te quedan ${intentos} intentos:`));
        if (numero === numeroSecreto) {
                console.log("Adivinaste el numero!");
                adivinado = true;
        } else if (numero < numeroSecreto) {
                console.log("El numero secreto es menor.");
        } else if (numero > numeroSecreto) {
                console.log("El numero es mayor .");
        }
        intentos--;
}       
if (!adivinado) {
        console.log(`Perdiste! El numero secreto era ${numeroSecreto}.`);
}
*/
//Desafio: permite que el usuario elija el rango de numeros////////////////////////////////////////////////////////////////////
//*Clase 3 - Generador de Tablas de Multiplicar
//Tema: bucles (for,while), arrays, for....of
/*
let numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar:"));
let limite = parseInt(prompt("Hasta que numero quieres multiplicar??"));

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= limite; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
}*/

//Desafio: guarda los resultados en un array y muestralos con un for ... of

/////////////////////////////////////////////////////////
//Clase 4 - Conversor de Temperaturas(ºC a ºF y viceversa)
//Temas: funciones(declarativas, expresivas, flecha), alcance de variables.

//Conversor de temperaturas
//Funcion declarativa
/*
function celsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
}
//Funcion flecha
const fahrenheitACelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5/9;
}

//Programa principal
let opcion = prompt("Elige la conversion: 1) Celsius a Fahrenheit 2) Fahrenheit a Celsius");

if (opcion === "1") {
        let celsius = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
        let fahrenheit = celsiusAFahrenheit(celsius);
        console.log(`${celsius}ºC son ${fahrenheit.toFixed(2)}ºF`);
} else if (opcion === "2") {
        let fahrenheit = parseFloat(prompt("Ingresa la temperatura en Fahrenheit:"));
        let celsius = fahrenheitACelsius(fahrenheit);
        console.log(`${fahrenheit}ºF son ${celsius.toFixed(2)}ºC`);
} else {
        console.log("Opcion no valida.");
}       // Fin del programa
*/
//Desafio: agrega una tercera opcion que permita convertir Kelvin a Celsius y viceversa.

//Clase 5 - Lista de compras con Totales

//Temas: arrays, metodos .map(),, .filter(), .reduce(), .forEach(), .find()

//Lista de compras con totales
/*
let listaDeCompras = [
{nombre: "Leche", precio: 1200, cantidad: 2},
{nombre: "Pan", precio: 800, cantidad: 1},
{nombre: "Huevos", precio: 2500, cantidad: 1},
{ nombre: "Cafe", precio: 3200, cantidad: 1 }
];
//Mostrar lista con forEach
console.log("Lista de Compras:");
listaDeCompras.forEach((item) => {
        console.log(`${item.cantidad} x ${item.nombre} - $${item.precio}`);
});

//Calcular el total usando reduce
const total = listaDeCompras.reduce((acum,item) => acum + item.precio * item.cantidad, 0);
console.log(`Total a pagar: $${total}`);


//Filtrar productos caros
const productosCaros = listaDeCompras.filter((item) => item.precio > 1000);
console.log("Productos con precio mayor a $1000:", productosCaros);

//Buscar un producto
const buscar = prompt("Ingrese el nombre del producto a buscar:");
const encontrado = listaDeCompras.find((item) => item.nombre.toLowerCase() === buscar.toLowerCase());
if (encontrado) {
        console.log(`Producto encontrado: ${encontrado.cantidad} x ${encontrado.nombre} - $${encontrado.precio}`);
} else {
        console.log("Producto no encontrado.");
}
*/
//Desafio: permite al usuario agregar o eliminar productos de la lista dinamicamente usando push() y splice().

//Clase 6 - Agenda de Contactos Basica
//Temas: objetos, propiedades, metodos, desectructuracion, JSON
//Agenda de contactos basica
/*
let agenda = [];
//Funcion para agregar contactos
function agregarContacto(nombre, telefono, email) {
        const contacto = {nombre, telefono, email};
        agenda.push(contacto);
        console.log(`Contacto agregado: ${nombre}`);

}
//Funcion para mostrar todos los contactos
function mostrarAgenda() {
        console.log("Lista de contactos:");
        agenda.forEach(({nombre, telefono, email}, i ) => {
                console.log(`${i + 1}. ${nombre} - Tel: ${telefono}, Email: ${email}`);
        });
}

//Funcion para buscar contacto
function buscarContacto(nombre){
        const contacto = agenda.find((c) => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (contacto) {
                console.log(`Contacto encontrado: ${contacto.nombre} - Tel: ${contacto.telefono}, Email: ${contacto.email}`);
        } else {
                console.log("Contacto no encontrado.");
        }
}


//Funcion para exportar agenda a JSON
function exportarAgenda() {
        const json = JSON.stringify(agenda, null, 2);
        console.log("Agenda en formato JSON:\n", json);
}

//Programa principal
agregarContacto("Ana", "123-456-7890", "ana@example.com");
agregarContacto("Luis", "987-654-3210", "luis@example.com");
agregarContacto("Maria", "555-666-7777", "maria@example.com");
mostrarAgenda();
buscarContacto("Luis");
exportarAgenda();
*/
//Desafio:
//Agrega una funcion para eliminar contactos por nombre
//Guarda y carga los datos dese localStorage para que persistan entre sesiones.

/////////////////////////////////////////////////////////////Guardar Agenda en LocalStorage
//AGENDA CON LOCALSTORAGE
/*
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];
//Guardar cambios en LocalStorage
function guardarAgenda() {
        localStorage.setItem("agenda", JSON.stringify(agenda));
}

//Agregar contacto
function agregarContacto(nombre, telefono, email) {
        const contacto = {nombre, telefono, email};
        agenda.push(contacto);
        console.log(`Contacto agregado: ${nombre}`);
        guardarAgenda();//Se guarda automaticamente
        console.log(`Contacto agregado: ${nombre}`);
}

//Mostrar contactos
function mostrarAgenda() {
        console.log("Agenda de contactos:");
        agenda.forEach(({nombre, telefono, email}, i ) => {
                console.log(`${i + 1}. ${nombre} - Tel: ${telefono}, Email: ${email}`);
        });
}

//Buscar contacto
function buscarContacto(nombre){
        const contacto = agenda.find((c) => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (contacto) {
                console.log(`Contacto encontrado: ${contacto.nombre} - Tel: ${contacto.telefono}, Email: ${contacto.email}`);
        } else {
                console.log("Contacto no encontrado.");
        }
}

//Eliminar contacto
function eliminarContacto(nombre) {
        agenda = agenda.filter((c) => c.nombre.toLowerCase() !== nombre.toLowerCase());
        console.log(`Contacto eliminado: ${nombre}`);
        guardarAgenda();//Se guarda automaticamente
        console.log(`Contacto eliminado: ${nombre}`);
}

//Ejemplo de uso
agregarContacto("Carlos", "111-222-3333", "carlos@example.com");
agregarContacto("Rosa", "444-555-6666", "rosa@example.com");
agregarContacto("Elena", "777-888-9999", "elena@example.com");
mostrarAgenda();
*/
/*
//Clase 7 - Reloj Digital Dinamico

//Temas: document.querySelector, getElementbyid, innerHTML, style.

function actualizarReloj() {
        const ahora = new Date();
        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');

        const reloj = document.getElementById("reloj");
        reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llamada inicial para mostrar el reloj inmediatamente

//Desafio: cambia el color del reloj dependiendo de la hora del dia
*/

//Clase 8 - Calculadora con Interfaz Grafica

const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".button");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "=") {
      try {
        pantalla.value = eval(pantalla.value);
      } catch {
        pantalla.value = "Error";
      }
    } else {
      pantalla.value += valor;
    }
  });
});
