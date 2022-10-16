"use stricted"
var doc=window.document;
//Función que mediante un botón te genera un número aleatorio del 1 al 1000.
function nuevoNumero(){
    var elemento= doc.createElement("li");
    var random=Math.trunc(Math.random()*1000+1);
    elemento.innerHTML=random;
    doc.getElementById("botones").appendChild(elemento);
}