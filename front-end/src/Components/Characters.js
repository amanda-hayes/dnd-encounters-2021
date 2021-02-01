import "../App.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Card } from "react-bootstrap";

function AllCharPage() {
  const [characters, setCharacters] = useState([]);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const [showModal, setShowModal] = useState([false]);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  /*****************
   * CHECK LOGIN *
   ****************/

  const checkLogin = (props) => {
    if (token) {
      setIsLoggedIn("LOGGED IN");
    } else {
      setIsLoggedIn("LOGGED OUT");
    }
  };



  /*****************
   * GET ALL CHARS *
   ****************/

  const fetchCharacters = async () => {
    try {
      const response = await fetch("http://localhost:7000/characters");
      const data = await response.json();
      setCharacters(data);
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
          Authorization: token,
        },
      });
      if (!token) {
        return alert("Please Login before deleting!");
      }
      const data = await response.json();
      const filteredCharacters = characters.filter(
        (character) => character._id !== data._id
      );
      setCharacters(filteredCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  /*****************
   * GENERATE CHAR *
   ****************/

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
        const filterDupe = randomCharacters.filter(
          (rando) => rando.name !== generatedCharacter.name
        );
        setRandomCharacters(filterDupe);
        generateChar();
      } else {
        const response = await fetch("http://localhost:7000/characters", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(generatedCharacter),
        });
        if (!token) {
          return alert("Please Login before continuing!");
        }
        const newRandomCharList = randomCharacters.filter(
          (rando) => rando.name !== generatedCharacter.name
        );
        setRandomCharacters(newRandomCharList);
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

  /***************
   * USE EFFECT *
   ****************/

  useEffect(() => {
    fetchCharacters();
    setIsLoggedIn();
    setShowModal();
    fetchRandomCharacters();
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <div className="character-background">
        <div className="header-style">
          <h1 className="my-characters-heading">My Adventuring Party</h1>
          <p id="my-characters-p">View and manage all your characters, or create a new one.</p>
          <div>

            <Link to="/CreateCharacterForm">
              <button id="btn">CREATE</button>
            </Link>
       
            <button onClick={handleClick} id="btn" >GENERATE</button>
            <p id="my-characters-p">Create a new character, or generate a random character.</p>
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
                    <Card style={{backgroundColor: "rgb(44 90 117)"}} >
                    {/* p-2 mb-2 bg-dark text-white */}
                      <Card.Img
                        variant="top"
                        src={character.thumbnail}
                        id="thumbnail"
                        className="rounded mx-auto d-block"
                      />
                      <Card.Body>
                        <Card.Title style={{color: "white"}}>{character.name}</Card.Title>
                        <Card.Text style={{color: "white"}}>
                          {character.race} | {character.characterClass}
                        </Card.Text>
                        <button id="btn">
                      <Link to={`/characters/${character._id}`} style={{color: "white"}}>VIEW</Link>
                    </button>
                    <button id="btn">
                      <div id="link">
                      <Link to={`/UpdateCharacterForm/${character._id}`} style={{color: "white"}}>
                        EDIT
                      </Link>
                      </div>
                    </button>
                    <button id="btn" variant="primary" onClick={handleShow}>
                      DELETE
                    </button>
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
                          onClick={() => {
                            deleteCharacter(character._id);
                            handleClose();
                          }}
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
            <button id="letsgo">Let's Go!</button>
          
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default AllCharPage;
