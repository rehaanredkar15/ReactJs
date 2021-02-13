import React, { useState }from 'react';

const optimises = (event) => {

    const [name, setName] = useState({  fname: "",
                                        lname: "", });

    const [lastName, setLastName] = useState("");

    const [fullName, setFullName] = useState("");
    
    const [lastNamenew, setLastNamenew] = useState("");  


    const OnSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value); 
        setFullName(name);
        setLastNamenew(lastName);
    };
   
    const inputEvent = (event) => {
         event.preventDefault();
        console.log(event.target.value);//to get the value that is typed
        setName(event.target.value); //stored the name provided with our hook
    }

    const inputEventTwo = (event) => {

        event.preventDefault();
        setLastName(event.target.value);
    }

    return (
         
        <>
            <div>
                <form onSubmit={OnSubmit}>
                    <div>
                        <h1>Hello {fullName} {lastNamenew}</h1>
                      <input type="text" placeholder="Enter Your Name"
                            onChange={inputEvent}
                            name = "lName"
                            value={name} />
                       <br/>
                      <input type="text" placeholder="Enter Your last Name"
                            onChange={inputEventTwo}
                            name = "lName"
                            value={lastName} />
                      <button type= "submit">Submit Me</button>
                      </div>
                    </form>
            </div>
        </>
    );
    
}
            
export default optimises;




        

