import { useState, useEffect } from 'react';
import './App.css';

const Home = (props) => {
    const [greet, setGreet] = useState("Welcome to DND Encounters");

    useEffect(() => {
    }, []);


    return (
    <>
    <div>
    <h1>{greet}</h1>
    <p>lorem ipsum akdnmsl/knslakndalskndalksndalksndalksndalskndlasknd
        askjdnaksjndakjsndajksndkajsndjkasndkjasndjkasndajsndas
        ajsndskjd czmxn cxalskjndwkejsbfksdjz c,zmx claKS nlkasnfdksajbcs
    </p>
    </div>
    </>
    );
};

export default Home;