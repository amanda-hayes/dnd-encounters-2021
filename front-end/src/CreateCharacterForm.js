import { useRef } from 'react';

const CreateCharacterForm = (props) => {
    const nameInput = useRef(null);
    const pronounsInput = useRef(null);
    const raceSelect = useRef(null);
    const characterClassSelect = useRef(null);
    const hpSelect = useRef(null);
    const attackSelect = useRef(null);
    const catchphrasesSelect = useRef(null);

    const createCharacter = async (event) => {
        event.preventDefault()
        const name = nameInput.current.value;
        const pronouns = pronounsInput.current.value;
        const race = raceSelect.current.value;
        const characterClass = characterClassSelect.current.value;
        const hp = hpSelect.current.value;
        const attack = attackSelect.current.value;
        const catchphrases = catchphrasesSelect.current.value;

        const body = JSON.stringify({
            name, pronouns, race, characterClass, hp, attack, catchphrases
        });
        event.currentTarget.reset();
        try {
            const response = await fetch('http://localhost:7000/characters', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            });

            const data = await response.json();
            props.updateCharacters([...props.characters, data]);
        } catch (error) {
            console.error(error)
        }
    }

   

    return (
        <form onSubmit={createCharacter} method="post">
            Character Name:<input type="text" name="name" ref={nameInput} />
            <br />
            Character Pronouns:<input type="text" name="pronouns" ref={pronounsInput} />
            <br />
            Race: <select ref={raceSelect}>
                <option value="Human">Human</option>
                <option value="Half Elf">Elf</option>
                <option value="Gnome">Gnome</option>
                <option value="Half Orc">Half Orc</option>
            </select>
            <br />
            Class: <select ref={characterClassSelect}>
                <option value="Fighter">Fighter (Tank)</option>
                <option value="Wizard">Wizard (DPS)</option>
                <option value="Rogue">Rogue (stabby stabby)</option>
                <option value="Cleric">Cleric (Healer)</option>
            </select>
            <br />
            HP: <select ref={hpSelect}>
                <option value="Default">8</option>
            </select>
            <br />
            Attack: <select ref={attackSelect}>
                <option value="Default">Sword Slash</option>
                <option value="Default">Magic Missile</option>
                <option value="Default">Shoryuken</option>
            </select>
            <br />
            Catchphrases: <select ref={catchphrasesSelect}>
                <option value="Default">'Let's Do This!'</option>
                <option value="Default">'Can't we ever just have a normal field trip?'</option>
                <option value="Default">'Screw it, we're Gods!'</option>
            </select>
            <br />
            <input type="submit" value="Create Character" />
        </form>
    )
};
export default CreateCharacterForm;