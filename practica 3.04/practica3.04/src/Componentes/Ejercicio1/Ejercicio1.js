import React, { useState } from "react";
function NumeroAleatorio() {
  const valorInicial = [];
  const [numerosAleatorios, setNumeroAleatorio] = useState(valorInicial);

  function obtenerNUmero(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

  const addNumeroAleatorio = () => {
     var aleatorio=obtenerNUmero(1,100);
     
    for (var i=0;i<numerosAleatorios.length;i++){
      if (aleatorio===numerosAleatorios[i]){
        //addNumeroAleatorio();
        aleatorio=obtenerNUmero(1,100);
        i=0;
      }
     
    }
    //meter la función del numero aleatorio, supongo que la puedes declarar fuera y las comprobaciones de si está o no, si está llamar de nuevo a la función.
    setNumeroAleatorio([...numerosAleatorios, aleatorio]);
  };
  const borrarNumero = (e)=>{
    e.target.classList.add("eliminar");
  }

  const borrarTodo = () => {
    setNumeroAleatorio([]);
  };

  return (
    <React.Fragment>
      <div>
        <p>
        {numerosAleatorios.map((aleatorio) => {
            return <li onClick={borrarNumero} key={aleatorio}>{aleatorio}</li>;
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