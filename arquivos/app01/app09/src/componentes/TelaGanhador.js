import React from "react";

export default function TelaGanhador(props){
    const handleJogarNovamente=()=>{
        props.mudarSimbolo(props.simboloAtual);
        props.setJogo(props.jogoInicial);
        props.setJogando(true);
    }
    return(
        <main>
            <p>Parabéns {props.simboloAtual}, você ganhou! Mais sorte na próxima vez {props.simboloAtual=='X'?'O':'X'}...</p>
            <button onClick={()=>handleJogarNovamente()}>Jogar Novamente</button>
        </main>
    )
}