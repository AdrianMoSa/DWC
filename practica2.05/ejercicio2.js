"use script";

function temporizador(minutos,segundos){
    var totalSegundos=(minutos*60)+segundos;
    console.log(`Quedan un total de ${minutos} minutos y ${segundos} segundos `);
for(var i=0;i<totalSegundos;setTimeout(i++,1000)){
    if(segundos==0){
        segundos=60;
        minutos--;
    }
    
    segundos--;
    console.log(`Quedan un total de ${minutos} minutos y ${segundos} segundos `);
}

}
//var mytimeout=setTimeout(temporizador(2,25),1000);
temporizador(2,25);
/*
var s = 1;
var idTimeout = setTimeout(() => {
  let idHola = setInterval(() => {
    if (s == 5) {
      clearInterval(idHola);
    }
    console.log("Hola");
    s++;
  }, 1000);
}, 5000);
let idAdion = setInterval("console.log('adiós');", 1000); 
*/