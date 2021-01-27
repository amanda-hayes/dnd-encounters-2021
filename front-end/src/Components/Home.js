import "../App.css";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <div className="homepage">
        <div id="homepage-content">
          <h1 id="home-heading"> Welcome to D&D Encounters</h1>
          <p>
            Create your characters, form your party and get ready for an
            adventure!
          </p>
          <Link to="/characters">
            <Button>GET STARTED</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
