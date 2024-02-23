import React from "react";

export default function Resultado(props){
    return(
        <div>
            <p>Soma das notas: {props.somaNotas}</p>
            <p>{props.somaNotas >= 25? "Aprovado" : "Reprovado"}</p>
        </div>
    )
}