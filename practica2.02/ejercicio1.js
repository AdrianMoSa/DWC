"use strict";
var sumaNumeros= function(){
var i, acumulador=0;
    if(arguments.length<2){
        return console.log("Error: debes introducir mas de dos numeros para hacer una suma ");
    }
    else{
        for(i=0;i<arguments.length;i+=1){
            if(isNaN(arguments[i])){
                return console.log("Error: debes introducir numeros por parametro ");
             }
             else{
             acumulador+= arguments[i];
             }
        }
        return(`El resultado de la suma total es de ${acumulador}`); 
    }
   
}
console.log(sumaNumeros(2,1));
