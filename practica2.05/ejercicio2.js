"use script";


var minutos=1;
var segundos=5;
const id=setInterval(temporizador,1000);



function temporizador(){
  terminar=false;

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





