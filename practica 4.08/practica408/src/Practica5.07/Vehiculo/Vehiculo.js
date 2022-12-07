import React from "react";
//Filtra los datos del vehículo.
function Vehiculo(props){
    return(
        <React.Fragment>
            <p>
                Nombre: {props.datos.name}<br/>
                Modelo: {props.datos.model}<br/>
                Longitud: {props.datos.length}<br/>
                
                
                
            </p>
        </React.Fragment>
    )
}

export default Vehiculo;