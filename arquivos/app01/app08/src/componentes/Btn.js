import React from "react";
import Styles from "../styles/styles";

export default function Btn(props){
    return(
        <Styles.ButtonCalculadora onClick={()=>props.onClick()}>
            {props.label}
        </Styles.ButtonCalculadora>
    )
}