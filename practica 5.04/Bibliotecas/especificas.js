"use strict";

const getPeliculas = async (url, donde) => {
    let peliculas = await obtenerDatos(url);
    mostrarPeliculas(peliculas.results, donde);
  };

  export{getPeliculas};