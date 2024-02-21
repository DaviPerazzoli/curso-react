import React from 'react';
import logo from './imgs/logo.png';

export default function Header(props){
    return(
        <header>
            <img src={logo} style={props.style}/>
            <p>Esse cabeçalho tem {props.style.width} de largura</p>
            <h1>Curso de React</h1>
        </header>
    )
}