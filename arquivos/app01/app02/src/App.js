import './App.css';
import Numero from './componentes/Numero';
import Led from './componentes/Led';
import React,{useState} from 'react';

export default function App() {

  const [cor,setCor]=useState(1);

  const vermelho = '#f00';
  const verde = '#0f0';
  const azul = '#00f';

  const retornaCor=(cor)=>{
    if(cor ==1){
      return vermelho;
    }else if(cor==2){
      return verde;
    }else{
      return azul;
    }
  }

  const mudaCor=()=>{
    clearInterval(intervalo);
    setCor(cor +1);
    if(cor>2){
      setCor(1);
    }
  }

  let intervalo=setInterval(mudaCor,1000)

  return (
    <>
      <div style={{height: 500+'px',width: 500+'px', borderRadius:'50%' ,backgroundColor: retornaCor(cor)}}></div>
      <button onClick={()=>{mudaCor()}}>Muda cor</button>
    </>
  );
}