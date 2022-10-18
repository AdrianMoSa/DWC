"use strict";

function generaTabla() {
  let array = new Array(2);
  array[0] = new Array(10);
  array[1] = new Array(10);
  let fila = 0;
  let tabla = '<table border="0">';
  let boton = document.querySelector(".boton");

  for (let i = 0; i < 10; i++) {
    tabla += "<tr>";
    if (i > 0) {
      fila += 10;
    }
    for (let j = 0; j < 10; j++) {
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

function generaNumerosPrimos() {
  console.log("funciona");
}

function esPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

window.addEventListener("load", generaTabla, false);
