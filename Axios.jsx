import React, { useState ,useEffect } from "react";
import axios from "axios";
// target. value is the value property of some DOM element, in this case that means the text entered in the search input
// here we will see the application of useeffect i.e here when some state is changed and the docunment is rendered after that we will perform a 
// task sob we will use useeffect
//this is verry imp as we have used a api in this
const Axios = () => {

    const [num, setNum] = useState(); // creating hooks
    const [name, setName] = useState(); 
    const [moves, setMoves] = useState();
 
    useEffect(() => {    //useeffect hook 
        
        async function getData() {    //async function 

            const res = await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
        setMoves(res.data.moves.length);
        }
         
      
        getData();
    });

    return (

        <>
            
            <h1> You choosed <span style={{ color: 'red' }}>{num}</span></h1>
            <h1> MY name is <span style={{ color: 'red' }}>{name}</span></h1>
            <h1> I have <span style={{ color: 'red' }}> {moves} moves</span></h1>
            <select value={num} onChange={ (event) => {
                
                setNum(event.target.value); //the value which is selected by the user 
            }}>
              <option value="1" > 1 </option>
              <option value="25" > 25 </option>
              <option value="3" > 3 </option>
              <option value="4" > 4 </option>
              <option value="6" > 6 </option>
              <option value="69" > 69 </option>
              <option value="35" > 35 </option>
            
            
            
            </select>
       </>
    )
}

export default Axios;