import './App.css';
import React from 'react';

const array_numeros =[1,2,3,4,5,6,7,8,9];

function ListaNumeros(props){
  const num=props.numeros;

  const lista_numeros=num.map(n=>{
    return <li key={n.toString()}>{n}</li>
  })

  return(
    <ul>
      {lista_numeros}
    </ul>
  )
}

export default function App() {
  return (
    <>
      <ListaNumeros numeros={array_numeros}/>
    </>
  );
}