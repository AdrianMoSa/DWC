import React, { useState } from "react";

function Euromillon() {
  // Un objeto completo para utilizarlo más tarde.
  var numeroPremiado=0;
  var estrellaPremiada=0;
  

  
  const euromillonPremiado = {
    numeros: [5, 45, 21, 34, 27],
    estrellas: [6, 12],
  };

  const apuestaVacia = {
    numeros: [],
    estrellas: [],
  };
  const acertadosVacia = {
    numerosAcertados: [],
    estrellasAcertadas: [],
  };
  const [euromillon, setEuromillon] = useState(apuestaVacia);
  let [condicion, setCondicion] = useState(false);
  const[euromillonAcertado,setEuromillonAcertado]=useState(acertadosVacia);


  function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generarApuesta = () => {
    var numeros = [];
    var estrellas = [];
    var numerosAcertados=[];
  var estrellasAcertadas=[];
    
    
    for (let i = 0; i < 5; i++) {
      if (i === 0) {
        numeros[i] = numeroAleatorio(1, 50);
      } else {
        numeros[i] = numeroAleatorio(1, 50);
        for (let j = 0; j < i; j++) {
          while (numeros[i] == numeros[j]) {
            numeros[i] = numeroAleatorio(1, 50);
            j = 0;
          }
        }
      }
    }

    for (let i = 0; i < 2; i++) {
      if (i == 0) {
        estrellas[i] = numeroAleatorio(1, 12);
      } else {
        estrellas[i] = numeroAleatorio(1, 12);
        for (let j = 0; j < i; j++) {
          while (estrellas[i] === estrellas[j]) {
            estrellas[i] = numeroAleatorio(1, 12);
            j = 0;
          }
        }
      }
    }

    for (let i = 0; i < numeros.length; i++) {
      for (let j = 0; j < numeros.length; j++) {
        if (numeros[i] === euromillonPremiado.numeros[j]) {
          numerosAcertados[numeroPremiado]=numeros[i]
          numeroPremiado++;
       
         
        }
      }
    }
    for (let i = 0; i < estrellas.length; i++) {
      for (let j = 0; j < estrellas.length; j++) {
        if (estrellas[i] === euromillonPremiado.estrellas[j]) {
          estrellasAcertadas[estrellaPremiada]=estrellas[i];
          estrellaPremiada++;
          
          
        }
      }
    }

  
    comprobarPremiado();
    
    setEuromillon({ ...euromillon, numeros, estrellas });
    setEuromillonAcertado({...euromillonAcertado,numerosAcertados,estrellasAcertadas});
    function comprobarPremiado() {
      console.log("numeros"+numeroPremiado);
      console.log("estrellas"+estrellaPremiada);
      if (numeroPremiado >= 2 && estrellaPremiada >= 1) {
       setCondicion(condicion=true)
      } 
      else{
        setCondicion(condicion=false);
      }
    }
  };

  return (
    <React.Fragment>
      <div>
        <p>
          <ul class="numeros" >Numeros
          {euromillon.numeros.map((numeros) => {
            return <li key={numeros}>{numeros}</li>;
          })}
          </ul>
          <ul class="estrellas"> Estrellas
          {euromillon.estrellas.map((estrellas) => {
            return <li key={estrellas}>{estrellas}</li>;
          })}
          </ul>
          {condicion ? <h1>¡Ha sido premiado!</h1> : <h1>¡No ha sido premiado!</h1>}
          </p>
          <ul class="numerosAcertados" >Numeros acertados
          {euromillonAcertado.numerosAcertados.map((numerosAcertados) => {
            return <li key={numerosAcertados}>{numerosAcertados}</li>;
          })}
          </ul>
          <ul class="estrellas acertadas" >Estrellas acertadas
          {euromillonAcertado.estrellasAcertadas.map((estrellasAcertadas) => {
            return <li key={estrellasAcertadas}>{estrellasAcertadas}</li>;
          })}
          </ul>
        <button onClick={generarApuesta}>Generar apuesta</button>
      </div>
    </React.Fragment>
  );
}
export default Euromillon;
