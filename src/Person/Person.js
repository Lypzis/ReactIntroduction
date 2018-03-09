import React from 'react';
import './Person.css'

//Use simple components as this as much as possible to not replicate
//this is a person component, "html"
const person = (props) => {
    //const age = Math.floor(Math.random()*100);
    return(
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} a person and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;