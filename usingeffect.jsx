import React,{ useState , useEffect } from 'react';

const App2 = () => {

    const [num, setnum] = useState(1);
    
    useEffect(() => {
        
        document.title = `you clicked me ${num}`;
    })
    return (

        <button onClick={() => {
            
            setnum(num + 1)
        }}> click me {num} </button>
    );
};

export default App2;