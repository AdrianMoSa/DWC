import React, { useState } from "react";
function numeroAleatorio() {
  const valorInicial = [];
  const [numerosAleatorios, setNumeroAleatorio] = useState(valorInicial);

  const addNumeroAleatorio = (aleatorio) => {
    //meter la función del numero aleatorio, supongo que la puedes declarar fuera y las comprobaciones de si está o no, si está llamar de nuevo a la función.
    setNumeroAleatorio([...numerosAleatorios, aleatorio]);
  };

  const borrarTodo = () => {
    setNumeroAleatorio([]);
  };

  return (
    <React.Fragment>
      <div>
        <p>
        {numerosAleatorios.map(() => {
            return <li key={num}>{num}</li>;
          })}
        </p>
        <button
          onClick={() => {
            addNumeroAleatorio();
          }}
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
export default numeroAleatorio;