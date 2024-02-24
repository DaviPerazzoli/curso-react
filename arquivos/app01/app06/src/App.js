import React,{useState} from 'react';
import Carro from './componentes/Carro';

export default function App() {

  const [carro,setCarro]=useState(true);

  const mostrarOcultar=()=>{
    setCarro(!carro);
  }

  return (
    <>
      {carro ? <Carro canal="CFB" fator={10}/> : ''}
      <button onClick={()=>mostrarOcultar()}>Mostrar/ocultar</button>

    </>
  );
}
