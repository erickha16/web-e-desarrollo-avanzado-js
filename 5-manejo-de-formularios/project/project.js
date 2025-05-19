// ---------------------------------- Proyecto de Manejo de Formularios ---------------------------------- \\
/* 
Objetivo: Crear un formulario funcional que cubra las siguientes características:
    1. Capturar datos del usuario como nombre, correo electrónico y teléfono.
    2. Seleccionar intereses usando casillas de verificación.
    3. Elegir el horario preferido con botones de radio.
    4. Seleccionar una fecha para el evento.
    5. Subir un archivo opcional (como una identificación).
    6. Validar los datos antes de enviarlos.

Formulario para Registro de Eventos:
Una empresa organiza eventos regularmente y desea digitalizar el registro de asistentes. 
Necesitan un formulario web que permita a los usuarios registrarse ingresando su información personal, seleccionando sus intereses relacionados 
con el evento, eligiendo un horario para asistir y, opcionalmente, subiendo algún documento de identificación. 
Además, el formulario debe validar que los datos estén correctamente ingresados antes de enviarse.
*/

//Creación del formulario
const form = document.getElementById("registroEvento");

// Agregar evento al formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío automático del formulario

  //Guardar imagen
  const archivo = document.getElementById("archivo");

  console.log(archivo);
  console.log(archivo.files[0]);
  console.log(archivo.files[0].name); // Nombre del archivo

  //Obtener los datos del checkbox
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  const intereses = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      intereses.push(checkbox[i].value);
    }
  }

  //Almacenamos los datos en un objeto
  const data = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value,
    intereses: intereses,
    horario: document.querySelector('input[name="horario"]:checked').value,
    fecha: document.getElementById("fecha").value,
    hora: document.getElementById("hora").value,
  };

  console.log(data.nombre); // Nombre del usuario
  console.log(data.correo); // Correo electrónico del usuario
  console.log(data.telefono); // Teléfono del usuario
  console.log(data.intereses);
  console.log(data.horario); // Horario seleccionado
  console.log(data.fecha); // Fecha seleccionada
  console.log(data.hora); // Hora seleccionada

  // Expresión regular para validar el nombre
  // Permite letras, espacios, apóstrofes, guiones y caracteres acentuados
  // Las expreisiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas de texto.
  // En este caso, la expresión regular se utiliza para validar que el nombre ingresado contenga solo letras, espacios, apóstrofes, guiones y caracteres acentuados.
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;

  //destructuring del objeto data
  const { nombre, correo, telefono } = data;

  if (!nombre || !regex.test(nombre.trim())) {
    alert("Por favor, diligencia el campo de nombre.");
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Por favor, introduce un correo electrónico válido.");
    return;
  }

  if (!telefono || !telefono.length == 10) {
    alert("Por favor, introduce un número de teléfono válido.");
    return;
  }

  // Si todo está bien
  alert("Registro exitoso. ¡Gracias por registrarte!");

  //Enviar los datos al servidor
  /* 
  fetch('https://api.ejemplo.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log('Datos enviados:', data))
        .catch(error => console.error('Error:', error)); 
        
  */

  form.reset(); // Reinicia el formulario después de enviar
});

/* document
  .getElementById("registroEvento")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático del formulario
    // Variables
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const intereses = document.querySelectorAll(
      'input[name="intereses"]:checked'
    );
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Si todo está bien
    alert("Registro exitoso. ¡Gracias por registrarte!");
  });
 */
