"use strict";
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
  var orden=document.getElementById("ordenar")
  var producto;
  var tipoFiltro;
  var ordenarPor;

  const db = getFirestore(app);
  const listaCompraColeccion = collection(db, "Productos");

  const obtenerListaCompra = async () => {
    const listaCompraDocumentos = await getDocs(listaCompraColeccion);
    datos.innerHTML = "";
    console.log(listaCompraDocumentos);
    listaCompraDocumentos.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarProducto(documento);
    });
  };

  obtenerListaCompra();
  const filtrarProductos = async (campo, valor) => {
    
    if (tipo.value == "Nombre") {
      const consulta = query(
        listaCompraColeccion,
        orderBy(ordenarPor,"asc"),
        where("Nombre", "==", producto)
        
      );
      const compraFiltrada = await getDocs(consulta);
      // Se comprueba la longitud de la consulta.
      informacion.innerHTML = `<p class='datos'>Se ha(n) obtenido ${compraFiltrada.docs.length} registro(s).</p>`;
      // Se borran los datos del contenedor.
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
        orderBy(ordenarPor,"asc"),
        
      );
      const compraFiltrada = await getDocs(consulta);
      // Se comprueba la longitud de la consulta.
      informacion.innerHTML = `<p class='datos'>Se ha(n) obtenido ${compraFiltrada.docs.length} registro(s).</p>`;
      // Se borran los datos del contenedor.
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
        orderBy(ordenarPor,"asc"),
        where("Peso", "<=", producto)
        
      );
      const compraFiltrada = await getDocs(consulta);
      // Se comprueba la longitud de la consulta.
      informacion.innerHTML = `<p class='datos'>Se ha(n) obtenido ${compraFiltrada.docs.length} registro(s).</p>`;
      // Se borran los datos del contenedor.
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

  busqueda.addEventListener("click", () => {
    let datosBusqueda = document.getElementById("valor");
    tipoFiltro = tipo.value;
    producto = datosBusqueda.value;
    datosBusqueda.value = "";
    ordenarPor=orden.value;
    filtrarProductos("Nombre", datosBusqueda.value);
    
  });
 
};
