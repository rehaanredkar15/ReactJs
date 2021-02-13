import React, { useState }from 'react';

const App = () => { 

    const [name, setName] = useState("");

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
                            value={name} />
                       <br/>
                      <input type="text" placeholder="Enter Your last Name"
                        onChange={inputEventTwo}
                            value={lastName} />
                      <button type= "submit">Submit Me</button>
                      </div>
                    </form>
            </div>
        </>
    );
    
}
            
export default App;




          //so the flow of the program is once the input feilds get their input 
        // and then setdata which is the part of our hooks updates the elements in which 
        // it targets the event.target.value and updates it which means the object value is changed
        // so after we have receieved our inputs we get the submit button which has submit type which means
        // the form event of onSubmit gets triggered which sets the name and fullname which is to show the 
        // value in our h1 tag finally this name which are set by setname in submit event are passed at h1 and
        // we get the output
            

