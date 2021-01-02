import { useState, useEffect } from 'react';
import '../App.css';


function GenerateCharComponent(props) {
  const [randomCharacters, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
    try {
      const response = await fetch('http://localhost:7000/randomChar');
      const data = await response.json();
      setRandomCharacters(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateChar = async () => {
    const randomIndex = Math.round(Math.random() * (randomCharacters.length - 1));
    const generatedCharacter = randomCharacters[randomIndex];

    try {
      const response = await fetch("http://localhost:7000/characters", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(generatedCharacter)
      });
      console.log(generatedCharacter);
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    generateChar();
  }

  useEffect(() => { 
    fetchRandomCharacters()
  }, []);

  return (
    <div>
      <h2>Generate a random character for me</h2>
      <button onClick={handleClick}
      >Generate</button>
      <h2>Heres your char</h2>
      <li>
      {/* {generatedCharacter.name} */}
      </li>
    </div>
  )
}
export default GenerateCharComponent;


