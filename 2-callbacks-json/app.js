function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}!`);
  callback();
}

function despedirse() {
  console.log("Adios!");
}

saludar("María", despedirse);

// Salida:

// Hola, María!

// Adios!

//Cuando se necesita realizar varias tareas asincrónicas en secuencia, los callbacks pueden llevar a un código difícil de leer y mantener, conocido como "callback hell".
//Ejemplo de callback hell:
/* 
setTimeout(() => {
    console.log('Primera tarea completada');
    setTimeout(() => {
        console.log('Segunda tarea completada');
        setTimeout(() => {
            console.log('Tercera tarea completada');
        }, 1000);
    }, 1000);
}, 1000);
*/

//Aunque funcional, este código es complicado de seguir. Afortunadamente, existen soluciones como las Promesas y async/await, pero los callbacks siguen siendo la base.
//Solución con promise:
/* 
function tarea(ms, mensaje) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mensaje);
      resolve(); //Indica que la tarea ha terminado
    }, ms);
  });
}

tarea(1000, "Primera tarea completada")
  .then(() => tarea(1000, "Segunda tarea completada"))
  .then(() => tarea(1000, "Tercera tarea completada")); */

//Convertir un JSON a un objeto de JavaScript:
/* const jsonData = '{"nombre": "Juan", "edad": 30, "esEstudiante": true}';
const objeto = JSON.parse(jsonData);
console.log(objeto.nombre); // Juan */

//Localstorage: Almacena datos en el navegador. Los datos persisten incluso después de cerrar la pestaña o el navegador. Ideal para almacenar configuraciones o preferencias del usuario.
//Ejemplo:
const usuario = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true,
};
//Registra los datos en el localstorage:
localStorage.setItem("usuario", JSON.stringify(usuario));
