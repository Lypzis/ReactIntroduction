import React, { Component } from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

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
        if (this.props.position === 0)
            this.inputElement.focus(); //not for style or display, don't missuse it !!!
    }

    render() {
        return (
            <Aux>
                <p onClick={this.props.clicked}>I'm {this.props.name} a person and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>

                {/*ref = reference to this tag element*/}
                <input
                    ref={(inpt)=>{ this.inputElement = inpt }} 
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        );
    }
}

//enforce a type to props attributes
Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, classes.Person);