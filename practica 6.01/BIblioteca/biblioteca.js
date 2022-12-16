"use strict";

const pintarProducto = (documento) => {
  return `<div class="fila">
  <img class="borrar" src="./img/borrar.png" id="${documento.id}">
  <div class="celda">${
    documento.data().hasOwnProperty("Nombre")
      ? documento.data().Nombre
      : "Sin nombre"
  }</div>
  <div class="celda">${
    documento.data().hasOwnProperty("Precio")
      ? documento.data().Precio
      : "Sin precio"
  }</div>
  <div class="celda">${
    documento.data().hasOwnProperty("Modulos")
      ? documento.data().Peso
      : "Sin peso"
  }</div>
  <div class="celda"> ${
    documento.data().hasOwnProperty("Imagen")
      ? documento.data().Imagen
      : "Sin imagen"
  }</div>
  <div class="celda"> ${
    documento.data().hasOwnProperty("Descripcion")
      ? documento.data().Descripcion
      : "Sin descripcion"
   
  }</div>`;
};

export{pintarProducto}