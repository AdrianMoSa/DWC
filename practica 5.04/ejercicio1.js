//No he sabido mostrar solo 10 actores y problemas al mostrar las descripciones de los vehículos y naves ya que se muestran todo el rato.
"use strict";
import {obtenerDatosPeliculas}
from "./Bibliotecas/obtenerDatos.js";
import {getElenco, getNaves, getVehiculos}
from "./Bibliotecas/especificas.js";
import {mostrarDatos,mostrarPelicula,mostrarTitulo,mostrarActores,mostrarDatosVehiculo, mostrarDatosNave}
from "./Bibliotecas/manipularDOM.js";
window.onload = () => {
    const url = "http://swapi.py4e.com/api/films";
    var contenedor=document.getElementById("peliculas");
    var informacion = document.getElementById("datosPeli");
    var titulo=document.getElementById("titulo");
    var divElenco=document.getElementById("actores");
    var datosActores=document.getElementById("datosActores");
    var divVehiculos=document.getElementById("vehiculos");
    var divNaves=document.getElementById("naves");
    var datosVehiculo=document.getElementById("datosVehiculo");
    var datosNave=document.getElementById("datosNave");

   const mostrarPeliculas = async () => {
    let datos = await obtenerDatosPeliculas(url);
    mostrarPelicula(datos.results, contenedor);
    console.log(datos.results);
 
  };

  mostrarPeliculas();

//Muestra los datos de la película.
  contenedor.addEventListener("click", async (e) => {
    let datos = await obtenerDatosPeliculas(url);
    let episodio=e.target.value;
    mostrarDatos(datos.results,informacion,episodio);
     mostrarTitulo(datos.results,titulo,episodio);
     
  }); 

  //Muestra los actores.
  contenedor.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      getElenco(e.target.title, divElenco);
    }
  });

  //Muestra los datos de los actores.
  divElenco.addEventListener("click", async (e) => {
    let datos = await obtenerDatosPeliculas(e.target.title);
    if (e.target.tagName === "P") {
    mostrarActores(datos,datosActores)
    }
  }); 
  //Muestra los vehículos
  divElenco.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      getVehiculos(e.target.title, divVehiculos);
    }
  });

  //Muestra los datos de los vehículos.
  divVehiculos.addEventListener("click", async (e) => {
    let datos = await obtenerDatosPeliculas(e.target.title);
    if (e.target.tagName === "P") {
    mostrarDatosVehiculo(datos,datosVehiculo);
    }
  }); 

  //Muestra las naves.
  divElenco.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      getNaves(e.target.title, divNaves);
    }
  });

  //Muestra los datos de las naves.
  divNaves.addEventListener("click", async (e) => {
    let datos = await obtenerDatosPeliculas(e.target.title);
    if (e.target.tagName === "P") {
    mostrarDatosNave(datos,datosNave);
    }
  }); 
}