"use strict";
//No he podido poner el window.onload porque no me funcionaba al utilizar los botones onclick, pero es que utilizando los eventListener no he logrado que me funcione correctamente con las tablas.(Acepto perder el dedo meñique del pie).

var pintar = false;

var color;

crearLienzo();

//Función que recoje y guarda el color seleccionado
function seleccionarColor(selecColor) {
  let colorSelec = document.getElementById("colorSeleccionado");

  color = selecColor;

  colorSelec.setAttribute("class", `celda${color}`);
}

//Función para crear la tabla/lienzo
function crearLienzo() {
  let lienzo = document.getElementById("lienzo");
  let tablaLienzo = document.createElement("table");
  tablaLienzo.setAttribute("id", "tablaLienzo");

  for (let i = 0; i < 60; i++) {
    let trTablaLienzo = document.createElement("tr");
    for (let j = 0; j < 50; j++) {
      let tdTablaLienzo = document.createElement("td");

      tdTablaLienzo.setAttribute("name", "celdaLienzo");

      tdTablaLienzo.setAttribute("onclick", "esPintar()");
      tdTablaLienzo.setAttribute("onmouseover", "pintarCelda(this)");

      trTablaLienzo.appendChild(tdTablaLienzo);
    }

    tablaLienzo.appendChild(trTablaLienzo);
  }
  lienzo.appendChild(tablaLienzo);
}

//Función para saber si se debe pintar o no
function esPintar() {
  if (pintar) {
    pintar = false;
  } else {
    pintar = true;
  }
}

//Función para cambiar la clase de la celda al pasar el raton por encima si pintar está a true
function pintarCelda(celda) {
  if (pintar) {
    celda.setAttribute("class", `celda${color}`);
  }
}

var botonBorrarLienzo = document.getElementById("borrar");
botonBorrarLienzo.addEventListener("click", borrarLienzo, false);
//Función para restablecer el lienzo(borrar) / todo a blanco
function borrarLienzo() {
  var celdas = document.getElementsByName("celdaLienzo");
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].removeAttribute("class");
  }
}
