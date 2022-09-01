import React from "react";
import '../Hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear} >
        RESET
    </div>
);

export default BotonClear;