"use strict";

window.onload = () => {

var provincias=document.getElementById("provincia");
var pueblos=document.getElementById("poblacion");
//Para seleccionar la opción que esta seleccionada.
console.log(provincias.options[1].value);
console.log(provincias.options.selectedIndex);
console.log(pueblos);


provincias.addEventListener(
    "change",
    (e) => {
        var index=provincias.options.selectedIndex;
        //funciona.
        console.log(provincias.options[index].value);

        if(provincias.options[index].value=="Alicante"){
            pueblos.innerHTML=
            `<option value="noPueblo">Selecciona una poblacion</option>
            <option value="Alicante">Alicante</option>
            <option value="Elche">Elche</option>
            <option value="Petrer">Petrer</option>`
            
        
        }
     
      
    },
    false
  );

}