import React, {useContext} from 'react';
import './App.css';
import { JogoDaVelhaContext, JogoDaVelhaContextProps } from './context/JogoDaVelhaContext';
import Tabuleiro, { Simbolo } from './components/Tabuleiro';
import TelaGanhador from './components/TelaGanhador';

function App() {
  const {jogando , simboloAtual , placar , setPlacar} = useContext(JogoDaVelhaContext) as JogoDaVelhaContextProps;

  const atualizarPlacarGanhador = (simbolo: Simbolo): void => {
    let copiaPlacar = {...placar};
    
    if(simbolo === 'X'){
        copiaPlacar.x = placar.x + 1;
    }else{
        copiaPlacar.o = placar.o + 1;
    }
    setPlacar(copiaPlacar);
  }

  const verificarJogando = () => {
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
  );
}

export default App;
