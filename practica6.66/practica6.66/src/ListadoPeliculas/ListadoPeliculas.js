import React, { createContext, useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Muestra el listado de Películas.
function ListadoPeliculas(props) {
const contexto=useContext(datosContexto);
  return (
    <React.Fragment>
      <h2>Peliculas</h2>
      <ul>
        {contexto.peliculas.length !== 0
          ? contexto.peliculas.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="pelicula"
                  onClick={() => {
                    contexto.getDatosPelicula(v.url);
                  }}
                >
                  {v.title}
                </li>
              );
            })
          : "No se han detectado las peliculas."}
      </ul>
    </React.Fragment>
  );
}

export default ListadoPeliculas;