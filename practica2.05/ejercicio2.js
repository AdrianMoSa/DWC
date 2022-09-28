"use script";
//var mytimeout=setTimeout(temporizador(2,25),10000);
function temporizador(minutos,segundos){
    var totalSegundos=(minutos*60)+segundos;
for(var i=0;i<totalSegundos;setInterval(i++,1000)){
    if(segundos==0){
        segundos=60;
        minutos--;
    }
    
    segundos--;
    console.log(`Quedan un total de ${minutos} minutos y ${segundos} segundos `);
}

}
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