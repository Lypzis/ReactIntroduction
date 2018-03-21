import React, { Component } from 'react';
class ErrorBoundary extends Component{

    //Only use this ErrorBoundary for errors out of control

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render(){
        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>;
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;