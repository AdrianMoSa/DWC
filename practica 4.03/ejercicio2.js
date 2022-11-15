"use strict";

window.onload = () => {
    //función que al hacer click en generar te genera un párrafo con el estilo seleccionado y si no tiene estilo te advierte que pongas uno.
var botonParrafo=document.getElementById("generar");
    botonParrafo.addEventListener(
        "click",
        (e) => {
            var estilo=document.getElementById("estilo").value;
           var texto=document.getElementById("texto").value;
           var nuevoDiv=document.getElementById("resultado")
           nuevoDiv.setAttribute("class",estilo);
           if(estilo=="noEstilo"||texto==""){
            nuevoDiv.innerHTML=`
            <p>Dale un estilo y escribe algo, no seas hipoglúcido</p> 
            `
           }
           else{
          nuevoDiv.innerHTML=`
          <p>${texto}</p> 
          `
           }
        },
        false
      );



}