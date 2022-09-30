"use strict"

//Programa que realiza un decremento de minutos y segundos. Mediante setInterval se ejecuta el decremento cada segundo.

var minutos=1;
var segundos=5;
var totalSegundos=((minutos*60)+segundos);
const id=setInterval(temporizador,1000);



function temporizador(){
 
  terminar=false;
  if(isNaN(minutos)||isNaN(segundos)){
    console.log("Datos incorrectos: debes introducir números. ");
  }
  else if(minutos<0||segundos>59||segundos<0){
    console.log("Datos incorrectos: debes introducir los números correctamente.")
  }
  else{
    if(segundos==0){
        segundos=60;
        minutos--;
    }
    
    
    segundos--;
    
    console.log(`Quedan un total de ${minutos} minutos y ${segundos} segundos `);
    
    if(segundos===0&&minutos==0){
      clearInterval(id);
    }
  }
}





