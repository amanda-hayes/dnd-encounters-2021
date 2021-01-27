import "../App.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { OurContext } from './UserContext';

const LoginForm = (props) => {
  const nameInput = useRef(null);
  const passwordInput = useRef(null);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  let history = useHistory();

  const login = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      username: nameInput.current.value,
      password: passwordInput.current.value,
    });

    

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

      const loggedIn = isLoggedIn;
      loggedIn = "LOGGED IN";

      setIsLoggedIn(loggedIn);
      alert("Logged In!");
      //   history.push("/Characters");
    } catch (error) {
      console.error(error);
    }
  };

  /*****************
   * CHECK LOGIN *
   ****************/

  const checkLogin = (event) => {
      event.preventDefault();
    if (token) {
      let loggedIn = isLoggedIn;
      loggedIn = "LOGGED IN";
      setIsLoggedIn(loggedIn);
      return true;
    } else {
        const loggedOut = isLoggedIn;
        loggedOut = "LOGGED OUT";
        setIsLoggedIn(loggedOut);
        return false;
    }
  };


  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
    setIsLoggedIn(window.localStorage.getItem("token"));
  }, []);

  return (
    <>
      {/* <nav className="topnav">
            <Link to="/">HOME</Link>
            <Link to="/characters">CHARACTERS</Link>
            <Link to="/createcharacterform">CREATE</Link>
            <Link to="/battle">BATTLE</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
        </nav> */}

      <div>
        <h2>Login</h2>
        <p>Welcome back, Adventurer! Please login below.</p>
        <form onSubmit={login} method="post">
          <label>Username</label>
          <input type="text" name="username" ref={nameInput} />
          <br />
          <label>Password</label>
          <input type="password" name="password" ref={passwordInput} />
          <br />
          <input type="submit" value="LOGIN" id="submit-btn" />
        </form>
        <div>
          <h2>status: {checkLogin ? "Logged In" : "Logged Out"} </h2>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
