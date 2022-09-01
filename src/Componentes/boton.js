import React from "react";
import '../Hojas-de-estilo/boton.css';

const esOperador = (valor) => {
    return isNaN(valor) && (valor != '=') && (valor != '.');
}

function Boton(props){

        if( esOperador(props.children) ) {
            return (
            <div className="boton-contenedor operador" onClick={ () => props.manejarClic(props.children) }>
                {props.children}
            </div> );
        } else {
            return (
            <div className="boton-contenedor" onClick={ () => props.manejarClic(props.children) }>
                {props.children}
            </div> );
        }
}

export default Boton;