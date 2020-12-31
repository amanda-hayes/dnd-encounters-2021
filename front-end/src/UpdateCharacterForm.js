import { useRef } from 'react';

const UpdateCharacterForm = (props) => {
    const updateNameInput = useRef(null);
    const updatePronounsInput = useRef(null);
    const updateRaceSelect = useRef(null);
    const updateCharacterClassSelect = useRef(null);
    const updateHpSelect = useRef(null);
    const updateAttackSelect = useRef(null);
    const updateCatchphrasesSelect = useRef(null);

    const updateCharacter = async (event) => {
        event.preventDefault()
        const name = updateNameInput.current.value;
        const pronouns = updatePronounsInput.current.value;
        const race = updateRaceSelect.current.value;
        const characterClass = updateCharacterClassSelect.current.value;
        const hp = updateHpSelect.current.value;
        const attack = updateAttackSelect.current.value;
        const catchphrases = updateCatchphrasesSelect.current.value;

        const body = JSON.stringify({
            name, pronouns, race, characterClass, hp, attack, catchphrases
        });
        event.currentTarget.reset();
        try {
            const response = await fetch(`http://localhost:7000/characters/${props.character._id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            });

            const data = await response.json();
            const filteredCharacters = props.characters.filter(
                (character) => character._id !== data._id
              );
            props.updateCharacters([...filteredCharacters, data]);
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
        <h1>Update Your Character</h1>
        <form onSubmit={updateCharacter}>
            Character Name:<input type="text" name="name" ref={updateNameInput} />
            <br />
            Character Pronouns:<input type="text" name="pronouns" ref={updatePronounsInput} />
            <br />
            Race: <select ref={updateRaceSelect}>
                <option value="Human">Human</option>
                <option value="Half Elf">Elf</option>
                <option value="Gnome">Gnome</option>
                <option value="Half Orc">Half Orc</option>
            </select>
            <br />
            Class: <select ref={updateCharacterClassSelect}>
                <option value="Fighter">Fighter (Tank)</option>
                <option value="Wizard">Wizard (DPS)</option>
                <option value="Rogue">Rogue (stabby stabby)</option>
                <option value="Cleric">Cleric (Healer)</option>
            </select>
            <br />
            HP: <select ref={updateHpSelect}>
                <option value="Default">8</option>
            </select>
            <br />
            Attack: <select ref={updateAttackSelect}>
                <option value="Default">Sword Slash</option>
                <option value="Default">Magic Missile</option>
                <option value="Default">Shoryuken</option>
            </select>
            <br />
            Catchphrases: <select ref={updateCatchphrasesSelect}>
                <option value="Default">'Let's Do This!'</option>
                <option value="Default">'Can't we ever just have a normal field trip?'</option>
                <option value="Default">'Screw it, we're Gods!'</option>
            </select>
            <br />
            <input type="submit" value="Update Character" />
        </form>
        </>
    )
};
export default UpdateCharacterForm;


// import { useRef, useState } from "react";

// export default (props) => {
//   const updateNameInput = useRef(null);
//   const updateUrlInput = useRef(null);

//   const updateBookmark = async (event) => {
//     event.preventDefault();
//     const name = updateNameInput.current.value;
//     const url  = updateUrlInput.current.value;
//     const body = JSON.stringify({
//       name, url,
//     });

//     event.currentTarget.reset(); 
//     try {
//       const response = await fetch(
//         `http://localhost:3000/bookmarks/${props.bookmark._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: body,
//         }
//       );
//       const data = await response.json();
//       const filteredBookmarks = props.bookmarks.filter(
//         (bookmark) => bookmark._id !== data._id
//       );
//       props.updateBookmarks([...filteredBookmarks, data]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <form onSubmit={updateBookmark}>
//       <label>
//         Name:
//         <input type="text" ref={updateNameInput} />
//       </label>
//       <label>
//         URL:
//         <input type="text" ref={updateUrlInput} />
//       </label>
//       <input type="submit" value="Update Bookmark" />
//     </form>
//   );
// };