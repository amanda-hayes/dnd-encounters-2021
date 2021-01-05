import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import forest from '../forest.jpg'

function Battle() {
    const [playerCharacters, updatePlayerCharactersList] = useState([]);
    const [nonPlayerCharacters, updateNonPlayerCharactersList] = useState([]);
    const [modal, showModal] = useState([]);

    const fetchPlayerCharacters = async () => {
        try {
            const response = await fetch("http://localhost:7000/characters");
            const charactersData = await response.json();

            updatePlayerCharactersList(charactersData);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchNonPlayerCharacters = async () => {
        try {
            const response = await fetch("http://localhost:7000/monsters");
            const monstersData = await response.json();

            updateNonPlayerCharactersList(monstersData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPlayerCharacters();
        showModal();
        //fetchNonPlayerCharacters();
      }, []);

      function takeDamageClickHandler(event) {
        const newPlayerCharacters = [...playerCharacters];
        newPlayerCharacters.find(char => char._id === event.target.value).HP -= 1;

        updatePlayerCharactersList(newPlayerCharacters);
      }

      // function rollInitClickHandler(event) {
      //   const playersInited = playerCharacters.map((player) => {
      //  player.initiative = rollAD20();})
      //   updatePlayerCharactersList(playersInited);
      //   console.log(playersInited)
      // }

      function rollInitClickHandler(event) {
        const playersInited = playerCharacters.map((player) => {
          player.initiative = rollAD20();
            updatePlayerCharactersList(playersInited);
        })
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
      }

      // modal = { show: false };
  
      // function openModal(e) {
      //   modal = { show: true }
      // }
 
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

    // add components for players vs NPCs

    

    return (
      <>
      <nav className="topnav">
                <Link to="/">HOME</Link>
                <Link to="/characters">CHARACTERS</Link>
                <Link to="/createcharacterform">CREATE</Link>
                <Link to="/battle">BATTLE</Link>
              </nav>
        <div className="battle-background">

        {/* <button  onClick={(event) => {
              openModal();
         }}
          > Begin Combat </button> */}

           <ul>
            {playerCharacters.map((player) => {
              return (
                <li key={player._id} id="battle-character-list">
                  <img src={player.thumbnail} id="thumbnail" /> 
                  {player.name} <br /> HP: {player.HP} | {player.initiative}
                  <br />
                  <button value={ player._id } onClick={shoutClickHandler}>SHOUT</button>
                  <button value={ player._id } onClick={rollInitClickHandler}>ROLL</button>
                </li>
              );
            })}
        </ul>
    </div>
    </>
    )

}

export default Battle;