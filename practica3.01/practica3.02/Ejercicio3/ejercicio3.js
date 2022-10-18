"use strict";

// Seleccionamos primero los párrafos del documento y le agregamos un evento que añade una clase al hacer click.
let parrafos = document.querySelectorAll('#parrafos p');
parrafos.forEach((p) => {
    p.addEventListener('click',() => {
        p.classList.add('ocultar');
    });
});

//Elimina al quitar el ratón
parrafos.forEach((p) => {  
    p.addEventListener('mouseout',() => {
        p.classList.add('eliminar');
    });
});

//Con esto mostraria los párrafos ocultos pero hace conflicto con el evento anterior.
let boton = document.querySelector('.button');
boton.addEventListener('click',() => {
    parrafos.forEach((p) => {
        p.classList.add('mostrar');
    })
})