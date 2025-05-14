//Relación de tiempo de ejecución y proceso
//Encadenamiento de promesas
//Manejo de errores
//Finally

//¿En cuantos pasos preparo una hamburguesa?
//1. Reunir ingredientes
//2. Cocinar la carne
//3. Calentar el pan
//4. Armar la hamburguesa
//5. Servir la hamburguesa
/* 
let tiendaAbierta = true;

let pedido = (tiempo, proceso) => {
  //Resolve: Se ejecuta cuando la promesa se cumple
  //Reject: Se ejecuta cuando la promesa no se cumple
  return new Promise((resolve, reject) => {
    if (tiendaAbierta) {
      setTimeout(() => {
        resolve(proceso());
      }, tiempo);
    } else {
      reject(console.log("La tienda está cerrada"));
    }
  });
};

//Ejemplos:
pedido(3000, () => console.log("Ingredientes reunidos correctamente"))
  .then(() => {
    return pedido(2000, () => console.log("Hamburguesa en preparación"));
  })
  .then(() => {
    return pedido(3000, () => console.log("La carne está lista"));
  })
  .then(() => {
    return pedido(1000, () => console.log("El pan está caliente"));
  })
  .then(() => {
    return pedido(2000, () => console.log("La hamburguesa está lista"));
  })
  .then(() => {
    return pedido(1000, () => console.log("La hamburguesa está servida"));
  })
  .catch(() => {
    console.log("El cliente se ha ido");
  }); */

// -------------------------- Async/Await -------------------------- //
// Simulando una solicitud asíncrona con promesas
function obtenerDatosDeUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: "Juan" });
      } else {
        reject("Usuario no encontrado");
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
}

// Usando async/await
async function mostrarDatosDeUsuario(id) {
  try {
    const usuario = await obtenerDatosDeUsuario(id); // Espera a que la promesa se resuelva
    console.log(usuario); // Muestra los datos del usuario
  } catch (error) {
    console.log(error); // Maneja el error si la promesa es rechazada
  } finally {
    console.log("Proceso finalizado"); // Este bloque se ejecuta siempre
  }
}

// Uso:
mostrarDatosDeUsuario(1); // Muestra los datos del usuario con id 1
