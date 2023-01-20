"use strict";
// Me gustaría saber si se puede de alguna manera filtrar los datos en un campo determinado y ordenarlos por otro distinto. (Me daba error al hacerlo).
import * as plantillas from "./plantillasFirebase.js";
import * as biblioteca from "./bibliotecaFirebase.js";
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
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

window.onload = () => {
  let datos = document.getElementById("container");
  let busqueda = document.getElementById("buscar");
  const info = document.getElementById("informacion");
  let nombre=document.getElementById("nombre");
  let precio=document.getElementById("precio");
  let peso=document.getElementById("peso");
  let imagen=document.getElementById("imagen");
  let descripcion=document.getElementById("descripcion");
  var anyadir=document.getElementById("anyadir");
  var formulario=document.getElementById("formulario");
  var anyadir=document.getElementById("anyadir");
  var formulario=document.getElementById("formulario");
  var formularioModificar=document.getElementById("formularioModificar");
  var botonModificar=document.getElementById("modificarProducto");
  var idProducto;
  const db = getFirestore(app);
  const listaCompraColeccion = collection(db, "Productos");
  const listaCompraUsuarioColeccion=collection(db, "Usuarios");


  biblioteca.obtenerListaCompra();

 
  
//Función para poder filtrar la busqueda
  busqueda.addEventListener("click", () => {
    biblioteca.filtrarProductos();
    document.getElementById("limpiar").style.display="inherit";
  });
  document.getElementById("limpiar").addEventListener("click", () =>{
    biblioteca.obtenerListaCompra();
    document.getElementById("limpiar").style.display="none";
  });
  //Evento que ordena la lista.
  document.getElementById("orden").addEventListener("change",()=>{
    biblioteca.ordenarProductos();
  })

  //Añade un evento para mostrar y ocultar formularios.
  anyadir.addEventListener("click",()=>{
    formulario.style.display="inherit";
    formularioModificar.style.display="none";
  

  });
 

  //Guarda y vacia el formulario cuando haces click sobre el botón guardar.
  document.getElementById("guardar").addEventListener("click", () => {

    biblioteca.guardarProducto(biblioteca.generarProducto());
    nombre.value="";
    precio.value="";
    peso.value="";
    imagen.value="";
    descripcion.value="";
   
  });

 
//Borra el producto al hacer click sobre borrar. 
  datos.addEventListener("click", (e) => {
    if (e.target.classList.contains("borrar")){
      biblioteca.borrarProducto(e.target.id);
     
    }
  });

 
 
  //Sirve para ocultar el otro formulario y mostrar el de modificar.
  datos.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modificar")){
    formulario.style.display="none";
    formularioModificar.style.display="inherit";
    idProducto=e.target.id;
    biblioteca.rellenarFormulario(e.target.id)
    }
  });
  
  //Al hacer click se modifica el producto.
  botonModificar.addEventListener("click",()=>{
    biblioteca.actualizarProducto(idProducto);
    info.innerHTML = `<p class='bien'>${idProducto} modificado con éxito.</p>`;
    plantillas.borrar(info);
    biblioteca.obtenerListaCompra();
   
  })

   // Empieza la práctica 6.3


document.getElementById("crear").addEventListener(
  "click",
  () => {
    biblioteca.crearUsuario(
      document.getElementById("usuario").value,
      document.getElementById("consigna").value
    );
  },
  false
);
document.getElementById("loggin").addEventListener(
  "click",
  () => {
    biblioteca.iniciarSesion(
      document.getElementById("user").value,
      document.getElementById("password").value
    );
  },
  false
);

document.getElementById("cerrar").addEventListener(
  "click",
  () => {
    biblioteca.cerrarSesion();
    document.getElementById("iniciar").style.display="block";
  },
  false
);

//Muestro las listas de la compra.
document.getElementById("mostrar").addEventListener(
  "click",
  () => {
    biblioteca.listasCompra();
  },
  false
);

//Muestro los productos de la lista.
document.getElementById("divListas").addEventListener("click", (e) => {
  let id = e.target.id;
 
  biblioteca.pintarProductosLista(id);
});

//Crear lista.
document.getElementById("agregarLista").addEventListener("click", (e) => {
  let objeto = biblioteca.crearObjetoListas();
  biblioteca.guardarLista(objeto);
  document.getElementById("nombreLista").value="";
  //console.log(objeto);

  //función insertar lista.
});


};

