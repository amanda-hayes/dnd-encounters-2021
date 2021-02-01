import { useEffect, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import aasimar from "../images/aasimar.png";
import dwarf from "../images/dwarf.png";
import elf from "../images/elf.png";
import enchantress from "../images/enchantress.jpg";
import fighter from "../images/fighter.png";
import orc from "../images/orc.png";
import ranger from "../images/ranger.png";
import rogue from "../images/rogue.png";
import sorcerer from "../images/sorcerer.png";

const CreateCharacterForm = (props) => {
  const nameInput = useRef(null);
  const pronounsInput = useRef(null);
  const raceSelect = useRef(null);
  const characterClassSelect = useRef(null);
  const hpSelect = useRef(null);
  const attackSelect = useRef(null);
  const armorClassSelect = useRef(null);
  const weaponSelect = useRef(null);
  const catchphrasesSelect = useRef(null);
  const backstoryInput = useRef(null);
  const imageInput = useRef(null);
  const strengthInput = useRef(null);
  const dexterityInput = useRef(null);
  const constitutionInput = useRef(null);
  const intelligenceInput = useRef(null);
  const wisdomInput = useRef(null);
  const charismaInput = useRef(null);

  const createCharacter = async (event) => {
    event.preventDefault();
    const name = nameInput.current.value;
    const pronouns = pronounsInput.current.value;
    const race = raceSelect.current.value;
    const characterClass = characterClassSelect.current.value;
    const hp = 12;
    const attack = attackSelect.current.value;
    const armorClass = 15;
    const weapon = weaponSelect.current.value;
    const catchphrases = catchphrasesSelect.current.value;
    const backstory = backstoryInput.current.value;
    const image = imageInput.current.value;
    const strength = strengthInput.current.value;
    const dexterity = dexterityInput.current.value;
    const constitution = constitutionInput.current.value;
    const intelligence = intelligenceInput.current.value;
    const wisdom = wisdomInput.current.value;
    const charisma = charismaInput.current.value;
    // const createdBy = createdByInput.current.value;

    const body = JSON.stringify({
      name,
      pronouns,
      race,
      characterClass,
      hp,
      attack,
      armorClass,
      weapon,
      catchphrases,
      backstory,
      image,
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
    });

    // event.currentTarget.reset();

    try {
      const response = await fetch("http://localhost:7000/characters", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: body,
      });

      props.history.push("/Characters");
      alert("Character Created!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  /****************
   * ROLL  2D6+6 *
   ****************/

  const rollBaseStats = () => {
    let rolls = [];
    for (let i = 0; i < 6; i++) {
      let result = rollBaseD6();
      result += rollBaseD6();
      rolls.push((result += 6));
    }
    strengthInput.current.value = rolls[0];
    dexterityInput.current.value = rolls[1];
    constitutionInput.current.value = rolls[2];
    intelligenceInput.current.value = rolls[3];
    wisdomInput.current.value = rolls[4];
    charismaInput.current.value = rolls[5];
    // createdByInput.current.value = "600cdecd78275026de953dee";
    console.log(rolls);
  };

  function rollBaseD6() {
    return Math.floor(Math.random() * 6);
  }

  return (
    <>
      <div id="create-char-form">
        <h2 id="create-char-h2">Create New Character</h2>
        <p>
          Feel free to play around with different characters and stats.
          <br />
          If you want more information on rolling a new character,{" "}
          <a
            href="https://www.instructables.com/Creating-a-DD-5e-Character-for-Beginners/"
            target="_blank"
            id="click-here"
          >
            click here.
          </a>
        </p>
        <form onSubmit={createCharacter} method="post">
          <label>Character Name:</label>
          <input type="text" name="name" ref={nameInput} />
          <br />
          <label>Pronouns:</label>
          <input type="text" name="pronouns" ref={pronounsInput} />
          <br />
          <label>Race:</label>
          <select className="select" ref={raceSelect}>
            <option value="Human">Human</option>
            <option value="Half Elf">Elf</option>
            <option value="Gnome">Gnome</option>
            <option value="Half Orc">Half Orc</option>
            <option value="Tiefling">Tiefling</option>
            <option value="Aasimar">Aasimar</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Tabaxi">Tabaxi</option>
            <option value="Centaur">Centaur</option>
            <option value="Halfling">Halfling</option>
            <option value="Halfling">Dwarf</option>
          </select>
          <br />
          <label>Class:</label>
          <select className="select" ref={characterClassSelect}>
            <option value="Fighter">Fighter (Tank)</option>
            <option value="Wizard">Wizard (DPS)</option>
            <option value="Rogue">Rogue (stabby stabby)</option>
            <option value="Cleric">Cleric (Healer)</option>
            <option value="Druid">Druid</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Sorcerer">Warlock</option>
          </select>
          <br />
          <label>HP:</label>
          <select className="select" ref={hpSelect}>
            <option value="12">12</option>
          </select>
          <br />
          <label>Attack:</label>
          <select className="select" ref={attackSelect}>
            <option value="Sword Slash">Sword Slash</option>
            <option value="Magic Missile">Magic Missile</option>
            <option value="Druid">Shillelagh</option>
            <option value="Monk">Fury of Blows</option>
            <option value="Eldritch Blast">Eldritch Blast</option>
            <option value="Acid Splash">Acid Splash</option>
          </select>
          <br />
          <label>Armor Class</label>
          <select className="select" ref={armorClassSelect}>
            <option value="15">15</option>
          </select>
          <br />
          <label>Weapon:</label>
          <select className="select" ref={weaponSelect}>
            <option value="Greatsword">Greatsword</option>
            <option value="Wand">Wand</option>
            <option value="Dagger">Dagger</option>
            <option value="Longbow">Longbow</option>
            <option value="Rapier">Rapier</option>
            <option value="Maul">Maul</option>
            <option value="Crossbow">Crossbow</option>
          </select>
          <br />
          <label>Catchphrases:</label>
          <select className="select" ref={catchphrasesSelect}>
            <option value="Nobody makes me bleed my own blood!">
              'Nobody makes me bleed my own blood!'
            </option>
            <option value="LEEEEROYYYYY JENKIIIINNNNSSSS!">
              'LEEEEROYYYYY JENKIIIINNNNSSSS!'
            </option>
            <option value="I attack the darkness!">
              'I attack the darkness!'
            </option>
            <option value="Can't we ever just have a normal field trip?">
              'Can't we ever just have a normal field trip?'
            </option>
            <option value="Screw it, we're basically Gods!">
              'Screw it, we're basically Gods!'
            </option>
            <option value="I’m a lover, not a fighter">
              'I’m a lover, not a fighter'
            </option>
            <option value="Today is a good day to die.">
              'Today is a good day to die.'
            </option>
            <option value="Last name Ever, first name Greatest">
              'Last name Ever, first name Greatest'
            </option>
            <option value="I don't think that's such a good idea, Tommy">
              'I don't think that's such a good idea, Tommy'
            </option>
          </select>
          <br />
          <label>Backstory:</label>
          <input type="textarea" name="backstory" ref={backstoryInput} />
          <br />
          <label>Avatar:</label>
          <br />
          <label>
            <input type="radio" name="avatars"></input>
            <img src={aasimar} id="avatar"></img>
          </label>
          <label>
            <input type="radio" name="avatars"></input>
            <img src={dwarf} id="avatar"></img>
          </label>
          <label>
            <input type="radio" name="avatars"></input>
            <img src={elf} id="avatar"></img>
          </label>
          <br />
          <label>Strength:</label>
          <br />
          <input type="text" name="strength" ref={strengthInput} />
          <br />
          <label>Dexterity:</label>
          <br />
          <input type="text" name="dexterity" ref={dexterityInput} />
          <br />
          <label>Constitution</label>
          <br />
          <input type="text" name="constitution" ref={constitutionInput} />
          <br />
          <label>Intelligence:</label>
          <br />
          <input type="text" name="intelligence" ref={intelligenceInput} />
          <label>Wisdom:</label>
          <br />
          <input type="text" name="wisdom" ref={wisdomInput} />
          <br />
          <label>Charisma:</label>
          <br />
          <input type="text" name="charisma" ref={charismaInput} />
          <br />
          <button onClick={rollBaseStats} id="roll">
            Roll Stats
          </button>
          <br />
          {/* <input type="hidden" name="createdBy" ref={createdByInput} /> */}
          <br />
          <input type="submit" value="Create Character" id="submit-btn" />
        </form>
      </div>
      <div></div>
    </>
  );
};
export default CreateCharacterForm;
