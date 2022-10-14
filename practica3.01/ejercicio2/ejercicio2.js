"use stricted"
var doc=window.document;

function nuevoNumero(){
    var elemento= doc.createElement("li");
    var random=Math.trunc(Math.random()*1000+1);
    elemento.innerHTML=random;
    doc.getElementById("botones").appendChild(elemento);
}