import React from "react";
// import { JogoDaVelhaContext } from "../context/JogoDaVelhaContext";
import { useSelector , useDispatch } from "react-redux";
import { setJogo , mudarSimbolo , setJogando , setPlacar , setVelha } from "../redux/jogoDaVelha/slice";

export default function TelaGanhador(){
    const dispatch = useDispatch();
    const { simboloAtual , velha } = useSelector(rootReducer => rootReducer.jogoDaVelhaReducer);

    const handleJogarNovamente = ()=>{
        dispatch(mudarSimbolo(simboloAtual));
        dispatch(setJogo([
            ['','',''],
            ['','',''],
            ['','','']
          ]));
        dispatch(setJogando(true));
        dispatch(setVelha(false));
    }

    const verificarFinalJogo = ()=>{
        if(velha){
            return <p>Deu velha! Bem jogado, nenhum dos dois ganhou.</p>
        }else{
            return <p>Parabéns {simboloAtual}, você ganhou! Mais sorte na próxima vez {simboloAtual === 'X'?'O':'X'}...</p>
        }
    }

    return(
        <main>
            {verificarFinalJogo()}
            <button onClick={() => handleJogarNovamente()}>Jogar Novamente</button>
        </main>
    )
}