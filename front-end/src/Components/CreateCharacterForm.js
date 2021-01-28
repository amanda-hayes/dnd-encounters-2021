import { useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

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
    });

    event.currentTarget.reset();

    try {
      const response = await fetch(
        "http://localhost:7000/characters",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: body,
        }
      );

      props.history.push("/Characters");
      alert("Character Created!");
    } catch (error) {
      alert('Something went wrong. Please try again.')
      console.error(error);
    }
  };

    /***************
   * ROLL A D6+6 *
   ****************/

function rollStats() {
  return Math.floor(Math.random() * 6) + 7; 
}
let rolls = [];

for (var i = 0; i < 6; i++) {
  var result = rollStats();
  rolls.push(result);
} 
console.log(rolls);  

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
          <label>Character Pronouns:</label>
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
          <label>HP</label>
          <select className="select" ref={hpSelect}>
            <option value="Default">12</option>
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
            <option value="Default">15</option>
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
          <input
            type="textarea"
            name="backstory"
            rows="10"
            cols="30"
            ref={backstoryInput}
          />
          <br />
          <input type="submit" value="Create Character" id="submit-btn" />
        </form>
      </div>
      <div>
        {/* Roll a Character */}
        
 
      </div>
    </>
  );
};
export default CreateCharacterForm;
