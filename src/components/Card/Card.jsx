import React from 'react';
import './Card.css';

const Card = ({ texto, texto2, color = "pink", img, showButton = false }) => {
  const handleClick = () => {
    const name = texto || 'Julia';
    alert(`¡Ey! ¡Has hecho click en ${name}! ¡Le gusta cantar, leer la Biblia, la lluvia y el color azul!`);
  };

  return (
    <article className="card" style={{ backgroundColor: color }}>
      <img className="card__img" src={img} alt={`Imagen de ${texto}`} />
      <div className="card__body">
        <h3 className="card__title">{texto}</h3>
        <p className="card__desc">{texto2}</p>

        {showButton && (
          <button className="card__btn" onClick={handleClick}>
           +Info
          </button>
        )}
      </div>
    </article>
  );
};

export default Card;
