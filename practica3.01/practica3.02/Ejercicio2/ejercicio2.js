"use strict";
//No he sabido hacer el botón para referenciarlo a esa parte de la tabla
function generaTabla() {
  let array = new Array(2);
  array[0] = new Array(100);
  array[1] = new Array(100);
  let fila = 0;
  //Guardamos la tabla en una variable para poder utilizarla con tabla y agregarle cosas.
  let tabla = '<table border="0">';
  let boton = document.querySelector(".boton");
  //tabla+= lo que hace es que cada iteración del for le añade un tr o un td.
  for (let i = 0; i <100; i++) {
    tabla += "<tr>";
    if (i > 0) {
      fila += 10;
    }
    for (let j = 0; j < 100; j++) {
      array[0][1] = fila + (j + 1);
      if(esPrimo(array[0][1])){
        tabla += `<td class='celda primo'>${array[0][1]}</td>`;
      }else{
        tabla += `<td class='celda'>${array[0][1]}</td>`;
      }
    }
    tabla += "</tr>";
  }

  tabla += "</table>";
  document.getElementById("tabla").innerHTML = tabla;
}



function esPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
//Añade un evento que al cargar la página se cree la tabla.
window.addEventListener("load", generaTabla, false);
