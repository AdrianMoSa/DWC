import React from "react";


    //Función para generar un numero aleatorio.
    function generarNumeroAleatorio(){
        return(Math.floor(Math.random() * 255));
    };
    //Función para cambiar el color de la pantalla.
    const cambiarColor=()=>{
        var numero1=generarNumeroAleatorio();
         var numero2=generarNumeroAleatorio();
         var numero3=generarNumeroAleatorio();
        document.body.style.backgroundColor="rgb(" + numero1 + "," + numero2 + "," + numero3 + ")";
    };

    export{generarNumeroAleatorio,cambiarColor};