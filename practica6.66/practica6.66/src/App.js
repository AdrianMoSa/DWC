import React from 'react';
import ListadoPeliculas from './ListadoPeliculas/ListadoPeliculas';
import DatosProveedor from './contexto/DatosProveedor';
import Pelicula from './Pelicula/Pelicula';
import ListadoActores from './ListadoActores/ListadoActores';
import Actor from './Actor/Actor';
import Vehiculo from './Vehiculo/Vehiculo';
import ListadoVehiculos from './ListadoVehiculos/ListadoVehiculos';
import ListadoNaves from './ListadoNaves/ListadoNaves';
import Nave from './Nave/Nave';
import "./Style.css";


function App() {

  return (
    <React.Fragment>
      <h1>STAR WARS</h1>
      <div className="Contenedor">
    <DatosProveedor>
    <div id="listadoPeliculas">
    <ListadoPeliculas/>
    </div>
    <Pelicula/>
    <div id="listadoActores">
    <ListadoActores/>
    </div>
    <Actor/>
    <div id="listadovehiculos">
    <ListadoVehiculos/>
    </div>
    <Vehiculo/>
    <div id="listadoNaves">
    <ListadoNaves/>
    </div>
    <Nave/>
    </DatosProveedor>
    </div>
    </React.Fragment>
  );
}

export default App;
