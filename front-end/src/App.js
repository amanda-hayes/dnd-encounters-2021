/***************
 *   IMPORTS   *
 ***************/
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import AllCharPage from "./Components/Characters";
import CharacterStats from "./Components/CharDetails";
import UpdateCharacterForm from "./Components/UpdateCharacterForm";
import CreateCharacterForm from "./Components/CreateCharacterForm";
import Tavern from "./Components/Tavern.js";
import Battle from "./Components/Battle";
import Home from "./Components/Home";
import YouWin from "./Components/YouWin";
import YouLose from "./Components/YouLose";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

/***********
 *   APP   *
 ***********/
function App(props) {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentName, setUsername] = useState(null);

  /***************
   *   LOGOUT   *
   ***************/
  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    alert("You have been logged out.");
    props.history.push("/Login");
  };

  // get user id from server, set to state

  /***************
   *   LOG IN   *
   ***************/
  const userLogin = async (event, username, pass) => {
    event.preventDefault();
    const body = JSON.stringify({
      username: username,
      password: pass,
    });
    try {
      const response = await fetch(
        `https://dnd-encounters-2021.herokuapp.com/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body,
        }
      );

      const data = await response.json();
      console.log(response);

      window.localStorage.setItem("token", `Bearer ${data.token}`);
      setToken(`Bearer ${data.token}`);
      window.localStorage.setItem("currentUsername", username);
      setUsername(username);

      setIsLoggedIn(true);
      alert("You are logged in. Welcome back!");
      props.history.push("/Characters");
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
      setUsername(window.localStorage.getItem("currentUsername"));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-md-12">
            <Navbar
              bg="dark"
              variant="dark"
              expand="sm"
              style={{ paddingLeft: "15px" }}
            >
              <Navbar.Brand href="/">The Adventurer Log</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/"> Home</Nav.Link>
                  <Nav.Link href="/Characters"> Characters</Nav.Link>
                  <Nav.Link href="/Register"> Register </Nav.Link>
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                  <Nav.Link>
                    {loggedIn
                      ? "{You are logged in}"
                      : "{You are not logged in}"}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Characters" exact component={AllCharPage} />
              <Route path="/Characters/:id" component={CharacterStats} />
              <Route
                path="/CreateCharacterForm"
                exact
                component={CreateCharacterForm}
              />
              <Route
                path="/UpdateCharacterForm/:id"
                exact
                component={UpdateCharacterForm}
              />
              <Route path="/Tavern" component={Tavern} />
              <Route path="/Battle" component={Battle} />
              <Route path="/YouWin" component={YouWin} />
              <Route path="/YouLose" component={YouLose} />
              <Route path="/Register" component={Register} />
              <Route
                path="/Login"
                render={() => (
                  <Login
                    userLogin={userLogin}
                    setToken={setToken}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(App);
