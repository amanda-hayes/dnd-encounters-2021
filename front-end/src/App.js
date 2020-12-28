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

  useEffect(()=> {
    fetchCharacters()
  }, [])

  return (
    <div className="App">
      <Home />
      <ul>
        {
          characters.map(character => {
            return (
            <li>
            {character.name}
            </li>
            )
          })
        }
        </ul>
        <h1>Create a New Character</h1>
        <CreateCharacterForm updateCharacters={setCharacters} characters={characters} />
    </div>
  );
}

export default App;
