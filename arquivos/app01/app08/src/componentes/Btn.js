import React from "react";

export default function Btn(props){
    return(
        <button className="btnCalculadora" onClick={()=>props.onClick()}>
            {props.label}
        </button>
    )
}