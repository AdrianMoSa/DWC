"use strict";
function asignatura(){
    var curso={
    nombreCurso:"DAW",
    año:"2022",
    descripción:"Desarrolo de aplicaciones web",
    alumnado:["Manolo","Juan","Pepe"],
    }
    return curso;
    };

function informe(curso){
    
    for(daw in curso){
        console.log(`El curso: ${curso.descripción}. Cuya descripción es: ${curso.descripción}. Impartido en el año: ${curso.año}. Cuenta con los alumnos: ${curso.alumnado}`);
    }
}
var daw=asignatura();
informe(daw);