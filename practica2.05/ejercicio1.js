"use strict";

function tocani(frase){
var array=Array.from(frase);
var arrayFinal=[];

   for(var i=0;i<array.length;i++){
    if(i%2==0){
        arrayFinal[i]=frase[i].toUpperCase();
    }
    else{
        arrayFinal[i]=frase[i].toLowerCase();
    }
    
    }
    return console.log(arrayFinal);
}
tocani("ESCATERGORIs");