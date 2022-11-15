"use strict";
import { generarNumerosAleatorios } from "./biblioteca.js";

window.onload = () => {
    var botonPares=document.getElementById("marcar");
    var botonDesmarcar=document.getElementById("desmarcar");
    
      
  //Función que crea el checkBox con números aleatórios.
    function marcarParesCheckBox(){
        var opciones=document.getElementById("cajaBoton");
        console.log(opciones);
        for(var i=0;i<100;i++){
            var numeroAleatorio=generarNumerosAleatorios(100,1000);
            opciones.innerHTML+=`<input type="checkbox" id="${i}" name="preguntaC" value="${numeroAleatorio}" />
            <label for="preguntaAS">${numeroAleatorio}</label>`;
        }
        
    }

    
    //Cuando pulsas el botón te marca los pares a check.

  botonPares.addEventListener(
    "click",
    (e) => {
      let check = document.getElementsByName("preguntaC");
      for (let i = 0; i < check.length; i++) {
        if (check[i].value%2==0) {
        check[i].checked=true;
        }
      }
      
    },
    false
  );
    
  //Cuando pulsas el botón de desmarcar te pone el check a false de los pares.
  botonDesmarcar.addEventListener(
    "click",
    (e) => {
      let check = document.getElementsByName("preguntaC");
      for (let i = 0; i < check.length; i++) {
        if (check[i].checked==true) {
        check[i].checked=false;
        }
      }
      
    },
    false
  );



  window.addEventListener("load", marcarParesCheckBox(),false);

}
