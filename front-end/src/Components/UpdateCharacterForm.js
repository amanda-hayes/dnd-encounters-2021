import { useRef } from "react";
import "../App.css";
import { useRouteMatch, Link } from "react-router-dom";

const UpdateCharacterForm = (props) => {
  const updateNameInput = useRef(null);
  const updatePronounsInput = useRef(null);
  const updateRaceSelect = useRef(null);
  const updateCharacterClassSelect = useRef(null);
  const updateHpSelect = useRef(null);
  const updateWeaponSelect = useRef(null);
  const updateAttackSelect = useRef(null);
  const updateArmorClass = useRef(null);
  const updateCatchphrasesSelect = useRef(null);
  const updateBackstory = useRef(null);
  const characterDetailRouteMatch = useRouteMatch("/UpdateCharacterForm/:id");
  const charId = characterDetailRouteMatch.params.id;

  const updateCharacter = async (event) => {
    event.preventDefault();
    const name = updateNameInput.current.value;
    const pronouns = updatePronounsInput.current.value;
    const race = updateRaceSelect.current.value;
    const characterClass = updateCharacterClassSelect.current.value;
    const hp = updateHpSelect.current.value;
    const weapon = updateWeaponSelect.current.value;
    const attack = updateAttackSelect.current.value;
    const armorClass = updateArmorClass.current.value;
    const catchphrases = updateCatchphrasesSelect.current.value;
    const backstory = updateBackstory.current.value;
    const body = JSON.stringify({
      name,
      pronouns,
      race,
      characterClass,
      hp,
      weapon,
      attack,
      armorClass,
      catchphrases,
      backstory
    });

    event.currentTarget.reset();

    try {
      const response = await fetch(
        `https://dnd-encounters-2021.herokuapp.com/api/characters/${charId}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: body,
        }
      );

      props.history.push("/Characters");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="topnav">
        <Link to="/">HOME</Link>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/createcharacterform">CREATE</Link>
        <Link to="/battle">BATTLE</Link>
      </nav>
      <div className="update-background">
        <div id="update-breadcrumbs">
          <Link to="/Characters">Go Back</Link>
        </div>
        <div className="heading-with-form">
          <h2 id="update-char-h2">Update Character</h2>
          <form onSubmit={updateCharacter} method="put">
            <label>Character Name:</label>
            <input type="text" name="name" ref={updateNameInput} />
            <br />
            <label>Character Pronouns:</label>
            <input type="text" name="pronouns" ref={updatePronounsInput} />
            <br />
            <label>Race:</label>
            <select className="select" ref={updateRaceSelect}>
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
            <select className="select" ref={updateCharacterClassSelect}>
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
            <select className="select" ref={updateHpSelect}>
              <option value="Default">12</option>
            </select>
            <br />
            <label>Attack:</label>
            <select className="select" ref={updateAttackSelect}>
              <option value="Sword Slash">Sword Slash</option>
              <option value="Magic Missile">Magic Missile</option>
              <option value="Druid">Shillelagh</option>
              <option value="Monk">Fury of Blows</option>
              <option value="Eldritch Blast">Eldritch Blast</option>
              <option value="Acid Splash">Acid Splash</option>
            </select>
            <br />
            <label>Armor Class</label>
            <select className="select" ref={updateArmorClass}>
              <option value="Default">15</option>
            </select>
            <br />
            <label>Weapon:</label>
            <select className="select" ref={updateWeaponSelect}>
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
            <select className="select" ref={updateCatchphrasesSelect}>
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
            <input type="textarea" name="backstory" ref={updateBackstory} />
            <br />
            <input type="submit" value="UPDATE CHARACTER" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCharacterForm;
