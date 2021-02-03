import "../App.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Card } from "react-bootstrap";

function AllCharPage(props) {
  const [characters, setCharacters] = useState([]);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const [showModal, setShowModal] = useState([false]);
  const [randomCharacters, setRandomCharacters] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function handleDeleteClick(characterId) {
    deleteCharacter(characterId);
    handleClose();
  }

  const USERNAME = window.localStorage.getItem("currentUsername");

  function getUsersCharacters(characterList) {
    return characterList.filter((char) => char.createdBy === USERNAME);
  }

  function getUserCharactersExcept(character) {
    return characters.filter(
      (char) => char._id !== character._id && char.createdBy === USERNAME
    );
  }

  function getNonUserCharactersExcept(gCharacter) {
    return randomCharacters.filter(
      (char) => char._id !== gCharacter._id && char.createdBy === USERNAME
    );
  }

  function removeDuplicateRandomCharacters(gCharacter) {
    return randomCharacters.filter((rando) => rando.name !== gCharacter.name);
  }

  /*****************
   * GET ALL CHARS *
   ****************/
  const fetchCharacters = async () => {
    try {
      const response = await fetch("http://localhost:7000/characters");
      const data = await response.json();
      const userCharacters = getUsersCharacters(data);

      setCharacters(userCharacters);
    } catch (error) {
      console.error(error);
    }
  };

  /***************
   * DELETE CHAR *
   ****************/
  const deleteCharacter = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/characters/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await response.json();
      const filteredCharacters = getUserCharactersExcept(data);
      setCharacters(filteredCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRandomCharacters = async () => {
    try {
      const response = await fetch("http://localhost:7000/randomChar");
      const data = await response.json();

      setRandomCharacters(data);
    } catch (error) {
      console.error(error);
    }
  };

  function getRandomCharacter() {
    const randomIndex = Math.round(
      Math.random() * (randomCharacters.length - 1)
    );
    return randomCharacters[randomIndex];
  }

  /*****************
   * GENERATE CHAR *
   ****************/
  const generateChar = async () => {
    if (randomCharacters.length === 0) {
      return;
    }

    let gCharacter = getRandomCharacter();
    gCharacter.createdBy = USERNAME;

    try {
      if (characters.includes(gCharacter.name)) {
        const filteredgCharacters = getNonUserCharactersExcept(gCharacter);

        setRandomCharacters(filteredgCharacters);
        generateChar();
      } else {
        const response = await fetch("http://localhost:7000/characters", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(gCharacter),
        });

        const filteredgCharacters = removeDuplicateRandomCharacters(gCharacter);
        setRandomCharacters(filteredgCharacters);
        setCharacters([...characters, gCharacter]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    generateChar();
  }

  /***************
   * USE EFFECT *
   ****************/
  useEffect(() => {
    fetchCharacters();
    setIsLoggedIn();
    setShowModal();
    fetchRandomCharacters();
    if (!window.localStorage.getItem("token")) {
      props.history.push("/Login");
    } else {
      setToken(window.localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <div className="character-background">
        <div className="header-style">
          <h1 className="my-characters-heading">My Adventuring Party</h1>
          <p id="my-characters-p">
            View and manage all your characters, or create a new one.
          </p>
          <div id="char-buttons">
            <Link to="/CreateCharacterForm">
              <Button
                style={{
                  backgroundColor: "rgb(44 90 117)",
                  borderColor: "rgb(44 90 117)",
                }}
              >
                CREATE
              </Button>
            </Link>

            <Button
              onClick={handleClick}
              style={{
                backgroundColor: "rgb(44 90 117)",
                borderColor: "rgb(44 90 117)",
              }}
            >
              GENERATE
            </Button>
            <p id="my-characters-p">
              Create a new character, or generate a random character.
            </p>
          </div>
        </div>
        <div id="character-list">
          <ul>
            <>
              {characters.map((character) => {
                if (character.characterType === "NPC") {
                  return;
                }
                return (
                  <li key={character._id}>
                    <Card style={{ backgroundColor: "rgb(44 90 117)" }}>
                      <Card.Img
                        variant="top"
                        src={character.image}
                        id="thumbnail"
                        className="rounded mx-auto d-block"
                      />
                      <Card.Body>
                        <Card.Title style={{ color: "white" }}>
                          {character.name}
                        </Card.Title>
                        <Card.Text style={{ color: "white" }}>
                          {character.race} | {character.characterClass}
                        </Card.Text>
                        <Button
                          style={{
                            backgroundColor: "rgb(44 90 117)",
                            borderColor: "rgb(44 90 117)",
                          }}
                        >
                          <Link
                            to={`/characters/${character._id}`}
                            style={{ color: "white" }}
                          >
                            VIEW
                          </Link>
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "rgb(44 90 117)",
                            borderColor: "rgb(44 90 117)",
                          }}
                        >
                          <div id="link">
                            <Link
                              to={`/UpdateCharacterForm/${character._id}`}
                              style={{ color: "white" }}
                            >
                              EDIT
                            </Link>
                          </div>
                        </Button>
                        <Button
                          variant="primary"
                          style={{
                            backgroundColor: "rgb(44 90 117)",
                            borderColor: "rgb(44 90 117)",
                          }}
                          onClick={handleShow}
                        >
                          DELETE
                        </Button>
                        <Modal show={showModal} onHide={handleClose}>
                          <Modal.Header>
                            <Modal.Title>Delete Character</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to delete this character?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              onClick={handleDeleteClick(character._id)}
                            >
                              DELETE
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </Card.Body>
                    </Card>
                  </li>
                );
              })}
            </>
          </ul>
          <h1 id="ready">Ready to start adventuring?</h1>
          <Link to="/Tavern">
            <Button
              style={{
                backgroundColor: "rgb(44 90 117)",
                borderColor: "rgb(44 90 117)",
              }}
            >
              Let's Go!
            </Button>
            <br />
            <br />
          </Link>
        </div>
      </div>
    </>
  );
}

export default AllCharPage;
