"use strict";
import {
    imprimirEstudiantes,
    imprimirHechizos
  } from "./Bibliotecas/manipularDom.js";
  import { getEstudiantes,getHechizos } from "./Bibliotecas/obtenerDatos.js";
  window.onload = () => {
   
    var estudiantes=document.getElementById("estudiantes")
    var casas=document.getElementById("casas");
    var hechizos=document.getElementById("hechizo");
    var lugarHechizo=document.getElementById("hechizos")
    
    //muestra los estudiantes por tipo de casa.
      casas.addEventListener("click", (e) => {
        if(e.target.id=="gryffindor"){
            var url="https://hp-api.herokuapp.com/api/characters/house/gryffindor";
        }
        else if(e.target.id=="slytherin"){
                var url="https://hp-api.herokuapp.com/api/characters/house/slytherin";
         }
        else if(e.target.id=="hufflepuff"){
                var url="https://hp-api.herokuapp.com/api/characters/house/hufflepuff";
         }
         else if(e.target.id=="ravenclaw"){
            var url="https://hp-api.herokuapp.com/api/characters/house/ravenclaw";
        }

        getEstudiantes(url).then((datos) => {
            imprimirEstudiantes(datos,estudiantes);
            
          }
          
        );
      });
      //muestra todos los hechizos.
      hechizos.addEventListener("click", (e)=>{
        var url="https://hp-api.herokuapp.com/api/spells"
        getHechizos(url).then((datos)=>{
            imprimirHechizos(datos,lugarHechizo);
        }
        );
      });

    }

  