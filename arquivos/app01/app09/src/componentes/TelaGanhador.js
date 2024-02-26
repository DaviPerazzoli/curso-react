import React from "react";

export default function TelaGanhador(props){
    const handleJogarNovamente=()=>{
        props.mudarSimbolo(props.simboloAtual);
        props.setJogo(props.jogoInicial);
        props.setJogando(true);
        props.setVelha(false);
    }

    const verificarFinalJogo=()=>{
        if(props.velha){
            return <p>Deu velha! Bem jogado, nenhum dos dois ganhou.</p>
        }else{
            return <p>Parabéns {props.simboloAtual}, você ganhou! Mais sorte na próxima vez {props.simboloAtual=='X'?'O':'X'}...</p>
        }
    }

    return(
        <main>
            {verificarFinalJogo()}
            <button onClick={()=>handleJogarNovamente()}>Jogar Novamente</button>
        </main>
    )
}