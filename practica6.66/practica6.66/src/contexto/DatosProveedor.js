import React, {useState,createContext,useEffect} from 'react';
import { obtenerDatos } from '../Bibliotecas/getDatos'; 
const datosContexto= createContext();
export const DatosProveedor = (props) => {
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
   
    const datos={
      peliculas,
      getDatosPelicula,
      pelicula,
      elenco,
      actor,
      naves,
      nave,
      vehiculos,
      vehiculo,
      getElenco,
      getDatosElenco,
      getNaves,
      getDatosNave,
      getVehiculos,
      getDatosVehiculo
    }
  return (
   <datosContexto.Provider value={datos}>
    {props.children}
   </datosContexto.Provider>
  )
}

export default DatosProveedor;
export {datosContexto};
