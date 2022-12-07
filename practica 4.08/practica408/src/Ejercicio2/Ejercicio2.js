import React,{useState,useEffect} from "react";
import { cambiarColor } from "../Bibliotecas/Bibliotecas";

function Ejercicio2(){

      //Función que cada vez que hagas click sobre la pantalla hará que te cambie el color y cuando remuevas el componente lo quitará
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
