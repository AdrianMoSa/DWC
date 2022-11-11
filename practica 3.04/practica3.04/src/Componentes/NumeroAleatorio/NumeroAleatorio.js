import React, { useState } from "react";
function NumeroAleatorio() {
  const valorInicial = [];
  const [numerosAleatorios, setNumeroAleatorio] = useState(valorInicial);

  function obtenerNUmero() {
    var max=10;
    return Math.floor(Math.random() * max);
  }

  const addNumeroAleatorio = () => {
     var aleatorio=obtenerNUmero();
     setNumeroAleatorio([...numerosAleatorios, aleatorio]);
    for (var i=0;i<numerosAleatorios.length;i++){
      if (aleatorio===numerosAleatorios[i]){
        addNumeroAleatorio();
      }
    
    }
    //meter la función del numero aleatorio, supongo que la puedes declarar fuera y las comprobaciones de si está o no, si está llamar de nuevo a la función.
  
  };

  const borrarTodo = () => {
    setNumeroAleatorio([]);
  };

  return (
    <React.Fragment>
      <div>
        <p>
        {numerosAleatorios.map((aleatorio) => {
            return <li key={aleatorio}>{aleatorio}</li>;
          })}
        </p>
        <button
          onClick={addNumeroAleatorio}
        >
          Generar
        </button>
        <button
          onClick={() => {
            borrarTodo();
          }}
        >
          Eliminar
        </button>
      </div>
    </React.Fragment>
  );
}
export default NumeroAleatorio;