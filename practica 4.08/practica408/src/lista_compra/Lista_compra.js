import React, { useState } from "react";
var listaProductos=[];
var contador=0;
export const Lista_compra = () => {
  let listaCompraInicial = {
    id: "",
    nombre: "",
    descripcion: "",
    precio: "",
    unidades: "",
  };

  const [lista, setLista] = useState(listaCompraInicial);

//   const anyadirProducto = () => {
//     setLista({...lista, nombre});
//   };
function validador(){
  var resultado=document.getElementById("resultado");
  if(lista.id===""||lista.nombre===""||lista.descripcion===""||lista.precio===""||lista.unidades===""){
    resultado.innerHTML=`<p>Por favor rellena todos los campos</p>`;
  }
  else{
    listaProductos[contador]=[lista];
    resultado.innerHTML=`<p>Producto añadido correctamente</p>`;
    contador++;
  }
}

function agregarProducto(){
  validador();
  console.log(listaProductos);
  recorrerLista();
}
function recorrerLista(){
  return null;
  
}

  const anyadirProducto = (e) => {
    const { name, value } = e.target;
    setLista({...lista, [name]: value});
    
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Lista de la compra</h1>
       
        <label htmlFor="id">Id:</label>
          <input
            name="id"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu id."
            value={lista.id}
            onChange={anyadirProducto}
          />
          <label htmlFor="nombre">Nombre:</label>
          <input
            name="nombre"
            className="conEstilo"
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
            placeholder="Descripción del producto."
            value={lista.descripcion}
            onChange={anyadirProducto}
          />
           <label htmlFor="precio">Precio:</label>
          <input
            name="precio"
            className="conEstilo"
            type="text"
            placeholder="Precio del producto."
            value={lista.precio}
            onChange={anyadirProducto}
          />
           <label htmlFor="unidades">Unidades:</label>
          <input
            name="unidades"
            className="conEstilo"
            type="text"
            placeholder="Unidades del producto."
            value={lista.unidades}
            onChange={anyadirProducto}
          />
          {<button onClick={agregarProducto}>Añadir</button> }
        

        <div id="resultado">
             <p>{lista.id}</p>
            <p>{lista.nombre}</p>
            <p>{lista.descripcion}</p>
            <p>{lista.precio}</p>
            <p>{lista.unidades}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
