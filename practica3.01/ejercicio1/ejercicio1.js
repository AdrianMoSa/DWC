"use strict"

let numeroParrafos= document.querySelectorAll("p");
let textoSegundoParrafo= document.querySelector("p:nth-child(2)").innerHTML;
let numeroEnlacesPagina=document.querySelectorAll("a").length;
let direccionPrimerEnlace=document.querySelector("a:first-child").getAttribute("href");

let info=document.getElementById("info");
numeroParrafos.forEach((p)=>{
    console.log(info.appendChild(p));
})


