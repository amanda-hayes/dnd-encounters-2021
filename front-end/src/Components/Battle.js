/***************
 *   IMPORTS   *
 ***************/
import "../App.css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Card, Button } from "react-bootstrap";
import beholder from "../beholder.jpeg";
import d20 from "../images/d20.png";
import d20natone from "../images/d20natone.png";

/**************
 *   BATTLE   *
 **************/
function Battle() {
  const [playerCharacters, updatePlayerCharactersList] = useState([]);
  const [open, setOpen] = useState(true);
  const [openBattle, setOpenBattle] = useState(false);
  const [openDiceModal, setOpenDiceModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const onCloseModal = () => setOpen(false);
  const onOpenBattle = () => setOpenBattle(true);
  const onCloseBattle = () => setOpenBattle(false);
  const onOpenDiceRollModal = () => setOpenDiceModal(true);
  const onCloseDiceRollModal = () => setOpenDiceModal(false);

  let history = useHistory();

  function chooseOneMonster(characters) {
    const monsters = characters.filter((mon) => mon.characterType !== "PC");

    if (monsters.length > 1) {
      let randomIndex = Math.round(Math.random() * (monsters.length - 1));
      let monstaaaaa = monsters[randomIndex];

      const battleCrew = characters.filter(
        (mon) => mon.characterType !== "NPC" || mon.name !== monstaaaaa.name
      );

      return battleCrew;
    }

    return characters;
  }

  const fetchPlayerCharacters = async () => {
    try {
      const response = await fetch("http://localhost:7000/characters");
      const charactersData = await response.json();

      updatePlayerCharactersList(chooseOneMonster(charactersData));
    } catch (error) {
      console.error(error);
    }
  };

  function rollAD20() {
    let diceRoll = Math.floor(Math.random() * 20) + 1;
    return diceRoll;
  }

  function attackClickHandler(event) {
    const newPlayerCharacters = [...playerCharacters];
    const monster = newPlayerCharacters.find(
      (npc) => npc.characterType === "NPC"
    );

    let randomIndex = Math.round(Math.random() * (monster.length - 1));
    let generatedMonster = monster[randomIndex];

    if (generatedMonster._id !== event.target.value) {
      const roll = rollAD20();

      if (roll >= generatedMonster.armorClass) {
        generatedMonster.HP -= 4;
        alert(`It's a hit! The Beholder takes 4 damage!`);

        if (generatedMonster.HP <= 0) {
          history.push("/YouWin");
          alert(
            `You did it! You looted the monster and retrieved the precious goldfish!`
          );
        }
      } else {
        alert(`You rolled a ${roll} . You missed!`);
      }

      const turnOverMonster = newPlayerCharacters.shift();
      updatePlayerCharactersList([...newPlayerCharacters, turnOverMonster]);
    } else {
      const playableCharacters = newPlayerCharacters.filter(
        (pc) => pc.characterType !== "NPC"
      );

      const mathFunc = Math.floor(Math.random() * playableCharacters.length);
      const characterAttacked = playableCharacters[mathFunc];
      const roll = rollAD20();

      if (roll >= characterAttacked.armorClass) {
        characterAttacked.HP -= 8;
        alert(characterAttacked.name + ` was attacked and hit for 8 damage!`);
      } else {
        alert(`Monster rolled a ${roll} . It's a miss!`);
      }

      if (characterAttacked.HP <= 0) {
        alert(`Oh no! ` + characterAttacked.name + ` passed out!`);

        const nowWithNoDeadPlayers = newPlayerCharacters.filter(
          (player) => player._id !== characterAttacked._id
        );

        const turnOver = nowWithNoDeadPlayers.shift();
        updatePlayerCharactersList([...nowWithNoDeadPlayers, turnOver]);
      } else {
        const turnOverMon = newPlayerCharacters.shift();
        updatePlayerCharactersList([...newPlayerCharacters, turnOverMon]);
      }
    }

    if (
      playerCharacters.length === 1 &&
      playerCharacters[0]._id === monster._id
    ) {
      alert(
        "Oh no! Congratulations on your TPK! You lose Dungeons and Dragons and now have to create new characters and form a new party. Bummer!"
      );
      history.push("/YouLose");
    }
  }

  function rollInitClickHandler(event) {
    const newPlayerCharacters = [...playerCharacters];
    const playersInited = newPlayerCharacters.map((player) => {
      player.initiative = rollAD20();
      onOpenDiceRollModal();

      return player;
    });

    let modalMessage = "";

    playersInited.map((player) => {
      if (player.initiative === 20) {
        modalMessage +=
          player.name +
          ` rolled a natural ` +
          player.initiative +
          `....OH YEAH.....CRIT!` +
          ".";
      } else if (player.initiative === 1) {
        modalMessage +=
          player.name +
          ` rolled a natural ` +
          player.initiative +
          `....Oh boy.....AUTOMATIC FAIL! ` +
          ".";
      } else {
        modalMessage +=
          player.name + ` rolled a ` + player.initiative + "        .      ";
      }
    });

    setModalContent(modalMessage);

    updatePlayerCharactersList(
      playersInited.sort((a, b) => b.initiative - a.initiative)
    );
  }

  function shoutClickHandler(event) {
    alert(
      playerCharacters
        .find((char) => char._id === event.target.value)
        .catchphrases.split(".")[0]
    );
  }

  useEffect(() => {
    fetchPlayerCharacters();
    setModalContent();
    setOpenDiceModal();
    setOpenBattle();
  }, []);

  return (
    <>
      <div className="battle-background">
        <div>
          <br />
          <img src={d20natone} alt="d20natone" className="D20natone-photo" />
          <img src={d20} alt="d20" className="D20-photo" />
          <br />
          <Modal open={open} onClose={onCloseModal} center>
            <h2>On your way!</h2>
            <p>
              You're traveling through the forest....suddenly...you hear a
              terrifying sound. The blood drains from your party member's faces
              as you search for the source.
            </p>
            <br />
            <button onClick={onCloseModal} id="tavern-button">
              OKAY
            </button>
          </Modal>

          <Button
            onClick={onOpenBattle}
            style={{ backgroundColor: "rgb(44 90 117)" }}
          >
            WHAT'S THAT SOUND?
          </Button>
          <Modal
            open={openBattle}
            onClose={onCloseBattle}
            center
            className="battle-modal"
          >
            <h2>Oh no!</h2>
            <p>
              A monster appears and it's guarding the treasure you so
              desperately need! It's time to roll for initiative!
            </p>
            <br />
            <button onClick={onCloseBattle} id="tavern-button">
              FIGHT
            </button>
          </Modal>
        </div>
        <Button
          onClick={rollInitClickHandler}
          style={{ backgroundColor: "rgb(44 90 117)" }}
        >
          ROLL INITIATIVE
        </Button>
        <Modal
          open={openDiceModal}
          onClose={onCloseDiceRollModal}
          center
          className="battle-modal"
        >
          <h1>Initiative Rolls</h1>
          <br />
          <br />
          <p>{modalContent}</p>
          <button onClick={onCloseDiceRollModal}>OKAY</button>
        </Modal>
        <br />
        <br />
        <h2 id="battle-page-h2">Players</h2>
        <ul>
          {playerCharacters.map((player) => {
            return (
              <li key={player._id} id="battle-character-list">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={player.image} />
                  <Card.Body>
                    <Card.Title>{player.name}</Card.Title>
                    <Card.Text>
                      {player.race} | {player.characterClass} <br />
                      HP: {player.HP} | Armor Class: {player.armorClass} | INIT:{" "}
                      {player.initiative}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Button
                  value={player._id}
                  onClick={shoutClickHandler}
                  style={{ backgroundColor: "rgb(44 90 117)" }}
                >
                  SHOUT
                </Button>
                <Button
                  value={player._id}
                  onClick={attackClickHandler}
                  style={{ backgroundColor: "rgb(44 90 117)" }}
                >
                  ATTACK
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Battle;
