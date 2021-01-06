import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css' 
import { Modal } from 'react-responsive-modal';
import beholder from '../beholder.jpeg';
import d20 from '../images/d20.png';
import d20natone from '../images/d20natone.png';

function Battle() {
    const [playerCharacters, updatePlayerCharactersList] = useState([]);
    const [playerRoll, setPlayerRoll] = useState([]);


    const [open, setOpen] = useState(true);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [openBattle, setOpenBattle] = useState(false);
    const onOpenBattle = () => setOpenBattle(true);
    const onCloseBattle = () => setOpenBattle(false);


    const [openDiceModal, setOpenDiceModal] = useState(false);
    const onOpenDiceRollModal = () => setOpenDiceModal(true);
    const onCloseDiceRollModal = () => setOpenDiceModal(false);

    const [modalContent, setModalContent] = useState([]);

    const fetchPlayerCharacters = async () => {
        try {
            const response = await fetch("http://localhost:7000/characters");
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
        const monster = newPlayerCharacters.find(npc => npc.characterType === "NPC");
        // TODO: create random function that selects a random player
        const randomPlayer = newPlayerCharacters[Math.floor(Math.random() * newPlayerCharacters.length)];
        // console.log(randomPlayer);
        const characterAttacked = newPlayerCharacters.find(player => player._id === randomPlayer._id);

        if (monster) {
          monster.HP -= 4;
          alert(`The Beholder was hit for 4 damage!`)
        } else {
          characterAttacked.HP -= 8;
          alert(randomPlayer.name `was attacked and hit for 8 damage!`)
          
          if (randomPlayer.HP <= 0) {
            alert(`Oh no!` + randomPlayer.name + ` passed out!`)
            const nowWithNoDeadPlayers = newPlayerCharacters.filter(player => player === characterAttacked);
            updatePlayerCharactersList([...newPlayerCharacters, nowWithNoDeadPlayers]);
            return;
          }
        }

        const turnOver = newPlayerCharacters.shift();
        updatePlayerCharactersList([...newPlayerCharacters, turnOver]);
      }

      function rollInitClickHandler(event) {
        const newPlayerCharacters = [...playerCharacters];
        const playersInited = newPlayerCharacters.map(
          (player) => { 
            player.initiative = rollAD20();
            onOpenDiceRollModal();
            
            return player;
          });


          let modalMessage = "";

          playersInited.map(player => {
            if (player.initiative === 20) {
              modalMessage += `OH YEAH.....CRIT!` + player.name + ` rolled a natural ` + player.initiative + '.';
            } else if (player.initiative === 1) {
              modalMessage += `Oh boy.....AUTOMATIC FAIL! ` + player.name + ` rolled a natural ` + player.initiative + '.';
            } else {
              modalMessage += player.name + ` rolled a ` + player.initiative + '.';
            }
          });
          


          setModalContent(modalMessage);
          

          updatePlayerCharactersList(playersInited.sort((a, b) => b.initiative - a.initiative));
      }

      function shoutClickHandler(event) {
        alert(playerCharacters.find(
          char => char._id === event.target.value).catchphrases.split(".")[0]);
      }

      useEffect(() => {
        fetchPlayerCharacters();
        setModalContent();
        setOpenDiceModal()
        setPlayerRoll();
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
       <Modal open={open} onClose={onCloseModal} center className="battle-modal">
             <h2>On your way!</h2> 
          <p>
            You're traveling through the forest....
          </p>
          <br />
          <button onClick={onCloseModal} id="tavern-button">OKAY</button>
        </Modal>

          <button onClick={onOpenBattle}>WHAT'S THAT SOUND?</button>
            <Modal open={openBattle} onClose={onCloseBattle} center className="battle-modal">
             <h2>Oh no!</h2> 
          <p>
            A Beholder appears and it's guarding the treasure you so desperately need! 
            There's no getting out of this without a fight. It's time to roll for initiative!
          </p>
          <img src={beholder} alt="beholder" />
          <br />
          <button onClick={onCloseBattle} id="tavern-button">FIGHT</button>
        </Modal>
        

      </div>
      <button onClick={rollInitClickHandler}>ROLL INITIATIVE</button>
      <Modal open={openDiceModal} onClose={onCloseDiceRollModal} center className="battle-modal">
          <p>{modalContent}</p> 
        </Modal>
        <br />
        <br />
        <h2 id="battle-page-h2">Characters</h2>
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