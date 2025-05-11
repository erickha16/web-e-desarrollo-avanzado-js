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

// Implementa las Solicitudes con Fetch
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
