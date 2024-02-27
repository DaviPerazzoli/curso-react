import React, { useState,useContext } from "react";
import Casa from "./Casa";
import { JogoDaVelhaContext } from "../App";

export default function Tabuleiro(props){

    const [jogadas,setJogadas]=useState(1);

    const {jogo,setJogo,simboloAtual,mudarSimbolo,jogando,setJogando,placar,setPlacar,setVelha} = useContext(JogoDaVelhaContext);

    const linhaPreenchida=(simbolo)=>{
        let preenchida=false;
        for(let l=0;l<3;l++){
            if(jogo[l][0]==simbolo && jogo[l][1]==simbolo && jogo[l][2]==simbolo){
                preenchida=true;
            }
        }
        return preenchida;
    }
    

    const colunaPreenchida=(simbolo)=>{
        let preenchida=false;
        for(let c=0;c<3;c++){
            if(jogo[0][c]==simbolo && jogo[1][c]==simbolo && jogo[2][c]==simbolo){
                preenchida=true;     
            }
        }
        return preenchida;
    }

    const diagonalPreenchida=(simbolo)=>{
        let preenchida=false;
        if(jogo[0][0] == simbolo && jogo[1][1] == simbolo && jogo[2][2] == simbolo){
            preenchida=true;
        }else if(jogo[0][2] == simbolo && jogo[1][1] == simbolo && jogo[2][0] == simbolo){
            preenchida=true;
        }
        return preenchida;
    }

    const atualizarPlacarGanhador=(simbolo)=>{
        let copiaPlacar=placar;
        
        if(simbolo=='X'){
            copiaPlacar.x = placar.x + 1;
        }else{
            copiaPlacar.o = placar.o + 1;
        }
        setPlacar(copiaPlacar);
    }

    const ganhou=(simboloAtual)=>{
        if(colunaPreenchida(simboloAtual) || linhaPreenchida(simboloAtual) || diagonalPreenchida(simboloAtual)){
            atualizarPlacarGanhador(simboloAtual);
            return true;  
        }
    }

    const verificarVelha=(nJogadas)=>{
        if(nJogadas == 9){
            setJogando(false);
            setVelha(true);
        }
    }

    const jogar=(simboloAtual='',posicao)=>{
        if(!jogando){
            return;
        }

        const posicaoReal=posicao.split(' ');

        let copiaJogo=jogo

        if(copiaJogo[posicaoReal[0]][posicaoReal[1]] == 'X' || copiaJogo[posicaoReal[0]][posicaoReal[1]] == 'O'){
            return;
        }
        
        copiaJogo[posicaoReal[0]][posicaoReal[1]] = simboloAtual;
        setJogo(copiaJogo);
        setJogadas(jogadas+1);

        if(ganhou(simboloAtual)){
            setJogando(false);
        }else{
            mudarSimbolo(simboloAtual);
            verificarVelha(jogadas);
        }        
    }

    return(
        <main className="jogo_da_velha">
            <section className="placar"><div>{placar.x}</div><div>X VS O</div><div>{placar.o}</div></section>
            <section className="tabu">
                <div className="tabuLinha">
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='0 0' jogar={jogar}/>
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='0 1' jogar={jogar}/>
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='0 2' jogar={jogar}/>
                </div>
                <div className="tabuLinha">
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='1 0' jogar={jogar}/>
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='1 1' jogar={jogar}/>
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='1 2' jogar={jogar}/>
                </div>
                <div className="tabuLinha">
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='2 0' jogar={jogar}/>
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='2 1' jogar={jogar}/>
                    <Casa simboloAtual={simboloAtual} jogo={jogo} setJogo={setJogo} posicao='2 2' jogar={jogar}/>
                </div>
            </section>
            <aside className="texto_vez">Vez do {simboloAtual}</aside>
        </main>
        
    )
}