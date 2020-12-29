import { useState, useEffect } from 'react';
import './App.css';

const Home = (props) => {
    const [greet, setGreet] = useState("Start New Adventure");

    useEffect(() => {
    }, []);


    return (
    <>
    <div>
    <h1>{greet}</h1>
    <p>Ready for your next adventure? Let's assemble your party!
    </p>
    </div>
    </>
    );
};

export default Home;