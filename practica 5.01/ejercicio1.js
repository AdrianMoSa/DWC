"use strict";
import {
  mostrarPelicula,
 mostrarTitulo,
  mostrarDatos,
} from "./Bibliotecas/manipularDom.js";
import { getPeliculas } from "./Bibliotecas/obtenerDatos.js";
window.onload = () => {
  var cartelera = document.getElementById("pelicula");
  var informacion = document.getElementById("datosPeli");
  var titulo=document.getElementById("titulo");
  const url = "http://swapi.py4e.com/api/films/";
//función que muestra películas.
  function mostrarPeliculas() {
    getPeliculas(url).then((datos) => {
      mostrarPelicula(datos, cartelera);
    });
  }

  mostrarPeliculas();
//función que muestra los datos de esa película.
  cartelera.addEventListener("click", (e) => {
    getPeliculas(url).then((datos) => {
      if (e.target.tagName.toLowerCase() == "li") {
        let episodio=e.target.value;

        mostrarDatos(datos, informacion,episodio);
        mostrarTitulo(datos,titulo,episodio);
        
      }
    });
  });
}
