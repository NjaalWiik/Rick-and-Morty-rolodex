import React from 'react';
import './CardList_styling.css';

import Card from '../card/Card';

const CardList = ({ characters }) => {
  return (
    <div className='card-list'>
      {characters && characters.map(char => <Card key={char.id} char={char} />)}
    </div>
  );
};

export default CardList;
