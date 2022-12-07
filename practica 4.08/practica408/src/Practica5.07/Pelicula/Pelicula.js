import React from "react";

function Pelicula(props){
    return(
        <React.Fragment>
            <h2>{props.datos.title}</h2>
            <p>
                Título: {props.datos.title}<br/>
                Director: {props.datos.producer}<br/>
                Fecha: {props.datos.release_date}<br/>
                Sinopsis: {props.datos.opening_crawl}<br/>
                
                
            </p>
        </React.Fragment>
    )
}

export default Pelicula;