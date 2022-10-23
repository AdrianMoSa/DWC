import React,{useRef} from 'react';
import "./css/Botones.css";
export const Botones = (props) => {
    const referencia = useRef(null);
    const destino = useRef(null);
    function mostrarElenco(e){
    
    if(e.target.nextSibling.classList.value==="oculto"){
        e.target.nextSibling.classList.add("visible");
    }
     else{
        e.target.nextSibling.classList.value="oculto";
     }   
        destino.current.innerHTML=props.actores;
        
        
    }
    function mostrarTaquilla(a){
        if(a.target.nextSibling.classList.value==="oculto"){
            a.target.nextSibling.classList.add("visible");
        }
         else{
            a.target.nextSibling.classList.value="oculto";
         } 
        referencia.current.innerHTML=props.taquilla;
    }
  return (
    <div className="padre">
        <div>
        <button onClick={(mostrarElenco)} type="button">Elenco</button>
        <p className="oculto" ref={destino}></p>
        </div>
        <div>
        <button onClick={(mostrarTaquilla)} type="button">Taquilla</button>
        <p clasName="oculto" ref={referencia}></p>
        </div>
    </div>
  )
}
