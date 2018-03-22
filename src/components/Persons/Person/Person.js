import React, { Component } from 'react';
import classes from './Person.css'

//Use simple components as this as much as possible to not replicate
//this is a person component, "html"

class Person extends Component {

    //not recommended
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor' + props);
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
        console.log('[Person.js] Inside component willmount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside component didmount');
    }

    render() {
        return (
            <div className={classes.Person} >
                <p onClick={this.props.clicked}>I'm {this.props.name} a person and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;