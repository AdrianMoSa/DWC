//No he sabido implementar bien el pattern en react.

import React, { useState } from "react";
var listaProductos=[];
var contador=0;
//creo una lista de la compra.
export const Lista_compra = () => {
  let listaCompraInicial = {
    id: "",
    nombre: "",
    descripcion: "",
    precio: "",
    unidades: "",
  };
 //declaro el useState de la lista.
  const [lista, setLista] = useState(listaCompraInicial);

//Función que comprueba si los campos estan rellenados y los añade a un array de objetos.
function validador(){
  var resultado=document.getElementById("resultado");
  if(lista.id===""||lista.nombre===""||lista.descripcion===""||lista.precio===""||lista.unidades===""){
    resultado.innerHTML=`<p>Por favor rellena todos los campos</p>`;
  }
  else{
    listaProductos[contador]=lista;
    resultado.innerHTML=`<p>Producto añadido correctamente</p>`;
    contador++;
    console.log(contador);
  }
}
//función que agrega el producto y actualiza el estado.
function agregarProducto(){
  validador();
  setLista({...lista})
}


//Se utiliza para tener los objetos a tiempo real.
  const anyadirProducto = (e) => {
    const { name, value } = e.target;
    setLista({...lista, [name]: value});
    
  };
  //Borra el producto.
  const borrarProducto = (e)=>{
    e.target.classList.add("eliminar");
  }
  //Borra toda la lista de la compra.
  const borrarTodo = () => {
    listaProductos=[];
    setLista({...lista})
  };

  return (
    <React.Fragment>
      <div className="container">
        <h2>Producto</h2>
       
        <label htmlFor="id">Id:</label>
          <input
            name="id"
            className="conEstilo"
            type="text"
            pattern="[0-9]+{1,10}"
            required
            placeholder="Escribe tu id."
            value={lista.id}
            onChange={anyadirProducto}
          />
          <label htmlFor="nombre">Nombre:</label>
          <input
            name="nombre"
            className="conEstilo"
            pattern="[A-Za-z ]{1,32}" 
            required
            type="text"
            placeholder="Escribe tu nombre."
            value={lista.nombre}
            onChange={anyadirProducto}
          />
          <label htmlFor="descripcion">Descripción:</label>
          <input
            name="descripcion"
            className="conEstilo"
            type="text"
            pattern="[A-Za-z ]{1,200}" 
            required
            placeholder="Descripción del producto."
            value={lista.descripcion}
            onChange={anyadirProducto}
          />
           <label htmlFor="precio">Precio:</label>
          <input
            name="precio"
            className="conEstilo"
            pattern="[0-9]+(\.[0-9][0-9]?)?"
            required
            type="text"
            placeholder="Precio del producto."
            value={lista.precio}
            onChange={anyadirProducto}
          />
           <label htmlFor="unidades">Unidades:</label>
          <input
            name="unidades"
            className="conEstilo"
            pattern="[0-9]+{1,4}"
            required
            type="text"
            placeholder="Unidades del producto."
            value={lista.unidades}
            onChange={anyadirProducto}
          />
          {<button onClick={agregarProducto}>Añadir</button> }
          {<button onClick={borrarTodo}>Borrar  todo</button> }
          </div>
        <div id="resultado">
            
      </div>
      <h2>Lista de la compra</h2>
      <div id="ultimo">
      {listaProductos.map((producto) => {

            return <div id="lista" onClick={borrarProducto}><p>Id: {producto.id}<br/>Nombre: {producto.nombre}<br/>Descripción: {producto.descripcion}<br/>Precio: {producto.precio}<br/>Unidades: {producto.unidades}</p></div>;
          })}
      </div>
    </React.Fragment>
  );
};
