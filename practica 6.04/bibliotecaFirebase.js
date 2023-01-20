"use strict";
import { app, autentificacion } from "./conexionFirebase.js";
import * as plantillas from "./plantillasFirebase.js";
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

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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
const listaCompraUsuarioColeccion=collection(db, "Usuarios");
const listaCompra=collection(db,"ListaCompra");
var alias=document.getElementById("alias");


//Practica 6.1
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
const ordenarProductos = async () => {
  var numero=0;
  numero=(parseFloat(numero));
  console.log(orden.value)
  if(orden.value=="Precioasc"){
    producto=parseFloat(producto);
    const consulta = query(
      listaCompraColeccion,
      
      where("Precio", ">", numero),
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
  if(orden.value=="Preciodesc"){
    producto=parseFloat(producto);
    const consulta = query(
      listaCompraColeccion,
      
      where("Precio", ">", numero),
      orderBy("Precio","desc"),
      
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
  if(orden.value=="Pesoasc"){
    producto=parseFloat(producto);
    const consulta = query(
      listaCompraColeccion,
      
      where("Peso", ">", numero),
      orderBy("Peso","asc"),
      
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
  if(orden.value=="Pesodesc"){
    producto=parseFloat(producto);
    const consulta = query(
      listaCompraColeccion,
      
      where("Peso", ">", numero),
      orderBy("Peso","desc"),
      
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


const filtrarProductos = async () => {
  let datosBusqueda = document.getElementById("valor");
  tipoFiltro = tipo.value;
    producto = datosBusqueda.value;
    datosBusqueda.value = "";
  if (tipo.value == "Nombre") {
    const consulta = query(
      listaCompraColeccion,
      where("Nombre", "==", producto),
      
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

//Función que rellena el formulario al pulsar el boton del producto.
const rellenarFormulario = async(ref)=>{
const productoEditarID= await doc(listaCompraColeccion, ref);
const p = await getDoc(productoEditarID);
document.getElementById("nombreM").value= p.data().Nombre;
document.getElementById("precioM").value= p.data().Precio;
document.getElementById("pesoM").value= p.data().Peso;
document.getElementById("imagenM").value=p.data().Imagen;
document.getElementById("descripcionM").value=p.data().descripcion;
}

//Función para guardar el producto.
const guardarProducto = async (objeto) => {
  const compraGuardada = await addDoc(listaCompraColeccion, objeto);
  info.innerHTML = `<p class='bien'>Compra guardada con el id ${compraGuardada.id}</p>`;
  plantillas.borrar(info);
 obtenerListaCompra();
 
  
};

 //Función para borrar el producto.
 const borrarProducto = async (id) => {
  const resultado = await deleteDoc(doc(listaCompraColeccion, id));
  info.innerHTML = `<p class='bien'>${id} borrado con éxito.</p>`;
  plantillas.borrar(info);
  obtenerListaCompra();
};

//Función para actualizar el producto.
const actualizarProducto = async (id) => {
  const pruebaRef = await doc(listaCompraColeccion, id);
  await updateDoc(pruebaRef, modificarProducto());
};

//Función que crea un usuario 6.3
const crearUsuario = async (usuario, contra) => {
    try {
      const credenciales = await createUserWithEmailAndPassword(
        autentificacion,
        usuario,
        contra
      );
      // Se comprueba la estructura del nuevo objeto.
      console.log(credenciales);
      console.log(credenciales.user.uid);
      console.log(alias.value);
      //no funciona darle una vuelta.
      const docuRef= doc(listaCompraUsuarioColeccion, credenciales.user.uid);
      setDoc(docuRef,{
        alias:alias.value,
        rol:"usuario"
        
      });
      
      
    } catch (error) {
      informacion.innerHTML = `Ha habido un error: ${error.message}`;
    }
  };

  const iniciarSesion = (usuario, contra) => {
    signInWithEmailAndPassword(autentificacion, usuario, contra)
      .then((credenciales) => {
         console.log("Sesión Iniciada");
        console.log(credenciales.user);
        informe.innerHTML = `Ficha del usuario:<br>
                            Correo: ${credenciales.user.email}<br>
                            Nombre: ${credenciales.user.displayName}<br>
                            Correo verificado: ${credenciales.user.emailVerified}`;
        //obtenerDiscentesSnap(); 
        //Cuando inicias sesión hacer que desaparezca el formulario y el boton de iniciar sesión
        listasCompra();
        document.getElementById("cerrar").style.display="block";
        document.getElementById("iniciar").style.display="none";
      })
      .catch((error) => {
        informacion.innerHTML = `Ha habido un error: ${error.message}`;
      });
  };

  const cerrarSesion = () => {
    try {
      autentificacion.signOut();
      
      informe.innerHTML = `Sesión cerrada.`; 
    } catch (error) {
      informacion.innerHTML = `Ha habido un error: ${error.message}`;
    }
  };

  //Listar listas compra.
const listasCompra = async () => {
  const listasDocumentos = await getDocs(listaCompra);
  listasDocumentos.docs.map( async (d) => {
    let listasCompra = d.data();
    if(autentificacion.currentUser.uid === d.data().propietario){
      let nombreListas = `<button id='${d.id}'>${listasCompra.nombre}</button>`;
    document.getElementById("divListas").innerHTML += nombreListas;
    }else{
      document.getElementById("divListas").innerHTML += `<h2>No hay listas creadas por este usuario</h2>`;
    }

  });
};


//Pinto los productos de la lista. Pulir mañana
const pintarProductosLista = async (id) => {
  
  const idLista = await doc(listaCompra, id);
  const lista = await getDoc(idLista);
  lista.data().articulos.map( async (artID) => {
    console.log(artID);
    //let datos = await doc(listaCompraProductos, artID);

    // let docProductos = await doc(listaCompraProductos, artID);
    // let datos = await getDoc(docProductos);
    // console.log(datos.data().Nombre);
  });
};

//Función para obtener la fecha de hoy formateada.
function formatoFecha(fecha, formato) {
  const map = {
      dd: fecha.getDate(),
      mm: fecha.getMonth() + 1,
      yyyy: fecha.getFullYear()
  }

  return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
}
// Crea un objeto lista.
const crearObjetoListas = () => {
  const hoy = new Date();
  let nombre = document.getElementById("nombreLista").value;
  let objeto = {
    nombre: nombre,
    propietario: autentificacion.currentUser.uid,
    fecha: formatoFecha(hoy, 'dd/mm/yyyy'),
    articulos: []
  }
  return objeto;
};

const guardarLista = async (objeto) => {
  const listaGuardada = await addDoc(listaCompra, objeto);
  info.innerHTML = `<p class='bien'>Compra guardada con el id ${listaGuardada.id}</p>`;
  plantillas.borrar(info);

 
  
};

  export {obtenerListaCompra,filtrarProductos,crearUsuario,iniciarSesion,cerrarSesion,generarProducto,modificarProducto,guardarProducto,borrarProducto,actualizarProducto,ordenarProductos,rellenarFormulario,listasCompra,pintarProductosLista,crearObjetoListas,guardarLista};