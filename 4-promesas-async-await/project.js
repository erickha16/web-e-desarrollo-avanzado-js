/* 
Problema: Sistema de Reservas para un Restaurante
Imagina que tienes un restaurante y deseas permitir a los clientes hacer reservas en línea. Para ello, el sistema debe hacer las siguientes acciones:

1. Verificar si hay mesas disponibles para el día y la hora solicitados.
2. Si las mesas están disponibles, confirmar la reserva.
3. Si todo está bien, enviar un correo de confirmación.
4. Manejar adecuadamente los errores (si no hay mesas disponibles o si hay un fallo en el envío del correo).


Instrucciones para resolver el problema:
1. Verificar Disponibilidad de Mesas: Completa la función `verificarDisponibilidad(mesasSolicitadas)` para comprobar si el número de mesas solicitadas es menor o igual a las mesas 
    disponibles en el restaurante. Si es así, resuelve la promesa; si no, recházala con un mensaje de error.
2. Simular Envío de Confirmación por Correo: Completa la función `enviarConfirmacionReserva(nombreCliente)` para simular el envío de un correo electrónico de confirmación. 
    Utiliza `Math.random()` para decidir si el correo se envía exitosamente o si ocurre un error.
3. Control de Flujo en la Función Principal: En la función `hacerReserva(nombreCliente, mesasSolicitadas)`, usa `await` para esperar a que se resuelva la promesa de disponibilidad de mesas. 
    Si está disponible, procede a llamar a la función de envío de confirmación. Si ocurre un error en cualquiera de las promesas, maneja el error usando un bloque `catch()`.
4. Probar la solución: Llama a `hacerReserva()` con diferentes valores (ej. un número de mesas menor o igual a las disponibles y otro mayor) para verificar que el sistema maneja correctamente 
    las reservas y los errores.
*/

// Simulando una base de datos de mesas
const mesasDisponibles = 5; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Si hay suficientes mesas disponibles, resuelve la promesa,
      if (mesasSolicitadas <= mesasDisponibles) {
        console.log(`Reserva para ${mesasSolicitadas} mesas confirmada.`);
        resolve(true); // Resuelve la promesa
      }
      //De lo contrario, recházala con un mensaje adecuado.
      else {
        console.log(
          `Lo sentimos, por el momento solo contamos ${mesasDisponibles} mesas disponibles.`
        );
        reject(false); // Rechaza la promesa
      }
    }, 2000); // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula un envío de correo. Usa Math.random() para simular si el correo se envió correctamente o si ocurrió un error.
      const exitoEnvio = Math.random() > 0.2; // 80% de probabilidad de éxito
      if (exitoEnvio) {
        resolve(
          `Mesas confirmadas para ${nombreCliente}. Verififique si la información contenida en este correo es correcta.`
        );
      } else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}.`);
      }
    }, 1500); // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas); // Llama a la función de verificación
    // Si hay mesas disponibles, llama a la función para enviar la confirmación.
    if (disponibilidad) {
      console.log("Enviando correo de confirmación...");
      const confirmacion = await enviarConfirmacionReserva(nombreCliente); // Llama a la función de envío de correo
      console.log(confirmacion); // Muestra el mensaje de confirmación
    }
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
  } catch (error) {
    console.log("Error:", error); // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3); // Intenta hacer una reserva para 3 personas
hacerReserva("Erick Hernández", 2); // Intenta hacer una reserva para 3 personas
hacerReserva("Vianey Díaz", 5); // Intenta hacer una reserva para 3 personas
hacerReserva("Charly Hernáandez", 4); // Intenta hacer una reserva para 3 personas
