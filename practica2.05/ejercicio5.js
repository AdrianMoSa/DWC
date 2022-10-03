"use strict"
//Función que te dice los números de DNI de una letra entre los numeros asignados.
function dniLetra(letraDni){
    var secuenciaLetrasNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
    if(letraDni==letraDni.toUpperCase()){
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
else{
    console.log("Introduce una letra mayuscula ");
} 
}
dniLetra("A");