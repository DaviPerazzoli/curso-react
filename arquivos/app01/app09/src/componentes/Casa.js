import React, { useContext, useState } from "react";
import { JogoDaVelhaContext } from "../context/JogoDaVelhaContext";

export default function Casa(props){

    const {jogo , simboloAtual} = useContext(JogoDaVelhaContext);

    const linha = props.posicao.split(' ')[0];
    const coluna = props.posicao.split(' ')[1];
    const [simbolo , setSimbolo] = useState(jogo[linha][coluna]);

    const handleClickCasa = ()=>{
        props.jogar(simboloAtual,props.posicao);
        setSimbolo(jogo[linha][coluna]);
    }

    return(
        <div className="casa" onClick={() => handleClickCasa()}>
            {simbolo}
        </div>
    )
}