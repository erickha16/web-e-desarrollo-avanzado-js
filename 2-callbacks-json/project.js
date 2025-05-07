// -------------------------------------- Proyecto Callbacks and JSON -------------------------------------- \\
/* 
Objetivo
El objetivo es crear una pequeña aplicación de consola que permita realizar las siguientes tareas:
1. Consultar libros: Mostrar todos los libros almacenados en formato JSON.
2. Agregar libros: Permitir al usuario agregar un libro a la colección.
3. Actualizar la disponibilidad: Cambiar el estado de disponibilidad de un libro a 'prestado' o 'disponible'.
4. (Opcional) Simular un archivo JSON: Aunque no vas a leer/escribir realmente en un archivo, 
simularás la lectura y escritura de datos usando callbacks, como si interactuaras con un sistema de almacenamiento.

Problema: Gestión de una Biblioteca de Libros
Imagina que eres parte del equipo de desarrollo de una pequeña biblioteca local que ha decidido construir una aplicación para gestionar su inventario de libros. 
La biblioteca desea almacenar la información sobre los libros, como el título, autor, género y si está disponible o prestado. 
La biblioteca también quiere ofrecer la opción de consultar el inventario de libros, agregar nuevos libros, y actualizar la disponibilidad de los libros cuando son prestados o devueltos. 
Para hacer esto, utilizarás JSON para almacenar los datos de los libros y callbacks para manejar las tareas asincrónicas, como la lectura y escritura de los datos.

Instrucciones para resolver el problema:
1. Crear un objeto JSON: Empezarás con un objeto JSON que contenga una colección de libros. Cada libro tendrá las propiedades `titulo`, `autor`, `genero` y `disponible`.
2. Simular una función para leer datos: Usarás un callback para simular la lectura de un archivo JSON. Esta función tomará el objeto JSON y lo devolverá con un pequeño retraso (simulando una operación de lectura asincrónica).
3. Crear funciones para interactuar con el inventario: Necesitarás funciones que permitan agregar libros, actualizar su disponibilidad y consultar el inventario.
4.(Opcional) Simular escritura en JSON: Similar a la lectura, simula la escritura de datos en un archivo JSON usando un callback. Esto se hará cuando se agregue un nuevo libro o se actualice la disponibilidad de un libro.

*/

// Datos iniciales de libros en formato JSON
let biblioteca = {
  libros: [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      disponible: true,
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      genero: "Distopía",
      disponible: true,
    },
  ],
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
  setTimeout(() => {
    // Aquí simulas leer el JSON con un retraso de 1 segundo
    callback(biblioteca);
  }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
  leerDatos((datos) => {
    console.log("Inventario de libros:");
    datos.libros.forEach((libro, index) => {
      console.log(
        `${index + 1}. ${libro.titulo} - ${libro.autor} (${
          libro.disponible ? "Disponible" : "Prestado"
        })`
      );
    });
  });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
  const nuevoLibro = { titulo, autor, genero, disponible };
  //Escribir el libro en el "archivo" (es decir, agregarlo al objeto)
  setTimeout(() => {
    biblioteca.libros.push(nuevoLibro);
    console.log(`El libro "${titulo}" ha sido agregado a la biblioteca.`);
  }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
  // Simula un retraso antes de actualizar la disponibilidad
  setTimeout(() => {
    // Busca el libro por título y cambia la propiedad 'disponible' por nuevoEstado
    const libro = biblioteca.libros.find((libro) => libro.titulo === titulo);
    if (libro) {
      libro.disponible = nuevoEstado;
      console.log(
        `La disponibilidad de "${titulo}" ha sido actualizada a ${
          nuevoEstado ? "disponible" : "prestado"
        }.`
      );
    } else {
      console.log(`El libro "${titulo}" no se encontró en la biblioteca.`);
    }
  }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);
mostrarLibros();

// Conectamos la interfaz con las funciones del JS
document.getElementById("mostrarBtn").addEventListener("click", function () {
  mostrarLibrosEnUI();
});

document.getElementById("agregarBtn").addEventListener("click", function () {
  document.getElementById("formContainer").style.display = "block";
});

document.getElementById("libroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const genero = document.getElementById("genero").value;
  const disponible = document.getElementById("disponible").checked;

  agregarLibro(titulo, autor, genero, disponible);
  mostrarLibrosEnUI();

  // Limpiar formulario
  this.reset();
  document.getElementById("formContainer").style.display = "none";
});

//----------------------------------------- Función para mostrar libros en la interfaz -----------------------------------------\\
// Función para mostrar los libros en la interfaz de usuario
function mostrarLibrosEnUI() {
  const loading = document.getElementById("loading");
  const librosContainer = document.getElementById("librosContainer");

  // Mostrar el indicador de carga y limpiar el contenedor de libros
  loading.style.display = "block";
  librosContainer.innerHTML = "";

  leerDatos((datos) => {
    loading.style.display = "none";

    if (datos.libros.length === 0) {
      librosContainer.innerHTML =
        '<p class="empty">No hay libros en la biblioteca.</p>';
      return;
    }

    // Mostrar los libros en la interfaz
    datos.libros.forEach((libro, index) => {
      const libroElement = document.createElement("div");
      libroElement.className = `libro ${
        libro.disponible ? "disponible" : "prestado"
      }`;

      libroElement.innerHTML = `
                <h3>${libro.titulo}</h3>
                <p><strong>Autor:</strong> ${libro.autor}</p>
                <p><strong>Género:</strong> ${libro.genero}</p>
                <div class="status">
                    <span class="status-indicator ${
                      libro.disponible ? "disponible" : "prestado"
                    }"></span>
                    ${libro.disponible ? "Disponible" : "Prestado"}
                </div>
                <button class="toggle-btn" data-titulo="${libro.titulo}">
                    ${libro.disponible ? "Prestar" : "Devolver"}
                </button>
            `;

      // Añadir el libro al contenedor
      librosContainer.appendChild(libroElement);
    });

    // Añadir eventos a los botones de cambiar estado
    document.querySelectorAll(".toggle-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const titulo = this.getAttribute("data-titulo");
        const nuevoEstado = !this.textContent.includes("Prestar");
        actualizarDisponibilidad(titulo, nuevoEstado);
        setTimeout(() => mostrarLibrosEnUI(), 1100); // Esperar a que se complete la actualización
      });
    });
  });
}

// Mostrar libros al cargar la página
window.addEventListener("DOMContentLoaded", mostrarLibrosEnUI);
