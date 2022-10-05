import './App.css';
import Película from './Componentes/Película';
import React from 'react';
function App() {
  return (
   <React.Fragment>
    <Película
    titulo="El rey león"
    dirección="Rob Minkoff"
    enlace="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99XsrvHv18Kc6zjVY-K0YSMA0dMhUqJRHSgIEF-uUfA6XmR-X"
    
    >
      "Tras la muerte de su padre, Simba deberá enfrentarse a su tío para recuperar el trono de Rey de la Selva. Timón y Pumba le acompañarán en su misión."
      
      
      </Película>
   </React.Fragment>
  );
}

export default App;
