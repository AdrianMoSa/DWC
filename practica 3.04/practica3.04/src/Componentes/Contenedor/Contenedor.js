import React from 'react'
import { Portada } from '../Portada/Portada'
import { Resumen } from '../Resumen/Resumen'
import { Titulo } from '../Titulo/Titulo'
import peliculas from '../Ejercicio2.json'
import { Botones } from '../Botones/Botones'
import "./css/Contenedor.css"
export const Contenedor = () => {
    
  return (
    <React.Fragment>
       {peliculas.peliculas.map((peli)=>{
     
        return(
    <div>
    <Titulo nombre={peli.nombre}></Titulo>
    <div className="padre">
        <div>
            <Portada cartelera={peli.cartelera}></Portada>
        </div>
        <div>
            <Resumen resumen={peli.resumen}></Resumen> 
        </div>   
     </div>
    <Botones actores={peli.actores}taquilla={peli.taquilla}></Botones>
    
    </div>)
     })}
    </React.Fragment>
  )
}
