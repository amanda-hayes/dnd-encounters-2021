import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="homepage">
        <div id="homepage-content">
          <h1 id="home-heading"> Welcome to The Adventurer Log</h1>
          <p>
            <br />
            Create your characters, form your party and get ready for an
            adventure!
          </p>
          <p>
            Are you new to tabletop gaming or looking for a way to play from
            home? This app is a truncated version of the roleplaying classic to
            get you a unique experience without the complexity of the full game.
          </p>
          <Link to="/login">
            <Button
              style={{
                backgroundColor: "rgb(44 90 117)",
                borderColor: "rgb(44 90 117)",
              }}
            >
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
