import { useState, useEffect } from 'react';
import '../App.css';

function GetRandom(props) {
    const [randomChars, setRandomCharacters] = useState([]);
  
    const fetchRandomCharacters = async () => {
      try {
        const response = await fetch('http://localhost:7000/randomchar');
        const data = await response.json();
        setRandomCharacters(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => { 
        fetchRandomCharacters()
      }, []);

     
      return (
        <div>
          <h1>Hey</h1>

        </div>
      )
      

    }

    export default GetRandom;