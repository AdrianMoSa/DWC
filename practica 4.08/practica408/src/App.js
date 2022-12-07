import React, { useState, useEffect } from "react";
import { obtenerDatos } from "./Bibliotecas/getDatos";
import Pelicula from "./Practica5.07/Pelicula/Pelicula";
import ListadoPeliculas from "./Practica5.07/ListadoPeliculas/ListadoPeliculas";
import ListadoActores from "./Practica5.07/ListadoActores/ListadoActores";
import Actor from "./Practica5.07/Actor/Actor";
import ListadoNaves from "./Practica5.07/ListadoNaves/ListadoNaves";
import Nave from "./Practica5.07/Nave/Nave";
import ListadoVehiculos from "./Practica5.07/ListadoVehiculos/ListadoVehiculos";
import Vehiculo from "./Practica5.07/Vehiculo/Vehiculo";

function App() {
  const url = "https://swapi.py4e.com/api/films/";
  const valoresIniciales = [];
  const peliculaInicial = {};
  const [peliculas, setPeliculas] = useState(valoresIniciales);
  const [pelicula, setPelicula] = useState(peliculaInicial);
  const [elenco, setElenco] = useState(valoresIniciales);
  const [actor, setActor] = useState(peliculaInicial);
  const [naves, setNaves] = useState(valoresIniciales);
  const [nave, setNave] = useState(peliculaInicial);
  const [vehiculos, setVehiculos]= useState(valoresIniciales);
  const [vehiculo, setVehiculo]= useState(peliculaInicial);

  const getPeliculas = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setPeliculas(datos.results);
    }
  };

  const getDatosPelicula = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setPelicula(datos);
      getElenco(datos.characters);
    }
  };
  //Esta función recoge las urls y muestra el contenido.
  const getElenco = async (origen) => {
    let arrayPromesasPersonajes = origen.map(async (actores) => {
      return obtenerDatos(actores);
    });
    Promise.allSettled(arrayPromesasPersonajes).then((valoresPromesas) => {
      setElenco(valoresPromesas);
    });
  };
  //Esta función pasa de array a objeto para luego poder llamarlo
  const getDatosElenco = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setActor(datos);
      getNaves(datos.starships);
      getVehiculos(datos.vehicles);
      
    }
  };
  const getNaves = async (origen) => {
    let arrayPromesasNaves = origen.map(async (naves) => {
      return obtenerDatos(naves);
    });
    Promise.allSettled(arrayPromesasNaves).then((valoresPromesas) => {
      setNaves(valoresPromesas);
      
    });
  };
  const getDatosNave = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setNave(datos);
    }
  };

  const getVehiculos = async (origen) => {
    let arrayPromesasVehiculos = origen.map(async (vehiculos) => {
      return obtenerDatos(vehiculos);
    });
    Promise.allSettled(arrayPromesasVehiculos).then((valoresPromesas) => {
      setVehiculos(valoresPromesas);
      
    });
  };
  const getDatosVehiculo = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setVehiculo(datos);
    }
  };

  useEffect(() => {
    getPeliculas(url);
  }, []);

  return (
    <React.Fragment>
      <div className="App-header caja">
        <div id="listadoPeliculas">
          <ListadoPeliculas datos={peliculas} funcion={getDatosPelicula} />
        </div>
        <div id="datos">
          {Object.keys(pelicula).length !== 0 ? (
            <Pelicula datos={pelicula} />
          ) : (
            "No se ha seleccionado una pelicula de la lista"
          )}
        </div>
        <div id="listadoActores">
          <ListadoActores datos={elenco} funcion={getDatosElenco} />
        </div>
        <div id="datosActor">
          {Object.keys(actor).length !== 0 ? (
            <Actor datos={actor} />
          ) : (
            "No se ha seleccionado ningun actor"
          )}
        </div>
        <div id="listadoNaves">
          <ListadoNaves datos={naves} funcion={getDatosNave} />
        </div>
        <div id="datosNave">
        {Object.keys(nave).length !== 0 ? (
            <Nave datos={nave} />
          ) : (
            "No se ha seleccionado ninguna nave"
          )}
        </div>
        <div id="listadovehiculos">
            <ListadoVehiculos datos={vehiculos} funcion={getDatosVehiculo}/>
        </div>
        <div id="datosNave">
        {Object.keys(vehiculo).length !== 0 ? (
            <Vehiculo datos={vehiculo} />
          ) : (
            "No se ha seleccionado ninguna vehiculo"
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
