import { useState, useEffect } from "react";
import "../App.css";

function GetRandom(props) {
  const [randomChars, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
    try {
      const response = await fetch(
        "https://dnd-encounters-2021.herokuapp.com/api/randomchar"
      );
      const data = await response.json();
      setRandomCharacters(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomCharacters();
  }, []);

  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
}

export default GetRandom;
