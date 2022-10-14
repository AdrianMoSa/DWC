"use strict"
var doc=window.document;

function añadirFila(){
    elemento=doc.createElement("td");
    elemento.innerHTML="";
    doc.getElementsByID("boton1").appendchild(elemento)
}



function tocani(frase){
    var arrayFinal=[];
    var letra="H";
    var intervalo=Math.floor((Math.random() * (5 - 2 + 1)) + 2);
    
    
       for(var i=0;i<frase.length;i++){
        if(i%2==0){
            arrayFinal[i]=frase[i].toUpperCase();
        }
        else{
            arrayFinal[i]=frase[i].toLowerCase();
        }
        if(frase[i]==="c"){
            arrayFinal[i]="k";
        }
        else if(frase.charAt(i)==="C"){
            arrayFinal[i]="K";
        }
    
        }
        arrayFinal.push(letra.repeat(intervalo))
        return console.log(arrayFinal.join(""));
    }
    function caniar(){
    var acani=doc.getElementById("ejemplo").innerHTML;
    tocani(acani);
    doc.replaceChild(acani,doc.getElementById("ejemplo").innerHTML);
    
    }