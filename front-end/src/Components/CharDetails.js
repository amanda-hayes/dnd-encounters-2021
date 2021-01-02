import '../App.css';
import { useState, useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";

function CharacterStats() {
  const [character, setCharacter] = useState({});
  const characterDetailRouteMatch = useRouteMatch("/Characters/:id");

  const fetchCharacter = async () => {
    try {
        const response = await fetch(`http://localhost:7000/Characters/${characterDetailRouteMatch.params.id}`);
        const data = await response.json();
        setCharacter(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { fetchCharacter() }, []);

  return (
    <div>
      <h1>Character Details</h1>
      {character.name}<br />
      {character.race}<br />
      {character.pronouns}<br />
      {character.characterClass}<br />
      {character.hp}<br />
      {character.weapon}<br />
      {character.attack}<br />
      {character.catchphrases}<br />
      <img src="./rand.jpg" />
    </div>
  )
}

export default CharacterStats;