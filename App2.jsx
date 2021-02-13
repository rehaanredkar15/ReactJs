import React, {useState, useEffect} from 'react';

// use Effect is to perform somthing after render method  , this function is performed
//after the DOM updates 
const App2 = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
  
    useEffect(() => {
        alert(" i am clicked");
    },[num]);
    return (
        <>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}> clickme { num}
            </button>
            <br/>
            <button
                    onClick={() => {
                    setNums(nums + 1);
                }} > clickme {nums}  
            </button >
        </>
    );
};

export default App2;