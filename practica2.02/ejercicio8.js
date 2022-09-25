"use strict";
var curso={
    nombreCurso:"DAW",
    año:"2022",
    descripción:"Desarrolo de aplicaciones web",
    alumnado:["Manolo","Juan","Pepe"],
    matricular(){
        var objeto=Object.assign(curso.alumnado,estudiantes);
       return objeto;
    }
   
}
var estudiantes={
    nombre:"Paco",
    apellidos:"Martinez Soria"
}
curso.matricular(estudiantes);
console.log(curso);