import React from "react";

function ListadoPeliculas(props) {
  return (
    <React.Fragment>
      <h2>Peliculas</h2>
      <ul>
        {props.datos.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="pelicula"
                  onClick={() => {
                    props.funcion(v.url);
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