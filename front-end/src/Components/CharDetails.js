import "../App.css";
import { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

function CharacterStats(props) {
  const [character, setCharacter] = useState({});
  const characterDetailRouteMatch = useRouteMatch("/Characters/:id");
  const [token, setToken] = useState("");

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://theadventurerlog.com/characters/api/${characterDetailRouteMatch.params.id}`
      );
      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <div className="parchment-background">
        <br />
        <h1 id="char-details-h1">
          {character.name}'s
          <br />
          Character Sheet
        </h1>
        <div id="character-container">
          <br />
          <div id="char-details-img">
            <Image src={character.image} thumbnail />
          </div>
        </div>
        <br />
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
          <label>Motto:</label>
          <br />"{character.catchphrases}"
          <br />
          <br />
          <label>Backstory:</label>
          <br />"{character.backstory}"
          <br />
          <label>Strength:</label> {character.strength}
          <br />
          <label>Dexterity:</label> {character.dexterity}
          <br />
          <label>Constitution</label> {character.constitution}
          <br />
          <label>Intelligence:</label> {character.intelligence}
          <br />
          <label>Wisdom</label> {character.wisdom}
          <br />
          <label>Charisma:</label> {character.charisma}
          <br />
          <br />
          <Button style={{ backgroundColor: "rgb(44 90 117)" }}>
            <Link
              to={`/UpdateCharacterForm/${character._id}`}
              style={{ color: "white" }}
            >
              EDIT CHARACTER
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default CharacterStats;
