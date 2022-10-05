import React from "react";
function Película(props){
    //código javascript
    
    return(
        <React.Fragment>
          <hi><b>{props.titulo}</b></hi>  
            <h3>{props.dirección}</h3>
            <img src={props.enlace}></img>
            <p>{props.resumen}</p>
        </React.Fragment>
    );
}
export default Película;