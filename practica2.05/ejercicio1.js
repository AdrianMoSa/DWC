"use strict";

function tocani(frase){
    for(var i=0;i<frase.length;i++){
        while(frase.charAt(i)===frase.charAt(i).toLowerCase()){
            frase.charAt(i)=frase.charAt(i).toUppercase();
        }
        
      /*  while(frase[i]===frase[i].toUpperCase()){
            frase[i]=frase[i].toLowerCase();
        }
        */
    }
    return console.log(frase);
}
tocani(["hOla"]);