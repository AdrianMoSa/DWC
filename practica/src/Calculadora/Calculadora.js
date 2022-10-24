import React from 'react';
// import { sumar, restar, multiplicar, dividir } from '../Bibliotecas/Calculadora';
import "./css/calculadora.css";
import { useRef } from "react";

export const Calculadora = () => {

  //const refSiete = useRef(null);
  const referencia = useRef(null);
  const destino = useRef(null);

  function introducirNumero(e){
     let valor = parseFloat(referencia.current.value);
     destino.current.value += valor;
    console.log(e.target);
  }

  return (
    <React.Fragment>
        <div className='container'>
          <div className='grid'>
            <div className='celda display'>
              <input id="destino" ref={destino} type="text" placeholder='0'></input>
            </div>
            <div className='celda C'>
              <button type='button'>C</button>
            </div>
            <div className='celda'>
              <button type='button'>%</button>
            </div>
            <div className='celda'>
              <button type='button'>/</button>
            </div>
            <div className='celda'>
              <button ref={referencia} onClick={introducirNumero} type='button' value={7}>7</button>
            </div>
            <div className='celda'>
              <button ref={referencia} onClick={introducirNumero} type='button' value={8}>8</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' value={9}>9</button>
            </div>
            <div className='celda'>
              <button type='button'>X</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' value={4}>4</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' value={5}>5</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' value={6}>6</button>
            </div>
            <div className='celda'>
              <button type='button'>-</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' value={1}>1</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' value={2}>2</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' value={3}>3</button>
            </div>
            <div className='celda'>
              <button type='button'>+</button>
            </div>
            <div className='celda cero'>
              <button type='button'>0</button>
            </div>
            <div className='celda'>
              <button type='button'>.</button>
            </div>
            <div className='celda'>
              <button type='button'>=</button>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
