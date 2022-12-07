import React from "react";

function Actor(props){
    return(
        <React.Fragment>
            <p>
                Nombre: {props.datos.name}<br/>
                Genero: {props.datos.gender}<br/>
                Altura: {props.datos.height}<br/>
                Peso: {props.datos.mass}<br/>
                Color de pelo: {props.datos.hair_color}<br/>
                Color de piel:{props.datos.skin_color}
                
                
            </p>
        </React.Fragment>
    )
}

export default Actor;