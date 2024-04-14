import {useState, useContext} from 'react';
import { JogoDaVelhaContext , JogoDaVelhaContextProps } from '../context/JogoDaVelhaContext';
import Casa from './Casa';

export type Simbolo = 'O' | 'X';
const Tabuleiro: React.FC = () => {

    const contexto = useContext(JogoDaVelhaContext);

    const {placar, setPlacar , simboloAtual, mudarSimbolo , jogando, setJogando , jogo , setJogo , setVelha} = contexto as JogoDaVelhaContextProps;
    const [jogadas, setJogadas] = useState(1);

    const linhaPreenchida = (simbolo: Simbolo): boolean => {
        let preenchida: boolean = false;

        for(let l = 0; l < 3; l++){
            if(jogo[l][0] === simbolo && jogo[l][1] === simbolo && jogo[l][2] === simbolo){
                preenchida=true;
            }
        }

        return preenchida;
    }

    const colunaPreenchida = (simbolo: Simbolo): boolean => {
        let preenchida: boolean = false;

        for(let c = 0; c < 3; c++){
            if(jogo[0][c] === simbolo && jogo[1][c] === simbolo && jogo[2][c] === simbolo){
                preenchida = true;     
            }
        }

        return preenchida;
    }

    const diagonalPreenchida = (simbolo: Simbolo): boolean => {
        let preenchida: boolean = false;
        if(jogo[0][0] === simbolo && jogo[1][1] === simbolo && jogo[2][2] === simbolo){
            preenchida = true;
        }else if(jogo[0][2] === simbolo && jogo[1][1] === simbolo && jogo[2][0] === simbolo){
            preenchida = true;
        }
        return preenchida;
    }

    const atualizarPlacarGanhador = (simbolo: Simbolo): void => {
        
        let copiaPlacar = {...placar};
        
        if(simbolo === 'X'){
            copiaPlacar.x = placar.x + 1;
        }else{
            copiaPlacar.o = placar.o + 1;
        }
        setPlacar(copiaPlacar);
    }

    const ganhou = (simboloAtual: Simbolo): boolean => {
        if(colunaPreenchida(simboloAtual) || linhaPreenchida(simboloAtual) || diagonalPreenchida(simboloAtual)){
            atualizarPlacarGanhador(simboloAtual);
            return true;
        }
        return false;
    }

    const verificarVelha=(nJogadas: Number): void => {
        if(nJogadas === 9){
            setJogando(false);
            setVelha(true);
        }
    }

    const jogar = (simboloAtual: Simbolo, posicao: string): void => {
        if(!jogando){
            return;
        }

        const posicaoReal: number[] = posicao.split(' ').map(pos => Number(pos));

        let copiaJogo = jogo.map(row => [...row]);

        if(copiaJogo[posicaoReal[0]][posicaoReal[1]] === 'X' || copiaJogo[posicaoReal[0]][posicaoReal[1]] === 'O'){
            return;
        }
        
        copiaJogo[posicaoReal[0]][posicaoReal[1]] = simboloAtual;
        setJogo(copiaJogo);

        setJogadas(jogadas => jogadas + 1);

        if(ganhou(simboloAtual)){
            setJogando(false);
        }else{
            mudarSimbolo(simboloAtual);
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
    );
}

export default Tabuleiro;