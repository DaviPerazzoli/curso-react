import React from "react";

export default function Caixa(props) {
    console.log(props.children)
    return (
        <>
            <p>{props.site}</p>
            {props.children.filter(e=>e.type=='h1')}
            <h2>{props.children[1].props.children}</h2>
        </>
    );
}
