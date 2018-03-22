import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {

    //not recommended
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor' + props);
        //Only available in component extended by Component
        this.state = {
            persons: [
                { id: 'fdse2', name: 'Max', age: 28 },
                { id: 'dkjfi3', name: 'Manu', age: 29 },
                { id: 'kkoel3', name: 'Stephanie', age: 26 }
            ],
            otherState: 'some other value',
            showPersons: false
        };
    }

    componentWillMount() {
        console.log('[Persons.js] Inside component willmount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside component didmount');
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    /* PureComponent already does comparissons by default
    shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked;
    } */

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                clicked={(event) => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;

