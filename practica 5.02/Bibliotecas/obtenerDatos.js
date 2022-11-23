"use strict";

const getPeliculas = (fuente) => {
  // La API fetch siempre devolverá un objeto Promise que habrá que consumir.
  return fetch(fuente)
    .then((respuesta) => {
      return respuesta.json(); // Se transforma el resultado a un objeto JSON.
    })
    .then((peliculas) => {
      return peliculas.results; // Se devuelven los datos contenidos en la promesa.
    })
    .catch((error) => {
      console.error(error); // Por si diera un error.
    });
};

const getActores = (array) => {
  
  for(var i=0;i<array.length;i++){
  return fetch(array[i])
    .then((respuesta) => {
      return respuesta.json(); 
    })
    .then((actores) => {
      return actores; 
    })
    .catch((error) => {
      console.error(error);
    });
};
}
const getEstudiantes = (fuente) => {
  
  return fetch(fuente)
    .then((respuesta) => {
      return respuesta.json(); 
    })
    .then((estudiantes) => {
      return estudiantes; 
    })
    .catch((error) => {
      console.error(error); 
    });
};
const getHechizos = (fuente) => {
  
  return fetch(fuente)
    .then((respuesta) => {
      return respuesta.json(); 
    })
    .then((hechizos) => {
      return hechizos; 
    })
    .catch((error) => {
      console.error(error); 
    });
};
export { getPeliculas,getActores,getEstudiantes,getHechizos};