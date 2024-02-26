import './App.css';
import React, { useEffect, useState } from 'react';
import Tabuleiro from './componentes/Tabuleiro';
import TelaGanhador from './componentes/TelaGanhador';


export default function App(){
  const jogoInicial=[
    ['','',''],
    ['','',''],
    ['','','']
  ];

  const [jogo,setJogo] = useState(jogoInicial);
  const [simboloAtual,setSimboloAtual] = useState('X');
  const [jogando,setJogando] = useState(true);
  const [placar,setPlacar] = useState({x:0,o:0});
  const [velha,setVelha] = useState(false);

  const mudarSimbolo = (simboloAtual)=>{
    if(simboloAtual=='X'){
        setSimboloAtual('O');
    }else{
        setSimboloAtual('X');
    }
}

  const verificarJogando=()=>{
    if(jogando){
      return <Tabuleiro setVelha={setVelha} setPlacar={setPlacar} placar={placar} jogando={jogando} setJogando={setJogando} simboloAtual={simboloAtual} mudarSimbolo={mudarSimbolo} jogo={jogo} setJogo={setJogo}/>
    }else{
      return <TelaGanhador velha={velha} setVelha={setVelha} simboloAtual={simboloAtual} setJogando={setJogando} mudarSimbolo={mudarSimbolo} setJogo={setJogo} jogoInicial={jogoInicial}/>
    }
  }

  return (
    <>
      {verificarJogando()}
    </>
  )
  
}
