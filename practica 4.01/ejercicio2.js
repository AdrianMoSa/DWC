"use strict"
var c=0;
window.onload=function(){
    function generarNumeroAleatorio(){
        return(Math.floor(Math.random() * 255));
    }
document.addEventListener("dblclick", () => {

   var numero1=generarNumeroAleatorio();
   var numero2=generarNumeroAleatorio();
   var numero3=generarNumeroAleatorio();
   document.body.style.backgroundColor="rgb(" + numero1 + "," + numero2 + "," + numero3 + ")";// He hecho el estilo en línea porque he sabido desde aquí modificar el css.
  },
  false
  );

  

}