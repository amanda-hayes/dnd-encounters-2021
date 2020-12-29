import { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './Home';
import CreateCharacterForm from './CreateCharacterForm'

function App() {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    try{
      const response = await fetch('http://localhost:7000/characters');
      const data = await response.json();
      console.log(data);
      setCharacters(data)
    }catch (error) {
      console.error(error)
    }
  }

  const deleteCharacter = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/characters/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        }
      })
      const data = await response.json();
      const filteredCharacters = characters.filter(character => character._id !== data._id)
      setCharacters(filteredCharacters);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchCharacters()
  }, [])

  return (
    <div className="App">
      <Home />
      Your characters:
      <ul>
        {
          characters.map(character => {
            return (
            <li key={character._id}>
            {character.name} THIS {character.race} {character.class}
            <button onClick={
              (event) => {
                deleteCharacter(character._id)
              }
            }>DELETE {character.name} </button>
            </li>
            )
          })
        }
        </ul>
        <h1>Create a New Character</h1>
        <CreateCharacterForm updateCharacters={setCharacters} characters={characters} />
        <h1>Generate a random character for me</h1>
        <button>Generate</button>
    </div>
  );
}

export default App;