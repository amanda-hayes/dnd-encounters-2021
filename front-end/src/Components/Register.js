import "../App.css";
import { Link } from "react-router-dom";
import { useRef } from 'react';

const RegisterForm = (props) => {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    const register = async (event) => {
        event.preventDefault();
        const body = JSON.stringify({
            username: usernameInput.current.value,
            password: passwordInput.current.value
        });
        event.currentTarget.reset();
        try {
            const response = await fetch(
                "http://localhost:7000/register",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body
                }
            );
            alert('Account created!');
            props.history.push('/Login')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <nav className="topnav">
            <Link to="/">HOME</Link>
            <Link to="/characters">CHARACTERS</Link>
            <Link to="/createcharacterform">CREATE</Link>
            <Link to="/battle">BATTLE</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
        </nav>

        <div>
            <h2>Register</h2>
            <p>
                Please create a unique username and password to create an account.
                We suggest passwords be at least 8 characters with letters,
                numbers, and special characters.
            </p>
            <form onSubmit={register} method="post">
                <label>Username</label>
                <input type="text" name="username" ref={usernameInput} />
                <br />
                <label>Password</label>
                <input type="password" name="password" ref={passwordInput} />
                <br />
                <input type="submit" value="REGISTER" id="submit-btn" />
            </form>
        </div>
        </>
    );
};

export default RegisterForm;