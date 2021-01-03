import { useRef } from 'react';
import '../App.css';
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
        event.preventDefault()
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
        const body = JSON.stringify({ name, pronouns, race, characterClass, hp, weapon, attack, 
            armorClass, catchphrases, backstory });


        event.currentTarget.reset();

        try {
            const response = await fetch(`http://localhost:7000/characters/${charId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            });

            props.history.push('/Characters');

        } catch (error) {
            console.error(error)
        }
    };

    return (
        <>
            <div className="update-background">
                <div id="update-breadcrumbs">
                    <Link to="/Characters">Go Back</Link>
                </div>
        <div className="heading-with-form">
            <h2 id="update-char-h2">Update Character</h2>
            <form onSubmit={updateCharacter} method="post">
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
            </select>
            <br />
            <label>Class:</label>
             <select className="select" ref={updateCharacterClassSelect}>
                <option value="Fighter">Fighter (Tank)</option>
                <option value="Wizard">Wizard (DPS)</option>
                <option value="Rogue">Rogue (stabby stabby)</option>
                <option value="Cleric">Cleric (Healer)</option>
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
                <option value="Shoryuken">Shoryuken</option>
            </select>
            <br />
            <label>Armor Class</label> 
            <select className="select" ref={updateArmorClass}>
                <option value="Default">15</option>
            </select>
            <br />
            <label>Weapon:</label> 
            <select className="select" ref={updateWeaponSelect}>
                <option value="Sword Slash">Sword</option>
                <option value="Magic Missile">Wand</option>
                <option value="Shoryukem">Dagger</option>
            </select>
            <br />
            <label>Catchphrases:</label> 
            <select className="select" ref={updateCatchphrasesSelect}>
                <option value="Let's Do This!">'Let's Do This!'</option>
                <option value="Can't we ever just have a normal field trip?">'Can't we ever just have a normal field trip?'</option>
                <option value="Screw it, we're basically Gods!">'Screw it, we're basically Gods!'</option>
            </select>
            <br />
            <input type="submit" value="Create Character" />
        </form>
            </div>
         </div>
        </>
    )
};

export default UpdateCharacterForm;