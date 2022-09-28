"use strict";

function tocani(frase){
var array=Array.from(frase);
   for(var i=0;i<array.length;i++){
    frase=(frase.charAt(i).toUpperCase());
       /* if(array[i]===array[i].toUpperCase()){
            array[i]=array[i].toLowerCase()
            console.log("Funciona pasar a minusculas");
        }
        if(array[i]===array[i].toLowerCase()){
            array[i]=array[i].toUpperCase()
            console.log("Funciona pasar a mayusculas");
        }
       
        while(frase[i]===frase[i].toUpperCase()){
            frase[i]=frase[i].toLowerCase();
        }
        */
    }
    return console.log(frase);
}
tocani("escatergoris");