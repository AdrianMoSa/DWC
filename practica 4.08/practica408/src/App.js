import React, { useState, useEffect } from "react";
import "./Style.css";
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

  //Recoge las películas.
  const getPeliculas = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setPeliculas(datos.results);
    }
  };

  //Metemos las peliculas en el estado para mostrarlas posteriormente y limpiamos los estados de vehículos y transporte para que no se muestren.
  const getDatosPelicula = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setPelicula(datos);
      getElenco(datos.characters);
      setNaves(valoresIniciales);
      setVehiculos(valoresIniciales);
      setNave(peliculaInicial);
      setVehiculo(peliculaInicial);
    }
  };
  //Esta función recoge las urls, las guarda en un array y las mete en un estado.
  const getElenco = async (origen) => {
    let arrayPromesasPersonajes = origen.map(async (actores) => {
      return obtenerDatos(actores);
    });
    Promise.allSettled(arrayPromesasPersonajes).then((valoresPromesas) => {
      setElenco(valoresPromesas);
    });
  };
  //Esta función pasa de array a objeto para luego poder llamarlo y limpia los estados.
  const getDatosElenco = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setActor(datos);
      getNaves(datos.starships);
      getVehiculos(datos.vehicles);
      setNaves(valoresIniciales);
      setVehiculos(valoresIniciales);
      setNave(peliculaInicial);
      setVehiculo(peliculaInicial);
      
    }
  };
  //Guarda las naves en un array para posteriormente actualizar el estado.
  const getNaves = async (origen) => {
    let arrayPromesasNaves = origen.map(async (naves) => {
      return obtenerDatos(naves);
    });
    Promise.allSettled(arrayPromesasNaves).then((valoresPromesas) => {
      setNaves(valoresPromesas);
      
    });
  };
  //Mete el objeto nave en un estado.
  const getDatosNave = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setNave(datos);
    }
  };
//Guarda en un array los vehículos y actualiza el estado.
  const getVehiculos = async (origen) => {
    let arrayPromesasVehiculos = origen.map(async (vehiculos) => {
      return obtenerDatos(vehiculos);
    });
    Promise.allSettled(arrayPromesasVehiculos).then((valoresPromesas) => {
      setVehiculos(valoresPromesas);
      
    });
  };
  //Guarda el objeto vehículo en un estado.
  const getDatosVehiculo = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setVehiculo(datos);
    }
  };
//Al cargar la página se muestran las películas.
  useEffect(() => {
    getPeliculas(url);
  }, []);

  return (
    <React.Fragment>
      <h1>STAR WARS</h1>
      <div className="Contenedor">
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
        <div id="datosVehiculo">
        {Object.keys(vehiculo).length !== 0 ? (
            <Vehiculo datos={vehiculo} />
          ) : (
            "No se ha seleccionado ningun vehículo"
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
