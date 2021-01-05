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
    } catch (error) {
      console.error(error);
    }
  };

  const generateChar = async () => {
    if (randomCharacters.length === 0) {
      return;
    }
    let randomIndex = Math.round(Math.random() * (randomCharacters.length - 1));
    let generatedCharacter = randomCharacters[randomIndex];

    console.log("char dupe: " + characters.includes(generatedCharacter.name));
    console.log(generatedCharacter.name);
    try {
      if (characters.includes(generatedCharacter.name)) {
        const filterDupe = randomCharacters.filter(rando => rando.name !== generatedCharacter.name);

        setRandomCharacters(filterDupe);
        generateChar();
      } else {
        const response = await fetch("http://localhost:7000/characters", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(generatedCharacter),
        });

        const newRandomCharList = randomCharacters.filter(rando => rando.name !== generatedCharacter.name);
        setRandomCharacters(newRandomCharList);
        const okREALLYnoDUPES = [...characters]; 

        setCharacters([...characters, generatedCharacter]);
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
    <>
    <nav className="topnav">
        <Link to="/">HOME</Link>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/createcharacterform">CREATE</Link>
        <Link to="/battle">BATTLE</Link>
      </nav>
    <div className="character-background">
      <div className="header-style">
      <h1 className="my-characters-heading">My Adventuring Party</h1>
      <p>View and manage all your characters, or create a new one.</p>
      <div>
        Create a New Character

        <Link to="/CreateCharacterForm">
          <button>CREATE</button>
        </Link>

        Generate a random character for me
        <button onClick={handleClick}>GENERATE</button>
      </div>
      </div>
      <br />
      <br />
      <div id="character-list">
        <ul>
          <>
            {characters.map((character) => {
              if (character.characterType === "NPC"){ return; }
              return (
                <li key={character._id}>
                  <img src={character.thumbnail} id="thumbnail" />
                  {character.name} | {character.race} |{" "}
                  {character.characterClass}
                  <br />
                  <button type="button">
                    <Link to={`/characters/${character._id}`}>VIEW</Link>
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
            <div>
              <br />
              <br />
              <br />
              <br />
              <h1>Ready to start adventuring?</h1>
              <Link to="/Battle">
                <button>Let's Go!</button>
              </Link>
            </div>
    </div>
    </>
  );
}

export default AllCharPage;
