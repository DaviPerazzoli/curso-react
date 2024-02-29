import './App.css';
import React, { useContext } from 'react';
import Tabuleiro from './componentes/Tabuleiro';
import TelaGanhador from './componentes/TelaGanhador';
// import { JogoDaVelhaContext } from './context/JogoDaVelhaContext';
import { useSelector , useDispatch } from 'react-redux';
import { setPlacar } from './redux/jogoDaVelha/slice';

export default function App(){

  const {jogando , simboloAtual, placar} = useSelector(rootReducer => rootReducer.jogoDaVelhaReducer);

  
  const atualizarPlacarGanhador = (simbolo)=>{
        
    let copiaPlacar = {...placar};
    
    if(simbolo === 'X'){
        copiaPlacar.x = placar.x + 1;
    }else{
        copiaPlacar.o = placar.o + 1;
    }
    dispatch(setPlacar(copiaPlacar));
}


  const verificarJogando=()=>{
    if(jogando){
      return(
        <Tabuleiro/>
      )
    }else{
      atualizarPlacarGanhador(simboloAtual);
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
