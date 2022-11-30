import React,{useState,useEffect} from "react";

function Ejercicio1(){
    const[ejeX,setEjeX]= useState(0);
    const[ejeY,setEjeY]= useState(0);

    const mostrarPuntero=(evento)=>{
        setEjeX(evento.screenX);
        setEjeY(evento.screenY);
        
    };

    useEffect(() => {

        window.addEventListener("mousemove", mostrarPuntero);

        return () => {
            window.removeEventListener("mousemove", mostrarPuntero);
          };

      }, []);
    return(
        <React.Fragment>
            <p> Eje x: {ejeX}</p>
            <p> Eje y: {ejeY}</p>
        </React.Fragment>
    );
}
export default Ejercicio1;