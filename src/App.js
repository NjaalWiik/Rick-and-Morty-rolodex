import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const tempData = [];
    for (let i = 1; i <= 34; i++) {
      fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
        .then(res => res.json())
        .then(data => tempData.push(data.results))
        .then(() => {
          let merged = [].concat.apply([], tempData);
          setCharacters(merged);
        });
    }
  }, []);

  const filteredCharacters = characters.filter(
    char =>
      char.name.toLowerCase().includes(search) ||
      char.species.toLowerCase().includes(search) ||
      char.status.toLowerCase().includes(search) ||
      char.origin.name.toLowerCase().includes(search)
  );

  const onChange = e => setSearch(e.target.value.toLowerCase());

  return (
    <div className='App'>
      <h1>Rick and Morty Rolodex</h1>
      <SearchBox onChange={onChange} placeholder='search for characters' />
      <CardList characters={filteredCharacters} />
    </div>
  );
}

export default App;
