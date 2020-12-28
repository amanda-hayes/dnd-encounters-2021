import { useState, useEffect } from 'react';

const Home = (props) => {
    const [greet, setGreet] = useState("Welcome to DND Encounters");

    useEffect(() => {
        alert(greet);
    }, [greet]);

    const handleClick = () => {
        setGreet('Are you ready to go on an adventure?');
    };

    return (
    <>
    <h1>{greet}</h1>
    <button onClick={handleClick}>Okay</button>
    </>
    );
};

export default Home;