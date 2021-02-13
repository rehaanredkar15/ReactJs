//the index js where we export this components made here, just contains the normal rendering of out component so i am not including that file in
// our reactprojects folder
import React from 'react';

export default class Profile extends React.Component {

    constructor() {
          
        super();
        this.state = {
            name: 'rehan',
            email: 'rehaanredkar32@gmail.com',
            count: 0
        }
    }
    updateState()
    {
        this.setState({
            name: 'Redkar',
            count: this.state.count + 1
        })
    }
    render() {
        console.warn('rendered bhai')
        return (
              
              <div>
                <h1>Count {this.state.count}</h1>
                <h1>Email {this.state.email}</h1>
                <h1>name {this.state.name}</h1>
                <button onClick={() => {this.updateState()}}>Update</button>
            </div>
        )
    }
}

