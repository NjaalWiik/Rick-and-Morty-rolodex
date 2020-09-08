import React from 'react';
import './CardList_styling.css';

const CardList = ({ characters }) => {
  return (
    <div className='card-list'>
      {characters && characters.map(char => <h1 key={char.id}>{char.name}</h1>)}
    </div>
  );
};

export default CardList;
