import { useRef } from 'react';

const CreateCharacterForm = (props) => {
    const nameInput = useRef(null);
    const pronounsInput = useRef(null);

    const createCharacter = async (event) => {
        event.preventDefault()
        const name = nameInput.current.value;
        const pronouns = pronounsInput.current.value;

        const body = JSON.stringify({
            name, pronouns
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
        <form onSubmit={createCharacter}>
            Character Name:<input type="text" ref={nameInput} />
            <br />
            Character Pronouns:<input type="text" ref={pronounsInput} />
            {/* <br />
            Race: <select>
                <option value="Human">Human</option>
                <option value="Half Elf">Elf</option>
                <option value="Gnome">Gnome</option>
                <option value="Half Orc">Half Orc</option>
            </select>
            <br />
            Class: <select>
                <option value="Fighter">Fighter (Tank)</option>
                <option value="Wizard">Wizard (DPS)</option>
                <option value="Rogue">Rogue (stabby stabby)</option>
                <option value="Cleric">Cleric (Healer)</option>
            </select>
            <br /> */}
            <input type="submit" value="Create Character" />
        </form>
    )
};
export default CreateCharacterForm;