"use strict";
import { mostrarPelicula } from "./Bibliotecas/manipularDom";
import { getPeliculas } from "./Bibliotecas/obtenerDatos";
window.onload = () => {
    let cartelera=document.getElementById("pelicula");
    const url = "http://swapi.py4e.com/api/films/";

      window.addEventListener("load", () => {
      // Se obtiene una promesa, no los datos que contiene.
      console.log(getPeliculas(url));
      // Se obtiene una promesa y se consume para acceder a su contenido.
      console.log(
        getPeliculas(url).then((datos) => {
          //console.log(datos);
          mostrarPelicula(datos, cartelera);
        })
      );
    });

}
