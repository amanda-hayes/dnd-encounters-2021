import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UpdateCharacterForm from './UpdateCharacterForm';
import GenerateCharComponent from './Components/GenerateChar';

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

  // const toggleUpdateChar = () => {
  //   const toggle = document.getElementsByClassName("updateChar");
  //   if (toggle.style.display==="none") {
  //     toggle.style.display = "block";
  //   } else {
  //     toggle.style.display = "none"
  //   }
  //  }

  const deleteCharacter = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/characters/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        }
      });

      const data = await response.json();
      const filteredCharacters = characters.filter(character => character._id !== data._id);
      setCharacters(filteredCharacters);
    } catch (error) {
      console.log(error);
    }
  };

 

  useEffect(() => {
    fetchCharacters()
  }, []);

  return (
    
    <div>
      <h1>My Characters</h1>
      <p>View and manage all your characters, or create a new one.</p>
      <ul>
        <>
      {
        characters.map(character => {
          return (
            <li key={character._id}>
             {character.name}
             <br />
              <button type="button">
              <Link to={`characters/${character._id}`}>VIEW</Link>
              </button>
              <button>
              <Link to={`/UpdateCharacterForm/${character._id}`}>EDIT</Link>
              </button>

                 {/* <button onClick={
                  (event) => {
                    toggleUpdateChar()
                  }
                }>EDIT 
                </button> */}


                {/* <UpdateCharacterForm character={character} updateCharacters={setCharacters} characters={characters} /> */}



              <button onClick={
                  (event) => {
                    deleteCharacter(character._id)
                  }
                }>DELETE </button>
                
            </li>
          
          )
        })
      }
      </>
      </ul>

      <h2>Generate a random character for me</h2>
      <Link to="/GenerateChar">
      <button
      >Generate</button>
      </Link>



      <Link to="/CreateCharacterForm">
      <button>Create New Character</button>
      </Link>
    </div>
  )
}

export default AllCharPage;