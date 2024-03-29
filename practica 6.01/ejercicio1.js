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
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

window.onload = () => {
  let datos = document.getElementById("container");
  let busqueda = document.getElementById("buscar");
  let informacion = document.getElementById("datosFiltrados");
  var producto;
  var tipoFiltro;
 
  const db = getFirestore(app);
  const listaCompraColeccion = collection(db, "Productos");

// Función para mostrar los datos de la lista de la compra.
  const obtenerListaCompra = async () => {
    const listaCompraDocumentos = await getDocs(listaCompraColeccion);
    datos.innerHTML = "";
    listaCompraDocumentos.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarProducto(documento);
    });
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
 
};
