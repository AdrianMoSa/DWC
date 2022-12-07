import React,{useState,useEffect} from "react";

function Ejercicio1(){
    const[ejeX,setEjeX]= useState(0);
    const[ejeY,setEjeY]= useState(0);
    
    //Esta función te muestra la localización del eje x y el eje y del puntero.
    const mostrarPuntero=(evento)=>{
        setEjeX(evento.screenX);
        setEjeY(evento.screenY);
        
    };
    //Al cargar la página se ejecuta esta función cada vez que mueves el puntero y cuando remueves el componente dejará de hacerlo.
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