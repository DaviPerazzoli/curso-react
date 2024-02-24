import './App.css';
import React,{useState} from 'react';
import FormularioIMC from './componentes/FormularioIMC';
import TabelaIMC from './componentes/TabelaIMC';

export default function App() {
  const [peso,setPeso] = useState(10);
  const [altura,setAltura]=useState(1);
  const [IMC,setIMC]=useState(0);

  return(
    <>
      <FormularioIMC peso={peso} setPeso={setPeso} altura={altura} setAltura={setAltura} setIMC={setIMC}/>
      <p className='resultado'>Resultado: {IMC.toFixed(2)}</p>
      <TabelaIMC/>
    </>
  )
}