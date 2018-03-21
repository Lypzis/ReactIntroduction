import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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
    this.setState({ persons: persons }); //update the state array
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
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); //reverts to true
  }

  render() {

    let persons = null;

    //better, verify if toggle is true, then show the content
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />;
      
    }

    return (
        <div className={classes.App}>

          <Cockpit 
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            persons={this.state.persons} />

          {persons} {/* reference to variable person, best practice */}

        </div>
    );
  }
}

export default App;
