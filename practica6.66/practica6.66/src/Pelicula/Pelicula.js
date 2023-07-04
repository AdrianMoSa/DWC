import React, { useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Filtra los datos de la película.
function Pelicula(){
    const contexto= useContext(datosContexto);
    return(
        <React.Fragment>
          <div id="datos">
          {Object.keys(contexto.pelicula).length !== 0 ? (
            <div>
              <h2>{contexto.pelicula.title}</h2>
              <p>
                  Título: {contexto.pelicula.title}<br/>
                  Director: {contexto.pelicula.producer}<br/>
                  Fecha: {contexto.pelicula.release_date}<br/>
                  Sinopsis: {contexto.pelicula.opening_crawl}<br/>   
              </p>
              </div>
          ) : (
            "No se ha seleccionado una pelicula de la lista"
          )}
        </div>

        </React.Fragment>
    )
}

export default Pelicula;