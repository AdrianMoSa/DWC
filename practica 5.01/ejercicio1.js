"use strict";
import { mostrarPelicula } from "./Bibliotecas/manipularDom.js";
import { getPeliculas } from "./Bibliotecas/obtenerDatos.js";
window.onload = () => {
    var cartelera=document.getElementById("pelicula");
    const url = "http://swapi.py4e.com/api/films/";
    let boton=document.getElementById("contenedor");

      boton.addEventListener("click", () => {
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
