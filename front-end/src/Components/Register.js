import "../App.css";
import { useRef } from "react";
import { Form } from 'react-bootstrap';

const RegisterForm = (props) => {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const register = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      username: usernameInput.current.value,
      password: passwordInput.current.value,
      confirmPassword: confirmPasswordInput.current.value,
    });
    event.currentTarget.reset();
    try {
      const response = await fetch("http://localhost:7000/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body,
      });
      if (passwordInput !== confirmPasswordInput) {
        alert("Passwords do not match!");
      } else {
        alert("Account created!");
        props.history.push("/Login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h2>Register</h2>
        <p>
          Please create a unique username and password to create an account. We
          suggest passwords be at least 8 characters with letters, numbers, and
          special characters.
        </p>
        <Form onSubmit={register} method="post">
          <label>Username</label>
          <input type="text" name="username" ref={usernameInput} />
          <br />
          <label>Password</label>
          <input type="password" name="password" ref={passwordInput} />
          <br />
          <label>Confirm Password</label>
          <input type="password" name="confirmpassword" ref={confirmPasswordInput} />
          <br />
          <input type="submit" value="REGISTER" id="submit-btn" />
        </Form>
      </div>
    </>
  );
};

export default RegisterForm;
