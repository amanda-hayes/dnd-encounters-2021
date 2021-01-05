import '../App.css';
import { useState, useEffect } from 'react';
import { useRouteMatch, Link } from "react-router-dom";

function CharacterStats() {
  const [character, setCharacter] = useState({});
  const characterDetailRouteMatch = useRouteMatch("/Characters/:id");

  const fetchCharacter = async () => {
    try {
        const response = await fetch(`http://localhost:7000/characters/${characterDetailRouteMatch.params.id}`);
        const data = await response.json();
        setCharacter(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { fetchCharacter() }, []);

  return (
    <>
    <nav className="topnav">
        <Link to="/">HOME</Link>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/createcharacterform">CREATE</Link>
        <Link to="/battle">BATTLE</Link>
      </nav>
    <div className="parchment-background">
      <br />
      <br />
      <br />
      <br />
      <h1 id="character-sheet-heading">{character.name}<br />Character Sheet</h1>
      <div id="character-container">
        
        <div id="character-stats-image">
        <br />
        <br />
        <img src={character.image} />
        </div>
      <div id="stats-list">
        <label>Name:</label> {character.name}
      <br />
        <label>Race:</label> {character.race}
      <br />
        <label>Pronouns:</label> {character.pronouns}
      <br />
        <label>Class:</label> {character.characterClass}
      <br />
        <label>HP:</label> {character.HP}
      <br />
        <label>Main Weapon:</label> {character.weapon}
      <br />
        <label>Main Attack:</label> {character.attack}
      <br />
        <label>Armor Class:</label> {character.armorClass}
      <br />
        <label>Motto:</label><br /> "{character.catchphrases}"
      <br />
      <br />
        <label>Backstory:</label><br /> "{character.backstory}"
        <br />
      <button>
      <Link to={`/UpdateCharacterForm/${character._id}`}>EDIT CHARACTER</Link></button>
      </div>
    </div>
    </div>
    </>
  )
}

export default CharacterStats;