import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UpdateCharacterForm from './UpdateCharacterForm';

function AllCharPage() {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
    try {
      const response = await fetch('http://localhost:7000/characters');
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error(error);
    }
  }

    useEffect(() => {
    fetchCharacters()
  }, []);

    return (
        <div>
            <h1>This is a sample page bruh</h1>
            <h1>Here are the characters</h1>
                {
                    characters.map(character => {
                    return (
                        <li key={character._id}>
                        <Link to={`${character._id}`}>{character.name}</Link>
                        <button onClick={
                            (event) => {
                              handleclick()
                            }
                          }>EDIT 
                          </button>
                        <UpdateCharacterForm character={character} updateCharacters={setCharacters} characters={characters}/>
                        </li>
                    )
                    })
                }

        </div>
        )
}

export default AllCharPage;