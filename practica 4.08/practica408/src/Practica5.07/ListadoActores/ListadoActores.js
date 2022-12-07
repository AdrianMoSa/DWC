import React from "react";

function ListadoActores(props) {
  return (
    <React.Fragment>
      <h2>Actores</h2>
      <ul>
        {props.datos.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="actores"
                  onClick={() => {
                    props.funcion(v.value.url);
                  }}
                >
                  {v.value.name}
                </li>
              );
            })
          : "No se han detectado los actores."}
      </ul>
    </React.Fragment>
  );
}

export default ListadoActores;