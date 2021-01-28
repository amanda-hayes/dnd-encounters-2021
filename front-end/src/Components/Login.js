import "../App.css";
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "./RefreshToken";

const LoginForm = (props) => {
  const nameInput = useRef(null);
  const passwordInput = useRef(null);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const clientId =
    "279098454783-6ifmp48rjph5516k7i7hajcsfshh8h2a.apps.googleusercontent.com";

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

      // const loggedIn = isLoggedIn;
      // loggedIn = "LOGGED IN";

      setIsLoggedIn();
      // alert("Logged In!");
      history.push("/Characters");
    } catch (error) {
      console.error(error);
    }
  };

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const onLogoutSuccess = () => {
    alert("Logged Out Successfully");
  };

  /*****************
   * CHECK LOGIN *
   ****************/

  // const checkLogin = (event) => {
  //     event.preventDefault();
  //   if (token) {
  //     let loggedIn = isLoggedIn;
  //     loggedIn = "LOGGED IN";
  //     setIsLoggedIn(loggedIn);
  //     return true;
  //   } else {
  //       const loggedOut = isLoggedIn;
  //       loggedOut = "LOGGED OUT";
  //       setIsLoggedIn(loggedOut);
  //       return false;
  //   }
  // };

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
    setIsLoggedIn(window.localStorage.getItem("token"));
  }, []);

  return (
    <>
      <div>
        <p>Welcome back, Adventurer! Please login below.</p>
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            style={{ marginTop: "100px" }}
            isSignedIn={true}
          />
        </div>
        <form onSubmit={login} method="post">
          <label>Username</label>
          <input type="text" name="username" ref={nameInput} />
          <br />
          <label>Password</label>
          <input type="password" name="password" ref={passwordInput} />
          <br />
          <input type="submit" value="LOGIN" id="submit-btn" />
        </form>
      </div>
      {/* <div>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout with Google"
          onLogoutSuccess={onLogoutSuccess}
        ></GoogleLogout>
      </div> */}
    </>
  );
};

export default LoginForm;
