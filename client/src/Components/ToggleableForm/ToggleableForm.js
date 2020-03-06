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
                // toggleable-form should be inside each Sign component, handleFormSubmit should should be passed the different handlers, both of which need to somehow redirect through to /dashboard if they're successful. I guess change LoggedIn in the context API
                // would should force Container to head to /dashboard. Both can be passed error messages, and can be passed an array the contains the input fields, and also some handler to ensure that password is the same as confirm password.
                // All input fields appear the same, as do the Buttons, Titles, Etc. So these can be their own reusable components :)
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
};

// There can be a broad form component, that can be passed its input fields as {props.children} If you make a component like this <Component> || <Component/> everything that resides within || is passed as props.children.

export default ToggleableForm;