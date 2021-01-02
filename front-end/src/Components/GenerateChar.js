import { useState, useEffect } from 'react';

function GenerateCharComponent(props) {
const [randomCharacters, setRandomCharacters] = useState([]);
// const [characters, setCharacters] = useState([]);

const fetchRandomCharacters = async () => {
    try {
        const response = await fetch('http://localhost:7000/randomChar');
        const data = await response.json();
        props.updateCharacters([...props.characters, data]);
        console.log("feltching rando " + data);
        setRandomCharacters(data);
    } catch (error) {
        console.error(error);
    }
    }
    const generateChar = async () => {
            const randomIndex = Math.round(Math.random() * (randomCharacters.length - 1));
            console.log("Rando Index Num " + randomIndex);
        
            const generatedCharacter = randomCharacters[randomIndex];
            console.log("Rando: " + randomCharacters);
            console.log("genChar obj: " + JSON.stringify(generatedCharacter));
        
            // setCharacters([...characters, generatedCharacter]);
            try {
              const response = await fetch("http://localhost:7000/characters", {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(generateChar)
              });

              console.log("GenChar PUT respone" + response);
        
              //setCharacters(generateChar);
            } catch (error) {
              console.log(error);
            }

            return randomCharacters[randomIndex];
    }

        useEffect(() => {
        //setCharacters();
        fetchRandomCharacters()
        generateChar()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return(
        <div>
            <h2>Generate a random character for me</h2>
            <button onClick={generateChar}
            >Generate</button>
        </div>
      )
}

export default GenerateCharComponent;


