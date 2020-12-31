import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import CreateCharacterForm from './CreateCharacterForm';
import UpdateCharacterForm from './UpdateCharacterForm';

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


   const toggleUpdateChar = () => {
    const toggle = document.getElementById("myDiv");
    if (toggle.style.display==="none") {
      toggle.style.display = "block";
    } else {
      toggle.style.display = "none"
    }
   }

   const toggleShowStats = () => {
    const toggleStats = document.getElementById("poop");
    if (toggleStats.style.display==="none") {
      toggleStats.style.display = "block";
    } else {
      toggleStats.style.display = "none"
    }
   }



  const generateChar = () => {
      const randomIndex = Math.round(Math.random() * (randomCharacters.length - 1));
      const generatedCharacter = randomCharacters[randomIndex];
      console.log(generatedCharacter);
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
  };


  useEffect(() => {
    fetchCharacters()
    fetchRandomCharacters()
  }, []);

  // for (let j = TOTAL_CARDS - 1; j >= 0; j--) {
  //   let swapIndex = Math.floor(Math.random() * j);
  //   let tmp = col[swapIndex];
  //   col[swapIndex] = col[j];
  //   col[j] = tmp;
  // }

  return (
    <div className="App">
      <Home />
      Your adventuring party:
      <ul>
        {
          characters.map(character => {
            return (
              <li key={character._id}>
                {character.name} - {character.race} {character.characterClass}
                <br />
                
                <button onClick={
                  (event) => {
                    deleteCharacter(character._id)
                  }
                }>DELETE </button>
                
                 <button onClick={
                  (event) => {
                    toggleUpdateChar()
                  }
                }>EDIT 
                </button>

                <div id="myDiv">
                <UpdateCharacterForm character={character} updateCharacters={setCharacters} characters={characters}/>
                </div>

                <button onClick={
                  (event) => {
                   toggleShowStats()
                  }
                }>See Stats 
                </button>

                <div id="poop">
                Name: {character.name}
                <br />
                Race: {character.race}
                <br />
                Class: {character.characterClass}
                <br />
                HP: {character.HP}
                <br />
                Main weapon: {character.weapon}
                <br />
                Attack: {character.attack}
                <br />
                Quote: {character.catchphrases}
                </div>

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
      Ready to go?
      <button>Let's play!</button>

    </div>
  );
}
export default App;