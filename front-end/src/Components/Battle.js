import "../App.css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import beholder from "../beholder.jpeg";
import d20 from "../images/d20.png";
import d20natone from "../images/d20natone.png";

function Battle() {
  const [playerCharacters, updatePlayerCharactersList] = useState([]);
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);
  const [openBattle, setOpenBattle] = useState(false);
  const onOpenBattle = () => setOpenBattle(true);
  const onCloseBattle = () => setOpenBattle(false);
  const [openDiceModal, setOpenDiceModal] = useState(false);
  const onOpenDiceRollModal = () => setOpenDiceModal(true);
  const onCloseDiceRollModal = () => setOpenDiceModal(false);
  const [modalContent, setModalContent] = useState([]);
  let history = useHistory();

  const fetchPlayerCharacters = async () => {
    try {
      const response = await fetch(
        "https://dnd-encounters-2021.herokuapp.com/api/characters"
      );
      const charactersData = await response.json();

      updatePlayerCharactersList(charactersData);
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

    if (monster._id !== event.target.value) {
      const roll = rollAD20();

      if (roll >= monster.armorClass) {
        monster.HP -= 4;
        alert(`It's a hit! The Beholder takes 4 damage!`);

        if (monster.HP <= 0) {
          history.push("/YouWin");
          alert(`You did it!`);
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

      characterAttacked.HP -= 8;
      alert(characterAttacked.name + ` was attacked and hit for 8 damage!`);

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
      <nav className="topnav">
        <Link to="/">HOME</Link>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/createcharacterform">CREATE</Link>
        <Link to="/tavern">ADVENTURE</Link>
      </nav>
      <div className="battle-background">
        <div>
          <br />
          <img src={d20natone} alt="d20natone" className="D20natone-photo" />
          <img src={d20} alt="d20" className="D20-photo" />
          <br />
          <Modal open={open} onClose={onCloseModal} center>
            <h2>On your way!</h2>
            <p
              classNames={{
                overlay: "tavern-overlay",
                modal: "tavern-modal",
              }}
            >
              You're traveling through the forest....suddenly...you hear a
              terrifying sound. The blood drains from your party member's faces
              as you search for the source.
            </p>
            <br />
            <button onClick={onCloseModal} id="tavern-button">
              OKAY
            </button>
          </Modal>

          <button onClick={onOpenBattle}>WHAT'S THAT SOUND?</button>
          <Modal
            open={openBattle}
            onClose={onCloseBattle}
            center
            className="battle-modal p"
          >
            <h2>Oh no!</h2>
            <p>
              A Beholder appears and it's guarding the treasure you so
              desperately need! There's no getting out of this without a fight.
              It's time to roll for initiative!
            </p>
            <img src={beholder} alt="beholder" />
            <br />
            <button onClick={onCloseBattle} id="tavern-button">
              FIGHT
            </button>
          </Modal>
        </div>
        <button onClick={rollInitClickHandler}>ROLL INITIATIVE</button>
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
        <h2 id="battle-page-h2">Characters</h2>
        <ul>
          {playerCharacters.map((player) => {
            return (
              <li key={player._id} id="battle-character-list">
                <img src={player.thumbnail} id="thumbnail" />
                {player.name} <br /> HP: {player.HP} | Armor Class:{" "}
                {player.armorClass} | INIT: {player.initiative}
                <br />
                <button value={player._id} onClick={shoutClickHandler}>
                  SHOUT
                </button>
                <button value={player._id} onClick={attackClickHandler}>
                  ATTACK
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Battle;
