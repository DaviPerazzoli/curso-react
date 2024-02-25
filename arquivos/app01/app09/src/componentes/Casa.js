import React, { useState } from "react";

export default function Casa(props){

   

    const linha=props.posicao.split(' ')[0];
    const coluna=props.posicao.split(' ')[1];
    const [simbolo,setSimbolo]=useState(props.jogo[linha][coluna]);

    const handleClickCasa=()=>{
        props.jogar(props.simboloAtual,props.posicao);
        setSimbolo(props.jogo[linha][coluna]);
    }

    return(
        <div className="casa" onClick={()=>handleClickCasa()}>
            {simbolo}
        </div>
    )
}