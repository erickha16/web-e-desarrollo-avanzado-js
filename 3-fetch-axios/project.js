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
// -------------------------------------------- Proyecto Fetch y Axios -------------------------------------------- \\

// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");
const loading = document.getElementById("loading");

// Mostrar/ocultar loading
function showLoading() {
  loading.classList.add("active");
  dataContainer.innerHTML = "";
}

function hideLoading() {
  loading.classList.remove("active");
}

fetchBtn.addEventListener("click", () => {
  showLoading();

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      hideLoading();
      renderCharacters(data.results, "Rick and Morty");
    })
    .catch((error) => {
      hideLoading();
      console.error("Error:", error);
      dataContainer.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Hubo un error al obtener los datos de Rick and Morty</p>
                </div>
            `;
    });
});

// Implementa las Solicitudes con Axios
axiosBtn.addEventListener("click", () => {
  showLoading();

  axios
    .get("https://www.swapi.tech/api/people")
    .then((response) => {
      hideLoading();
      // La API de Star Wars tiene una estructura diferente
      const characters = response.data.results.map((char) => ({
        name: char.name,
      }));
      renderCharacters(characters, "Star Wars");
    })
    .catch((error) => {
      hideLoading();
      console.error("Error:", error);
      dataContainer.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Hubo un error al obtener los datos de Star Wars</p>
                </div>
            `;
    });
});

// Función de renderizado mejorada
function renderCharacters(characters, source) {
  dataContainer.innerHTML = "";

  if (!characters || characters.length === 0) {
    dataContainer.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-info-circle"></i>
                <p>No se encontraron personajes</p>
            </div>
        `;
    return;
  }

  characters.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.className = "character-card";
    characterElement.innerHTML = `
            <div class="character-header">
                <h3>${character.name}</h3>
                <span class="badge ${
                  source === "Rick and Morty" ? "rick" : "starwars"
                }">
                    ${source}
                </span>
            </div>
            <img src="${character.image}" alt="${
      character.name
    }" onerror="this.src='https://via.placeholder.com/300x250?text=Imagen+no+disponible'">
        `;
    dataContainer.appendChild(characterElement);
  });

  // Animación de aparición
  const cards = document.querySelectorAll(".character-card");
  cards.forEach((card, index) => {
    card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
    card.style.opacity = "0";
  });
}
