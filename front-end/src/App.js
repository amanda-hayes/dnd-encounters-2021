import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Link,
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
import { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function App(props) {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);

  // Get a user id
  const fetchUserId = async () => {
    // try {
    //   const response = await fetch("http://localhost:7000/login");
    //   const data = await response.json();
    //   console.log("data: " + data);

    //   return data._id;
    // } catch (error) {
    //   console.error(error);
    // }
    // return null;
    return "600cdecd78275026de953dee";
  };

  

  /*****************
   * LOGOUT *
   ****************/

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    alert("You have been logged out.");
    props.history.push("/Login");
  };

  const userLogin = async (body) => {
    try {
      const response = await fetch("http://localhost:7000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body,
      });

      const data = await response.json();
      window.localStorage.setItem("token", `Bearer ${data.token}`);
      setToken(`Bearer ${data.token}`);

      setIsLoggedIn(true);
      alert("Logged In!");
      props.history.push("/Characters");
    } catch (error) {
      console.error(error);
    }
  };
  console.log(props);
  return (
    <>
      <div className="App">
        <div className="nav-routes" />
        <Navbar bg='light' expand="lg">
        <Navbar.Brand href="/">D&D Encounters</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Home</Nav.Link>
              <Nav.Link href="/Characters"> Characters</Nav.Link>
              <Nav.Link href="/Register"> Register </Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Button onClick={handleLogOut}>LOGOUT</Button>
              <Nav.Link>{loggedIn ? "{You are logged in}" : "{You are not logged in}"}</Nav.Link>
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
    </>
  );
}
export default withRouter(App);
