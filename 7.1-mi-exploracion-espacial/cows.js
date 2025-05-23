import cowsay from "cowsay";
import planetas from "./planetas.js";

//Lets talk about Tatooine
console.log("Cómo es Tatooine?");
let tatooine = planetas.find((planeta) => planeta.nombre === "Tattoine");
console.log(
  cowsay.say({
    text: "Tatooine es " + tatooine.descripcion,
    e: "oO",
    T: "U ",
  })
);

//Endor
console.log("Y has visitado Endor?");
let endor = planetas.find((planeta) => planeta.nombre === "Endor");
console.log(
  cowsay.say({
    text: "Claro! Endor es " + endor.descripcion,
    e: "oO",
    T: "U ",
  })
);
