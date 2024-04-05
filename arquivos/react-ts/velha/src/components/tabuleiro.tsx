import {useState, useContext} from 'react';
import { JogoDaVelhaContext } from '../context/JogoDaVelhaContext';

export default function Tabuleiro(){

    const {placar, simboloAtual, jogando, jogo} = useContext(JogoDaVelhaContext);
    const [jogadas, setJogadas] = useState(1);

    const linhaPreenchida = (simbolo: 'X' | 'O'): boolean => {
        let preenchida: boolean = false;

        for(let l = 0; l < 3; l++){
            if(jogo[l][0] === simbolo && jogo[l][1] === simbolo && jogo[l][2] === simbolo){
                preenchida=true;
            }
        }

        return preenchida;
    }

    const colunaPreenchida = (simbolo: 'X' | 'O'): boolean => {
        let preenchida: boolean = false;

        for(let c = 0; c < 3; c++){
            if(jogo[0][c] === simbolo && jogo[1][c] === simbolo && jogo[2][c] === simbolo){
                preenchida = true;     
            }
        }

        return preenchida;
    }

    const diagonalPreenchida = (simbolo: 'X' | 'O'): boolean => {
        let preenchida: boolean = false;
        if(jogo[0][0] === simbolo && jogo[1][1] === simbolo && jogo[2][2] === simbolo){
            preenchida = true;
        }else if(jogo[0][2] === simbolo && jogo[1][1] === simbolo && jogo[2][0] === simbolo){
            preenchida = true;
        }
        return preenchida;
    }
}