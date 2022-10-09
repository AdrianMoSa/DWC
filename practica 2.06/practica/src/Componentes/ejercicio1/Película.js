import React from "react";
function Película(props){
    //código javascript
    
    return(
        <React.Fragment>
          <h1><b>{props.título}</b></h1>  
            <h3>{props.dirección}</h3>
            <img src={props.enlace}></img>
            <p>{props.children}</p>
        </React.Fragment>
    );
}
export default Película;