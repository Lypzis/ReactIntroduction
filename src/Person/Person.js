import React from 'react';

//this is a person component, "html"
const person = (props) => {
    //const age = Math.floor(Math.random()*100);
    return(
        <p>I'm {props.name} a person and I am {props.age} years old!</p>
    );
};

export default person;