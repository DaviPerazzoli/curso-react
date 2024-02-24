import React from "react";

export default function Tela(props){
    return(
        <section className="tela">
            <span className="valorTela">{props.valor}</span>
            <span className="resultadoTela">{props.resultado}</span>
        </section>
    )
}