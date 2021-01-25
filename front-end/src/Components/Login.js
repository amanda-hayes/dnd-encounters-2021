import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

const LoginForm = (props) => {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const [token, setToken] = useState('');

    const login = async (event) => {
        event.preventDefault();

        const body = JSON.stringify({
            username: usernameInput.current.value,
            password: passwordInput.current.value
        });
        try {
            const response = await fetch(
                "http://localhost:7000/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body,
                });
            const data = await response.json();
            window.localStorage.setItem('token', `Bearer ${data.token}`);
            setToken(`Bearer ${data.token}`)
            console.log(token)
            alert('Logged In!');
            props.history.push('/Characters');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
    if(window.localStorage.getItem('token')){
        setToken(window.localStorage.getItem('token'))
        }
    }, [])

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
            <h2>Login</h2>
            <p>
                Welcome back, Adventurer! Please login below.
            </p>
            <form onSubmit={login} method="post">
                <label>Username</label>
                <input type="text" name="username" ref={usernameInput} />
                <br />
                <label>Password</label>
                <input type="password" name="password" ref={passwordInput} />
                <br />
                <input type="submit" value="LOGIN" id="submit-btn" />
            </form>
        </div>
        </>
    );
};

export default LoginForm;