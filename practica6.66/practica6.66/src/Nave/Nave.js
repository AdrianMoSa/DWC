import React, { useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Filtra los datos de la nave.
function Nave(props){
    const contexto=useContext(datosContexto);
    return(
        <React.Fragment>
             <div id="datosNave">
        {Object.keys(contexto.nave).length !== 0 ? (
             <p>
             Nombre: {contexto.nave.name}<br/>
             Modelo: {contexto.nave.model}<br/>
             Velocidad Maxima: {contexto.nave.max_atmosphering_speed}<br/>
             
         </p>
          ) : (
            "No se ha seleccionado ninguna nave"
          )}
        </div>
           
        </React.Fragment>
    )
}

export default Nave;