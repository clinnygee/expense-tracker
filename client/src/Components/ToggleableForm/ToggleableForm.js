import React, { Component, useState, } from 'react';
import './toggleableForm.css';
import {Input} from '../ReusableComponents'

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

    // handlers for the form should be here, if we get registered, log us in.

    

    render() {

        console.log(this.props);

        if (this.state.signIn){
            
            return (
                <AuthenticationForm title={'Sign In!'} buttonText={'Sign In!'} togglePrompt={'Dont Yet Have an Account?'} toggleTitle={'Sign up!'} handleSubmit={this.props.handleLogInForm} onFormToggle={this.handleFormToggle}/>
            )
        } else {
            return (
                <AuthenticationForm title={'Sign Up!'} buttonText={'Sign Up!'} togglePrompt={'Already Have an Account?'} toggleTitle={'Sign In!'} handleSubmit={this.props.handleSignUpForm} onFormToggle={this.handleFormToggle} />
            )
        }
        
        
    }
};

// There can be a broad form component, that can be passed its input fields as {props.children} If you make a component like this <Component> || <Component/> everything that resides within || is passed as props.children.

const AuthenticationForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onFieldChange = (e) => {

        if(e.target.placeholder === 'Username'){
            setUsername({username: e.target.value})
        } else if(e.target.placeholder === 'Password') {
            setPassword({password: e.target.value})
        }; 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {...username, ...password}

        props.handleSubmit(credentials);
    }
    return (
        <div className='toggleable-form'>
            <div className='form-container'>
                <div className='form-container-header'>
                    <p>{props.title}</p>
                </div>
                
                <form className='form-container-form'>
                    <Input onChange={onFieldChange} className={'form-container-form-text'} type={'Username'} placeholder={'Username'} required={true}/>
                    <Input onChange={onFieldChange} className={'form-container-form-text'} type={'Password'} placeholder={'Password'} required={true}/>
                    <Input onChange={onFieldChange} className={'form-container-form-button'} type={'Submit'} value={props.buttonText} required={false} onClick={handleSubmit}/>
                </form>
                <div className='form-container-toggle'>
                    <p>{props.togglePrompt}</p>
                <p className='link' onClick={props.onFormToggle}>{props.toggleTitle}</p>
                </div>
                
            </div>
        </div>
    )

}


export default ToggleableForm;