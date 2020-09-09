import React from 'react';
import './Card_styling.css';

const Card = ({ char }) => {
  return (
    <div className='card-container'>
      <img alt='Character' src={char.image}></img>
      <h1>{char.name}</h1>
      <h4>{`Species: ${char.species}`}</h4>
      <h4>{`Status: ${char.status}`}</h4>
      <h4>{`Origin: ${char.origin.name}`}</h4>
    </div>
  );
};

export default Card;
