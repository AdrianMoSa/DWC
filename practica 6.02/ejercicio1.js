"use strict";
// Me gustaría saber si se puede de alguna manera filtrar los datos en un campo determinado y ordenarlos por otro distinto. (Me daba error al hacerlo).
import * as plantillas from "./plantillasFirebase.js";
import { app } from "./conexionFirebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

window.onload = () => {
  let datos = document.getElementById("container");
  let busqueda = document.getElementById("buscar");
  let informacion = document.getElementById("datosFiltrados");
  const info = document.getElementById("informacion");
  var producto;
  var tipoFiltro;
  let nombre=document.getElementById("nombre");
  let precio=document.getElementById("precio");
  let peso=document.getElementById("peso");
  let imagen=document.getElementById("imagen");
  let descripcion=document.getElementById("descripcion");
  var anyadir=document.getElementById("anyadir");
  var formulario=document.getElementById("formulario");
  let nombreM=document.getElementById("nombreM");
  let precioM=document.getElementById("precioM");
  let pesoM=document.getElementById("pesoM");
  let imagenM=document.getElementById("imagenM");
  let descripcionM=document.getElementById("descripcionM");
  var anyadir=document.getElementById("anyadir");
  var formulario=document.getElementById("formulario");
  var formularioModificar=document.getElementById("formularioModificar");
  var botonModificar=document.getElementById("modificarProducto");
  var cuadroResumen=document.getElementById("cuadroResumen");
  var idProducto;
  var total=0;
  var precioMedio=0;
  const db = getFirestore(app);
  const listaCompraColeccion = collection(db, "Productos");

// Función para mostrar los datos de la lista de la compra.
  const obtenerListaCompra = async () => {
    const listaCompraDocumentos = await getDocs(listaCompraColeccion);
    datos.innerHTML = "";
    listaCompraDocumentos.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarProducto(documento);
      total+=documento.data().Precio;
      
    });
    var precioMedio=total/listaCompraDocumentos.docs.length;
    cuadroResumen.innerHTML="";
    cuadroResumen.innerHTML+=`<h3>Resumen de la lista</h3><p>El total de productos es de: ${listaCompraDocumentos.docs.length} </p><p>La media de precios es de: ${precioMedio.toFixed(2)}</p>`;
   
  };

  obtenerListaCompra();

  //Función que filtra y ordena los productos.
  const filtrarProductos = async () => {
    
    if (tipo.value == "Nombre") {
      const consulta = query(
        listaCompraColeccion,
        where("Nombre", "==", producto)
        
      );
      const compraFiltrada = await getDocs(consulta);
      informacion.innerHTML = `<p class='datos'>Se ha(n) obtenido ${compraFiltrada.docs.length} registro(s).</p>`;
      datos.innerHTML = "";
      if (compraFiltrada.docs.length) {
        compraFiltrada.docs.map((documento) => {
          datos.innerHTML += plantillas.pintarProducto(documento);
        });
      } else {
        datos.innerHTML = `<p class='error'>No se han encontrado datos.</p>`;
      }
    }
    else if(tipo.value=="Precio"){
      producto=parseFloat(producto);
      const consulta = query(
        listaCompraColeccion,
        
        where("Precio", "<=", producto),
        orderBy("Precio","asc"),
        
      );
      const compraFiltrada = await getDocs(consulta);
      informacion.innerHTML = `<p class='datos'>Se ha(n) obtenido ${compraFiltrada.docs.length} registro(s).</p>`;
      datos.innerHTML = "";
      if (compraFiltrada.docs.length) {
        compraFiltrada.docs.map((documento) => {
          datos.innerHTML += plantillas.pintarProducto(documento);
        });
       
      } else {
        datos.innerHTML = `<p class='error'>No se han encontrado datos.</p>`;
      }
     
    }
     else if(tipo.value=="Peso"){
      producto=parseFloat(producto);
      const consulta = query(
        listaCompraColeccion,
        orderBy("Peso","asc"),
        where("Peso", "<=", producto)
        
      );
      const compraFiltrada = await getDocs(consulta);
      informacion.innerHTML = `<p class='datos'>Se ha(n) obtenido ${compraFiltrada.docs.length} registro(s).</p>`;
      datos.innerHTML = "";
      if (compraFiltrada.docs.length) {
        compraFiltrada.docs.map((documento) => {
          datos.innerHTML += plantillas.pintarProducto(documento);
        });
      } else {
        datos.innerHTML = `<p class='error'>No se han encontrado datos.</p>`;
      }
    }
  };
//Función para poder filtrar la busqueda
  busqueda.addEventListener("click", () => {
    let datosBusqueda = document.getElementById("valor");
    tipoFiltro = tipo.value;
    producto = datosBusqueda.value;
    datosBusqueda.value = "";
    filtrarProductos();
    
  });
  //Añade un evento para mostrar y ocultar formularios.
  anyadir.addEventListener("click",()=>{
    formulario.style.display="inherit";
    formularioModificar.style.display="none";
  

  });
  // Función que genera el objeto para meterlo en la base de datos.
  function generarProducto(){
  const nuevoProducto ={
    Nombre: nombre.value,
    Precio: parseFloat(precio.value),
    Peso: parseFloat(peso.value),
    Imagen: imagen.value,
    Descripcion: descripcion.value
  }
  return nuevoProducto;
}

//Función que genera el objeto modificado para meterlo en la base de datos.
function modificarProducto(){
  
  const productoModificado ={
    Nombre: nombreM.value,
    Precio: parseFloat(precioM.value),
    Peso: parseFloat(pesoM.value),
    Imagen: imagenM.value,
    Descripcion: descripcionM.value
  }
  return productoModificado;
}

  //Guarda y vacia el formulario cuando haces click sobre el botón guardar.
  document.getElementById("guardar").addEventListener("click", () => {

    guardarProducto(generarProducto());
    nombre.value="";
    precio.value="";
    peso.value="";
    imagen.value="";
    descripcion.value="";
   
  });

 //Función para guardar el producto.
  const guardarProducto = async (objeto) => {
    const compraGuardada = await addDoc(listaCompraColeccion, objeto);
    info.innerHTML = `<p class='bien'>Compra guardada con el id ${compraGuardada.id}</p>`;
    plantillas.borrar(info);
   obtenerListaCompra();
   
    
  };
//Borra el producto al hacer click sobre borrar. 
  datos.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")){
      borrarProducto(e.target.id);
     
    }
  });

  //Función para borrar el producto.
  const borrarProducto = async (id) => {
    const resultado = await deleteDoc(doc(listaCompraColeccion, id));
    info.innerHTML = `<p class='bien'>${id} borrado con éxito.</p>`;
    plantillas.borrar(info);
    obtenerListaCompra();
  };
 
  //Sirve para ocultar el otro formulario y mostrar el de modificar.
  datos.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modificar")){
    formulario.style.display="none";
    formularioModificar.style.display="inherit";
    idProducto=e.target.id;
   
    }
  });
  //Función para actualizar el producto.
  const actualizarProducto = async (id) => {
    const pruebaRef = await doc(listaCompraColeccion, id);
    await updateDoc(pruebaRef, modificarProducto());
  };
  //Al hacer click se modifica el producto.
  botonModificar.addEventListener("click",()=>{
    actualizarProducto(idProducto);
    info.innerHTML = `<p class='bien'>${idProducto} modificado con éxito.</p>`;
    plantillas.borrar(info);
    obtenerListaCompra();
   
  })


};
