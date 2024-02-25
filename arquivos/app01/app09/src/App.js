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
  const [simboloAtual,setSimboloAtual] = useState('O');
  const [jogando,setJogando] = useState(true);
  const [placar,setPlacar] = useState({x:0,o:0});

  const mudarSimbolo = (simboloAtual)=>{
    if(simboloAtual=='X'){
        setSimboloAtual('O');
    }else{
        setSimboloAtual('X');
    }
}

  const verificarJogando=()=>{
    if(jogando){
      return <Tabuleiro setPlacar={setPlacar} placar={placar} jogando={jogando} setJogando={setJogando} simboloAtual={simboloAtual} mudarSimbolo={mudarSimbolo} jogo={jogo} setJogo={setJogo}/>
    }else{
      return <TelaGanhador simboloAtual={simboloAtual} setJogando={setJogando} mudarSimbolo={mudarSimbolo} setJogo={setJogo} jogoInicial={jogoInicial}/>
    }
  }

  return (
    <>
      {verificarJogando()}
    </>
  )
  
}
