"use strict"
var doc=window.document;
document.body.onload=creardiv;
var numeroParrafos= document.querySelectorAll("p").length;
var textoSegundoParrafo= document.querySelector("p:nth-child(2)").innerHTML;
var numeroEnlacesPagina=document.querySelectorAll("a").length;
var direccionPrimerEnlace=document.querySelector("a:first-child");
var direccionPenultimoEnlace=document.querySelector("a:nth-last-child(2)")


function creardiv(){
    
    var nuevoContenido=(`El numero de parrafos es de un total de ${numeroParrafos}, El texto del segundo párrafo es: ${textoSegundoParrafo}, el numero de enlaces totales en la pagina es ${numeroEnlacesPagina} , la dirección del primer enlace es: ${direccionPrimerEnlace} y la dirección del penúltimo enlace es ${direccionPenultimoEnlace}`);
    var div=document.getElementById("info");
    div.innerHTML=nuevoContenido;
    

}


