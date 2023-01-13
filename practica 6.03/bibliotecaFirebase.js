"use strict";

//Función que crea un usuario
const crearUsuario = async (usuario, contra) => {
    try {
      const credenciales = await createUserWithEmailAndPassword(
        autentificacion,
        usuario,
        contra
      );
      // Se comprueba la estructura del nuevo objeto.
      console.log(credenciales);
    } catch (error) {
      informacion.innerHTML = `Ha habido un error: ${error.message}`;
    }
  };

  export {crearUsuario};