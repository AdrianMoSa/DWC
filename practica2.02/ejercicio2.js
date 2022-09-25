"use strict";
function multiplicar(numero){
    var resultado="";
    for(var i=numero;i>=2;i--){
        for(var j=1;j<=10;j++){
            resultado=i*j;
            console.log(`${i} * ${j} = ${resultado}`);
          
        }    
    }  
}

function tabla(numero,funcion){
   funcion(numero);
   
}
tabla(4,multiplicar);