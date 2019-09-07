import React, { Component } from 'react';
import './toggleableForm.css';

class SignIn extends Component {
    render() {
        return (
            <div className='form-container'>
                <div className='form-container-header'>
                    <p>Log In</p>
                </div>
                
                <form className='form-container-form'>
                    <input className='form-container-form-text'type='username' placeholder='Username' required />
                    <input className='form-container-form-text' type='password' placeholder='Password' required />
                    
                    <input className='form-container-form-button' type='submit' value='LOG IN' />
                </form>
                <div className='form-container-toggle'>
                    <p>Dont have an account?</p>
                    <p className='link' onClick={this.props.onFormToggle}>Sign Up!</p>
                </div>
                
            </div>
        );
    }
}

export default SignIn;