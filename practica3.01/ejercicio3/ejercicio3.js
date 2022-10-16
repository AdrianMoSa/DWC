"use strict"
var doc=window.document;
 //Me ha tocado cambiar la función de tocani porque devolvia un console.log y por eso no se escribia en la página. 
function añadirFila() {
      let bodyTabla=document.getElementById("bodyTabla").insertRow(0);
      let col=bodyTabla.insertCell(0);
      col.innerHTML=document.getElementById("texto").value;

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
        return arrayFinal.join("");
    }
    function caniar(){
    var traduccion=doc.createElement("tr")
    var acani=document.getElementById("texto").value;
    var frase=tocani(acani);
    traduccion.innerHTML=frase;
    doc.getElementById("bodyTabla").appendChild(traduccion).value;
    
    }