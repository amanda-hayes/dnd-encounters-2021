import "./App.css";
import { BrowserRouter as Router, Route, Switch, useHistory, Link } from "react-router-dom";
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
import { useContext, useState } from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import UserContext from "./Components/UserContext";

function App() {

  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);
  const [token, setToken] = useState("");

  // function toggleLogin() {
  //   setLoggedIn(prevLoggedIn => !prevLoggedIn)
  // }

  /*****************
   * LOGOUT *
   ****************/

  const handleLogOut = (props) => {
    localStorage.clear();
    alert("You have been logged out.");
    history.push("/Login");
  };

  return (
    <>
    {/* <UserContext.Provider value={{
            userLoggedIn: [loggedIn, setLoggedIn],
            tokenData: [token, setToken],
          }}>
      {loggedIn.username ? (
          <>
            {" "}
            <span className="">Welcome back, {loggedIn.username}</span>
            <button href="/" onClick={handleLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
          </>
        )}
        <UserContext />
    </UserContext.Provider> */}

    <Router>
      <div className="App">
        <div className="nav-routes" />
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Home</Nav.Link>
              <Nav.Link href="/Characters"> Characters</Nav.Link>
              <Nav.Link href="/Register"> Register </Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/GoogleLogin">Google Login</Nav.Link>
              <Nav.Link href="/GoogleLogout">Google Logout</Nav.Link>
              <Button onClick={handleLogOut}>LOGOUT</Button>
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
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
    </>
  );
}
export default App;
