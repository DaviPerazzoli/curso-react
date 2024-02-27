import React,{useState} from "react";

export const JogoDaVelhaContext = React.createContext();

export const JogoDaVelhaProvider = ({children})=>{
    
  const jogoInicial = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  const [jogo , setJogo] = useState(jogoInicial);
  const [simboloAtual , setSimboloAtual] = useState('X');
  const [jogando , setJogando] = useState(true);
  const [placar , setPlacar] = useState({x:0 , o:0});
  const [velha , setVelha] = useState(false);

  const mudarSimbolo = (simboloAtual)=>{
    if(simboloAtual === 'X'){
        setSimboloAtual('O');
    }else{
        setSimboloAtual('X');
    }
  }
  
  return(
    <JogoDaVelhaContext.Provider value={{jogo , setJogo , simboloAtual , mudarSimbolo , jogando , setJogando , placar , setPlacar , velha , setVelha}}>{children}</JogoDaVelhaContext.Provider>
  )
}