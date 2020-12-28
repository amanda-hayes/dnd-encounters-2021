import { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './Home';

function App() {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    try{
      const response = await fetch('http://localhost:3000/characters');
      const data = await response.json();
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
    </div>
  );
}

export default App;
