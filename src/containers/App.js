import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent { //use PureComponent ONLY if in need to check changes of the state

  //not recommended
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor' + props);
    //Only available in component extended by Component
    this.state = {
      persons: [
        { id: 'fdse2', name: 'Max', age: 28 },
        { id: 'dkjfi3', name: 'Manu', age: 29 },
        { id: 'kkoel3', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClickedCounter: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside component willmount');
  }

  componentDidMount() {
    console.log('[App.js] Inside component didmount');
  }

  /*
  //if nothing changed, there is no need to update
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons;
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }


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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, //reverts to true
        toggleClickedCounter: prevState.toggleClickedCounter + 1 //previous State, so it can't be acced anywhere else, no side effects. better practice!
      }
    })
  }


  render() {

    console.log('[App.js] Inside render');

    let persons = null;

    //better, verify if toggle is true, then show the content
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;

    }

    return (
      //wrap component 
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }) }}>
          Show Persons
            </button>

        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          persons={this.state.persons} />

        {persons} {/* reference to variable person, best practice */}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
