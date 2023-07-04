import React, { useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Muestra el listado de las naves.
function ListadoNaves(props) {
  const contexto=useContext(datosContexto);
  return (
    <React.Fragment>
      <h2>Naves</h2>
      <ul>
        {contexto.naves.length !== 0
          ? contexto.naves.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="naves"
                  onClick={() => {
                    contexto.getDatosNave(v.value.url);
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