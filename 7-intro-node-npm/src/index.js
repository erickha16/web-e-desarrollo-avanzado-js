/* const obj = require("./objetos");
const { character } = require("./objetos"); //Destucturación de objetos

const tareas = require("./tareas");
const { mostrarTitulo, mostrarMensaje } = require("./tareas"); //Destructuración de ofunciones

console.log(tareas.mostrarTitulo());
console.log(tareas.mostrarMensaje());

console.log(obj.character.nombre); */

//Si se esportan directamente de los archivos, se pueden importar directamente:
import { mostrarTitulo, mostrarMensaje } from "./tareas.js";
import { user } from "./objetos.js";

console.log(mostrarTitulo());
console.log(mostrarMensaje());
console.log(user.especialidad);
