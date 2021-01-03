import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllCharPage() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("http://localhost:7000/characters");
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCharacter = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/characters/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await response.json();
      const filteredCharacters = characters.filter(
        (character) => character._id !== data._id
      );
      setCharacters(filteredCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  // GENERATE A NEW CHARACTER

  const [randomCharacters, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
    try {
      const response = await fetch("http://localhost:7000/randomChar");
      const data = await response.json();
      setRandomCharacters(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateChar = async () => {
    let randomIndex = Math.round(Math.random() * (randomCharacters.length - 1));
    let generatedCharacter = randomCharacters[randomIndex];

    try {
      if (characters.includes(generatedCharacter._id) === false) {
        const response = await fetch("http://localhost:7000/characters", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(generatedCharacter),
        });

        setRandomCharacters(randomCharacters.filter(rando => rando._id != generatedCharacter._id));
        characters.push(generatedCharacter);
        setCharacters(characters);
      } else {
        // remove from list and grab another random character
        setRandomCharacters(randomCharacters.filter(rando => rando._id != generatedCharacter._id));
        generateChar();
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    generateChar();
  }

  useEffect(() => {
    fetchCharacters();
    fetchRandomCharacters();
  }, []);

  return (
    <div className="character-background">
      <h1>My Characters</h1>
      <p>View and manage all your characters, or create a new one.</p>
      <br />
      <div>
        <h2 id="create-new">Create a New Character</h2>
        <Link to="/CreateCharacterForm">
          <button>Create New Character</button>
        </Link>
        <br />
        <h2 id="create-new">Generate a random character for me</h2>
        <button onClick={handleClick}>Generate</button>
      </div>
      <div id="character-list">
        <ul>
          <>
            {characters.map((character) => {
              return (
                <li key={character._id}>
                  {character.name} | {character.race} |{" "}
                  {character.characterClass}
                  <br />
                  <button type="button">
                    <Link to={`characters/${character._id}`}>VIEW</Link>
                  </button>
                  <button>
                    <Link to={`/UpdateCharacterForm/${character._id}`}>
                      EDIT
                    </Link>
                  </button>
                  <button
                    onClick={(event) => {
                      deleteCharacter(character._id);
                    }}
                  >
                    DELETE{" "}
                  </button>
                </li>
              );
            })}
          </>
        </ul>
      </div>
    </div>
  );
}

export default AllCharPage;
