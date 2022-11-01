"use strict"
window.onload=function(){

var pNuevo=document.createElement("p");
document.body.appendChild(pNuevo);
document.addEventListener('mousemove',mostrarPuntero);

function mostrarPuntero(evento){
    pNuevo.innerHTML=
        `Pantalla X/Y: ${evento.screenX}, ${evento.screenY}`;//El screen te hace las coordenadas de la pantalla.
    
}




}