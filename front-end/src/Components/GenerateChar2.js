import { useState, useEffect } from 'react';

function GenerateCharComponent(props) {
  const [randomCharacters, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
    try {
      const response = await fetch('http://localhost:7000/randomChar');
      const data = await response.json();

      props.updateCharacters([...props.characters, data]);
      setRandomCharacters(data);
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
        body: JSON.stringify(generateChar)
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { 
    fetchRandomCharacters()
    generateChar()
  }, []);

  return (
    <div>
      <h2>Generate a random character for me</h2>
      <button onClick={generateChar}
      >Generate</button>
    </div>
  )
}
export default GenerateCharComponent;


