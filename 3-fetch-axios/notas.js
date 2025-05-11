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
