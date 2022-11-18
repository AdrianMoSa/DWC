"use strict";
import { mostrarPelicula,mostrarPeli,mostrarDatos } from "./Bibliotecas/manipularDom.js";
import { getPeliculas } from "./Bibliotecas/obtenerDatos.js";
window.onload = () => {
    var cartelera=document.getElementById("pelicula");
    var informacion=document.getElementById("datosPeli")
    const url = "http://swapi.py4e.com/api/films/";
    
        function mostrarPeliculas(){
        getPeliculas(url).then((datos) => {
          
          mostrarPelicula(datos, cartelera);
        })
      
    }
   
     mostrarPeliculas();

     cartelera.addEventListener("click", () => {
     
      console.log(mostrarPelicula(url));
     
      console.log(
        getPeliculas(url).then((datos) => {
        
          mostrar(datos,informacion);
        })
      );
    }); 
    

}

