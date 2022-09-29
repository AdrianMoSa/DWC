"use strict";

const id=setInterval(solicitarDni,10000);

function solicitarDni(){
var dni=prompt("Introduce tu dni sin letra: ");

if(dni==-1){
    clearInterval(id);
}

}