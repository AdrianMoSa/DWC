"use strict";
import {obtenerDatosPeliculas}
from "./obtenerDatos.js";
import { mostrarElenco,mostrarVehiculos,mostrarNaves } from "./manipularDOM.js";

const getPeliculas = async (url, donde) => {
    let peliculas = await obtenerDatos(url);
    mostrarPeliculas(peliculas.results, donde);
  };

  const getElenco = async (pelicula, donde) => {
    //Obtener datos de las películas.
    let elenco = await obtenerDatosPeliculas(pelicula);
    //Se comprueba lo que se ha recibido.
    //console.log(elenco);
    //console.log(elenco.characters);
    //Se crea un array con las promesas de los datos de los actores.
    let arrayPromesasPersonajes = elenco.characters.map(
      (valor, indice, array) => {
        return obtenerDatosPeliculas(valor);
      }
    );
    // Se consume la promesa de promesas con then.
    Promise.allSettled(arrayPromesasPersonajes).then((valoresPromesas) => {
      mostrarElenco(valoresPromesas, donde);
    });
    // Se consume la promesa de promesas con await.
    /* const valoresPromesas = await Promise.allSettled(arrayPromesasPersonajes);
    console.log(valoresPromesas); */
    // Se pasa a la función que lo pinta en el DOM.
    //mostrarElenco(valoresPromesas, donde);
  };
  const getVehiculos = async (pelicula, donde) => {
  
    let elenco = await obtenerDatosPeliculas(pelicula);
    
    let arrayPromesasPersonajes = elenco.vehicles.map(
      (valor, indice, array) => {
        return obtenerDatosPeliculas(valor);
      }
    );
   
    Promise.allSettled(arrayPromesasPersonajes).then((valoresPromesas) => {
      mostrarVehiculos(valoresPromesas, donde);
    });
  
  };

  const getNaves = async (pelicula, donde) => {
  
    let elenco = await obtenerDatosPeliculas(pelicula);
    
    let arrayPromesasPersonajes = elenco.starships.map(
      (valor, indice, array) => {
        return obtenerDatosPeliculas(valor);
      }
    );
   
    Promise.allSettled(arrayPromesasPersonajes).then((valoresPromesas) => {
      mostrarNaves(valoresPromesas, donde);
    });
  
  };

  export{getPeliculas,getElenco,getVehiculos,getNaves};