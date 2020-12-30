import { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './Home';
import CreateCharacterForm from './CreateCharacterForm';

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('http://localhost:7000/characters');
      const data = await response.json();
      console.log(data);
      setCharacters(data);
    } catch (error) {
      console.error(error);
    }
  }

  const [randomCharacters, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
      try {
          const response = await fetch('http://localhost:7000/randomChar');
          const data = await response.json();
          console.log(data);
          setRandomCharacters(data);
      } catch (error) {
          console.error(error);
      }
  }

  const generateChar = () => {
      const randomIndex = Math.round(Math.random() * (randomCharacters.length - 1));
      console.log(randomCharacters[randomIndex]);
      setCharacters([...characters, randomCharacters[randomIndex]]);
      return randomCharacters[randomIndex];
  }
  


  const deleteCharacter = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/characters/${id}`, {
        method: 'DELETE',
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

  const updateCharacter = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/characters/${id}`, {
        method: 'PUT',
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

  

  useEffect(() => {
    fetchCharacters()
    fetchRandomCharacters()
  }, []);



  return (
    <div className="App">
      <Home />
      Your characters:
      <ul>
        {
          characters.map(character => {
            return (
              <li key={character._id}>
                {character.name} - {character.race} {character.characterClass}
                <button onClick={
                  (event) => {
                    deleteCharacter(character._id)
                  }
                }>DELETE </button>
                 <button onClick={
                  (event) => {
                    updateCharacter(character._id)
                  }
                }>UPDATE </button>
              </li>
            )
          })
        }
      </ul>
      <h1>Create a New Character</h1>
      <CreateCharacterForm updateCharacters={setCharacters} characters={characters} />
      <div>
      <h1>Generate a random character for me</h1>
      <button onClick={generateChar}
      >Generate</button>
      </div>
      Your adventuring party:

    </div>
  );
}

export default App;