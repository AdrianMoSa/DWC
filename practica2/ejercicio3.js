"use strict";
const longitud=100;
var vector1=[];
var vector2=[];
var vector3=[];
function mostrarArray(vector1,vector2,vector3){
    for(var i=0;i<longitud;i++){
        console.log(`vector1 ${i+1}: ${vector1[i]}`);
    }
    for(var i=0;i<longitud;i++){
        console.log(`vector2 ${i+1}: ${vector2[i]}`);
    }
    for(var i=0;i<longitud;i++){
        console.log(`vector3 ${i+1}: ${vector3[i]}`);
    }
}
function rellenarArrays(vector1,vector2){
    for(var i=0;i<longitud;i++){
        vector1[i]=Math.floor(Math.random()*101);
    }
    for(var i=0;i<longitud;i++){
        vector2[i]=Math.floor(Math.random()*101);
    }
}
function sumaArrays(vector1,vector2,vector3){
    for(var i=0;i<longitud;i++){
        vector3[i]=vector1[i]+vector2[(vector2.length-i)-1];
    }
}
function calcular(rellenarArrays,sumaArrays,mostrarArray){
    rellenarArrays(vector1,vector2);
    sumaArrays(vector1,vector2,vector3);
    mostrarArray(vector1,vector2,vector3);
}
    calcular(rellenarArrays,sumaArrays,mostrarArray);
