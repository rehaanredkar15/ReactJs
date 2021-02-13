/* index.js of this program
  import React from 'react';
import ReactDOM from 'react-dom';
import HideAndShow from './hideandshow';





ReactDOM.render(
  <>
    <HideAndShow/>
  </>, document.getElementById("root")
); 
   */
import React from 'react';
 
class HideAndShow extends React.Component{    //defining the class components 

    constructor()   //constructor for state 
    {
        super(); //to call default constructor

        //now here we refer to our state and make our show event to be true  
        this.state = {
              
            show: true  //show is true , here show is a variable inside our state (state is modifiable);
        }



    }

    render()
    {
        return (
                 
            <div>
                {
                    this.state.show ?  // the value of show in state is true
                        <h1>TArasti hai Nighahien teri</h1> // then show this else 
                    :null  //show this 
                }
                
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle me</button>  
                
                {//so in above statement basicially we are using a event of onclick, and what happens is ,(this.setstate is trigered which has 
                    // the capability to change the state ,) and here we are changing the value of show to not of what its current value is
                    //which means if the value of this.state.show is true then we change it to false 
                }

            </div>
        )
    }
     
}

