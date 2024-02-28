import React, { useState } from "react";
// import { JogoDaVelhaContext } from "../context/JogoDaVelhaContext";
import { useSelector } from "react-redux";

export default function Casa(props){

    const { jogo , simboloAtual } = useSelector(rootReducer => rootReducer.jogoDaVelhaReducer);

    const linha = props.posicao.split(' ')[0];
    const coluna = props.posicao.split(' ')[1];

    const handleClickCasa = ()=>{
        props.jogar(simboloAtual , props.posicao);
    }

    return(
        <div className="casa" onClick={() => handleClickCasa()}>
            {jogo[linha][coluna]}
        </div>
    )
}