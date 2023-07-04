import React, { useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Muestra el listado de actores.
function ListadoActores(props) {
  const contexto=useContext(datosContexto);
  return (
    <React.Fragment>
      <h2>Actores</h2>
      <ul>
        {contexto.elenco.length !== 0
          ? contexto.elenco.map((v, i, a) => {
            while(i<10){
              return (
                <li
                  key={i}
                  className="actores"
                  onClick={() => {
                    contexto.getDatosElenco(v.value.url);
                  }}
                >
                  {v.value.name}
                </li>
              );
                }
            })
          : "No se han detectado los actores."}
      </ul>
    </React.Fragment>
  );
}

export default ListadoActores;