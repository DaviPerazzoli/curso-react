import React , { createContext , useState} from "react";

export interface JogoDaVelhaContextProps {
    jogo: string[][];
    setJogo: React.Dispatch<React.SetStateAction<string[][]>>;
    simboloAtual: 'X' | 'O';
    mudarSimbolo: (simboloAtual: 'X' | 'O') => void;
    jogando: boolean;
    setJogando: React.Dispatch<React.SetStateAction<boolean>>;
    placar: {x: number , o: number};
    setPlacar: React.Dispatch<React.SetStateAction<{x: number , o: number}>>;
    velha: boolean;
    setVelha: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JogoDaVelhaContext = createContext<JogoDaVelhaContextProps | null>(null);

export const JogoDaVelhaProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const jogoInicial: string[][] = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    
    const [jogo , setJogo] = useState(jogoInicial);
    const [simboloAtual , setSimboloAtual] = useState<'X' | 'O'>('X');
    const [jogando , setJogando] = useState(true);
    const [placar , setPlacar] = useState({
        x: 0 , 
        o: 0
    });
    const [velha , setVelha] = useState(false);

    const mudarSimbolo = (simboloAtual: 'X' | 'O')=>{
        if(simboloAtual === 'X'){
            setSimboloAtual('O');
        }else{
            setSimboloAtual('X');
        }
    }

    return(
        <JogoDaVelhaContext.Provider value={{jogo , setJogo , simboloAtual , mudarSimbolo , jogando , setJogando , placar , setPlacar , velha , setVelha}}>{children}</JogoDaVelhaContext.Provider>
    )
}