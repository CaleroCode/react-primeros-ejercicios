// rafce para el codigo

import React from 'react';
import './Botoncito.css';

const Botoncito = ({ texto, color = "pink" }) => {
  const handleClick = () => {
    console.log(`¡Ey! ¡Has dado click en ${texto}!`);
  };

  return (
    <button
      className="botoncito"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
};

export default Botoncito;
