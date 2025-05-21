import z from "https://cdn.jsdelivr.net/npm/zod@3.25.11/+esm"; //Requiere el atributo type="module" en el script del HTML

/* //Crear el esquema de validación
const nombreSchema = z.string();

//Pasar la información a validar
const userName = "Javier";
// const userName = 3030;

//Validar la información
const msj = nombreSchema.parse(userName); // Si no hay error, la validación ha sido correcta
console.log(msj);
 */

//---------------------------------- Esquema basado en un objeto ----------------------------------//
/* //1. Crear el esquema de validación
const userSchema = z.object({
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  email: z.string().email({ message: "El email no es válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  // phone: z.string().regex(/^\d{9}$/, { message: "El teléfono debe tener 9 dígitos" }),
  phone: z
    .number()
    .min(100000000, { message: "El teléfono debe tener 9 dígitos" })
    .max(999999999, { message: "El teléfono debe tener 9 dígitos" })
    .int()
    .positive({ message: "El teléfono no puede ser negativo" }),
});

//2. Pasar la información a validar
const userData = {
  nombre: "Pepe",
  email: "pepe@correo.com",
  password: "12345678",
  phone: 123456789,
};

//3. Validar la información
const msj = userSchema.parse(userData); // Si no hay error, la validación ha sido correcta. De ser correcto, se devuelve el objeto con los datos validados
//SafeParse: Devuelve un objeto con la propiedad success y la propiedad data o error
const msj1 = userSchema.safeParse(userData); // Si no hay error, la validación ha sido correcta. De ser correcto, se devuelve el objeto con los datos validados
console.log(msj);
console.log(msj1);
 */

//---------------------------------- Esquema basado en un array ----------------------------------//
/* //1. Crear el esquema de validación
const textoArraySchema = z.array(
  z.string().min(3, { message: "El texto debe tener al menos 3 caracteres" })
);

//2. Pasar la información a validar
// textoArraySchema.parse(["Hola", "Adiós", "Hola mundo"]);
textoArraySchema.parse(["1", 2, "3"]); */

//Si quisiera validar un array de objetos, podría hacerlo de la siguiente manera
//1. Crear el esquema de validación
const userSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("El email no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  // phone: z.string().regex(/^\d{9}$/, { message: "El teléfono debe tener 9 dígitos" }),
  phone: z
    .number()
    .min(100000000, "El teléfono debe tener 9 dígitos")
    .max(999999999, "El teléfono debe tener 9 dígitos")
    .int()
    .positive("El teléfono no puede ser negativo"),
});

const usersSchema = z.array(userSchema); //Validar un array de objetos

//2. Pasar la información a validar
const userData = [
  {
    nombre: "Pepe",
    email: "pepe@correo.com",
    password: "12345678",
    phone: 123456789,
  },
  {
    nombre: "Raul",
    email: "raul@correo.com",
    password: "12345678",
    phone: 123456789,
  },
];
//3. Validar la información
const msj = usersSchema.safeParse(userData); // Si no hay error, la validación ha sido correcta. De ser correcto, se devuelve el objeto con los datos validados
console.log(msj);
