"use script";
var alumnado={
    id:"12345",
    nombre:"Paco",
    apellidos:"Meralgo Bueno",
    aficiones:["comer","saborear"],
    notas:{
        primera:5,
        segunda:8,
        tercera:9,
    },
    };
    //Para hacer calculos en un objeto se necesitará pasar a un array los parametros.
    function calcularMedia(){
       var contador=0;
        var acumulador=0;
        
        array=(Object.values(alumnado.notas));
        for(var i=0;i<array.length;i++){
            acumulador+=array[i];
            contador++;
        }
        
        acumulador=acumulador/contador;
       
        return console.log(`La nota media de los tres trimestres es: ${acumulador} `);
    }
    function imprimirAficciones(){
        for(var aficion in alumnado){
            console.log(`Las aficiones del alumno son: ${alumnado.aficiones}`);
        }
    }
    function imprimirInforme(){
        array=(Object.values(alumnado.notas));
        for(var objeto in alumnado ){
            console.log(`Id: ${alumnado.id}. Nombre: ${alumnado.nombre}. Apellidos: ${alumnado.apellidos}.Las aficiones del alumno son: ${alumnado.aficiones}. Sus notas son: ${array} `)
        }
    }
    imprimirInforme();
    