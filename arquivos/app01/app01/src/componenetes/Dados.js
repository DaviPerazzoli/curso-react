import React from "react";

export default function Dados(props){
    const escreverSoma=()=>{
        const soma = props.somar(document.getElementById('n1').value , document.getElementById('n2').value)
        alert(soma);
    }

    return(
        <section>
            <p>Curso: {props.curso}</p>
            <input type="number" id="n1"/>
            <input type="number" id="n2"/>
            <button onClick={escreverSoma}>Calcular</button>
        </section>
    )
}