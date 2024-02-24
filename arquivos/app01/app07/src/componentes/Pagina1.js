import React from "react";

export default function Pagina1(props){
    return(
        <div>
            <h1>Página 1</h1>
            <h3>Curso de React</h3>
            <button onClick={()=>window.open('http://127.0.0.1:3000','_self')}>Voltar</button>
        </div>
    )
}