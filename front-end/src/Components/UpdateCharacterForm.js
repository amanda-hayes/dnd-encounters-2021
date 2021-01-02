import { useRef } from 'react';
import '../App.css';
import { useRouteMatch } from "react-router-dom";

export default (props) => {
    const updateNameInput = useRef(null);
    const updatePronounsInput = useRef(null);
    const updateRaceSelect = useRef(null);
    const updateCharacterClassSelect = useRef(null);
    const updateHpSelect = useRef(null);
    const updateAttackSelect = useRef(null);
    const updateCatchphrasesSelect = useRef(null);

    const characterDetailRouteMatch = useRouteMatch("/UpdateCharacterForm/:id");
    const charId = characterDetailRouteMatch.params.id;

    const updateCharacter = async (event) => {
        event.preventDefault()
        const name = updateNameInput.current.value;
        const pronouns = updatePronounsInput.current.value;
        const race = updateRaceSelect.current.value;
        const characterClass = updateCharacterClassSelect.current.value;
        const hp = updateHpSelect.current.value;
        const attack = updateAttackSelect.current.value;
        const catchphrases = updateCatchphrasesSelect.current.value;
        const body = JSON.stringify({ name, pronouns, race, characterClass, hp, attack, catchphrases });

        

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
            <h2>Update Character</h2>
            <form onSubmit={updateCharacter}>
                <label>Name:</label> <input type="text" name="name" ref={updateNameInput} />
                <br />
                <label>Pronouns:</label> <input type="text" name="pronouns" ref={updatePronounsInput} />
                <br />
                <label>Race:</label> 
                <select className="select"ref={updateRaceSelect}>
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
                <label> HP:</label>
                <select className="select"ref={updateHpSelect}>
                    <option value="Default">12</option>
                </select>
                <br />
                <label> Attack: </label>
                <select className="select" ref={updateAttackSelect}>
                    <option value="Default">Sword Slash</option>
                    <option value="Default">Magic Missile</option>
                    <option value="Default">Shoryuken</option>
                </select>
                <br />
                <label> Catchphrases:</label> 
                <select className="select" ref={updateCatchphrasesSelect}>
                    <option value="Default">'Let's Do This!'</option>
                    <option value="Default">'Can't we ever just have a normal field trip?'</option>
                    <option value="Default">'Screw it, we're practically Gods!'</option>
                </select>
                <br />
                <input type="submit" value="Update Character" />
            </form>
        </>
    )
};