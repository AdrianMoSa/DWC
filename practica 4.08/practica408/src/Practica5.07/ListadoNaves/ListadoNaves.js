import React from "react";

function ListadoNaves(props) {
  return (
    <React.Fragment>
      <h2>Naves</h2>
      <ul>
        {props.datos.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="naves"
                  onClick={() => {
                    props.funcion(v.value.url);
                  }}
                >
                  {v.value.name}
                </li>
              );
            })
          : "No se han detectado las naves."}
      </ul>
    </React.Fragment>
  );
}

export default ListadoNaves;