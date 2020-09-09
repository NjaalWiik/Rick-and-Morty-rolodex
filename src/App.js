import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/cardList/CardList.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  const onChange = e => setSearch(e.target.value.toLowerCase());

  useEffect(() => {
    console.log(search);
  }, [search]);

  const filteredCharacters = characters.filter(
    char =>
      char.name.toLowerCase().includes(search) ||
      char.species.toLowerCase().includes(search) ||
      char.status.toLowerCase().includes(search) ||
      char.origin.name.toLowerCase().includes(search)
  );

  return (
    <div className='App'>
      <input type='search' placeholder='search character' onChange={onChange} />
      <CardList characters={filteredCharacters} />
    </div>
  );
}

export default App;
