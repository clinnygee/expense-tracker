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

        console.log(this.props);

        if (this.state.signIn){
            return(
                <div className='toggleable-form'>
                    <SignIn onFormToggle={this.handleFormToggle} handleLogInForm={this.props.handleLogInForm} logInSuccess={this.props.logInSuccess}/>
                </div>
            )
        } else {
            return (
                <div className='toggleable-form'>
                    <SignUp onFormToggle={this.handleFormToggle} handleSignUpForm={this.props.handleSignUpForm}/>
                </div>
            )
        }
        
        
    }
}

export default ToggleableForm;