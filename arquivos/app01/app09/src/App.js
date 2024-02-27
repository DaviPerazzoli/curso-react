import './App.css';
import React, { useContext } from 'react';
import Tabuleiro from './componentes/Tabuleiro';
import TelaGanhador from './componentes/TelaGanhador';
import { JogoDaVelhaContext } from './context/JogoDaVelhaContext';

export default function App(){
  const {jogando} = useContext(JogoDaVelhaContext);
  const verificarJogando=()=>{
    if(jogando){
      return(
        <Tabuleiro/>
      )
    }else{
      return(
        <TelaGanhador/>
      )
    }
  }
  return (
    <>
      {verificarJogando()}
    </>
  )
  
}
