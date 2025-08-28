import React from 'react';
import './App.css';
import Botoncito from './components/Botoncito/Botoncito';
import Card from './components/Card/Card';

import img1 from './assets/juntos.png';
import img2 from './assets/juliadev.jpg';


function App() {
  return (
    <section>
      <div className="botoncitos-container">
        <Botoncito texto="¡Pedazo prop!" color="blue" />
        <Botoncito texto="¿Explota algo?" color="green" />
        <Botoncito texto="¡Funciona!" />
      </div>

      <div className="cards-container">
        <Card texto="Syra & Terry" texto2="El amor es una palabra de cuatro patas" color="purple" img={img1} />
        <Card texto="Julia" texto2="Rusa violenta" color="blue" img={img2} showButton />
      </div>
    </section>
  );
}

export default App;

