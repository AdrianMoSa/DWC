"use strict";
import {obtenerDatosPeliculas}
from "./Bibliotecas/obtenerDatos.js";
import {getPeliculas}
from "./Bibliotecas/especificas.js";
import {mostrar,mostrarDatos,mostrarPelicula,mostrarTitulo}
from "./Bibliotecas/manipularDOM.js";
window.onload = () => {
    const url = "http://swapi.py4e.com/api/films";
    var cartelera = document.getElementById("pelicula");
    var contenedor=document.getElementById("peliculas");
    var informacion = document.getElementById("datosPeli");
    var titulo=document.getElementById("titulo");
    var cartelera=document.getElementById("pelicula")

   const mostrarPeliculas = async () => {
    let datos = await obtenerDatosPeliculas(url);
    mostrarPelicula(datos.results, contenedor);
    console.log(datos.results);
 
  };

  mostrarPeliculas();

  const mostrarDatosPeliculas=async()=>{
    let datos=await obtenerDatosPeliculas(url);
  cartelera.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() == "li") {
        let episodio=e.target.value;
    
    mostrarDatos(datos.results,informacion,episodio);
    mostrarTitulo(datos,titulo,episodio);
    }
  })
}
mostrarDatosPeliculas(); 

}