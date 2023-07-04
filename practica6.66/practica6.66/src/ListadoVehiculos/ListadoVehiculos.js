import React, { useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Muestra el listado de vehiculos.
function ListadoVehiculos(props) {
  const contexto= useContext(datosContexto);
  return (
    <React.Fragment>
      <h2>Vehiculos</h2>
      <ul>
        {contexto.vehiculos.length !== 0
          ? contexto.vehiculos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="naves"
                  onClick={() => {
                    contexto.getDatosVehiculo(v.value.url);
                  }}
                >
                  {v.value.name}
                </li>
              );
            })
          : "No se han detectado los vehiculos."}
      </ul>
    </React.Fragment>
  );
}

export default ListadoVehiculos;