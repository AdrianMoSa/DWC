import React from "react";

function Nave(props){
    return(
        <React.Fragment>
            <p>
                Nombre: {props.datos.name}<br/>
                Modelo: {props.datos.model}<br/>
                Velocidad Maxima: {props.datos.max_atmosphering_speed}<br/>
                
                
                
            </p>
        </React.Fragment>
    )
}

export default Nave;