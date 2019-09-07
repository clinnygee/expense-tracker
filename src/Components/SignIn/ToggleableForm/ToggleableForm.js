import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './toggleableForm.css';

class ToggleableForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            signIn: true,
        }
    };

    handleFormToggle = (e) => {
        this.setState({signIn: !this.state.signIn});
    }

    render() {

        if (this.state.signIn){
            return(
                <div className='toggleable-form'>
                    <SignIn onFormToggle={this.handleFormToggle}/>
                </div>
            )
        } else {
            return (
                <div className='toggleable-form'>
                    <SignUp onFormToggle={this.handleFormToggle}/>
                </div>
            )
        }
        
        
    }
}

export default ToggleableForm;