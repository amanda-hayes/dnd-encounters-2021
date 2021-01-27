import {useState, useEffect, useRef} from 'react';
import { OurContext } from './UserContext';
import Samplejr from './Samplejr';

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