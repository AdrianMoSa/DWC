import React from 'react';
import { sumar, restar, multiplicar, dividir, modular } from '../Bibliotecas/Calculadora';
import "./css/calculadora.css";
import { useRef } from "react";
// La calculadora solo he conseguido que funcione utilizando un operador y dandole a =, no he conseguido poner en el placeholder el valor que necesitaba (como el resultado) imagino que será por las variables globales.
export const Calculadora = () => {

  const referencia = useRef(null);
  let numPrev = 0;
  let numSig = 0;
  let result=0;
  let signo = '';
  
  //Recoger el número.
  const introducirNumero = (e) => {
    referencia.current.value += e.target.id;
  }
 

  //Borra el display.
  const borrarDisplay = () => {
    referencia.current.value = '';
  }


  //operaciones várias.
  const operacion = (e) => {
    numPrev = parseFloat(referencia.current.value);
    signo = e.target.id;
    borrarDisplay();
  }


  const resultado = () => {
    numSig = parseFloat(referencia.current.value);
    let result = 0;
    if(signo === '+'){
      result = sumar(numPrev,numSig);
     }else if(signo === '-'){
      result= restar(numPrev,numSig);
    }else if(signo === 'X'){
    result = multiplicar(numPrev,numSig);
     }else if(signo === '/'){
     result= dividir(numPrev,numSig);
    }
    else if(signo==='%'){
      result=modular(numPrev,numSig);
    }
    borrarDisplay();
    referencia.current.value = result;
  }


  return (
    <React.Fragment>
        <div className='container'>
          <div className='grid'>
            <div className='celda display'>
              <input ref={referencia} type="text" placeholder={result}></input>
            </div>
            <div className='celda C'>
              <button onClick={borrarDisplay} type='button'>C</button>
            </div>
            <div className='celda'>
              <button onClick={operacion} type='button' id="%">%</button>
            </div>
            <div className='celda'>
              <button onClick={operacion} type='button' id="/">/</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="7">7</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="8">8</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="9">9</button>
            </div>
            <div className='celda'>
              <button onClick={operacion} type='button' id="X">X</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="4">4</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="5">5</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="6">6</button>
            </div>
            <div className='celda'>
              <button onClick={operacion} type='button' id="-">-</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="1">1</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="2">2</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="3">3</button>
            </div>
            <div className='celda'>
              <button onClick={operacion} type='button' id="+">+</button>
            </div>
            <div className='celda cero'>
              <button onClick={introducirNumero} type='button' id="0">0</button>
            </div>
            <div className='celda'>
              <button onCLick={introducirNumero} type='button' id=".">.</button>
            </div>
            <div className='celda'>
              <button onClick={resultado} type='button' id="=">=</button>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
