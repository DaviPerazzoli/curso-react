import React from 'react';
import Header from './componenetes/Header'
import Corpo from './componenetes/Corpo'
import './App.css';

export default function App(){
  const textoDestaque={
    color: '#00f',
    fontSize:'3em'
  }

  return(
    <>
      <section className='caixa'>
        <Header style={{width: 300+'px',backgroundColor: '#ff0'}}/>
        <h2 style={textoDestaque}>Texto destacado</h2>
        <Corpo/>
      </section>
    </>
  )
}