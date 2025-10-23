// Clase 1 - Calculadora Simple en Consola
// Tema: variables, tipos de datos, operadores basicos (+, -, *, /)
// Pedir datos al usuario
let numero1 = parseFloat(prompt("Ingrese el primer numero:"));
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



