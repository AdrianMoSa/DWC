import React, { useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Filtra los datos del vehículo.
function Vehiculo(props){
    const contexto= useContext(datosContexto);
    return(
        <React.Fragment>
             <div id="datosVehiculo">
        {Object.keys(contexto.vehiculo).length !== 0 ? (
             <p>
             Nombre: {contexto.vehiculo.name}<br/>
             Modelo: {contexto.vehiculo.model}<br/>
             Longitud: {contexto.vehiculo.length}<br/>  
         </p>
          ) : (
            "No se ha seleccionado ningun vehículo"
          )}
        </div>
           
        </React.Fragment>
    )
}

export default Vehiculo;