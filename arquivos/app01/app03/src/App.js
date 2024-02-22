import React,{useState} from 'react';
import './App.css';

export default function App() {

  const [form,setForm]=useState({nome:'',curso:'',ano:''});

  const handleFormChange=(evt)=>{
    if(evt.target.getAttribute('name')=='f_nome'){
      setForm({nome:evt.target.value,curso:form.curso,ano:form.ano});
    }else if(evt.target.getAttribute('name')=='f_curso'){
      setForm({nome:form.nome,curso:evt.target.value,ano:form.ano});
    }else{
      setForm({nome:form.nome,curso:form.curso,ano:evt.target.value});
    }
  }

  return (
    <>
      <label>Nome</label>
      <input type='text' name='f_nome' value={form.nome} onChange={(evt)=>{handleFormChange(evt)}}/><br/>
      <label>Curso</label>
      <input type='text' name='f_curso' value={form.curso} onChange={(evt)=>{handleFormChange(evt)}}/><br/>
      <label>Ano</label>
      <input type='text' name='f_ano' value={form.ano} onChange={(evt)=>{handleFormChange(evt)}}/>
      <p>Nome digitado:{form.nome}</p>
      <p>Curso digitado:{form.curso}</p>
      <p>Ano digitado:{form.ano}</p>
    </>
  );
}