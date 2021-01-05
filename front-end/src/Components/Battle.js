import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function Battle() {
    const [playerCharacters, updatePlayerCharactersList] = useState([]);
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const fetchPlayerCharacters = async () => {
        try {
            const response = await fetch("http://localhost:7000/characters");
            const charactersData = await response.json();

            updatePlayerCharactersList(charactersData);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchPlayerCharacters();
      }, []);

      function attackClickHandler(event) {
        const newPlayerCharacters = [...playerCharacters];
        if (newPlayerCharacters.find(npc => npc.characterType !== "NPC")) {
          newPlayerCharacters.find(npc => npc.characterType === "NPC").HP -= 4;
        } else {
          const randomPlayer = newPlayerCharacters[1];
          newPlayerCharacters.find(player => player._id === randomPlayer._id).HP -= 8;
        }
        
        updatePlayerCharactersList(newPlayerCharacters);
      }

      function rollInitClickHandler(event) {
        const newPlayerCharacters = [...playerCharacters];
        const playersInited = newPlayerCharacters.map(
          (player) => { 
            player.initiative = rollAD20();
            return player;
          });

          updatePlayerCharactersList(playersInited.sort((a, b) => b.initiative - a.initiative));
      }


      function shoutClickHandler(event) {
        alert(playerCharacters.find(
          char => char._id === event.target.value).catchphrases.split(".")[0]);
      }

      function rollAD20() {
        let diceRoll = Math.floor(Math.random() * 20) + 1;

        if (diceRoll === 20) {
          alert('CRIT! You rolled a natural ' + diceRoll)
        } else if (diceRoll === 1) {
          alert('AUTOMATIC FAIL! You rolled a ' + diceRoll)
        } else {
          alert('You rolled a ' + diceRoll)
        }
        return diceRoll;
      }

 
    // function summon(summonType) {return monster/player}

    // Make monster talk (modal or smthg)
    // Monster.talk() {return from catchphrase list}

    // Click begin to initialize
    // Roll init for each player (random d20)
    // var init[] that stores turn order
    // player with highest init goes first

    // modal or alert with player's roll & turn number

    // Do first attack

    // roll
    
    // create an initial state
    // This would log the players HP, turn order, the round


    return (
      <>
      <nav className="topnav">
                <Link to="/">HOME</Link>
                <Link to="/characters">CHARACTERS</Link>
                <Link to="/createcharacterform">CREATE</Link>
                <Link to="/battle">BATTLE</Link>
              </nav>
      <div className="battle-background">
        <div>
          <button onClick={onOpenModal}>BEGIN COMBAT</button>
            <Modal open={open} onClose={onCloseModal} center className="battle-modal">
             <h2>Oh no!</h2> 
          <p>
            A monster appears! It's time to roll for initiative! Click "ROLL"
            next to your character's name to get started.
          </p>
        </Modal>
      </div>
      <button onClick={rollInitClickHandler}>ROLL INITIATIVE</button>
           <ul>
            {playerCharacters.map((player) => {
              return (
                <li key={player._id} id="battle-character-list">
                  <img src={player.thumbnail} id="thumbnail" /> 
                  {player.name} <br /> HP: {player.HP} | {player.initiative}
                  <br />
                  <button value={ player._id } onClick={shoutClickHandler}>SHOUT</button>
                  <button value={ player._id } onClick={attackClickHandler}>ATTACK</button>
                </li>
              );
            })}
        </ul>
    </div>
    </>
    )

}

export default Battle;