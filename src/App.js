import React, { useState } from 'react';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([
    {
      name: 'Frankenstein',
      id: 1
    },
    {
      name: 'Dracula',
      id: 2
    },
    {
      name: 'Zombie',
      id: 1
    }
  ]);

  return (
    <div className='App'>
      {monsters.map(monster => (
        <h1>{monster.name}</h1>
      ))}
    </div>
  );
}

export default App;
