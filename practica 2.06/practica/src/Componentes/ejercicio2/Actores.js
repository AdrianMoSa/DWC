import React from "react";

function Actores(props){
//Código html.
    return(
    <React.Fragment>
        <h3>{props.nombre}</h3>
        <img src={props.foto}></img>
        <p>{props.children}</p>
    </React.Fragment>
    );
}
export default Actores;