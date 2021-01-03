import { useRef } from 'react';
import '../App.css';

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

    const createCharacter = async (event) => {
        event.preventDefault()
        const name = nameInput.current.value;
        const pronouns = pronounsInput.current.value;
        const race = raceSelect.current.value;
        const characterClass = characterClassSelect.current.value;
        const hp = 12;
        const attack = attackSelect.current.value;
        const armorClass = 15;
        const weapon = weaponSelect.current.value;
        const catchphrases = catchphrasesSelect.current.value;

        const body = JSON.stringify({ name, pronouns, race, characterClass, hp, attack, armorClass, weapon, catchphrases });

        event.currentTarget.reset();

        try {
            const response = await fetch('http://localhost:7000/characters', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            });

            props.history.push('/Characters');

        } catch (error) {
            console.error(error)
        };
    }

    return (
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
            </select>
            <br />
            <label>Class:</label>
             <select className="select" ref={characterClassSelect}>
                <option value="Fighter">Fighter (Tank)</option>
                <option value="Wizard">Wizard (DPS)</option>
                <option value="Rogue">Rogue (stabby stabby)</option>
                <option value="Cleric">Cleric (Healer)</option>
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
                <option value="Shoryuken">Shoryuken</option>
            </select>
            <br />
            <label>Armor Class</label> 
            <select className="select" ref={armorClassSelect}>
                <option value="Default">15</option>
            </select>
            <br />
            <label>Weapon:</label> 
            <select className="select" ref={weaponSelect}>
                <option value="Sword Slash">Sword</option>
                <option value="Magic Missile">Wand</option>
                <option value="Shoryukem">Dagger</option>
            </select>
            <br />
            <label>Catchphrases:</label> 
            <select className="select" ref={catchphrasesSelect}>
                <option value="Let's Do This!">'Let's Do This!'</option>
                <option value="Can't we ever just have a normal field trip?">'Can't we ever just have a normal field trip?'</option>
                <option value="Screw it, we're basically Gods!">'Screw it, we're basically Gods!'</option>
            </select>
            <br />
            <input type="submit" value="Create Character" />
        </form>
    )
};
export default CreateCharacterForm;