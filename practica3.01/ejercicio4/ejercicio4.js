"use strict"


function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}

