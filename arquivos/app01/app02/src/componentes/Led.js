import ledVerde from './imgs/led-verde.png';
import ledVermelho from './imgs/led-vermelho.png';
import React from 'react';

export default function Led(props) {
  return (
    <>
      <img src={props.ligado?ledVerde:ledVermelho}/>
      <button onClick={()=>props.setLigado(!props.ligado)}>Ligar/Desligar</button>
    </>
  );
}