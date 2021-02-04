import "../App.css";
import { useEffect, useRef } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "./RefreshToken";

const LoginForm = (props) => {
  const nameInput = useRef(null);
  const passwordInput = useRef(null);
  const clientId =
    "279098454783-6ifmp48rjph5516k7i7hajcsfshh8h2a.apps.googleusercontent.com";

  const login = async (event) => {
    try {
      props.userLogin(
        event,
        nameInput.current.value,
        passwordInput.current.value
      );
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      props.setToken(window.localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <div>
        <br />
        <div id="register">
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
          <br />
          <form onSubmit={login} method="post">
            <label>Username</label>
            <br />
            <input type="text" name="username" ref={nameInput} />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password" ref={passwordInput} />
            <br />
            <input type="submit" value="LOGIN" id="submit-btn" />
          </form>
        </div>
        <br />
        {
          <div>
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout with Google"
              onLogoutSuccess={onLogoutSuccess}
            ></GoogleLogout>
          </div>
        }
      </div>
    </>
  );
};

export default LoginForm;
