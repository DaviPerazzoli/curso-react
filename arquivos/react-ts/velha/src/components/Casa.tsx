import { useContext } from "react";
import { JogoDaVelhaContext, JogoDaVelhaContextProps } from "../context/JogoDaVelhaContext";
import { Simbolo } from "./Tabuleiro";

interface CasaProps {
    jogar: (simboloAtual: Simbolo, posicao: string) => void;
    posicao: string;
}

const Casa: React.FC<CasaProps> = ({jogar , posicao}) => {

    const {jogo , simboloAtual } = useContext(JogoDaVelhaContext) as JogoDaVelhaContextProps;

    const linha: number = Number(posicao.split(' ')[0]);
    const coluna: number = Number(posicao.split(' ')[1]);

    const handleClickCasa = () => {
        jogar(simboloAtual , posicao)
    }

    return(
        <div className="casa" onClick={()=> handleClickCasa()}>
            {jogo[linha][coluna]}
        </div>
    )
}

export default Casa;