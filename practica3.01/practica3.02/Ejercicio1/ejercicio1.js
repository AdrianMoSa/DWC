"use strict";
function elCensurador(){
    const nodos = document.body.childNodes; 
//recorremos los nodos, luego escribimos lo que queremos hacer y añadimos el bloqueado.
    nodos.forEach((nodo) => { 
        if(nodo.textContent.includes('sexo')){ 
            nodo.innerHTML = "Contenido BLoqueado"; 
            nodo.classList.add('bloqueado'); 
        }
    
    });
}

elCensurador();