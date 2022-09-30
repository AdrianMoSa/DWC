"use strict"
function dniLetra(letraDni){
    var secuenciaLetrasNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
    
    for(var i=0;i<secuenciaLetrasNIF.length;i++){
        if(letraDni===secuenciaLetrasNIF[i]){
            var posicionletra=i;
            console.log(posicionletra)
        }
    }
    for(var i=48357001;i<=48357999;i++){
        if((i%23)===posicionletra){
            console.log(`El dni ${i} tiene la letra ${letraDni}`);
        }
    }   
}
dniLetra("A");