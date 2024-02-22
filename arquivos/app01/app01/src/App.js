import React from 'react';
import Header from './componenetes/Header';
import Corpo from './componenetes/Corpo';
import Relogio from './componenetes/Relogio';
import './App.css';

export default function App(){
  const textoDestaque={
    color: '#00f',
    fontSize:'3em'
  }

  return(
    <>
      <section className='caixa'>
        <Relogio/>
        <Header style={{width: 300+'px',backgroundColor: '#ff0'}}/>
        <h2 style={textoDestaque}>Texto destacado</h2>
        <Corpo/>
      </section>
    </>
  )
}