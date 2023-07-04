import React, { useContext } from "react";
import { datosContexto } from "../contexto/DatosProveedor";
//Filtra los datos a mostrar de actor.
function Actor(){
    const contexto= useContext(datosContexto);
    return(
        <React.Fragment>
            <div id="datosActor">
          {Object.keys(contexto.actor).length !== 0 ? (
               <p>
               Nombre: {contexto.actor.name}<br/>
               Genero: {contexto.actor.gender}<br/>
               Altura: {contexto.actor.height}<br/>
               Peso: {contexto.actor.mass}<br/>
               Color de pelo: {contexto.actor.hair_color}<br/>
               Color de piel:{contexto.actor.skin_color}  
           </p>
          ) : (
            "No se ha seleccionado ningun actor"
          )}
        </div>
        
        </React.Fragment>
    )
}

export default Actor;