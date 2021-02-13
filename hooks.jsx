
import React,{useState} from 'react';

let counter = 0;
const Hooks = () => {

     
     const state = useState();
     console.log(state)
    const [count, setState] = useState('rehan');

    const arr = ['tarasti', 'hai', 'nighaihein', 'meri', 'sun', 'toh', 'meri'];

    
    
    const ChnName = () => {
        
        setState(arr[counter++]);

       
    };

    return (

        <>
            <h1>{count}</h1>
            <button onClick={ChnName} >Change bolte</button>
        </>
    );


};

export default Hooks;
