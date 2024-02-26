import React,{useState, useEffect} from "react";

export default function ListaCarros(){

    const [carros,setCarros]=useState([]);

    useEffect(
        ()=>{
            fetch('http://localhost:8080')
            .then(resultado=>resultado.json())
            .then(
                (resultado)=>{
                    setCarros(resultado);
                }
            )
        }
    )

    return(
        <div>
            {carros.map(
                carro=> <div key={carro.id}>{carro.marca} - {carro.modelo}</div>
            )}
        </div>
    )
}