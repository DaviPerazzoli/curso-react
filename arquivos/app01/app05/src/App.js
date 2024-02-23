import './App.css';
import React,{useState} from 'react';
import Caixa from './componentes/Caixa';

export default function App() {
  return (
    <>
      <Caixa site="www.github.com.br">
        <h1>CFB Cursos</h1>
        <p><a href='#'>Oi</a> <strong>Gente</strong></p>
      </Caixa>
    </>
  );
}