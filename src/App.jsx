import React from 'react';
import './App.css';
import Botoncito from './components/Botoncito/Botoncito';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Botoncito texto ="¡Pedazo prop!" color="blue" />
      <Botoncito texto ="¿Explota algo?" color="green" />
      <Botoncito texto ="¡Funciona!" />

      <Card texto ="Mis ángeles" color="purple" />
      <Card texto ="El amor es una palabra de cuatro patas" color="orange" />
      <Card texto ="💚" />
    </div>
  );
}

export default App;

