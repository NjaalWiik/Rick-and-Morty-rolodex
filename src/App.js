import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/cardList/CardList.jsx';

function App() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className='App'>
      <CardList props={characters}>
        {characters &&
          characters.map(char => <h1 key={char.id}>{char.name}</h1>)}
      </CardList>
    </div>
  );
}

export default App;
