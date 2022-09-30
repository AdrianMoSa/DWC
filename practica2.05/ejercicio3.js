"use strict"

const id=setInterval(solicitarDni,10000);

function solicitarDni(){
var secuenciaLetrasNIF = "TRWAGMYFPDXBNJZSQVHLCKE";
var dni=[prompt("Introduce tu dni sin letra: ")];
var letraDni=[];
var resultado;

if(dni==-1){
    clearInterval(id);
    }
    else{
        for(var i=0;i<dni.length;i++){
            resultado=dni%23;
            letraDni[i]=secuenciaLetrasNIF.charAt(resultado);
            console.log(`La letra del dni: ${dni} es ${letraDni}`);
            }
    }
    
}

