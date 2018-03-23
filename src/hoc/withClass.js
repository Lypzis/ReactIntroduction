import React, { Component } from 'react';

//reusable high order component :D
//not a component, just a normal es6 function
const withClass = (WrappedComponent, className) => {
    //an anonymous class
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClass;