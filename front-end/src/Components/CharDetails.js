import '../App.css';
import { useState, useEffect } from 'react';
import { useRouteMatch, Link } from "react-router-dom";
import rand from '../rand.jpg';

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
    <div className="parchment-background">
      <div id="breadcrumbs">
      <Link to="/Characters">Go Back</Link>
      </div>
      <h1 id="character-sheet-heading">{character.name}<br />Character Sheet</h1>
      <div className="stats">
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
      <label>Motto:</label> "{character.catchphrases}"
      <br />
      <label>Backstory:</label> "{character.backstory}"
      {/* <img src={rand} alt="Rand" /> */}
      <button>
      <Link to={`/UpdateCharacterForm/${character._id}`}>EDIT</Link></button>
      </div>
    </div>
  )
}

export default CharacterStats;