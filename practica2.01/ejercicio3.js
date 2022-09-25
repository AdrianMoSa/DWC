"use strict";
function multiplicar(multiplicador=prompt('Introduce el número de veces que quieres multiplicar: ',''),multiplicado=prompt('Introduce el número que deseas multiplicar: ', '')){
 var acumulador=0;
   for(var i=0;i<multiplicador;i++){
       
         if(i===0){
            console.log(acumulador=multiplicado);
         }
         else{
            console.log(acumulador=acumulador*2);
         } 
   }
}
multiplicar();
