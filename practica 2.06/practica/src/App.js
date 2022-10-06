import './App.css';
import Película from './Componentes/Película';
import React from 'react';
import Actores from './Componentes/Actores';
function App() {
  return (
   <React.Fragment>
    <Película
    título="El rey león"
    dirección="Rob Minkoff"
    enlace="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99XsrvHv18Kc6zjVY-K0YSMA0dMhUqJRHSgIEF-uUfA6XmR-X"
    
    >
    Tras la muerte de su padre, Simba deberá enfrentarse a su tío para recuperar el trono de Rey de la Selva. Timón y Pumba le acompañarán en su misión.
      
      
    </Película>
    <Actores
    nombre="Matthew Broderick"
    foto="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/matthew-broderick-attends-the-opening-night-of-company-at-news-photo-1647858115.jpg?resize=768:*"
    biografia="(Nueva York, 21 de marzo de 1962) es un actor y cantante estadounidense conocido por sus papeles en Lady Halcón, Juegos de guerra, Ferris Bueller's Day Off, Tiempos de gloria, Inspector Gadget, Adictos al amor, Election y Godzilla, aunque también es conocido por darle voz a Simba en su etapa adulta en El rey león y sus secuelas. Ha ganado dos premios Tony además de recibir nominaciones para los premios Emmy y los premios Globo de Oro. "
    ></Actores>
    <Actores
    nombre="Moira Kelly"
    foto="https://m.media-amazon.com/images/I/61gvstoO4AL._AC_SY679_.jpg"
    biografia="Moira Kelly es una actriz y patinadora profesional estadounidense nacida el 6 de marzo de 1968 en Nueva York, conocida principalmente por sus intervenciones en series televisivas como El Ala Oeste de la Casa Blanca o One Tree Hill."
    ></Actores>
   </React.Fragment>
  );
}

export default App;
