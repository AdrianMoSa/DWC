"use strict";
import {
  mostrarPelicula,
 mostrarTitulo,
  mostrarDatos,
  guardarUrlActores,
  imprimirActores,
  mostrarActores
} from "./Bibliotecas/manipularDom.js";
import { getPeliculas,getActores } from "./Bibliotecas/obtenerDatos.js";
window.onload = () => {
  var cartelera = document.getElementById("pelicula");
  var informacion = document.getElementById("datosPeli");
  var titulo=document.getElementById("titulo");
  var actores=document.getElementById("actores");
  var sitioActores=document.getElementById("datosActores");
  const url = "http://swapi.py4e.com/api/films/";
  var arrayActores=[{}];
//Función para mostrar las películas.
  function mostrarPeliculas() {
    getPeliculas(url).then((datos) => {
      mostrarPelicula(datos, cartelera);
    });
  }

  mostrarPeliculas();
//Cuando haces click en una película te coloca los datos y te muestra un actor, (no he conseguido que muestre los 10 actores y tengo guardadas las url, solo consigo que muestre el primero, si pudieras explicarlo en clase o subir una solución te lo agradecería porque me he pasado muchisimas horas y no le he encontrado solución).
  cartelera.addEventListener("click", (e) => {
    getPeliculas(url).then((datos) => {
      if (e.target.tagName.toLowerCase() == "li") {
        let episodio=e.target.value;
    
        mostrarDatos(datos, informacion,episodio);
        mostrarTitulo(datos,titulo,episodio);
        guardarUrlActores(datos,episodio,arrayActores);
        getActores(arrayActores).then((datos)=>{
         
          imprimirActores(datos,actores);
          

        })
       
      }
    });
  });


}
