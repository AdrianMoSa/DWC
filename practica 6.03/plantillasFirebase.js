"use strict";
//Plantilla de cada producto.
const pintarProducto = (documento) => {
  var contador=0;
 
  return `<div class="fila"> 
  <a href="#formularioQueModifica"><input type="button" class="modificar" value="Modificar" id="${documento.id}"/></a> 
  <input type="button" class= "borrar" value="Eliminar" id="${documento.id}">
  <h3 class="celda">Nombre: ${
    documento.data().hasOwnProperty("Nombre")
      ? documento.data().Nombre 
      : "Sin nombre"
  }</h2>
  <p> Precio: ${
    documento.data().hasOwnProperty("Precio")
      ? documento.data().Precio
      : "Sin precio"
  }€</p>
  <p> Peso: ${
    documento.data().hasOwnProperty("Peso")
      ? documento.data().Peso
      : "Sin peso"
  } Kg</p>
  <img class="imagen" src=${documento.data().Imagen}></img></br>
  <p> Descripción: ${
    documento.data().hasOwnProperty("Descripcion")
      ? documento.data().Descripcion
      : "Sin descripcion"
  
  }</p>
  </div>`
  
};

const borrar = (objetoDOM) => {
  setTimeout(() => {
    objetoDOM.innerHTML = "";
  }, 2000);
};


export{pintarProducto,borrar};