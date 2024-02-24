import React from "react";

export default function TabelaCarros(props){
    const consultaLinhasTabela=(categoria)=>{
        return(
          props.carros.map((carro)=>{
            if(carro.categoria.toUpperCase().includes(categoria.toUpperCase()) || categoria=='')
            return(   
              <tr>
                <td>{carro.categoria}</td><td>{carro.preco}</td><td>{carro.modelo}</td>
              </tr>
            )
          })
        ) 
    }

    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Preco</th>
                    <th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {consultaLinhasTabela(props.categoria)}
            </tbody>
        </table>
    )
}