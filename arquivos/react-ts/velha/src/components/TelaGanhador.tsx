import { useContext } from "react";
import { JogoDaVelhaContext, JogoDaVelhaContextProps } from "../context/JogoDaVelhaContext";

const TelaGanhador: React.FC = () => {
    const { simboloAtual , velha , setJogando , setVelha , mudarSimbolo , setJogo} = useContext(JogoDaVelhaContext) as JogoDaVelhaContextProps;

    const handleJogarNovamente = (): void => {
        mudarSimbolo(simboloAtual);
        setJogo([
            ['','',''],
            ['','',''],
            ['','','']
        ]);
        setJogando(true);
        setVelha(false);
    }

    const verificarFinalJogo = (): React.ReactNode => {
        if(velha){
            return <p>Deu velha! Bem jogado, nenhum dos dois ganhou.</p>
        }else{
            return <p>Parabéns {simboloAtual}, você ganhou! Mais sorte na próxima vez {simboloAtual === 'X'?'O':'X'}...</p>
        }
    }

    return(
        <main>
            {verificarFinalJogo()}
            <button onClick={() => handleJogarNovamente()}>Jogar Novamente</button>
        </main>
    )
}

export default TelaGanhador;