import React from 'react';
import './App.css';
import { Contenedor } from './Componentes/Contenedor/Contenedor';
import NumeroAleatorio from './Componentes/NumeroAleatorio/NumeroAleatorio';


function App() {
  return (
    <div className="App">
    {<NumeroAleatorio/>}
    </div>
  );
}

export default App;
