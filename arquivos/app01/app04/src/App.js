import React,{useState} from 'react';
import Nota from './componentes/Nota';
import Resultado from './componentes/Resultado';
import './App.css';

function App() {


  const [notas,setNotas]=useState({nota1:0,nota2:0,nota3:0,nota4:0});
  
  const handleSetNotas=(valor,num)=>{
    switch (num) {
      case 1:
        setNotas({nota1:valor,nota2:notas.nota2,nota3:notas.nota3,nota4:notas.nota4});
        break;
      case 2:
        setNotas({nota1:notas.nota1,nota2:valor,nota3:notas.nota3,nota4:notas.nota4});
        break;
      case 3:
        setNotas({nota1:notas.nota1,nota2:notas.nota2,nota3:valor,nota4:notas.nota4});
        break;
      case 4:
        setNotas({nota1:notas.nota1,nota2:notas.nota2,nota3:notas.nota3,nota4:valor});
        break;
    }
  }

  return (
    <div>
      <Nota num={1} nota={notas.nota1} setNota={handleSetNotas}/>
      <Nota num={2} nota={notas.nota2} setNota={handleSetNotas}/>
      <Nota num={3} nota={notas.nota3} setNota={handleSetNotas}/>
      <Nota num={4} nota={notas.nota4} setNota={handleSetNotas}/>
      <Resultado somaNotas={(Number(notas.nota1)+Number(notas.nota2)+Number(notas.nota3)+Number(notas.nota4)).toFixed(1)}/>
    </div>
  );
}

export default App;
