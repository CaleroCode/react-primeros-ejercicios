import React from 'react';
import './Card.css';
import perfil from '../../assets/juntos.png';

const Card = ({ texto, color = "pink" }) => {
  const handleClick = () => {
    const name = texto || 'cambio';
    alert(`¡Ey! ¡Has hecho click en ${name}!`);
  };

  return (
    <article className="card" style={{ backgroundColor: color }}>
      <img className="card__img" src={perfil} alt="Juntos" />
      <div className="card__body">
        <h3 className="card__title">Syra & Terry</h3>
        <p className="card__desc">{texto}</p>

        <button className="card__btn" onClick={handleClick}>
          ¡Haz click aquí!
        </button>
      </div>
    </article>
  );
};

export default Card;
