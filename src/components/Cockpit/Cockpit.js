import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = []; //array of classes joined;
    let btnClass = '';

    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.Red); //classes = ['red']
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold'];
    }

    return (
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
            <br />
        </React.Fragment>
    );
}

export default cockpit;