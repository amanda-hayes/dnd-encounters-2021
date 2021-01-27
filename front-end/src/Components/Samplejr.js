import { useContext } from 'react';
import { OurContext } from './UserContext';

const Samplejr = (props) => {
    const context = useContext(OurContext);

    return <h1>My Context is {context} </h1>;
};

export default Samplejr;