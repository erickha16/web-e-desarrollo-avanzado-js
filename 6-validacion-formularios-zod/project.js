// ------------------------------------------ Proyecto de Validación de formularios con Zod ----------------------------------\\
/*  
Validación de un Formulario de Registro con Zod
Crearás un formulario de registro que solicite al usuario su **nombre**, **correo electrónico**, y **contraseña**. 
Los datos ingresados deben validarse utilizando la biblioteca **Zod** antes de enviarlos al servidor. El formulario debe mostrar mensajes de error claros si los datos no son válidos.

Instrucciones para resolver el problema:
1. Crea un archivo HTML con un formulario simple que contenga los campos: Nombre (texto), Correo electrónico, Contraseña, Un botón para enviar el formulario.
2. Implementa un archivo JavaScript con base en el código proporcionado donde: 
    - Definas un esquema de validación con Zod. 
    - Valides los datos ingresados al enviar el formulario. 
    - Muestres mensajes de error claros si la validación falla.
3. Experimenta con distintos escenarios y asegúrate de que funcione como se solicita.

*/

// Importamos Zod
import z from "https://cdn.jsdelivr.net/npm/zod@3.25.11/+esm"; //Requiere el atributo type="module" en el script del HTML

// Esquema para validar los datos del formulario
const registerSchema = z.object({
  //Define que el nombre debe ser una cadena no vacía.
  name: z.string().min(1, "El nombre es obligatorio."),
  //Valida que el correo tenga el formato correcto.
  email: z.string().email("El correo electrónico no es válido."),
  //La contraseña debe tener al menos 6 caracteres.
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres."),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Capturamos los valores ingresados
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  // Validamos los datos con Zod
  //Opción 1, usando un try/catch
  try {
    // Usa el método correcto de Zod para validar el esquema.
    registerSchema.parse(formData);
    alert("¡Registro exitoso!");
  } catch (error) {
    //Muestra los mensajes de error en la página.
    document.getElementById("errors").textContent = error.errors
      .map((e) => e.message)
      .join(", ");
  }

  //Opción 2, obteniendo un mensaje de error específico:
  /*  const msj = registerSchema.safeParse(formData); // Si no hay error, la validación ha sido correcta. De ser correcto, se devuelve el objeto con los datos validados
  if (msj.success) {
    alert("¡Registro exitoso!");
  } else {
    // Muestra los mensajes de error en la página.
    document.getElementById("errors").textContent = msj.error.issues
      .map((issue) => issue.message)
      .join(", ");
  }
  console.log(msj); */
});
