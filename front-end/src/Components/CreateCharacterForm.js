import { useEffect, useRef, useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import aasimar from "../images/aasimar.png";
import assassin from "../images/assassin.png";
import dwarf from "../images/dwarf.png";
import elf from "../images/elf.png";
import fighter from "../images/fighter.png";
import orc from "../images/orc.png";
import ranger from "../images/ranger.png";
import rogue from "../images/rogue.png";
import sorcerer from "../images/sorcerer.png";

const CreateCharacterForm = (props) => {
  const [avatarImage, setAvatar] = useState([]);

  const nameInput = useRef(null);
  const pronounsInput = useRef(null);
  const raceSelect = useRef(null);
  const characterClassSelect = useRef(null);
  const hpSelect = useRef(null);
  const attackSelect = useRef(null);
  const armorClassSelect = useRef(null);
  const weaponSelect = useRef(null);
  const catchphrasesSelect = useRef(null);
  const backstoryTextarea = useRef(null);
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
    const backstory = backstoryTextarea.current.value;
    const image = setImagePath(avatarImage);
    const strength = strengthInput.current.value;
    const dexterity = dexterityInput.current.value;
    const constitution = constitutionInput.current.value;
    const intelligence = intelligenceInput.current.value;
    const wisdom = wisdomInput.current.value;
    const charisma = charismaInput.current.value;
    const createdBy = window.localStorage.getItem("currentUsername");

    function setImagePath(imageName) {
      switch (imageName) {
        case "aasimar":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313372/aasimar_jfgbtr.png";
          break;

        case "dwarf":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313371/dwarf_rh8yqx.png";
          break;

        case "sorcerer":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313372/sorcerer_hookxb.png";
          break;

        case "elf":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313372/elf_enyga3.png";
          break;

        case "rogue":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313372/rogue_hgy6rh.png";
          break;

        case "ranger":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313372/ranger_uynzpr.png";
          break;

        case "assassin":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313371/assassin_xersic.png";
          break;

        case "fighter":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313371/fighter_wfqaxi.png";
          break;

        case "orc":
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612320641/orc_ha7x63.png";
          break;

        default:
          imageName =
            "https://res.cloudinary.com/arolson87/image/upload/v1612313698/david-pumpkins_vtoqpm.png";
          break;
      }

      return imageName;
    }

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
      createdBy,
      characterType: "PC",
    });

    try {
      const response = await fetch("http://localhost:7000/characters", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: body,
      });

      props.history.push("/Characters");
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
    console.log(rolls);
  };

  function rollBaseD6() {
    return Math.floor(Math.random() * 6);
  }

  useEffect(() => {});

  return (
    <>
      <div id="create-char-background-img">
        <br />
        <h2>Create New Character</h2>
        <p>
          Feel free to play around with different characters and stats. If you
          want more information on rolling a new character,{" "}
          <a
            href="https://www.instructables.com/Creating-a-DD-5e-Character-for-Beginners/"
            target="_blank"
            id="click-here"
          >
            click here.
          </a>
        </p>
        <div id="create-form">
          <form onSubmit={createCharacter} method="post">
            <label>Character Name:</label>
            <br />
            <input type="text" name="name" ref={nameInput} />
            <br />
            <label>Pronouns:</label>
            <br />
            <input type="text" name="pronouns" ref={pronounsInput} />
            <br />
            <label>Race:</label>
            <br />
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
              <option value="Dwarf">Dwarf</option>
            </select>
            <br />
            <label>Class:</label>
            <br />
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
              <option value="Warlock">Warlock</option>
            </select>
            <br />
            <label>HP:</label>
            <br />
            <select className="select" ref={hpSelect}>
              <option value="12">12</option>
            </select>
            <br />
            <label>Attack:</label>
            <br />
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
            <br />
            <select className="select" ref={armorClassSelect}>
              <option value="15">15</option>
            </select>
            <br />
            <label>Weapon:</label>
            <br />
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
            <br />
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
            <br />
            <textarea
              name="backstory"
              cols="25"
              rows="5"
              ref={backstoryTextarea}
            ></textarea>

            <br />
            <label>Avatar:</label>
            <br />

            <div>
              <input
                type="radio"
                value="aasimar"
                name="avatars"
                className="avatar-style"
                checked={avatarImage === "aasimar"}
                onChange={(e) => {
                  setAvatar("aasimar");
                }}
              />
              <img src={aasimar} className="avatar" alt="aasimar" />
            </div>
            <div>
              <input
                type="radio"
                value="dwarf"
                name="avatars"
                checked={avatarImage === "dwarf"}
                onChange={(e) => {
                  setAvatar("dwarf");
                }}
              />
              <img src={dwarf} className="avatar" alt="dwarf" />
            </div>
            <div>
              <input
                type="radio"
                value="elf"
                name="avatars"
                checked={avatarImage === "elf"}
                onChange={(e) => {
                  setAvatar("elf");
                }}
              />
              <img src={elf} className="avatar" alt="elf" />
            </div>
            <div>
              <input
                type="radio"
                value="fighter"
                name="avatars"
                checked={avatarImage === "fighter"}
                onChange={(e) => {
                  setAvatar("fighter");
                }}
              />
              <img src={fighter} className="avatar" alt="fighter" />
            </div>
            <div>
              <input
                type="radio"
                value="rogue"
                name="avatars"
                checked={avatarImage === "rogue"}
                onChange={(e) => {
                  setAvatar("rogue");
                }}
              />
              <img src={rogue} className="avatar" alt="rogue" />
            </div>
            {/* <div>
              <input
                type="radio"
                value="fighter"
                name="avatars"
                checked={avatarImage === "fighter"}
                onChange={(e) => {
                  setAvatar("fighter");
                }}
              />
              <img src={fighter} className="avatar" alt="fighter" />
            </div> */}
            <div>
              <input
                type="radio"
                value="orc"
                name="avatars"
                checked={avatarImage === "orc"}
                onChange={(e) => {
                  setAvatar("orc");
                }}
              />
              <img src={orc} className="avatar" alt="orc" />
            </div>
            <div>
              <input
                type="radio"
                value="sorcerer"
                name="avatars"
                checked={avatarImage === "sorcerer"}
                onChange={(e) => {
                  setAvatar("sorcerer");
                }}
              />
              <img src={sorcerer} className="avatar" alt="sorcerer" />
            </div>
            <div>
              <input
                type="radio"
                value="ranger"
                name="avatars"
                checked={avatarImage === "ranger"}
                onChange={(e) => {
                  setAvatar("ranger");
                }}
              />
              <img src={ranger} className="avatar" alt="ranger" />
            </div>
            <div>
              <input
                type="radio"
                value="assassin"
                name="avatars"
                checked={avatarImage === "assassin"}
                onChange={(e) => {
                  setAvatar("assassin");
                }}
              />
              <img src={assassin} className="avatar" alt="assassin" />
            </div>

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
            <br />
            <label>Wisdom:</label>
            <br />
            <input type="text" name="wisdom" ref={wisdomInput} />
            <br />
            <label>Charisma:</label>
            <br />
            <input type="text" name="charisma" ref={charismaInput} />
            <br />
            <br />
            <Button
              onClick={rollBaseStats}
              id="roll"
              style={{ backgroundColor: "rgb(44 90 117)" }}
            >
              Roll Stats
            </Button>
            <br />
            <input type="submit" value="Create Character" id="submit-btn" />
          </form>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default CreateCharacterForm;
