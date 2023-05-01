import React from 'react';
import './Card.css';

function Card({ src, title, description, imageLeft }) {
  return (
    <div className={`card ${imageLeft ? 'image-left' : 'image-right'}`}>
      <img className="card-image" src={src} alt={title} />
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
