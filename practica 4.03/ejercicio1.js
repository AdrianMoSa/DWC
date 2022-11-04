"use strict";

window.onload = () => {
    var botonPares=document.getElementById("marcar");
    var botonDesmarcar=document.getElementById("desmarcar");
    
    function generarNumerosAleatorios(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }   

    function marcarParesCheckBox(){
        var opciones=document.getElementById("cajaBoton");
        console.log(opciones);
        for(var i=0;i<100;i++){
            var numeroAleatorio=generarNumerosAleatorios(100,1000);
            opciones.innerHTML+=`<input type="checkbox" id="${i}" name="preguntaC" value="${numeroAleatorio}" />
            <label for="preguntaAS">${numeroAleatorio}</label>`;
        }
        
    }
    marcarParesCheckBox();
    

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





}