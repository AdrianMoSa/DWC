"use strict";
var multiplicador=prompt('Introduce el número de veces que quieres multiplicar: ','');
var multiplicado=prompt('Introduce el número que deseas multiplicar: ', '')
var acumulador=0;
multiplicar(multiplicador,multiplicado);

function multiplicar(multiplicador1, multiplicado2){
for(var i=0;i<multiplicador1;i++){
       
         if(i===0){
            console.log(acumulador=multiplicado2);
         }
         else{
            console.log(acumulador=acumulador*2);
         } 
}
return acumulador;
}
