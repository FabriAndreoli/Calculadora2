import './App.css';
import Boton from './Componentes/boton.js';
import Pantalla from './Componentes/pantalla.js';
import BotonClear from './Componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {


  const [ input, setInput ] = useState('');

  const agregarInput = valor => {
    setInput( input + valor );
  };

  const calculaResultado = () => {
    setInput(evaluate(input));
  };

  return (
    <div className='App'>

      <div className='calculadora-container'>

          <Pantalla input={input} />

        <div className='teclado-container'>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton> 
          <Boton manejarClic={agregarInput}>2</Boton> 
          <Boton manejarClic={agregarInput}>3</Boton> 
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton> 
          <Boton manejarClic={agregarInput}>5</Boton> 
          <Boton manejarClic={agregarInput}>6</Boton> 
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton> 
          <Boton manejarClic={agregarInput}>8</Boton> 
          <Boton manejarClic={agregarInput}>9</Boton> 
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={calculaResultado}>=</Boton> 
          <Boton manejarClic={agregarInput}>0</Boton> 
          <Boton manejarClic={agregarInput}>,</Boton> 
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarClear = { () => setInput('') }/>
          <Boton manejarClic={agregarInput}>=</Boton>
        </div>
      </div>

      </div>

    </div>
  );
}

export default App;
