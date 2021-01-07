import "../App.css";
import { Link } from 'react-router-dom';

function YouLose() {
  return (
    <>
    <nav className="topnav">
        <Link to="/">HOME</Link>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/createcharacterform">CREATE</Link>
        <Link to="/battle">BATTLE</Link>
      </nav>
      <h1>
        Your party has been defeated. Oh, well. It was fun while it lasted!
      </h1>
      <p>Form a new party and start again!</p>
    </>
  );
}

export default YouLose;
