import React from 'react';
import './App.css';

export default function App() {

  const carros =['Uno','Corsa','Celta','Gol','Strada','Parati'];

  return (
    <>
      {carros.map((el)=><p>{el}</p>)}
    </>
  );
}