"use strict";
var valorFacturas=[124,48,268];
var arrayPropinas=[];
var arrayFacturaTotal=[];
function calculadoraDePropinas(array){

    for(var i=0;i<valorFacturas.length;i++){
        if(array[i]<50){
            arrayPropinas[i]=array[i]*0.20;
        }
        else if(array[i]>50&&array[i]<200){
            arrayPropinas[i]=array[i]*0.15;
        }
        else if(array[i]>200){
            arrayPropinas[i]=array[i]*0.10;
        }
    }
    for(var i=0;i<valorFacturas.length;i++){
        arrayFacturaTotal[i]=(array[i]+arrayPropinas[i]);
    }
    for(var i=0;i<valorFacturas.length;i++){
        console.log(`El precio del restaurante es de: ${array[i]}, la propina sería de: ${arrayPropinas[i]} y haria un total de ${arrayFacturaTotal[i]} `); 
    }
    
}
calculadoraDePropinas(valorFacturas);