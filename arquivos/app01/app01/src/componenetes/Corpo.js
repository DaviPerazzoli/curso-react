import React from "react";
import Dados from "./Dados";

export default function Corpo(props){
    const curso='React';

    const somar=(v1,v2)=>{
        return Number(v1)+Number(v2);
    }

    return(
        <section className="texto-verde">
            <h2>Esse curso promete!</h2>
            <Dados curso={curso} somar={somar}/>
        </section>
    )
}