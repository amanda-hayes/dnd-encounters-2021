import { useState, useEffect } from 'react';
import './App.css';

function showStats() {
const showCharacter = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/characters/${id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      });

      const data = await response.json();
      const filteredCharacters = characters.filter(character => character._id !== data._id);
      setCharacters(filteredCharacters);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ul>
    {
      characters.map(character => {
        return (
          <li key={character._id}>
            {character.name} - {character.race} {character.characterClass} 
            <br />
            {character.attack}
            <br />
            {character.catchphrases}
            <br />
            {character.hp}
            
          </li>
        )
      })
    }
  </ul>
  )
}


export default ShowStats;

//eslint-disable-next-line react-hooks/exhaustive-deps