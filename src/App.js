import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //Only available in component extended by Component
  state = {
    persons: [
      { id: 'fdse2', name: 'Max', age: 28 },
      { id: 'dkjfi3', name: 'Manu', age: 29 },
      { id: 'kkoel3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  /*
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
  */

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //copy(with slice, without, it would be a reference) state persons array or
    const persons = [...this.state.persons] //copy state persons array using spread operator to a new array
    persons.splice(personIndex, 1); //remove indexed person
    this.setState({persons: persons}); //update the state array
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] //also available for objects
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons]; //Note: always work with copys
    persons[personIndex] = person;

    //then update the state with the new persons array
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); //reverts to true
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    //better, verify if toggle is true, then show the content
    if(this.state.showPersons) {
      persons = (
        <div>
          {/* for all persons in the array, create a new one 
            and return in the way React understands */}

            {this.state.persons.map((person, index) => { 
              return <Person 
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name} 
                age={person.age}
                key={person.id}  //every object of a list must have a key
                changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}

        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p>This is really working!!!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        <br />

        {persons} {/* reference to variable person, best practice */}

        {/* Not best practice
          this.state.showPersons ?  //if true, shows the block, else, nothing
            
           : null
           */}
      </div>
    );
  }
}

export default App;
