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