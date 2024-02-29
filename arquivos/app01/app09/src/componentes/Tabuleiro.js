import React, { useState } from "react";
import Casa from "./Casa";
// import { JogoDaVelhaContext } from "../context/JogoDaVelhaContext";
import { useSelector , useDispatch } from "react-redux";
import { setJogo , mudarSimbolo , setJogando , setPlacar , setVelha } from "../redux/jogoDaVelha/slice";


export default function Tabuleiro(){

    const { placar , simboloAtual , jogando , jogo } = useSelector(rootReducer => rootReducer.jogoDaVelhaReducer);

    const dispatch = useDispatch();

    const [jogadas , setJogadas]=useState(1);

    // const {jogo , setJogo , simboloAtual , mudarSimbolo , jogando , setJogando , placar , setPlacar , setVelha} = useContext(JogoDaVelhaContext);

    const linhaPreenchida=(simbolo)=>{
        let preenchida=false;
        for(let l = 0; l < 3; l++){
            if(jogo[l][0] === simbolo && jogo[l][1] === simbolo && jogo[l][2] === simbolo){
                preenchida=true;
            }
        }
        return preenchida;
    }
    

    const colunaPreenchida = (simbolo)=>{
        let preenchida = false;
        for(let c = 0; c < 3; c++){
            if(jogo[0][c] === simbolo && jogo[1][c] === simbolo && jogo[2][c] === simbolo){
                preenchida = true;     
            }
        }
        return preenchida;
    }

    const diagonalPreenchida = (simbolo)=>{
        let preenchida = false;
        if(jogo[0][0] === simbolo && jogo[1][1] === simbolo && jogo[2][2] === simbolo){
            preenchida = true;
        }else if(jogo[0][2] === simbolo && jogo[1][1] === simbolo && jogo[2][0] === simbolo){
            preenchida = true;
        }
        return preenchida;
    }

    const atualizarPlacarGanhador = (simbolo)=>{
        
        let copiaPlacar = {...placar};
        
        if(simbolo === 'X'){
            copiaPlacar.x = placar.x + 1;
        }else{
            copiaPlacar.o = placar.o + 1;
        }
        dispatch(setPlacar(copiaPlacar));
    }

    const ganhou = (simboloAtual)=>{
        if(colunaPreenchida(simboloAtual) || linhaPreenchida(simboloAtual) || diagonalPreenchida(simboloAtual)){
            atualizarPlacarGanhador(simboloAtual);
            return true;
        }
        return false;
    }

    const verificarVelha=(nJogadas)=>{
        if(nJogadas === 9){
            dispatch(setJogando(false));
            dispatch(setVelha(true));
        }
    }

    const jogar=(simboloAtual = '' , posicao)=>{
        if(!jogando){
            return;
        }

        const posicaoReal = posicao.split(' ');

        let copiaJogo = jogo.map(row => [...row]);

        if(copiaJogo[posicaoReal[0]][posicaoReal[1]] === 'X' || copiaJogo[posicaoReal[0]][posicaoReal[1]] === 'O'){
            return;
        }
        
        copiaJogo[posicaoReal[0]][posicaoReal[1]] = simboloAtual;
        dispatch(setJogo(copiaJogo));
        console.log(jogo);
        setJogadas(jogadas => jogadas + 1);

        if(ganhou(simboloAtual)){
            dispatch(setJogando(false));
        }else{
            dispatch(mudarSimbolo(simboloAtual));
            verificarVelha(jogadas);
        }        
    }

    return(
        <main className="jogo_da_velha">
            <section className="placar">
                <div>{placar.x}</div>
                <div>X VS O</div>
                <div>{placar.o}</div>
            </section>
            <section className="tabu">
                <div className="tabuLinha">
                    <Casa posicao='0 0' jogar={jogar}/>
                    <Casa posicao='0 1' jogar={jogar}/>
                    <Casa posicao='0 2' jogar={jogar}/>
                </div>
                <div className="tabuLinha">
                    <Casa posicao='1 0' jogar={jogar}/>
                    <Casa posicao='1 1' jogar={jogar}/>
                    <Casa posicao='1 2' jogar={jogar}/>
                </div>
                <div className="tabuLinha">
                    <Casa posicao='2 0' jogar={jogar}/>
                    <Casa posicao='2 1' jogar={jogar}/>
                    <Casa posicao='2 2' jogar={jogar}/>
                </div>
            </section>
            <aside className="texto_vez">Vez do {simboloAtual}</aside>
        </main>
        
    )
}