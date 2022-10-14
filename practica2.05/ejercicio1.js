"use strict"
//Función que sirve para pasar una frase a cani.

function tocani(frase){
var arrayFinal=[];
var letra="H";
var intervalo=Math.floor((Math.random() * (5 - 2 + 1)) + 2);


   for(var i=0;i<frase.length;i++){
    if(i%2==0){
        arrayFinal[i]=frase[i].toUpperCase();
    }
    else{
        arrayFinal[i]=frase[i].toLowerCase();
    }
    if(frase[i]==="c"){
        arrayFinal[i]="k";
    }
    else if(frase.charAt(i)==="C"){
        arrayFinal[i]="K";
    }

    }
    arrayFinal.push(letra.repeat(intervalo))
    return console.log(arrayFinal.join(""));
}
tocani("Somos especiales");