import { useRef, useEffect } from 'react';

export default (props) => {
    const nameInput = useRef(null);
    const descriptionInput = useRef(null);

    const createCharacter = async (event) => {
        event.preventDefault()
        const name = nameInput.current.value; 
        const description = descriptionInput.current.value;
        const body = JSON.stringify({
            name, description
        });
        event.currentTarget.reset();
        try {
            const response = await fetch('http://localhost:7000/characters', {
              method: 'POST',
              headers : {
                  'Content-type': 'application/json'
              },
              body: body   
            })
            const data = await response.json();
            props.updateCharacters([...props.characters, data]);
        } catch (error) {
            console.error(error)
        }

    }

    
    
    return (
        <form onSubmit={createCharacter}>
            <input type="text" ref={nameInput} />
            <input type="text" ref={descriptionInput} />
            <input type="submit" value="Create Character"/>
        </form>
    )
}