import React,{useState,useEffect} from "react";

function Ejercicio2(){
    
    function generarNumeroAleatorio(){
        return(Math.floor(Math.random() * 255));
    };
    const cambiarColor=()=>{
        var numero1=generarNumeroAleatorio();
         var numero2=generarNumeroAleatorio();
         var numero3=generarNumeroAleatorio();
        document.body.style.backgroundColor="rgb(" + numero1 + "," + numero2 + "," + numero3 + ")";
    };
    
      useEffect(() => {

        window.addEventListener("click", cambiarColor);

        return () => {
            window.removeEventListener("click", cambiarColor);
          };

      }, []);
      return(
        <React.Fragment>
                
        </React.Fragment>
    );
    
 }
export default Ejercicio2;
