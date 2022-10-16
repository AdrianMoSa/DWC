"use strict"
var doc=window.document;

//Función que utiliza la última referencia e inserta otra despues.
function insertAfter(nuevo, anterior) {
    anterior.parentNode.insertBefore(nuevo, anterior.nextSibling);
}
let palabras = document.getElementById('palabras');

let li = document.createElement('li');
li.textContent = 'Manolo';

insertAfter(li,  palabras.lastElementChild)

