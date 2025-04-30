// --------------------------------------------------------- Event Loop --------------------------------------------------- \\
/* 
El Event Loop es el mecanismo que permite a JavaScript realizar operaciones no bloqueantes a pesar de ser un lenguaje de programación de un solo hilo. 
Esto significa que aunque JavaScript solo puede ejecutar una tarea a la vez, puede manejar múltiples operaciones asincrónicas de manera eficiente al delegar 
ciertas tareas al navegador o al entorno de ejecución (como Node.js).

¿Cómo funciona?
 - El Call Stack es una estructura de datos que sigue el principio de “último en entrar, primero en salir” (LIFO). Ahí se almacenan las funciones que se están ejecutando.
 - Las operaciones asincrónicas (como setTimeout o peticiones HTTP) son delegadas a APIs externas.
 - Una vez completadas, las tareas asincrónicas colocan su resultado en la Task Queue (cola de tareas).
 - El Event Loop revisa constantemente si el Call Stack está vacío y, de ser así, mueve las tareas pendientes de la Task Queue al Call Stack para ejecutarlas.
*/
//Ejemplo:
console.log("Inicio");

setTimeout(() => {
  console.log("Tarea asincrónica completada");
}, 2000);

console.log("Fin");

// Salida:
/* 
Inicio
Fin
Tarea asincrónica completada
*/

// --------------------------------------------------------- Asincronicidad en JavaScript --------------------------------------------------- \\
/*
La asincronicidad se refiere a la capacidad de ejecutar tareas que pueden completarse en un futuro sin detener el flujo del programa principal. 
Esto es crucial en JavaScript para manejar eventos como clicks, peticiones HTTP y temporizadores.

*/

// Mecanismos comunes:
//1. Callbacks: Son funciones que se pasan como argumento a otras funciones y se ejecutan después de que una tarea se completa.
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

saludar("María", () => {
  console.log("Callback ejecutado.");
});

//2. Promesas: Son objetos que representan el resultado eventual de una operación asíncrona. Pueden estar en uno de tres estados: pendiente, cumplida o rechazada.
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa cumplida"), 1000);
});

promesa.then((resultado) => console.log(resultado));

//3. Async/Await: Es una sintaxis que permite escribir código asíncrono de manera más legible,
// utilizando funciones asíncronas y la palabra clave await para esperar el resultado de una promesa.
async function obtenerDatos() {
  const respuesta = await fetch("https://api.example.com/data");
  const datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();
