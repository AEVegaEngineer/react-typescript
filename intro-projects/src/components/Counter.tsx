import React, { useState } from 'react'

export const Counter = () => {

  const [counter, setCounter] = useState(0);
  const incrementar = (numero: number = 1):void => {
    setCounter( counter + numero );
  }
  return (
    <div className="mt-5">
      <h3>Counter:</h3>
      <span>Valor: {counter}</span>
      <br/>
      <button 
        type="button" 
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementar(1)}
      >+1</button>

      <button 
        type="button" 
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementar(2)}
      >+2</button>

      <button 
        type="button" 
        className="btn btn-outline-primary mt-2"
        onClick={() => setCounter(0)}
      >Reset</button>
    </div>
    

  )
}
