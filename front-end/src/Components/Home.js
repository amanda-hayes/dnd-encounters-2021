import '../App.css';
import { BrowserRouter as Link } from "react-router-dom";

function Home() {
    return (
            <>
              <nav className="topnav">
                <Link to="/">HOME</Link>
                <Link to="/characters">CHARACTERS</Link>
                <Link to="/createcharacterform">CREATE</Link>
                <Link to="/battle">BATTLE</Link>
              </nav>
            <div className="homepage">
                    <div id="homepage-content">
                    <h1 id="home-heading"> Welcome to D&D Encounters</h1>
                        <p>Create your characters, form your party and get ready for an adventure!</p>
                            <Link to="/characters"><button>GET STARTED</button></Link>
                </div>
            </div>
            </>
    )
}

export default Home;



