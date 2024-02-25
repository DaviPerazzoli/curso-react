import React,{ useState } from 'react';
import './App.css';
import Tela from './componentes/Tela';
import Btn from './componentes/Btn';

function App() {

  const [valorTela, setValorTela]=useState('');
  const [resultado, setResultado]=useState(0);
  const [acumulador, setAcumulador]=useState(0);
  const [operado, setOperado]=useState(false);

  const addDigitoTela=(digito)=>{
    if((digito=='+' || digito=='-' || digito=='*' || digito=='/') && (valorTela[valorTela.length-1]=='+' || valorTela[valorTela.length-1]=='-' || valorTela[valorTela.length-1]=='*' || valorTela[valorTela.length-1]=='/')){
      return;
    }
    
    if((digito=='+' || digito=='-' || digito=='*' || digito=='/') && operado){
      console.log(valorTela[valorTela.length-1]);
      if(valorTela[valorTela.length-1]=='+' || valorTela[valorTela.length-1]=='-' || valorTela[valorTela.length-1]=='*' || valorTela[valorTela.length-1]=='/'){
        return;
      }
      setOperado(false);
      setValorTela(resultado+digito);
      return;
    }

    if(operado){
      setValorTela(digito);
      setOperado(false)
      return;
    }

    if(valorTela=='0'){
      setValorTela(digito);
    }else{
      const valorDigitadoTela=valorTela+digito;
      setValorTela(valorDigitadoTela);
    }
  }

  const limparMemoria=()=>{
    setOperado(false);
    setValorTela('');
    setResultado(0);
    setAcumulador(0);
  }

  const operacao=(operacao)=>{
    if(operacao=='bs'){
      let vtela=valorTela;
      vtela=vtela.substring(0,vtela.length-1);
      setValorTela(vtela);
      setOperado(false)
      return;
    }

    try{
      const r=eval(valorTela) // * calculo
      setAcumulador(r);
      setResultado(r);
      setOperado(true);
    }catch{
      setResultado('ERRO');
    }
  }

  return (
    <>
    <div className='container'>
      <h3>Calculadora Matemática Simples</h3>
      <Tela valor={valorTela} resultado={resultado}/>
      <div className='container botoes'>
        <Btn label='AC' onClick={limparMemoria}/>
        <Btn label='(' onClick={()=>addDigitoTela('(')}/>
        <Btn label=')' onClick={()=>addDigitoTela(')')}/>
        <Btn label='/' onClick={()=>addDigitoTela('/')}/>
        <Btn label='7' onClick={()=>addDigitoTela('7')}/>
        <Btn label='8' onClick={()=>addDigitoTela('8')}/>
        <Btn label='9' onClick={()=>addDigitoTela('9')}/>
        <Btn label='*' onClick={()=>addDigitoTela('*')}/>
        <Btn label='4' onClick={()=>addDigitoTela('4')}/>
        <Btn label='5' onClick={()=>addDigitoTela('5')}/>
        <Btn label='6' onClick={()=>addDigitoTela('6')}/>
        <Btn label='-' onClick={()=>addDigitoTela('-')}/>
        <Btn label='1' onClick={()=>addDigitoTela('1')}/>
        <Btn label='2' onClick={()=>addDigitoTela('2')}/>
        <Btn label='3' onClick={()=>addDigitoTela('3')}/>
        <Btn label='+' onClick={()=>addDigitoTela('+')}/>
        <Btn label='0' onClick={()=>addDigitoTela('0')}/>
        <Btn label='.' onClick={()=>addDigitoTela('.')}/>
        <Btn label='<-' onClick={()=>operacao('bs')}/>
        <Btn label='=' onClick={()=>operacao('=')}/>
      </div>
    </div>
    
      
    </>
  );
}

export default App;
