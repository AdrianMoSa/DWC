"use strict";

window.onload = () => {

var provincias=document.getElementById("provincia");
var pueblos=document.getElementById("poblacion");
var botonParrafo=document.getElementById("enviar");
provincias.addEventListener(
    "change",
    (e) => {
        //Para seleccionar la opción que esta seleccionada en el select se utiliza options[index].value y guardando el indice con selectedIndex.
        var index=provincias.options.selectedIndex;
        
        if(provincias.options[index].value=="Alicante"){
            pueblos.innerHTML=
            `<option value="noPueblo">Selecciona una poblacion</option>
            <option value="Alicante">Alicante</option>
            <option value="Elche">Elche</option>
            <option value="Petrer">Petrer</option>`
            
        
        }
       else if(provincias.options[index].value=="Valencia"){
            pueblos.innerHTML=
            `<option value="noPueblo">Selecciona una poblacion</option>
            <option value="Valencia">Valencia</option>
            <option value="Xativa">Xativa</option>
            <option value="Torrent">Torrent</option>`
            
        
        }
       else if(provincias.options[index].value=="Castellon"){
            pueblos.innerHTML=
            `<option value="noPueblo">Selecciona una poblacion</option>
            <option value="Castellon">Castellón</option>
            <option value="Oropesa">Oropesa</option>
            <option value="Vinaroz">Vinaroz</option>`
            
        
        }
      
    },
    false
  );

  //Verifica si los dos select están marcados y si nó muestra un mensaje.
    botonParrafo.addEventListener(
        "click",
        (e) => {
            var poblacion=document.getElementById("poblacion");
            var indexProvincia=provincias.options.selectedIndex;
           var nuevoDiv=document.createElement("div");
           document.body.appendChild(nuevoDiv);
           if(provincias.options[indexProvincia].value=="noPueblo"||poblacion.value=="noPueblo"){
            nuevoDiv.innerText=
            "Selecciona un pueblo o una provincia, hipoglúcido"
            
           }
           else{
            nuevoDiv.innerText=
            "Conseguido, has elegido las dos opciones" 
            
           }
        },
        false
      );

}