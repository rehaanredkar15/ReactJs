

/* import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock'





ReactDOM.render(
  <>
    <Clock/>
  </>, document.getElementById("root")
); 
  
//here i have made custom attributes using react props i.e react properties 
*/

import React, { useState } from 'react';

const Clock = () => {
    
    const time = new Date().toLocaleTimeString();
    const [ctime, stime] = useState(time);

    const SetTime = () => { 
         const newtime = new Date().toLocaleTimeString();
         stime(newtime);
         
    }
    
    setInterval(SetTime,1000)
    return (

        <>
            <h1>{time}</h1>
            <button>Get TIME</button>
        </>
    )


}
export default Clock;