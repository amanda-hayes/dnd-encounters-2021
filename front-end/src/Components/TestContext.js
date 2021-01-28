import {useState, useEffect, useRef} from 'react';
import { OurContext } from './UserContext';
import Samplejr from './Samplejr';
import App from '../App';

const TestContext = (props) => {
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState([]);

    const input = useRef(null);

    useEffect(() => {
        alert(greet);
    }, [greet]);

    const handleClick = () => {
        setGreet('Hey, you just changed state using React Hooks');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setGreet(input.current.value);
        e.currentTarget.reset();
    };

    return (
        <OurContext.Provider value={greet}>
            <h1>{greet}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={input} />
                <input type="submit" value="click me" />
            </form>
            <Samplejr />
        </OurContext.Provider>
    );
};

export default TestContext;


<UserContext.Provider
          value={{
            userLoggedIn: [isLoggedIn, setIsLoggedIn],
            tokenData: [token, setToken],
          }}
        >
          <Home />
          <AllCharPage />
          <Register />
          <Login />
          <Tavern />
          <YouWin />
          <YouLose />
          <Battle />
          <CreateCharacterForm />
          <UpdateCharacterForm />
          <CharacterStats />
        </UserContext.Provider>

        {isLoggedIn.username ? (
          <>
            {" "}
            <span className="">Welcome back, {isLoggedIn.username}</span>
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

        // On other components: 
        const { isLoggedIn } = useContext(UserContext)
        const [ userLoggedIn] = isLoggedIn;

        import { UserContext } from "./UserContext.js"