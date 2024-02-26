import React, { useState } from "react";
import Casa from "./Casa";

export default function Tabuleiro(props){

    const [jogadas,setJogadas]=useState(1);

    const linhaPreenchida=(simbolo)=>{
        let preenchida=false;
        for(let l=0;l<3;l++){
            if(props.jogo[l][0]==simbolo && props.jogo[l][1]==simbolo && props.jogo[l][2]==simbolo){
                preenchida=true;
            }
        }
        return preenchida;
    }
    

    const colunaPreenchida=(simbolo)=>{
        let preenchida=false;
        for(let c=0;c<3;c++){
            if(props.jogo[0][c]==simbolo && props.jogo[1][c]==simbolo && props.jogo[2][c]==simbolo){
                preenchida=true;     
            }
        }
        return preenchida;
    }

    const diagonalPreenchida=(simbolo)=>{
        let preenchida=false;
        if(props.jogo[0][0] == simbolo && props.jogo[1][1] == simbolo && props.jogo[2][2] == simbolo){
            preenchida=true;
        }else if(props.jogo[0][2] == simbolo && props.jogo[1][1] == simbolo && props.jogo[2][0] == simbolo){
            preenchida=true;
        }
        return preenchida;
    }

    const atualizarPlacarGanhador=(simbolo)=>{
        let copiaPlacar=props.placar;
        
        if(simbolo=='X'){
            copiaPlacar.x = props.placar.x + 1;
        }else{
            copiaPlacar.o = props.placar.o + 1;
        }
        props.setPlacar(copiaPlacar);
    }

    const ganhou=(simboloAtual)=>{
        if(colunaPreenchida(simboloAtual) || linhaPreenchida(simboloAtual) || diagonalPreenchida(simboloAtual)){
            atualizarPlacarGanhador(simboloAtual);
            return true;  
        }
    }

    const verificarVelha=(nJogadas)=>{
        if(nJogadas == 9){
            props.setJogando(false);
            props.setVelha(true);
        }
    }

    const jogar=(simboloAtual='',posicao)=>{
        if(!props.jogando){
            return;
        }

        const posicaoReal=posicao.split(' ');

        let copiaJogo=props.jogo

        if(copiaJogo[posicaoReal[0]][posicaoReal[1]] == 'X' || copiaJogo[posicaoReal[0]][posicaoReal[1]] == 'O'){
            return;
        }
        
        copiaJogo[posicaoReal[0]][posicaoReal[1]] = simboloAtual;
        props.setJogo(copiaJogo);
        setJogadas(jogadas+1);

        if(ganhou(props.simboloAtual)){
            props.setJogando(false);
        }else{
            props.mudarSimbolo(props.simboloAtual);
            verificarVelha(jogadas);
        }        
    }

    return(
        <main className="jogo_da_velha">
            <section className="placar"><div>{props.placar.x}</div><div>X VS O</div><div>{props.placar.o}</div></section>
            <section className="tabu">
                <div className="tabuLinha">
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='0 0' jogar={jogar}/>
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='0 1' jogar={jogar}/>
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='0 2' jogar={jogar}/>
                </div>
                <div className="tabuLinha">
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='1 0' jogar={jogar}/>
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='1 1' jogar={jogar}/>
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='1 2' jogar={jogar}/>
                </div>
                <div className="tabuLinha">
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='2 0' jogar={jogar}/>
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='2 1' jogar={jogar}/>
                    <Casa simboloAtual={props.simboloAtual} jogo={props.jogo} setJogo={props.setJogo} posicao='2 2' jogar={jogar}/>
                </div>
            </section>
            <aside className="texto_vez">Vez do {props.simboloAtual}</aside>
        </main>
        
    )
}