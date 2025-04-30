//Ejemplo de funcionamiento del call stack
/* function multiplicar(a, b) {
  return a * b;
}

function mostrarCuadrado(x) {
  let r = multiplicar(x, x);
  console.log(`El cuadrado de ${x} es ${r}`);
}

mostrarCuadrado(5); */

//Fetch API
fetch("https://rickandmortyapi.com/api/character/?page=19")
  .then((response) => response.json())
  .then((json) => console.log(json));
