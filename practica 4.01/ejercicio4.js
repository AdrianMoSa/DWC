"use strict"

window.onload=function(){
  var arr = document.getElementsByClassName("arrastrable");

  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute("draggable", true);
  }
  var elementoArrastrado;
  
  
  document.addEventListener(
    "dragstart",
    function (evento) {
      console.log("moviendo");
      elementoArrastrado = evento.target; 
      
    },
    false
  );
  document.addEventListener(
    "dragover",
    //poner siempre porque si no vuelve a su sitio el target.
    function (evento) {
      evento.preventDefault(); 
    },
    false
  );

  document.addEventListener(
    "drop",
    //poner siempre porque si no vuelve a su sitio el target.
    function (evento) {
      evento.preventDefault();
    
      
      if (evento.target.className == "soltable") {
        
        evento.target.src="https://www.windowsnoticias.com/wp-content/uploads/2020/01/papelera-de-reciclaje.jpg";

      }
    },
    false
  ); 
  
  
}