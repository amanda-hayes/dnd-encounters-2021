import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Battle() {
    const [playerCharacters, updatePlayerCharactersList] = useState([]);
    const [nonPlayerCharacters, updateNonPlayerCharactersList] = useState([]);

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
        //fetchNonPlayerCharacters();
      }, []);

      function takeDamageClickHandler(event) {
        const newPlayerCharacters = [...playerCharacters];
        newPlayerCharacters.find(char => char._id === event.target.value).HP -= 1;

        updatePlayerCharactersList(newPlayerCharacters);
      }

      function shoutClickHandler(event) {
        const newPlayerCharacters = [...playerCharacters];
        
        alert(newPlayerCharacters.find(char => char._id === event.target.value).catchphrases.split(".")[0]);

      }


    // summon our players/monster
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
    <div id="character-list">
        <ul>
          <>
            {playerCharacters.map((player) => {
              return (
                <li key={player._id}>
                  {player.name} | {player.HP} |{" "}
                  <br />
                  <button value={ player._id } onClick={shoutClickHandler}>SHOUT</button>
                  <button value={ player._id } onClick={takeDamageClickHandler}>PAIN</button>
                </li>
              );
            })}
          </>
        </ul>
    </div>
    )

}

export default Battle;