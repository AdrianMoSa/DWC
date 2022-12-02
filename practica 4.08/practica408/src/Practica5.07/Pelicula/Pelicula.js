import React from "react";

function Pelicula(props){
    return(
        <React.Fragment>
            <h2>{props.datos.name}</h2>
            <p>
                Título {props.datos.name}<br/>
                Sinopsis{props.datos.opening_crawl}
            </p>
        </React.Fragment>
    )
}