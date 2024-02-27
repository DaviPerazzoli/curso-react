import React,{useContext} from "react";
import { JogoDaVelhaContext } from "../App";


export default function TelaGanhador(props){

    const {setJogo,simboloAtual,mudarSimbolo,setJogando,velha,setVelha} = useContext(JogoDaVelhaContext);

    const handleJogarNovamente=()=>{
        mudarSimbolo(simboloAtual);
        setJogo([
            ['','',''],
            ['','',''],
            ['','','']
          ]);
        setJogando(true);
        setVelha(false);
    }

    const verificarFinalJogo=()=>{
        if(velha){
            return <p>Deu velha! Bem jogado, nenhum dos dois ganhou.</p>
        }else{
            return <p>Parabéns {simboloAtual}, você ganhou! Mais sorte na próxima vez {simboloAtual=='X'?'O':'X'}...</p>
        }
    }

    return(
        <main>
            {verificarFinalJogo()}
            <button onClick={()=>handleJogarNovamente()}>Jogar Novamente</button>
        </main>
    )
}