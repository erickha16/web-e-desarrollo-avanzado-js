// const planetas = require("./planetas");
import planetas from "./planetas.js";
// console.log(planetas);

//Información de los planetas:
planetas.forEach((planeta) => {
  console.log(`Nombre: ${planeta.nombre}`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log("------------------------------");
});
