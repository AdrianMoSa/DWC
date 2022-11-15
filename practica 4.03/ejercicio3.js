"use strict";
window.onload = () => {
let datosDiscos=[];
let mensajeConfirmacion="";
let divDatos=document.querySelector('.divDatos');
var anyo=document.getElementById("anyo").value;


//Función que crea un disco en un array como un objeto.
function guardarDiscos(){
    var nombre=document.getElementById("disco").value;
    var grupo=document.getElementById("grupo").value;
    var anyo=document.getElementById("anyo").value;
    var tipo= document.getElementsByName("musica");
    var valorRadio;
    for(let i=0; i<tipo.length; i++){
        if(tipo[i].checked){
            valorRadio = tipo[i].value;
        }
    }


var numeroEstanteria=document.getElementById("numeroEstanteria").value
var prestado = document.getElementsByName('prestado');
var valorPrestado = "";
for(let i=0; i<prestado.length; i++){
    if(prestado[i].checked){
        valorPrestado = prestado[i].value;
    }
}
var discoNuevo={
    nombre:nombre,
    grupo:grupo,
    anyo:anyo,
    tipo: valorRadio,
    localizacion: numeroEstanteria,
    prestado: valorPrestado,
}
datosDiscos.push(discoNuevo);
}

//Función que muestra los discos guardados debidamente formateados.
let mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarDiscos, false);
function mostrarDiscos(){
    let discos = datosDiscos;
    let result = "";
    let ul = document.createElement('ul');
    for(let i in discos){
        result = `<li>Nombre: ${discos[i].nombre}</li>
                    <li>Grupo: ${discos[i].grupo}</li>
                    <li>Año: ${discos[i].anyo}</li>
                    <li>Tipo: ${discos[i].tipo}</li>
                    <li>Localización: ${discos[i].localizacion}</li>
                    <li>Prestado: ${discos[i].prestado}</li>
                    <br>`;
            ul.innerHTML += result;
            divDatos.append(ul);
            let mensaje = document.getElementById('mensaje');
            mensaje.innerHTML = "";
    }
    
    
}

let guardar = document.getElementById('btn')
guardar.addEventListener('click', guardarDatosDiscos, false);
//función que guarda el disco.
function guardarDatosDiscos(){
    mensajeConfirmacion = `<p id="mensaje">Disco guardado</p>`;
    divDatos.innerHTML = mensajeConfirmacion;
    return guardarDiscos();
}

}
