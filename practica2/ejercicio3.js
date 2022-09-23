"use strict";
const longitud=10;
var random1=[];
var random2=[];
var sumando=[];
function tresVectores(vector1,vector2,vector3){
    for(var i=0;i<longitud;i++){
        vector1[i]=Math.floor(Math.random()*101);
    }
    for(var i=0;i<longitud;i++){
        vector2[i]=Math.floor(Math.random()*101);
    }
    for(var i=0;i<longitud;i++){
        vector3[i]=vector1[i]+vector2[(vector2.length-i)-1];
    }
    for(var i=0;i<longitud;i++){
        console.log(`vector1 ${vector1[i]} + vector2 ${vector2[(vector2.length-i)-1]} = ${vector3[i]}`);
    }
}
    tresVectores(random1,random2,sumando);
/*
function arrayAleatorio(){
    var aleatorio=[];
    for(var i=0;i<longitud;i++){
        aleatorio[i]=Math.floor(Math.random()*101);
        
    }
   return aleatorio;
}
function mostrarArray(){
     var array=arrayAleatorio();
    for (var i=0;i<longitud;i++){
        console.log(`array posicion ${i}: ${array[i]}`);
    }
} 
function suma(){
    var array1=arrayAleatorio();
    var array2=arrayAleatorio();
    var array3=[];
    for (var i=0;i<array1.length;i++){
        console.log(`array1: ${array1[i]}`)
        console.log(`array2: ${array2[i]}`)
        array3[i]=array1[i]+array2[(array2.length-i)-1];
        console.log(array3[i]);
    }
}  
suma();
*/