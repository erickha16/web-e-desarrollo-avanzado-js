//------------------------ Fetch -------------------------- \\
//ejemplo sencillo de fetch
/* fetch('https://api.example.com/data')

  .then(response => response.json())

  .then(data => console.log(data))

  .catch(error => console.error('Error:', error)); */

//   Características principales de Fetch
/* 1. Devuelve Promesas
fetch devuelve una promesa que se resuelve cuando la solicitud completa su curso. Esto hace que sea ideal para manejar operaciones asíncronas.  */

fetch("https://api.example.com")
  .then((response) => console.log("Solicitud exitosa"))

  .catch((error) => console.error("Hubo un problema:", error));

// 2. Soporte para diferentes tipos de solicitudes
// Con fetch, puedes realizar solicitudes GET, POST, PUT, DELETE, entre otras. Esto lo hace versátil para interactuar con APIs RESTful.

/* fetch('https://api.example.com/addData', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nombre: 'Juan', edad: 30 })
})
  .then(response => response.json())
  .then(data => console.log('Data enviada:', data))
  .catch(error => console.error('Error:', error)); */
// En este ejemplo, se envían datos al servidor mediante una solicitud POST.

// 3. Manejo de Errores
// Aunque fetch es poderoso, no lanza errores automáticamente si la respuesta tiene un código de estado como 404 o 500. Es importante verificar manualmente el estado de la respuesta.

/* fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error en la solicitud:', error)); */

// ------------------------- Axios -------------------------- \\
//Puedes instalar Axios en un proyecto con Node.js o incluirlo en el navegador mediante una CDN.
/*   
Instalación con npm: npm install axios
Uso con una CDN: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> 
*/

//SOLICITUDES CON AXIOS
//Solicitud GET
/* axios.get('https://api.example.com/users')
    .then(response => console.log(response.data))
    .catch(error => console.error(error)); */

//Solicitud POST
/* axios.post('https://api.example.com/users', {
    name: 'John Doe',
    email: 'john.doe@example.com'
})
.then(response => console.log(response.data))
.catch(error => console.error(error)); */

//Configuración Avanzada
// Una de las mayores fortalezas de Axios es su capacidad de configuración avanzada. Puedes establecer configuraciones globales o personalizadas por solicitud.
/* 
Ejemplo de configuración global:
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';


Estableciendo un tiempo de espera:
axios.get('https://api.example.com/data', { timeout: 5000 })
    .then(response => console.log(response.data))
    .catch(error => console.error('Timeout:', error));

*/

// Ejemplo de manejo de errores:
/* axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response) {
            console.error('Error del servidor:', error.response.status);
        } else if (error.request) {
            console.error('No hubo respuesta del servidor:', error.request);
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
    }); */

// -------------------------------------------- Proyecto Fetch y Axios -------------------------------------------- \\
/* 
Problema: Consumo de APIs con Fetch y Axios
En este proyecto, crearás una aplicación web sencilla que permita obtener información de personajes de una API de tu elección 
(como la de Star Wars o Rick & Morty). 
La aplicación deberá mostrar los datos obtenidos en la interfaz de usuario y ofrecerá dos botones para realizar las mismas solicitudes, 
uno utilizando `fetch` y otro utilizando `axios`. Esto te permitirá comparar el uso de ambas herramientas.

Instrucciones para resolver el problema:
1. Crea un proyecto nuevo con un archivo HTML y un archivo JavaScript.
2. Enlaza el archivo JavaScript al HTML y configura un entorno básico con un contenedor para los datos y dos botones.
4. Selecciona una API pública (por ejemplo, la API de Rick & Morty: https://rickandmortyapi.com/). 
Familiarízate con las rutas que usarás, como `/character` para obtener una lista de personajes. 
(consulta la documentación en: https://rickandmortyapi.com/documentation/#get-all-characters).
5. Escribe una función que utilice `fetch` para obtener los datos de la API y los muestre en el `div` con id `data-container`.
6. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.
7. Crea una función para mostrar los personajes en el contenedor `data-container`.
8. Por ejemplo, podrías mostrar el nombre y la imagen de cada personaje.
*/

/* // Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById("fetch-btn");
const dataContainer = document.getElementById("data-container");

fetchBtn.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      //Renderizar datos en el contenedor usando `data.results` para iterar sobre los personajes obtenidos.
      renderCharacters(data.results);
    })
    .catch((error) => {
      console.error("Error:", error);
      dataContainer.textContent = "Hubo un error al obtener los datos.";
    });
});

// Implementa las Solicitudes con Axios

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById("axios-btn");

axiosBtn.addEventListener("click", () => {
  axios
    .get("https://www.swapi.tech/api/people")
    .then((response) => {
      const data = response.data;
      // Renderizar datos en el contenedor
      renderCharacters(data.results);
    })
    .catch((error) => {
      console.error("Error:", error);
      dataContainer.textContent = "Hubo un error al obtener los datos.";
    });
});

// Función de renderizado:
function renderCharacters(characters) {
  dataContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
    `;
    dataContainer.appendChild(characterElement);
  });
}
 */
