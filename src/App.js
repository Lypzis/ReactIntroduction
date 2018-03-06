import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //Only available in component extended by Component
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Max', age: 29},
      {name: 'Max', age: 26}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p>This is really working!!!</p>
        <button>Switch Name</button>
        <br/>
        <Person name={this.state.persons[0].name} age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
