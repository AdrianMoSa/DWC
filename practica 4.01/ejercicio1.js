"use strict"
var intervalo;

//Si creaba con un template los botones desde el js , no me interactuaba el pararSaludo si estaba la función saludar activa.
window.onload=function(){
        
    var botonSaludar=document.getElementById("comenzar");
    var botonParar=document.getElementById("parar");

    botonSaludar.addEventListener("click",comenzarSaludo);
    botonParar.addEventListener("click",pararSaludo);

  
}
function comenzarSaludo(){
    
    intervalo=setInterval(saludar, 1000);
    
}

function saludar(){
    let saludos=document.getElementById("saludos")
    saludos.innerHTML += `<h1>Hola feo</h1>`;
}

function pararSaludo(){
    
    clearInterval(intervalo);    
}