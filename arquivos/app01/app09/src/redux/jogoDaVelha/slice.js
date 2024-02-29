import { createSlice } from "@reduxjs/toolkit";

const jogoInicial = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

const initialState = {
    jogo: jogoInicial,
    simboloAtual: 'X',
    jogando: true,
    placar: {x : 0 , o : 0},
    velha: false
}


const JogoDaVelhaSlice = createSlice({
    name:'jogoDaVelha',
    initialState,
    reducers: {
        mudarSimbolo: ( state, action ) => {
            if(action.payload === 'X'){
                state.simboloAtual = 'O';
            }else{
                state.simboloAtual = 'X';
            }
        },
        setJogo: ( state, action ) => {
            state.jogo = action.payload;

            for(let c = 0; c < 3; c++){
                if(state.jogo[0][c] === state.simboloAtual && state.jogo[1][c] === state.simboloAtual && state.jogo[2][c] === state.simboloAtual){
                    state.jogando = false
                }

                if(state.jogo[c][0] === state.simboloAtual && state.jogo[c][1] === state.simboloAtual && state.jogo[c][2] === state.simboloAtual){
                    state.jogando = false;
                }
            }

            if(state.jogo[0][0] === state.simboloAtual && state.jogo[1][1] === state.simboloAtual && state.jogo[2][2] === state.simboloAtual){
                state.jogando = false;
            }else if(state.jogo[0][2] === state.simboloAtual && state.jogo[1][1] === state.simboloAtual && state.jogo[2][0] === state.simboloAtual){
                state.jogando = false;
            }
        },
        setJogando: ( state, action ) => {
            state.jogando = action.payload;
        },
        setPlacar: ( state, action ) => {
            state.placar = action.payload;
        },
        setVelha: ( state, action ) => {
            state.velha = action.payload;
        }
    }
})

export const { mudarSimbolo , setJogo , setJogando , setPlacar , setVelha} = JogoDaVelhaSlice.actions;

export default JogoDaVelhaSlice.reducer;