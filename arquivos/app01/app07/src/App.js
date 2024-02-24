import './App.css';
import React,{useState} from 'react';
import TabelaCarros from './componentes/TabelaCarros';

const carros=[
  {categoria: 'Esporte',preco:'110000',modelo:'Golf GTI'},
  {categoria: 'Esporte',preco:'110000',modelo:'Camaro'},
  {categoria: 'SUV',preco:'85000',modelo:'HRV'},
  {categoria: 'SUV',preco:'83000',modelo:'T-Cross'},
  {categoria: 'Utilitário',preco:'125000',modelo:'Hilux'},
  {categoria: 'Utilitário',preco:'90000',modelo:'Ranger'}
]

export default function App() {
  const [categoria,setCategoria]=useState('');

  const handleInputCategoria=(cat)=>{
    setCategoria(cat);
  }

  return(
    <>
    <label>Digite uma categoria: </label><br/>
      <input type="text" value={categoria} onChange={(e)=>handleInputCategoria(e.target.value)}/>
      <TabelaCarros categoria={categoria} carros={carros}/>
    </>
  )
}