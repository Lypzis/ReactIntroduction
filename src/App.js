import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //Only available in component extended by Component
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Hey, you found me :D');
    //DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
    //Updates the existing DOM;
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manuela', age: 29 },
        { name: 'Stephanie', age: 22 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 22 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p>This is really working!!!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian !!')}>Switch Name</button>
        <br />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          click={this.switchNameHandler.bind(this, 'Max!')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
