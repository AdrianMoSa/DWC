"use strict";


let parrafos = document.querySelectorAll('#parrafos p');
parrafos.forEach((p) => {
    p.addEventListener('click',() => {
        p.classList.add('ocultar');
    });
});


parrafos.forEach((p) => {  
    p.addEventListener('mouseout',() => {
        p.classList.add('eliminar');
    });
});


let boton = document.querySelector('.boton');
boton.addEventListener('click',() => {
    parrafos.forEach((p) => {
        p.classList.add('mostrar');
    })
})