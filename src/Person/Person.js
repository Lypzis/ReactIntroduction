import React from 'react';

//this is a person component, "html"
const person = (props) => {
    //const age = Math.floor(Math.random()*100);
    return(
        <div>
            <p>I'm {props.name} a person and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;