//Uso de fetch para obtener datos de una API de Star Wars
/* fetch("https://www.swapi.tech/api/planets/1/")
  .then((res) => res.json())
  .then((data) => console.log(data.result.properties.name))
  .catch((err) => console.error(err));
 */
/* fetch("https://www.swapi.tech/api/planets/1/")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
 */

/* fetch("https://www.swapi.tech/api")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err)); */

//Devuelte:
//   result: {
//     films: 'https://www.swapi.tech/api/films',
//     people: 'https://www.swapi.tech/api/people',
//     planets: 'https://www.swapi.tech/api/planets',
//     species: 'https://www.swapi.tech/api/species',
//     starships: 'https://www.swapi.tech/api/starships',
//     vehicles: 'https://www.swapi.tech/api/vehicles'
//   },

fetch("https://www.swapi.tech/api/people")
  .then((respuesta) => {
    // Comprobamos si la respuesta es correcta
    // Si no lo es, lanzamos un error
    // Si lo es, devolvemos el JSON
    if (!respuesta.ok) {
      throw new Error(`Error HTTP Status: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then((data) => console.log(data.results))
  .catch((err) => console.error(err));

//Ejemplo de uso de fetch para obtener datos de una API de Rick and Morty
/* fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP Status: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then((data) => console.log(data.results[0].name))
  .catch((error) => console.error("El error es: ", error)); */
