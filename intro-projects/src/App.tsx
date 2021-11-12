import React from 'react';
import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
//import { Formulario } from './components/Formulario';
import { FormularioConCustomHook } from './components/FormularioConCustomHook';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>
      <h2>useState</h2>
      <Counter/>
      <Usuario/>
      <h2>useEffect - useRef</h2>
      <TimerPadre/>
      <hr />
      <h2>useReducer</h2>
      <ContadorRed/>
      {/* <hr />
      <h2>formulario</h2>
      <Formulario/> */}
      <hr />
      <h2>formulario con customHooks</h2>
      <FormularioConCustomHook/>
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
